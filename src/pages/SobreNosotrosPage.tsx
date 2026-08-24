import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

import { Navbar, navigateTo } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import DecryptedText from '../components/ui/DecryptedText';
import { SpotlightCard } from '../components/ui/SpotlightCard';

import { ExternalLink, ArrowRight, MapPin } from 'lucide-react';

import iconBoltPurple from '../assets/svg/AWS Student Builder Group_RGB_Icons_Bolt_Purple.svg';
import iconTrophyAmber from '../assets/svg/AWS Student Builder Group_RGB_Icons_Trophy_Amber.svg';
import iconKeyBlue from '../assets/svg/AWS Student Builder Group_RGB_Icons_Key_Blue.svg';
import iconTeamsAmber from '../assets/svg/AWS Student Builder Group_RGB_Icons_Teams_Amber.svg';
import iconSmileMint from '../assets/svg/AWS Student Builder Group_RGB_Icons_Double Bracket Smile_Mint.svg';
import logoSvg from '../assets/svg/logo.svg';

export const SobreNosotrosPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('uaeh');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Entrance Animations
    gsap.fromTo(
      '.about-animate',
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

  const groupsInMexico = [
    {
      id: 'uaeh',
      name: 'AWS Student Builder Group at UAEH - ESTL',
      city: 'Tlahuelilpan, Hidalgo',
      members: 'Comunidad Oficial',
      active: true,
    },
    {
      id: 'unam',
      name: 'AWS Student Builder Group at UNAM',
      city: 'Ciudad de México',
      members: 'SBG en MeetUp',
      active: false,
    },
    {
      id: 'ipn',
      name: 'AWS Student Builder Group at IPN',
      city: 'Ciudad de México',
      members: 'SBG en MeetUp',
      active: false,
    },
    {
      id: 'itesm',
      name: 'AWS Student Builder Group at ITESM',
      city: 'Monterrey / Querétaro',
      members: 'SBG en MeetUp',
      active: false,
    },
    {
      id: 'uam',
      name: 'AWS Student Builder Group at UAM',
      city: 'Ciudad de México',
      members: 'SBG en MeetUp',
      active: false,
    },
  ];

  return (
    <div className="min-h-screen bg-sbg-base text-white flex flex-col selection:bg-sbg-secondary/30 selection:text-sbg-secondary">
      {/* Header / Navbar */}
      <Navbar currentPath="/nosotros" />

{/* Main Content */}
      <main className="grow pt-16">
        {/* ==========================================
            HERO SECTION: ABOUT US (Grid-Snapped Design)
           ========================================== */}
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
          <div className="absolute inset-0 bg-linear-to-r from-sbg-base via-sbg-base to-transparent pointer-events-none z-1" />
          <div className="absolute inset-0 bg-linear-to-t from-sbg-base via-transparent to-transparent pointer-events-none z-1" />

          {/* Grid-Snapped SVGs decorativos y cuadrados de colores sólidos */}
          <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden max-w-7xl mx-auto px-6">
            <div className="absolute top-0 right-6 w-full h-100">
              {/* Rayo Morado alineado a la cuadrícula */}
              <div className="absolute top-45 right-52 w-22.5 h-22.5 hidden md:flex items-center justify-center animate-float">
                <img src={iconBoltPurple} alt="Bolt" className="w-14 h-14 object-contain opacity-90" />
              </div>

              {/* Cuadro translúcido azul */}
              <div className="absolute top-22.5 right-96.5 w-22.5 h-22.5 bg-sbg-lightblue/35 border border-sbg-lightblue/50 hidden md:block backdrop-blur-xs" />

              {/* Trofeo Naranja */}
              <div className="absolute top-1 right-29 w-22.5 h-22.5 hidden md:flex items-center justify-center animate-float-delayed">
                <img src={iconTrophyAmber} alt="Trophy" className="w-13 h-13 object-contain opacity-90" />
              </div>

              {/* Cuadro verde sólido */}
              <div className="absolute top-90 right-51.5 w-22.5 h-22.5 bg-sbg-lightgreen hidden md:block shadow-2xl shadow-sbg-lightgreen/30" />

              {/* Cuadro rosado sólido */}
              <div className="absolute top-45 right-6.5 w-22.5 h-22.5 bg-sbg-pink hidden md:block shadow-2xl shadow-sbg-pink/30" />
            </div>
          </div>

          {/* Contenedor de Contenido del Hero */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full my-auto">
            {/* Breadcrumb */}
            <div className="about-animate font-mono text-xs text-sbg-gray tracking-wider mb-4 flex items-center gap-2">
              <button
                onClick={() => navigateTo('/')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                inicio
              </button>
              <span className="text-sbg-division">/</span>
              <span className="text-sbg-secondary">nosotros</span>
            </div>

            {/* Section Identifier */}
            <div className="about-animate font-mono text-xs text-sbg-gray tracking-wider mb-3 flex items-center gap-1.5">
              <span className="text-sbg-secondary font-bold">#</span> sobre nosotros
            </div>

            {/* H1 Main Title Stack */}
            <h1 className="about-animate text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] font-display max-w-3xl">
              <DecryptedText
                text="Somos un grupo de estudiantes"
                speed={100}
                maxIterations={12}
                sequential={true}
                revealDirection="start"
                animateOn="view"
                parentClassName="block"
                className="text-white"
                encryptedClassName="text-[#AD5CFF] opacity-75"
              />
              <DecryptedText
                text="construyendo en AWS"
                speed={100}
                maxIterations={14}
                sequential={true}
                revealDirection="start"
                animateOn="view"
                parentClassName="block"
                className="text-white"
                encryptedClassName="text-[#FF9900] opacity-80"
              />
            </h1>

            {/* Description Subtitle */}
            <p className="about-animate max-w-2xl text-sbg-gray text-base sm:text-lg leading-relaxed font-sans font-normal">
              Una comunidad liderada por estudiantes de la UAEH - Escuela Superior de Tlahuelilpan y de todas las carreras que se juntan para aprender, construir y certificarse en AWS.
            </p>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: QUIÉNES SOMOS (# quiénes somos)
           ========================================== */}
        <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
          {/* Section Identifier */}
          <div className="font-mono text-xs text-sbg-gray tracking-wider mb-1 flex items-center gap-1.5">
            <span className="text-sbg-secondary font-bold">#</span> quiénes somos
          </div>

          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-12 font-display">
            AWS Student Builder Group at UAEH
          </h2>

          {/* 2 Twin Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Card 1: Qué nos mueve */}
            <SpotlightCard
              spotlightColor="rgba(255, 87, 234, 0.15)"
              spotlightBorderColor="rgba(255, 87, 234, 0.4)"
              className="p-8 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <h3 className="text-white font-bold text-xl sm:text-2xl font-mono">
                  Qué nos mueve
                </h3>
                <p className="text-sbg-gray text-sm sm:text-base leading-relaxed font-sans">
                  Somos una comunidad liderada por estudiantes enfocada en aprender AWS con proyectos prácticos y aprendizaje colaborativo. Nos basamos en la Universidad Autónoma del Estado de Hidalgo (UAEH - Escuela Superior de Tlahuelilpan), pero cualquier estudiante universitario de México puede sumarse.
                </p>
              </div>
            </SpotlightCard>

            {/* Card 2: Lo que encontrarás */}
            <SpotlightCard
              spotlightColor="rgba(173, 92, 255, 0.12)"
              spotlightBorderColor="rgba(173, 92, 255, 0.4)"
              className="p-8 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <h3 className="text-white font-bold text-xl sm:text-2xl font-mono">
                  Lo que encontrarás
                </h3>
                <ul className="space-y-3 text-sbg-gray text-sm sm:text-base leading-relaxed font-sans">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-sbg-purple mt-2 shrink-0" />
                    <span>Abierto a estudiantes de todas las carreras y facultades de la UAEH</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-sbg-purple mt-2 shrink-0" />
                    <span>Enfoque en seguridad, IA, analítica e innovación cloud</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-sbg-purple mt-2 shrink-0" />
                    <span>Experiencia práctica con proyectos reales de AWS</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-sbg-purple mt-2 shrink-0" />
                    <span>Desarrolla habilidades de industria con alta demanda</span>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </div>

          {/* Disclaimer text */}
          <p className="text-xs font-mono text-sbg-gray/70 pt-2">
            Al registrarte en nuestros eventos aceptas los Términos y Condiciones de AWS Events.
          </p>
        </section>

        {/* ==========================================
            SECTION 3: QUÉ HACEMOS (# qué hacemos)
           ========================================== */}
        <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10 border-t border-sbg-division/30">
          {/* Section Identifier */}
          <div className="font-mono text-xs text-sbg-gray tracking-wider mb-1 flex items-center gap-1.5">
            <span className="text-sbg-secondary font-bold">#</span> qué hacemos
          </div>

          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-4 font-display">
            Actividades e iniciativas
          </h2>
          <p className="text-sbg-gray text-base max-w-2xl mb-12 font-sans">
            Nuestras actividades están diseñadas para que avances tanto técnicamente como en tu carrera.
          </p>

          {/* 3 Activity Spotlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Talleres Técnicos */}
            <SpotlightCard
              spotlightColor="rgba(255, 153, 0, 0.15)"
              spotlightBorderColor="rgba(255, 153, 0, 0.4)"
              className="p-6 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-sbg-orange/10 border border-sbg-orange/30 flex items-center justify-center">
                  <img src={iconTeamsAmber} alt="Talleres" className="w-7 h-7 object-contain" />
                </div>
                <h3 className="text-white font-bold text-xl font-mono">
                  Talleres Técnicos
                </h3>
                <p className="text-sbg-gray text-sm leading-relaxed font-sans">
                  Talleres prácticos regulares sobre servicios AWS, arquitectura cloud y buenas prácticas.
                </p>
              </div>
            </SpotlightCard>

            {/* Card 2: Apoyo para Certificaciones */}
            <SpotlightCard
              spotlightColor="rgba(67, 180, 255, 0.15)"
              spotlightBorderColor="rgba(67, 180, 255, 0.4)"
              className="p-6 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-sbg-lightblue/10 border border-sbg-lightblue/30 flex items-center justify-center">
                  <img src={iconKeyBlue} alt="Certificaciones" className="w-7 h-7 object-contain" />
                </div>
                <h3 className="text-white font-bold text-xl font-mono">
                  Apoyo para Certificaciones
                </h3>
                <p className="text-sbg-gray text-sm leading-relaxed font-sans">
                  Grupos de estudio y recursos para ayudar a los miembros a obtener certificaciones AWS.
                </p>
              </div>
            </SpotlightCard>

            {/* Card 3: Proyectos Reales */}
            <SpotlightCard
              spotlightColor="rgba(0, 228, 130, 0.15)"
              spotlightBorderColor="rgba(0, 228, 130, 0.4)"
              className="p-6 h-full flex flex-col justify-between"
            >
              <div className="space-y-4"> 
                <div className="w-12 h-12 rounded-lg bg-sbg-lightgreen/10 border border-sbg-lightgreen/30 flex items-center justify-center">
                  <img src={iconSmileMint} alt="Proyectos" className="w-7 h-7 object-contain" />
                </div>
                <h3 className="text-white font-bold text-xl font-mono">
                  Proyectos Reales
                </h3>
                <p className="text-sbg-gray text-sm leading-relaxed font-sans">
                  Proyectos colaborativos que resuelven problemas reales usando tecnologías AWS.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* ==========================================
            SECTION 4: QUÉ SOMOS (# qué somos)
           ========================================== */}
        <section className="py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10 border-t border-sbg-division/30">
          {/* Section Identifier */}
          <div className="font-mono text-xs text-sbg-gray tracking-wider mb-1 flex items-center gap-1.5">
            <span className="text-sbg-secondary font-bold">#</span> qué somos
          </div>

          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-8 font-display">
            AWS Student Builder Groups
          </h2>

          {/* Banner Box */}
          <div className="bg-sbg-card border border-sbg-division/60 rounded-xl p-8 sm:p-10 shadow-xl">
            <p className="text-sbg-gray text-base sm:text-lg leading-relaxed font-sans">
              Los AWS Student Builder Groups son comunidades estudiantiles lideradas por jóvenes de universidades de todo el mundo. Cada grupo tiene un líder (Lead) que organiza workshops, sesiones de estudio y proyectos colaborativos con AWS. Están abiertos a estudiantes y recién graduados mayores de 18 años sin importar su universidad.
            </p>
          </div>
        </section>

        {/* ==========================================
            SECTION 5: RED GLOBAL (# red global)
           ========================================== */}
        <section className="py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10 border-t border-sbg-division/30">
          {/* Section Identifier */}
          <div className="font-mono text-xs text-sbg-gray tracking-wider mb-1 flex items-center gap-1.5">
            <span className="text-sbg-secondary font-bold">#</span> red global
          </div>

          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-4 font-display">
            Más de 200 grupos en todo el mundo
          </h2>

          <p className="text-sbg-gray text-base max-w-3xl mb-8 leading-relaxed font-sans">
            Somos parte de una red global de Student Builder Groups que conecta a miles de estudiantes apasionados por construir en la nube. Descubre qué se está haciendo en otras ciudades y países.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://builder.aws.com/community/student-builder-groups"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-sbg-division text-white hover:bg-white/5 hover:border-sbg-secondary px-6 py-3 rounded-md text-sm font-mono transition-all flex items-center gap-2"
            >
              <span>Explorar grupos globales</span>
              <ExternalLink size={14} />
            </a>

            <a
              href="https://builder.aws.com/community/student-builder-groups"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-sbg-base hover:bg-slate-200 font-semibold px-6 py-3 rounded-md text-sm font-mono transition-all flex items-center gap-2"
            >
              <span>Funda tu propio grupo</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </section>

        {/* ==========================================
            SECTION 6: COBERTURA EN MÉXICO (Directorio & Mapa)
           ========================================== */}
        <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10 border-t border-sbg-division/30">
          {/* Badge Tag */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 bg-sbg-purple/10 border border-sbg-purple/40 text-sbg-purple text-xs font-mono px-3.5 py-1 rounded-full uppercase tracking-wider font-semibold">
              COBERTURA EN MÉXICO
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl font-display">
              AWS Student Builder Groups
            </h2>
            <span className="font-mono text-xs text-sbg-gray">5 grupos · 4 ciudades</span>
          </div>

          {/* Container Grid: Left Directory List, Right Interactive Dark Map */}
          <div className="bg-sbg-card border border-sbg-division/80 rounded-2xl p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 shadow-2xl overflow-hidden">
            {/* Left Panel: Groups List */}
            <div className="lg:col-span-5 space-y-3 max-h-115 overflow-y-auto pr-2">
              <div className="text-xs font-mono text-sbg-gray uppercase tracking-wider px-2 pb-1 flex items-center justify-between">
                <span>📍 MÉXICO</span>
                <span>5</span>
              </div>

              {groupsInMexico.map((group) => (
                <div
                  key={group.id}
                  onClick={() => setSelectedCity(group.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                    selectedCity === group.id
                      ? 'bg-sbg-base border-sbg-purple/80 shadow-lg shadow-sbg-purple/10'
                      : 'bg-sbg-base/60 border-sbg-division/40 hover:border-sbg-division hover:bg-sbg-base'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-sbg-card border border-sbg-division flex items-center justify-center shrink-0">
                    <img src={logoSvg} alt="AWS SBG" className="w-6 h-6 object-contain" />
                  </div>

                  <div className="grow min-w-0">
                    <h4 className="text-white font-bold text-xs sm:text-sm font-mono truncate">
                      {group.name}
                    </h4>
                    <span className="inline-block mt-1 text-[11px] font-mono text-sbg-purple bg-sbg-purple/15 px-2 py-0.5 rounded border border-sbg-purple/30">
                      {group.members}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Panel: Styled Dark Mexico Map Container */}
            <div className="lg:col-span-7 bg-[#11161D] border border-sbg-division/60 rounded-xl relative min-h-105 flex items-center justify-center overflow-hidden p-6">
              {/* Map SVG Grid Overlay */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(#464B55 1px, transparent 1px), linear-gradient(90deg, #464B55 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              {/* Mexico Map Canvas Graphic Representation */}
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* City Location Pins overlay */}
                {/* CDMX Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-12 translate-y-6 z-10 group">
                  <div className="flex items-center gap-1 bg-sbg-purple text-sbg-base text-[11px] font-mono font-bold px-3 py-1 rounded-full shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                    <MapPin size={12} />
                    <span>CDMX (3)</span>
                  </div>
                </div>

                {/* Hidalgo / Tlahuelilpan Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-4 -translate-y-10 z-20 group">
                  <div className="flex items-center gap-1.5 bg-[#FF9900] text-sbg-base text-xs font-mono font-extrabold px-3.5 py-1.5 rounded-full shadow-xl animate-pulse group-hover:scale-110 transition-transform cursor-pointer border-2 border-white">
                    <MapPin size={14} />
                    <span>UAEH Tlahuelilpan (1)</span>
                  </div>
                </div>

                {/* Monterrey Marker */}
                <div className="absolute top-1/4 left-1/2 -translate-x-20 z-10 group">
                  <div className="flex items-center gap-1 bg-sbg-purple text-sbg-base text-[11px] font-mono font-bold px-3 py-1 rounded-full shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                    <MapPin size={12} />
                    <span>Monterrey (1)</span>
                  </div>
                </div>

                {/* Map Aesthetic Graphic Lines */}
                <svg className="w-full h-64 opacity-40 text-sbg-division stroke-current stroke-1 fill-none" viewBox="0 0 500 300">
                  <path d="M 80 80 Q 150 120 220 180 T 320 220 T 420 250" />
                  <path d="M 120 100 Q 200 160 260 200 T 380 230" />
                  <circle cx="220" cy="180" r="4" className="fill-sbg-purple" />
                  <circle cx="260" cy="160" r="6" className="fill-[#FF9900]" />
                  <circle cx="200" cy="110" r="4" className="fill-sbg-purple" />
                </svg>

                {/* Bottom Map Attribution */}
                <div className="absolute bottom-2 right-3 text-[10px] font-mono text-sbg-gray/60">
                  📍 Cobertura AWS Student Builder Groups · México
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
