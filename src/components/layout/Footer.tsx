import React from 'react';
import logoSvg from '../../assets/svg/logo.svg';
import { Globe, Code2 } from 'lucide-react';
import { navigateTo } from './Navbar';

export const Footer: React.FC = () => {
  const handleNavClick = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (path.startsWith('#') || path.startsWith('/#')) {
      const hash = path.includes('#') ? path.split('#')[1] : path;
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', `/#${hash}`);
        window.dispatchEvent(new Event('popstate'));
        window.dispatchEvent(new Event('locationchange'));
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigateTo(path);
    }
  };

  return (
    <footer className="w-full bg-sbg-base border-t border-sbg-division py-12 px-4 sm:px-6 lg:px-8 text-sbg-gray font-sans text-sm relative z-20">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-sbg-division">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <a
              href="/"
              onClick={handleNavClick('/')}
              className="flex items-center gap-2.5 cursor-pointer group w-fit"
            >
              <img src={logoSvg} alt="AWS SBG UAEH" className="w-6 h-6 object-contain" />
              <span className="font-mono font-bold text-white tracking-wider group-hover:text-sbg-secondary transition-colors">
                AWS SBG UAEH - ESTL
              </span>
            </a>
            <p className="text-xs text-sbg-gray leading-relaxed max-w-md">
              Capítulo estudiantil del AWS Student Builder Group en la Escuela Superior de Tlahuelilpan (UAEH). Promovemos la educación en tecnologías de la nube, la colaboración práctica y la construcción de software con estándares globales.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-white uppercase tracking-wider">Navegación</h4>
            
            <div className="grid grid-cols-2 gap-x-6 text-xs font-mono">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    onClick={handleNavClick('/')}
                    className="hover:text-sbg-secondary transition-colors cursor-pointer"
                  >
                    # inicio
                  </a>
                </li>
                <li>
                  <a
                    href="/nosotros"
                    onClick={handleNavClick('/nosotros')}
                    className="hover:text-sbg-secondary transition-colors cursor-pointer"
                  >
                    # nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="/beneficios"
                    onClick={handleNavClick('/beneficios')}
                    className="hover:text-sbg-secondary transition-colors cursor-pointer"
                  >
                    # beneficios
                  </a>
                </li>
              </ul>

              <ul className="space-y-2">
                <li>
                  <a
                    href="/eventos"
                    onClick={handleNavClick('/eventos')}
                    className="hover:text-sbg-secondary transition-colors cursor-pointer"
                  >
                    # eventos
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    onClick={handleNavClick('/servicios')}
                    className="hover:text-sbg-secondary transition-colors cursor-pointer"
                  >
                    # servicios
                  </a>
                </li>
                <li>
                  <a
                    href="/equipo"
                    onClick={handleNavClick('/equipo')}
                    className="hover:text-sbg-secondary transition-colors cursor-pointer"
                  >
                    # equipo
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Links & Community */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-white uppercase tracking-wider">Comunidad</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://uaeh.edu.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sbg-secondary transition-colors inline-flex items-center gap-1.5"
                >
                  <Globe size={12} /> UAEH Oficial
                </a>
              </li>
              <li>
                <a
                  href="https://builder.aws.com/community/student-builder-groups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sbg-secondary transition-colors inline-flex items-center gap-1.5"
                >
                  <img src={logoSvg} alt="AWS" className="w-3.5 h-3.5 object-contain" /> AWS Student Builders
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/aws.uaeh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sbg-secondary transition-colors inline-flex items-center gap-1.5"
                >
                  <Code2 size={12} /> AWS SBG UAEH
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-sbg-gray">
              © {new Date().getFullYear()} AWS Student Builder Group UAEH - Escuela Superior de Tlahuelilpan.
            </p>
            <p className="text-[11px] text-sbg-gray/70">
              Amazon Web Services, AWS y el logo de AWS son marcas registradas de Amazon.com, Inc. o sus filiales.
            </p>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Desarrollado por <a href="https://www.instagram.com/rubs_wtf/" target="_blank" rel="noopener noreferrer" className="hover:text-sbg-lightgreen transition-colors"> Ruben Sosa</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
