import React from 'react';
import ShapeGrid from '../ui/ShapeGrid';
import DecryptedText from '../ui/DecryptedText';
import {navigateTo} from '../layout/Navbar';

export const HeroSection: React.FC = () => {
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
    <section id="hero" className="relative min-h-[85vh] pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-sbg-base">
      {/* Background Canvas Grid */}
      <div className="absolute inset-0 z-0">
        <ShapeGrid squareSize={52} borderColor="#464B55/40" hoverTrailAmount={3} ambientCount={6} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full my-auto pointer-events-none">
        <div className="max-w-2xl text-left">

          {/* H1 Main Title Stack con DecryptedText */}
          <h1 className="hero-animate text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-2 leading-[1.05] font-display pointer-events-auto">
            <DecryptedText
              text="AWS Student"
              speed={120}
              maxIterations={12}
              sequential={true}
              revealDirection="start"
              animateOn="inViewHover"
              parentClassName="block cursor-default"
              className="text-white"
              encryptedClassName="text-[#43B4FF] opacity-75"
            />
            <DecryptedText
              text="Builder Group"
              speed={120}
              maxIterations={14}
              sequential={true}
              revealDirection="start"
              animateOn="inViewHover"
              parentClassName="block cursor-default"
              className="text-white"
              encryptedClassName="text-[#AD5CFF] opacity-75"

            />
            <DecryptedText
              text="UAEH - ESTL"
              speed={100}
              maxIterations={10}
              sequential={true}
              revealDirection="center"
              animateOn="inViewHover"
              parentClassName="inline-block cursor-default"
              className="text-sbg-gray hover:text-white transition-colors duration-200"
              encryptedClassName="text-[#FF9900] opacity-80"
            />
          </h1>

          {/* Description Paragraph */}
          <p className="hero-animate max-w-xl text-sbg-gray text-base sm:text-lg leading-relaxed mb-16 font-sans font-normal">
            Construye tu futuro en la nube con el AWS Student Builder Group de la UAEH - Escuela Superior de Tlahuelilpan. Un espacio creado por y para estudiantes donde transformarás la teoría en experiencia práctica con proyectos reales.
          </p>

          {/* CTA Action Buttons */}
          <div className="hero-animate flex flex-wrap items-center gap-4 pointer-events-auto mb-10">
            <a
              href="https://www.meetup.com/aws-sbg-at-autonomous-univ-of-hidalgo-state-tlahuelilpan/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-sbg-base hover:bg-slate-200 font-semibold px-6 py-3 rounded-md text-sm transition-all duration-200 shadow-md hover:shadow-white/20 active:scale-95 text-center"
            >
              Unirme a la comunidad
            </a>

            <a
              href="/eventos"
              onClick={handleNavClick('/eventos')}
              className="border border-sbg-division text-white hover:bg-white/5 hover:border-sbg-secondary px-6 py-3 rounded-md text-sm transition-all duration-200 active:scale-95 font-medium text-center"
            >
              Ver Eventos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

