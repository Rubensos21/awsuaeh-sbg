import React, { useEffect } from 'react';
import gsap from 'gsap';

import { Navbar, navigateTo } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import DecryptedText from '../components/ui/DecryptedText';
import { SpotlightCard } from '../components/ui/SpotlightCard';

import { Star, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import iconBoltPurple from '../assets/svg/AWS Student Builder Group_RGB_Icons_Bolt_Purple.svg';
import iconTrophyPurple from '../assets/svg/AWS Student Builder Group_RGB_Icons_Trophy_Purple.svg';
import iconSmileMagenta from '../assets/svg/AWS Student Builder Group_RGB_Icons_Double Bracket Smile_Magenta.svg';

import photoRubs from '../assets/img/rubs.png';
import photoMario from '../assets/img/merry.jpg';
import photoIvan from '../assets/img/ivan.jpg'

interface TeamMember {
  id: string;
  nickname: string;
  name: string;
  initials?: string;       
  photo?: string;          // Ruta a la foto del miembro
  isLead?: boolean;
  accentColor: string;     // Color hex del acento del miembro (para ring/borde)
  accentBg: string;        // Clase Tailwind para el fondo del fallback
  notchBg: string;
  bio: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}

export const EquipoPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Animacion de entrada 
    gsap.fromTo(
      '.team-animate',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      }
    );
  }, []);

  const teamMembers: TeamMember[] = [
    {
      id: 'Leader',
      nickname: 'Merryts',
      name: 'Mario Lozano',
      initials: 'ML',
      photo: photoMario,
      isLead: true,
      accentColor: '#AD5CFF',
      accentBg: 'bg-sbg-purple',
      notchBg: 'bg-sbg-purple',
      bio: 'Bio.',
      instagramUrl: 'https://www.instagram.com/aws.uaeh',
      linkedinUrl: 'https://www.linkedin.com/in/mario-lozano-m%C3%A1rquez/',
    },
    {
      id: 'Technical lead',
      nickname: 'Rubs',
      name: 'Rubén Sosa',
      initials: 'RS',
      photo: photoRubs,
      accentColor: '#00E482',
      accentBg: 'bg-sbg-lightgreen',
      notchBg: 'bg-sbg-lightgreen',
      bio: 'Bio.',
      instagramUrl: 'https://www.instagram.com/rubs_wtf/',
      linkedinUrl: 'https://www.linkedin.com/in/rubensos',
    },
    {
      id: 'Designer Lead',
      nickname: 'Brau',
      name: 'Ivan Rojo',
      initials: 'IR',
      photo: photoIvan,
      accentColor: '#43B4FF',
      accentBg: 'bg-sbg-lightblue',
      notchBg: 'bg-sbg-lightblue',
      bio: 'Bio.',
      instagramUrl: 'https://www.instagram.com/ivaaanrojo/',
      linkedinUrl: 'https://www.linkedin.com/in/ivan-rojo-878820336/',
    },
    {
      id: 'Marketing Lead',
      nickname: 'noHay',
      name: 'pincheMarioMiPielesillawe🤬',
      initials: 'NA',
      accentColor: '#FF57EA',
      accentBg: 'bg-sbg-pink',
      notchBg: 'bg-sbg-pink',
      bio: 'Bio.',
      instagramUrl: '',
      linkedinUrl: 'https://linkedin.com',
    },
    {
      id: 'member-5',
      nickname: 'Axelinch',
      name: 'Pinche Axel',
      initials: 'AL',
      accentColor: '#FF9900',
      accentBg: 'bg-sbg-orange',
      notchBg: 'bg-sbg-orange',
      bio: 'Bio.',
      instagramUrl: 'https://instagram.com',
      linkedinUrl: 'https://linkedin.com',
    },
    {
      id: 'mc',
      nickname: 'Migue',
      name: 'Miguel',
      initials: 'MC',
      accentColor: '#FF57EA',
      accentBg: 'bg-[#FF57EA]',
      notchBg: 'bg-[#FF9900]',
      bio: 'Bio.',
      instagramUrl: 'https://instagram.com',
      linkedinUrl: 'https://linkedin.com',
    },
  ];

  return (
    <div className="min-h-screen bg-sbg-base text-white flex flex-col selection:bg-sbg-secondary/30 selection:text-sbg-secondary">
      {/* Header / Navbar */}
      <Navbar currentPath="/equipo" />

      {/* Main Contenido */}
      <main className="grow pt-16">
        <section className="relative min-h-[75vh] pt-16 pb-20 flex flex-col justify-center overflow-hidden bg-sbg-base border-b border-sbg-division/30">
          {/* CSS estatico para el patron de grid */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
              backgroundSize: '90px 90px',
              backgroundPosition: 'right top',
            }}
          />

          {/* Degradación de Grid / Gradientes de Superposición de Desvanecimiento */}
          <div className="absolute inset-0 bg-linear-to-r from-sbg-base via-sbg-base/75 to-transparent pointer-events-none z-1" />
          <div className="absolute inset-0 bg-linear-to-t from-sbg-base via-transparent to-transparent pointer-events-none z-1" />

          {/* Grid-Snapped SVGs decorativos y cuadrados de colores sólidos */}
          <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden max-w-7xl mx-auto px-6">
            <div className="absolute top-12 right-6 w-full h-100">
              {/* bolt Morado alineado a la cuadrícula */}
              <div className="absolute top-56.5 right-120 w-22.5 h-22.5 hidden md:flex items-center justify-center animate-float">
                <img src={iconBoltPurple} alt="Bolt" className="w-14 h-14 object-contain opacity-90" />
              </div>

              {/* Cuadro translúcido morado */}
              <div className="absolute top-10.5 right-96.5 w-22.5 h-22.5 bg-sbg-purple/35 border border-sbg-purple/50 hidden md:block backdrop-blur-xs" />

              {/* trophy Morado */}
              <div className="absolute top-11.5 right-51.5 w-22.5 h-22.5 hidden md:flex items-center justify-center animate-float-delayed">
                <img src={iconTrophyPurple} alt="Trophy" className="w-13 h-13 object-contain opacity-90" />
              </div>

              {/* smile Magenta */}
              <div className="absolute top-33 right-6.5 w-22.5 h-22.5 hidden md:flex items-center justify-center animate-float">
                <img src={iconSmileMagenta} alt="Icon" className="w-15 h-15 object-contain opacity-90" />
              </div>

              {/* Cuadro morado sólido */}
              <div className="absolute top-55.5 right-51.5 w-22.5 h-22.5 bg-sbg-purple hidden md:block shadow-2xl shadow-sbg-purple/30" />

              {/* Cuadro naranja sólido */}
              <div className="absolute top-78 right-6.5 w-22.5 h-22.5 bg-[#FF9900] hidden md:block shadow-2xl shadow-[#FF9900]/30" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full my-auto">
            {/* Breadcrumb */}
            <div className="team-animate font-mono text-xs text-sbg-gray tracking-wider mb-4 flex items-center gap-2">
              <button
                onClick={() => navigateTo('/')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                inicio
              </button>
              <span className="text-sbg-division">/</span>
              <span className="text-sbg-secondary">equipo</span>
            </div>

            {/* Identificador de sección */}
            <div className="team-animate font-mono text-xs text-sbg-gray tracking-wider mb-3 flex items-center gap-1.5">
              <span className="text-sbg-secondary font-bold">#</span> equipo
            </div>

            {/* Título principal */}
            <h1 className="team-animate text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] font-display max-w-3xl">
              <DecryptedText
                text="Conoce al equipo"
                speed={100}
                maxIterations={12}
                sequential={true}
                revealDirection="start"
                animateOn="view"
                parentClassName="block"
                className="text-white"
                encryptedClassName="text-[#AD5CFF] opacity-75"
              />
            </h1>

            {/* Descripción */}
            <p className="team-animate max-w-2xl text-sbg-gray text-base sm:text-lg leading-relaxed font-sans font-normal">
              Las personas que construyen el AWS Student Builder Group at UAEH - ESTL: líder y core team trabajando para la comunidad.
            </p>
          </div>
        </section>

        {/* ==========================================
            SECCIÓN 2: GRID DE MIEMBROS
           ========================================== */}
        <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
          {/* Identificador de sección */}
          <div className="font-mono text-xs text-sbg-gray tracking-wider mb-1 flex items-center gap-1.5">
            <span className="text-sbg-secondary font-bold">#</span> equipo 2026
          </div>

          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-3 font-display">
            Quienes hacen posible la comunidad
          </h2>

          <p className="text-sbg-gray text-base max-w-3xl mb-12 font-sans">
            El liderazgo y el core team organizan eventos, guían estudiantes y mantienen viva la comunidad de builders.
          </p>

          {/* tarjetas de miembros del equipo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="relative group transition-all duration-300">
                {/* Sombra apilada de respaldo */}
                <div className="absolute -bottom-2 -right-2 inset-0 rounded-2xl bg-sbg-base border border-sbg-division/60 group-hover:border-sbg-purple group-hover:shadow-[0_0_30px_rgba(173,92,255,0.35)] transition-all duration-300 -z-10" />

                {/* Tarjeta principal */}
                <div
                  className={`relative bg-sbg-card border rounded-2xl flex flex-col h-full transition-all duration-300 overflow-hidden ${
                    member.isLead
                      ? 'border-sbg-purple shadow-xl shadow-sbg-purple/15 ring-1 ring-sbg-purple/50'
                      : 'border-sbg-division/60 group-hover:border-sbg-purple'
                  }`}
                >
                  {/* Línea de acento superior (Lead) */}
                  {member.isLead && (
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF9900] via-sbg-purple to-sbg-secondary z-10" />
                  )}

                  {/* ── FOTO / FALLBACK ─────────────────────────── */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-sbg-base shrink-0">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={`Foto de ${member.name}`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      /* Fallback con iniciales + patrón grid sutil */
                      <div className={`w-full h-full flex flex-col items-center justify-center gap-3 relative ${member.accentBg}`}>
                        {/* Patrón de puntos decorativo */}
                        <div
                          className="absolute inset-0 opacity-20 pointer-events-none"
                          style={{
                            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                          }}
                        />
                        {/* Iniciales grandes */}
                        <span className="relative text-sbg-base text-5xl font-extrabold font-mono tracking-tighter select-none">
                          {member.initials || member.nickname?.slice(0, 2).toUpperCase() || '?'}
                        </span>
                        {/* Nickname pequeño */}
                        <span className="relative text-sbg-base/70 text-xs font-mono tracking-widest uppercase">
                          {member.nickname}
                        </span>
                      </div>
                    )}

                    {/* Degradado inferior sobre la foto */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-sbg-card to-transparent" />

                    {/* Estrella de Lead (esquina superior derecha) */}
                    {member.isLead && (
                      <div className="absolute top-3 right-3 z-10 bg-sbg-base/80 p-1.5 rounded-full border border-[#FF9900]/60 backdrop-blur-sm">
                        <Star size={12} className="text-[#FF9900] fill-[#FF9900]" />
                      </div>
                    )}

                    <div
                      className="absolute bottom-2.5 right-3 z-10 w-2 h-5 rounded-sm"
                      style={{ backgroundColor: member.accentColor }}
                    />
                  </div>

                  {/* ── CONTENIDO INFERIOR ──────────────────────── */}
                  <div className="flex flex-col grow p-5 sm:p-6 gap-3">
                    {/* Nombre + id de rol */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-white font-bold text-base sm:text-lg font-mono leading-tight">
                          {member.name || <span className="text-sbg-gray">Por confirmar</span>}
                        </h3>
                        {member.nickname && (
                          <span className="inline-block mt-1.5 text-[11px] font-mono px-2 py-0.5 rounded border font-semibold"
                            style={{ color: member.accentColor, borderColor: `${member.accentColor}44`, backgroundColor: `${member.accentColor}15` }}>
                            {member.nickname}
                          </span>
                        )}
                      </div>
                      {member.id && (
                        <span className="text-[10px] font-mono whitespace-nowrap mt-0.5 shrink-0"
                          style={{color: member.accentColor}}>
                          {member.id}
                        </span>
                      )}
                    </div>

                    {/* Bio */}
                    <p className="text-sbg-gray text-xs sm:text-sm leading-relaxed font-sans grow min-h-10">
                      {member.bio}
                    </p>

                    {/* Redes sociales */}
                    <div className="pt-3 border-t border-sbg-division/40 flex items-center gap-2.5">
                      {member.instagramUrl && (
                        <a
                          href={member.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Instagram de ${member.name}`}
                          className="p-2.5 rounded-xl border border-sbg-division/60 bg-sbg-base/60 text-sbg-gray hover:text-[#E4405F] hover:bg-[#E4405F]/15 hover:border-[#E4405F]/60 active:scale-90 transition-all duration-150 flex items-center justify-center cursor-pointer"
                        >
                          <InstagramIcon size={16} />
                        </a>
                      )}
                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn de ${member.name}`}
                          className="p-2.5 rounded-xl border border-sbg-division/60 bg-sbg-base/60 text-sbg-gray hover:text-[#0A66C2] hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/60 active:scale-90 transition-all duration-150 flex items-center justify-center cursor-pointer"
                        >
                          <LinkedinIcon size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===============================
            SECCIÓN 3: CANALES DE CONTACTO
           ================================ */}
        <section className="py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10 border-t border-sbg-division/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Instagram */}
            <SpotlightCard
              spotlightColor="rgba(255, 87, 234, 0.15)"
              spotlightBorderColor="rgba(255, 87, 234, 0.4)"
              className="p-6 sm:p-7 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-sbg-card border border-sbg-division flex items-center justify-center text-white shadow-xs">
                  <InstagramIcon size={18} />
                </div>
                <div className="font-mono text-xs text-sbg-gray tracking-wider"># instagram</div>
                <h3 className="text-white font-bold text-xl sm:text-2xl font-sans tracking-tight">
                  Síguenos
                </h3>
                <p className="text-sbg-gray text-xs sm:text-sm font-mono">
                  @aws.uaeh
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="https://www.instagram.com/aws.uaeh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-white hover:text-sbg-secondary transition-colors cursor-pointer group"
                >
                  <span>Contactar</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* ==========================================
            SECCIÓN 4: UBICACIÓN (# visítanos)
           ========================================== */}
        <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10 border-t border-sbg-division/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-5 space-y-5">
              <div className="font-mono text-xs text-sbg-gray tracking-wider flex items-center gap-1.5">
                <span className="text-sbg-secondary font-bold">#</span> visítanos
              </div>

              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl font-display leading-tight">
                Nos encuentras en la UAEH ESTL
              </h2>

              <p className="text-sbg-gray text-sm sm:text-base leading-relaxed font-sans font-normal">
                Escuela Superior de Tlahuelilpan - UAEH. Allí realizamos nuestras reuniones, talleres y eventos de la comunidad.
              </p>

              <div className="flex items-start gap-3.5 pt-2">
                <div className="w-10 h-10 rounded-xl bg-sbg-purple/15 border border-sbg-purple/40 flex items-center justify-center shrink-0 text-sbg-purple mt-0.5">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold text-sm sm:text-base font-mono">
                    Escuela Superior de Tlahuelilpan UAEH
                  </h4>
                  <p className="text-sbg-gray text-xs sm:text-sm font-sans leading-relaxed">
                    Calle Exhacienda San Servando, La Ranchería, Centro, 42780 Tlahuelilpan, Hgo.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/j7xiYyMaoBadxjCs6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sbg-purple hover:text-white bg-sbg-purple/15 border border-sbg-purple/30 hover:bg-sbg-purple/30 px-5 py-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: Styled Dark Map Container matching Screenshot 2 */}
            <div className="lg:col-span-7 bg-[#0E131C] border border-sbg-division/80 rounded-2xl p-2 relative shadow-2xl overflow-hidden min-h-90 sm:min-h-105 flex items-center justify-center">
              {/* Static Grid Pattern */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none z-1"
                style={{
                  backgroundImage:
                    'linear-gradient(#464B55 1px, transparent 1px), linear-gradient(90deg, #464B55 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Dark Map iFrame Embed */}
              <iframe
                title="Ubicación UAEH ESTL"
                width="100%"
                height="100%"
                style={{
                  filter: 'grayscale(100%) invert(92%) contrast(125%) hue-rotate(180deg)',
                  minHeight: '380px',
                  borderRadius: '12px',
                }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=Escuela%20Superior%20de%20Tlahuelilpan%20UAEH&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full relative z-0 border-0"
              />

              {/* Center Map Marker Pin matching Screenshot 2 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-sbg-purple text-sbg-base flex items-center justify-center shadow-xl shadow-sbg-purple/50 border-2 border-white animate-pulse">
                  <MapPin size={20} className="text-sbg-base fill-sbg-base" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
