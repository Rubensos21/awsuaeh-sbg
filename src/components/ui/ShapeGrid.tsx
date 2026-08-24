import React, { useRef, useEffect, useCallback } from 'react';

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

interface GridOffset {
    x: number;
    y: number;
}

interface AmbientCell {
    x: number;
    y: number;
    alpha: number;
    targetAlpha: number;
    color: string;
}

interface ShapeGridProps {
    direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left';
    speed?: number;
    borderColor?: CanvasStrokeStyle;
    squareSize?: number;
    hoverFillColor?: string | string[];
    shape?: 'square' | 'hexagon' | 'circle' | 'triangle';
    hoverTrailAmount?: number;
    ambientCount?: number;
}

const AWS_SBG_PALETTE = ['#FF9900', '#43B4FF', '#00E482', '#AD5CFF', '#FF57EA'];

const ShapeGrid: React.FC<ShapeGridProps> = ({
                                                 direction = 'right',
                                                 speed = 0.5,
                                                 borderColor = '#464B55',
                                                 squareSize = 48,
                                                 hoverFillColor = AWS_SBG_PALETTE,
                                                 shape = 'square',
                                                 hoverTrailAmount = 2,
                                                 ambientCount = 5
                                             }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number | null>(null);
    const numSquaresX = useRef<number>(0);
    const numSquaresY = useRef<number>(0);
    const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
    const hoveredSquareRef = useRef<GridOffset | null>(null);
    const trailCells = useRef<GridOffset[]>([]);

    // Opacidad y color fijo asignado por celda para evitar parpadeos en hover
    const cellOpacities = useRef<Map<string, number>>(new Map());
    const cellColors = useRef<Map<string, string>>(new Map());

    // Cuadros coloreados aleatorios sutiles (ambientales)
    const ambientCellsRef = useRef<Map<string, AmbientCell>>(new Map());
    const lastAmbientSpawnRef = useRef<number>(0);

    const getOrAssignColor = useCallback((cellKey: string): string => {
        if (!cellColors.current.has(cellKey)) {
            const colors = Array.isArray(hoverFillColor) ? hoverFillColor : [hoverFillColor];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            cellColors.current.set(cellKey, randomColor);
        }
        return cellColors.current.get(cellKey)!;
    }, [hoverFillColor]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const isHex = shape === 'hexagon';
        const isTri = shape === 'triangle';
        const hexHoriz = squareSize * 1.5;
        const hexVert = squareSize * Math.sqrt(3);

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
            ctx.scale(dpr, dpr);

            numSquaresX.current = Math.ceil(canvas.offsetWidth / squareSize) + 1;
            numSquaresY.current = Math.ceil(canvas.offsetHeight / squareSize) + 1;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const drawHex = (cx: number, cy: number, size: number) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const vx = cx + size * Math.cos(angle);
                const vy = cy + size * Math.sin(angle);
                if (i === 0) ctx.moveTo(vx, vy);
                else ctx.lineTo(vx, vy);
            }
            ctx.closePath();
        };

        const drawCircle = (cx: number, cy: number, size: number) => {
            ctx.beginPath();
            ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
            ctx.closePath();
        };

        const drawTriangle = (cx: number, cy: number, size: number, flip: boolean) => {
            ctx.beginPath();
            if (flip) {
                ctx.moveTo(cx, cy + size / 2);
                ctx.lineTo(cx + size / 2, cy - size / 2);
                ctx.lineTo(cx - size / 2, cy - size / 2);
            } else {
                ctx.moveTo(cx, cy - size / 2);
                ctx.lineTo(cx + size / 2, cy + size / 2);
                ctx.lineTo(cx - size / 2, cy + size / 2);
            }
            ctx.closePath();
        };

        const drawGrid = () => {
            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;
            ctx.clearRect(0, 0, width, height);

            if (isHex) {
                const colShift = Math.floor(gridOffset.current.x / hexHoriz);
                const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
                const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;
                const cols = Math.ceil(width / hexHoriz) + 3;
                const rows = Math.ceil(height / hexVert) + 3;

                for (let col = -2; col < cols; col++) {
                    for (let row = -2; row < rows; row++) {
                        const cx = col * hexHoriz + offsetX;
                        const cy = row * hexVert + ((col + colShift) % 2 !== 0 ? hexVert / 2 : 0) + offsetY;
                        const cellKey = `${col},${row}`;
                        const alpha = cellOpacities.current.get(cellKey);
                        const amb = ambientCellsRef.current.get(cellKey);

                        if (alpha && alpha > 0.001) {
                            ctx.globalAlpha = alpha;
                            drawHex(cx, cy, squareSize);
                            ctx.fillStyle = getOrAssignColor(cellKey);
                            ctx.fill();
                            ctx.globalAlpha = 1;
                        } else if (amb && amb.alpha > 0.001) {
                            ctx.globalAlpha = amb.alpha;
                            drawHex(cx, cy, squareSize);
                            ctx.fillStyle = amb.color;
                            ctx.fill();
                            ctx.globalAlpha = 1;
                        }

                        drawHex(cx, cy, squareSize);
                        ctx.strokeStyle = borderColor as string;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            } else if (isTri) {
                const halfW = squareSize / 2;
                const colShift = Math.floor(gridOffset.current.x / halfW);
                const rowShift = Math.floor(gridOffset.current.y / squareSize);
                const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
                const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
                const cols = Math.ceil(width / halfW) + 4;
                const rows = Math.ceil(height / squareSize) + 4;

                for (let col = -2; col < cols; col++) {
                    for (let row = -2; row < rows; row++) {
                        const cx = col * halfW + offsetX;
                        const cy = row * squareSize + squareSize / 2 + offsetY;
                        const flip = ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0;
                        const cellKey = `${col},${row}`;
                        const alpha = cellOpacities.current.get(cellKey);
                        const amb = ambientCellsRef.current.get(cellKey);

                        if (alpha && alpha > 0.001) {
                            ctx.globalAlpha = alpha;
                            drawTriangle(cx, cy, squareSize, flip);
                            ctx.fillStyle = getOrAssignColor(cellKey);
                            ctx.fill();
                            ctx.globalAlpha = 1;
                        } else if (amb && amb.alpha > 0.001) {
                            ctx.globalAlpha = amb.alpha;
                            drawTriangle(cx, cy, squareSize, flip);
                            ctx.fillStyle = amb.color;
                            ctx.fill();
                            ctx.globalAlpha = 1;
                        }

                        drawTriangle(cx, cy, squareSize, flip);
                        ctx.strokeStyle = borderColor as string;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            } else if (shape === 'circle') {
                const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
                const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
                const cols = Math.ceil(width / squareSize) + 3;
                const rows = Math.ceil(height / squareSize) + 3;

                for (let col = -2; col < cols; col++) {
                    for (let row = -2; row < rows; row++) {
                        const cx = col * squareSize + squareSize / 2 + offsetX;
                        const cy = row * squareSize + squareSize / 2 + offsetY;
                        const cellKey = `${col},${row}`;
                        const alpha = cellOpacities.current.get(cellKey);
                        const amb = ambientCellsRef.current.get(cellKey);

                        if (alpha && alpha > 0.001) {
                            ctx.globalAlpha = alpha;
                            drawCircle(cx, cy, squareSize);
                            ctx.fillStyle = getOrAssignColor(cellKey);
                            ctx.fill();
                            ctx.globalAlpha = 1;
                        } else if (amb && amb.alpha > 0.001) {
                            ctx.globalAlpha = amb.alpha;
                            drawCircle(cx, cy, squareSize);
                            ctx.fillStyle = amb.color;
                            ctx.fill();
                            ctx.globalAlpha = 1;
                        }

                        drawCircle(cx, cy, squareSize);
                        ctx.strokeStyle = borderColor as string;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            } else {
                // Cuadrícula estándar (Default)
                const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
                const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
                const cols = Math.ceil(width / squareSize) + 3;
                const rows = Math.ceil(height / squareSize) + 3;

                for (let col = -2; col < cols; col++) {
                    for (let row = -2; row < rows; row++) {
                        const sx = col * squareSize + offsetX;
                        const sy = row * squareSize + offsetY;
                        const cellKey = `${col},${row}`;
                        const alpha = cellOpacities.current.get(cellKey);
                        const amb = ambientCellsRef.current.get(cellKey);

                        if (alpha && alpha > 0.001) {
                            // Hover brillante
                            ctx.globalAlpha = alpha * 0.85;
                            ctx.fillStyle = getOrAssignColor(cellKey);
                            ctx.fillRect(sx, sy, squareSize, squareSize);
                            ctx.globalAlpha = 1;
                        } else if (amb && amb.alpha > 0.001) {
                            // Cuadro sutil aleatorio de fondo
                            ctx.globalAlpha = amb.alpha;
                            ctx.fillStyle = amb.color;
                            ctx.fillRect(sx, sy, squareSize, squareSize);
                            ctx.globalAlpha = 1;
                        }

                        ctx.strokeStyle = borderColor as string;
                        ctx.lineWidth = 1;
                        ctx.strokeRect(sx, sy, squareSize, squareSize);
                    }
                }
            }

            // Viñeta radial que se funde limpiamente con el fondo #161D26
            const gradient = ctx.createRadialGradient(
                width / 2,
                height / 2,
                0,
                width / 2,
                height / 2,
                Math.sqrt(width ** 2 + height ** 2) / 2
            );
            gradient.addColorStop(0, 'rgba(22, 29, 38, 0)');
            gradient.addColorStop(0.85, 'rgba(22, 29, 38, 0.85)');
            gradient.addColorStop(1, '#161D26');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        };

        const updateCellOpacities = () => {
            const targets = new Map<string, number>();

            if (hoveredSquareRef.current) {
                const activeKey = `${hoveredSquareRef.current.x},${hoveredSquareRef.current.y}`;
                targets.set(activeKey, 1);
                getOrAssignColor(activeKey);
            }

            if (hoverTrailAmount > 0) {
                for (let i = 0; i < trailCells.current.length; i++) {
                    const t = trailCells.current[i];
                    const key = `${t.x},${t.y}`;
                    if (!targets.has(key)) {
                        const decay = (trailCells.current.length - i) / (trailCells.current.length + 1);
                        targets.set(key, decay * 0.7);
                        getOrAssignColor(key);
                    }
                }
            }

            for (const [key] of targets) {
                if (!cellOpacities.current.has(key)) {
                    cellOpacities.current.set(key, 0);
                }
            }

            for (const [key, opacity] of cellOpacities.current) {
                const target = targets.get(key) || 0;
                const next = opacity + (target - opacity) * 0.12; // Fade-out suave de hover
                if (next < 0.005) {
                    cellOpacities.current.delete(key);
                    cellColors.current.delete(key);
                } else {
                    cellOpacities.current.set(key, next);
                }
            }

            // Gestión de cuadros sutiles aleatorios en segundo plano
            const now = Date.now();
            if (now - lastAmbientSpawnRef.current > 1800) {
                lastAmbientSpawnRef.current = now;
                const colors = Array.isArray(hoverFillColor) ? hoverFillColor : [hoverFillColor];

                if (ambientCellsRef.current.size >= ambientCount) {
                    const keys = Array.from(ambientCellsRef.current.keys());
                    const randomKey = keys[Math.floor(Math.random() * keys.length)];
                    const existing = ambientCellsRef.current.get(randomKey);
                    if (existing) existing.targetAlpha = 0;
                }

                if (ambientCellsRef.current.size < ambientCount + 2) {
                    const maxCols = Math.max(numSquaresX.current, 12);
                    const maxRows = Math.max(numSquaresY.current, 10);
                    const rx = Math.floor(Math.random() * maxCols) - 1;
                    const ry = Math.floor(Math.random() * maxRows) - 1;
                    const key = `${rx},${ry}`;

                    if (!ambientCellsRef.current.has(key) && !cellOpacities.current.has(key)) {
                        const randomColor = colors[Math.floor(Math.random() * colors.length)];
                        ambientCellsRef.current.set(key, {
                            x: rx,
                            y: ry,
                            alpha: 0,
                            targetAlpha: Math.random() * 0.15 + 0.12, // Transparencia sutil (0.12 - 0.27)
                            color: randomColor
                        });
                    }
                }
            }

            for (const [key, cell] of ambientCellsRef.current) {
                cell.alpha += (cell.targetAlpha - cell.alpha) * 0.04;
                if (cell.alpha < 0.005 && cell.targetAlpha === 0) {
                    ambientCellsRef.current.delete(key);
                }
            }
        };

        const updateAnimation = () => {
            const effectiveSpeed = Math.max(speed, 0.05);
            const wrapX = isHex ? hexHoriz * 2 : squareSize;
            const wrapY = isHex ? hexVert : isTri ? squareSize * 2 : squareSize;

            switch (direction) {
                case 'right':
                    gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
                    break;
                case 'left':
                    gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + wrapX) % wrapX;
                    break;
                case 'up':
                    gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + wrapY) % wrapY;
                    break;
                case 'down':
                    gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
                    break;
                case 'diagonal':
                    gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
                    gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
                    break;
            }

            updateCellOpacities();
            drawGrid();
            requestRef.current = requestAnimationFrame(updateAnimation);
        };

        // Escuchar eventos de mouse globalmente en window para que el hover funcione
        // incluso sobre textos, párrafos, encabezados y espacios vacíos del Hero.
        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            if (
                mouseX < 0 ||
                mouseX > rect.width ||
                mouseY < 0 ||
                mouseY > rect.height
            ) {
                if (hoveredSquareRef.current) {
                    handleMouseLeave();
                }
                return;
            }

            let col = 0;
            let row = 0;

            if (isHex) {
                const colShift = Math.floor(gridOffset.current.x / hexHoriz);
                const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
                const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;
                const adjustedX = mouseX - offsetX;
                const adjustedY = mouseY - offsetY;
                col = Math.round(adjustedX / hexHoriz);
                const rowOffset = (col + colShift) % 2 !== 0 ? hexVert / 2 : 0;
                row = Math.round((adjustedY - rowOffset) / hexVert);
            } else if (isTri) {
                const halfW = squareSize / 2;
                const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
                const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
                col = Math.round((mouseX - offsetX) / halfW);
                row = Math.floor((mouseY - offsetY) / squareSize);
            } else {
                const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
                const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
                col = Math.floor((mouseX - offsetX) / squareSize);
                row = Math.floor((mouseY - offsetY) / squareSize);
            }

            if (
                !hoveredSquareRef.current ||
                hoveredSquareRef.current.x !== col ||
                hoveredSquareRef.current.y !== row
            ) {
                if (hoveredSquareRef.current && hoverTrailAmount > 0) {
                    trailCells.current.unshift({ ...hoveredSquareRef.current });
                    if (trailCells.current.length > hoverTrailAmount) {
                        trailCells.current.length = hoverTrailAmount;
                    }
                }
                hoveredSquareRef.current = { x: col, y: row };
            }
        };

        const handleMouseLeave = () => {
            if (hoveredSquareRef.current && hoverTrailAmount > 0) {
                trailCells.current.unshift({ ...hoveredSquareRef.current });
                if (trailCells.current.length > hoverTrailAmount) {
                    trailCells.current.length = hoverTrailAmount;
                }
            }
            hoveredSquareRef.current = null;
        };

        window.addEventListener('mousemove', handleMouseMove);

        let isVisible = false;
        let isPageVisible = !document.hidden;

        const tryStart = () => {
            if (isVisible && isPageVisible && !requestRef.current) {
                requestRef.current = requestAnimationFrame(updateAnimation);
            }
        };

        const tryStop = () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
                requestRef.current = null;
            }
        };

        const io = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                isVisible ? tryStart() : tryStop();
            },
            { threshold: 0 }
        );
        io.observe(canvas);

        const onVisibility = () => {
            isPageVisible = !document.hidden;
            isPageVisible ? tryStart() : tryStop();
        };
        document.addEventListener('visibilitychange', onVisibility);

        tryStart();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            tryStop();
            io.disconnect();
            document.removeEventListener('visibilitychange', onVisibility);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [direction, speed, borderColor, hoverFillColor, squareSize, shape, hoverTrailAmount, ambientCount, getOrAssignColor]);

    return <canvas ref={canvasRef} className="w-full h-full border-none block pointer-events-auto" />;
};

export { ShapeGrid };
export default ShapeGrid;