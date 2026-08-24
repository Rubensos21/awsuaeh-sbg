import React from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { navigateTo } from '../layout/Navbar';

import { ArrowRight } from 'lucide-react';
import iconBoltBlue from '../../assets/svg/AWS Student Builder Group_RGB_Icons_Bolt_Blue.svg';
import iconKeyPurple from '../../assets/svg/AWS Student Builder Group_RGB_Icons_Key_Purple.svg';
import iconSmileMagenta from '../../assets/svg/AWS Student Builder Group_RGB_Icons_Double Bracket Smile_Magenta.svg';

export const WhyJoinSection: React.FC = () => {
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
    <section id="why-join" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Tag */}
      <div className="why-animate font-mono text-xs text-sbg-gray tracking-wider mb-1 flex items-center gap-1.5">
        <span className="text-sbg-secondary font-bold">#</span> por qué unirse
      </div>

      {/* Section Header */}
      <h2 className="why-animate text-white font-bold text-2xl sm:text-3xl md:text-4xl max-w-2xl mt-2 mb-12 leading-tight">
        Aprende, construye soluciones reales y conecta con la comunidad
      </h2>

      {/* 3 Spotlight Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="why-animate">
          <SpotlightCard
            spotlightColor="rgba(67, 180, 255, 0.15)"
            spotlightBorderColor="rgba(67, 180, 255, 0.5)"
            className="h-full flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-sbg-blue/10 border border-sbg-lightblue/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src={iconBoltBlue} alt="Participa" className="w-7 h-7 object-contain" />
              </div>
              <h3 className="text-white font-bold text-xl group-hover:text-sbg-blue transition-colors">
                Participa con nosotros
              </h3>
              <p className="text-sbg-gray text-sm leading-relaxed">
                Asiste a talleres interactivos, conferencias, retos de código y sesiones prácticas diseñadas para construir proyectos en la nube desde cero.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-sbg-gray/30 cursor-pointer">
              <a
                href="/eventos"
                onClick={handleNavClick('/eventos')}
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sbg-lightblue group-hover:translate-x-1 transition-transform"
              >
                <span>Eventos</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </SpotlightCard>
        </div>

        {/* Card 2 */}
        <div className="why-animate">
          <SpotlightCard
            spotlightColor="rgba(173, 92, 255, 0.15)"
            spotlightBorderColor="rgba(173, 92, 255, 0.5)"
            className="h-full flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-sbg-purple/10 border border-sbg-purple/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src={iconKeyPurple} alt="Herramientas" className="w-7 h-7 object-contain" />
              </div>
              <h3 className="text-white font-bold text-xl group-hover:text-sbg-purple transition-colors">
                Conoce nuevas herramientas
              </h3>
              <p className="text-sbg-gray text-sm leading-relaxed">
                Explora el catálogo completo de Amazon Web Services. Conoce cuándo usar cada servicio y las mejores prácticas para tu arquitectura cloud.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-sbg-gray/30 cursor-pointer">
              <a
                href="/#why-join"
                onClick={handleNavClick('/#why-join')}
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sbg-purple group-hover:translate-x-1 transition-transform"
              >
                <span>Servicios</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </SpotlightCard>
        </div>

        {/* Card 3 */}
        <div className="why-animate">
          <SpotlightCard
            spotlightColor="rgba(255, 87, 234, 0.15)"
            spotlightBorderColor="rgba(255, 87, 234, 0.5)"
            className="h-full flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-sbg-pink/10 border border-sbg-pink/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src={iconSmileMagenta} alt="Comunidad" className="w-7 h-7 object-contain" />
              </div>
              <h3 className="text-white font-bold text-xl group-hover:text-sbg-pink transition-colors">
                Conecta con la comunidad
              </h3>
              <p className="text-sbg-gray text-sm leading-relaxed">
                Colabora con otros estudiantes apasionados por el desarrollo de software, comparte ideas en equipo y accede a recursos para impulsar tu carrera.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-sbg-gray/30 cursor-pointer">
              <a
                href="/beneficios"
                onClick={handleNavClick('/beneficios')}
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sbg-pink group-hover:translate-x-1 transition-transform"
              >
                <span>Beneficios</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
