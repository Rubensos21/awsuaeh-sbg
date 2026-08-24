import React, { useEffect } from 'react';
import gsap from 'gsap';

import { Navbar, navigateTo } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import DecryptedText from '../components/ui/DecryptedText';
import { SpotlightCard } from '../components/ui/SpotlightCard';

import {
  Award,
  BookOpen,
  Users,
  Briefcase,
  TrendingUp,
} from 'lucide-react';

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

import iconBoltMagenta from '../assets/svg/AWS Student Builder Group_RGB_Icons_Bolt_Magenta.svg';
import iconBoltMint from '../assets/svg/AWS Student Builder Group_RGB_Icons_Bolt_Mint.svg';
import iconTrophyPurple from '../assets/svg/AWS Student Builder Group_RGB_Icons_Trophy_Purple.svg';
import iconTrophyBlue from '../assets/svg/AWS Student Builder Group_RGB_Icons_Trophy_Blue.svg';
import iconSmileMint from '../assets/svg/AWS Student Builder Group_RGB_Icons_Double Bracket Smile_Mint.svg';
import iconSingleSmileMagenta from '../assets/svg/AWS Student Builder Group_RGB_Icons_Single Bracket Smile_Magenta.svg';
import iconClockBlue from '../assets/svg/AWS Student Builder Group_RGB_Icons_Clock_Blue.svg';
import iconKeyAmber from '../assets/svg/AWS Student Builder Group_RGB_Icons_Key_Amber.svg';
import iconTeamsPurple from '../assets/svg/AWS Student Builder Group_RGB_Icons_Teams_Purple.svg';

export const BeneficiosPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Entrance Animations
    gsap.fromTo(
      '.benefit-animate',
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

  return (
    <div className="min-h-screen bg-sbg-base text-white flex flex-col selection:bg-sbg-secondary/30 selection:text-sbg-secondary">
      {/* Header / Navbar */}
      <Navbar currentPath="/beneficios" />

      {/* Main Content */}
      <main className="grow pt-16">
        {/* ==========================================
            HERO SECTION: BENEFICIOS
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
          <div className="absolute inset-0 bg-linear-to-r from-sbg-base via-sbg-base/75 to-transparent pointer-events-none z-1" />
          <div className="absolute inset-0 bg-linear-to-t from-sbg-base via-transparent to-transparent pointer-events-none z-1" />

          {/* Grid-Snapped SVGs decorativos y cuadrados de colores sólidos (Pixel-Perfect matching sobreNosotrosHero.jpg) */}
          <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden max-w-7xl mx-auto px-6">
            <div className="absolute top-0 right-6 w-full h-100">
              {/* Rayo Icon snapped to grid cell */}
              <div className="absolute top-68.5 right-120 w-22.5 h-22.5 hidden md:flex items-center justify-center animate-float">
                <img src={iconBoltMagenta} alt="Bolt" className="w-14 h-14 object-contain opacity-90" />
              </div>

              {/* cuadro transparente morado */}
              <div className="absolute top-22.5 right-96.5 w-22.5 h-22.5 bg-sbg-purple/35 border border-sbg-purple/50 hidden md:block backdrop-blur-xs" />

              {/* Icono de Trofeo */}
              <div className="absolute top-1 right-51.5 w-22.5 h-22.5 hidden md:flex items-center justify-center animate-float-delayed">
                <img src={iconTrophyBlue} alt="Trophy" className="w-13 h-13 object-contain opacity-90" />
              </div>

              {/* Icono de Sonrisa */} 
              <div className="absolute top-46 right-6.5 w-22.5 h-22.5 hidden md:flex items-center justify-center animate-float">
                <img src={iconSmileMint} alt="Icon" className="w-15 h-15 object-contain opacity-90" />
              </div>

              {/* cuadrado morado sólido */}
              <div className="absolute top-67.5 right-51.5 w-22.5 h-22.5 bg-sbg-purple hidden md:block shadow-2xl shadow-sbg-purple/30" />

              {/* cuadrado naranja sólido */}
              <div className="absolute top-90 right-6.5 w-22.5 h-22.5 bg-[#FF9900] hidden md:block shadow-2xl shadow-[#FF9900]/30" />
            </div>
          </div>

          {/* Contenedor de Contenido del Hero */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full my-auto">
            {/* Breadcrumb */}
            <div className="benefit-animate font-mono text-xs text-sbg-gray tracking-wider mb-4 flex items-center gap-2">
              <button
                onClick={() => navigateTo('/')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                inicio
              </button>
              <span className="text-sbg-division">/</span>
              <span className="text-sbg-secondary">beneficios</span>
            </div>

            {/* Section Identifier */}
            <div className="benefit-animate font-mono text-xs text-sbg-gray tracking-wider mb-3 flex items-center gap-1.5">
              <span className="text-sbg-secondary font-bold">#</span> miembros
            </div>

            {/* H1 Main Title Stack */}
            <h1 className="benefit-animate text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] font-display max-w-3xl">
              <DecryptedText
                text="Beneficios de pertenecer al"
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
                text="grupo"
                speed={100}
                maxIterations={10}
                sequential={true}
                revealDirection="start"
                animateOn="view"
                parentClassName="block"
                className="text-white"
                encryptedClassName="text-[#FF9900] opacity-80"
              />
            </h1>

            {/* Description Subtitle */}
            <p className="benefit-animate max-w-2xl text-sbg-gray text-base sm:text-lg leading-relaxed font-sans font-normal">
              Lo que obtienes al ser parte del AWS Student Builder Group at UAEH - ESTL: certificaciones, proyectos reales, comunidad y mentoría.
            </p>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: GRID DE 6 TARJETAS DE BENEFICIOS
           ========================================== */}
        <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Soporte para certificarte en AWS */}
            <SpotlightCard
              spotlightColor="rgba(173, 92, 255, 0.15)"
              spotlightBorderColor="rgba(173, 92, 255, 0.4)"
              className="p-6 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-sbg-card border border-sbg-division flex items-center justify-center text-sbg-gray">
                    <Award size={18} />
                  </div>
                  <img src={iconTrophyPurple} alt="Trophy" className="w-8 h-8 object-contain" />
                </div>

                <div className="font-mono text-xs text-sbg-gray">
                  <span className="text-sbg-secondary">#</span> certificación
                </div>

                <h3 className="text-white font-bold text-xl font-mono leading-snug">
                  Soporte para certificarte en AWS
                </h3>

                <p className="text-sbg-gray text-sm leading-relaxed font-sans">
                  Materiales de estudio, grupos semanales y mentoría para acompañarte hasta tu siguiente cert AWS.
                </p>

                <ul className="space-y-2 text-sbg-gray text-xs font-sans">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-purple" />
                    <span>Recursos de estudio gratuitos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-purple" />
                    <span>Grupos de estudio semanales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-purple" />
                    <span>Guía para elegir tu cert</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-purple" />
                    <span>Mentoría de certificados</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-sbg-division/40 flex items-center gap-2">
                <span className="text-[11px] font-mono text-sbg-gray bg-sbg-base px-2.5 py-1 rounded border border-sbg-division/60">
                  # clf-c02
                </span>
                <span className="text-[11px] font-mono text-sbg-gray bg-sbg-base px-2.5 py-1 rounded border border-sbg-division/60">
                  # saa-c03
                </span>
              </div>
            </SpotlightCard>

            {/* Card 2: Hands-on con servicios AWS */}
            <SpotlightCard
              spotlightColor="rgba(0, 228, 130, 0.15)"
              spotlightBorderColor="rgba(0, 228, 130, 0.4)"
              className="p-6 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-sbg-card border border-sbg-division flex items-center justify-center text-sbg-gray">
                    <BookOpen size={18} />
                  </div>
                  <img src={iconBoltMint} alt="Bolt" className="w-8 h-8 object-contain" />
                </div>

                <div className="font-mono text-xs text-sbg-gray">
                  <span className="text-sbg-secondary">#</span> labs & workshops
                </div>

                <h3 className="text-white font-bold text-xl font-mono leading-snug">
                  Hands-on con servicios AWS
                </h3>

                <p className="text-sbg-gray text-sm leading-relaxed font-sans">
                  Construimos aplicaciones reales usando AWS a través de workshops prácticos y proyectos guiados.
                </p>

                <ul className="space-y-2 text-sbg-gray text-xs font-sans">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-lightgreen" />
                    <span>Workshops técnicos mensuales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-lightgreen" />
                    <span>Sesiones de live coding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-lightgreen" />
                    <span>Workshops de arquitectura</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-lightgreen" />
                    <span>Hackathons y retos</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-sbg-division/40 flex items-center gap-2">
                <span className="text-[11px] font-mono text-sbg-gray bg-sbg-base px-2.5 py-1 rounded border border-sbg-division/60">
                  # hands-on
                </span>
                <span className="text-[11px] font-mono text-sbg-gray bg-sbg-base px-2.5 py-1 rounded border border-sbg-division/60">
                  # builder
                </span>
              </div>
            </SpotlightCard>

            {/* Card 3: Conecta con líderes de industria */}
            <SpotlightCard
              spotlightColor="rgba(255, 87, 234, 0.15)"
              spotlightBorderColor="rgba(255, 87, 234, 0.4)"
              className="p-6 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-sbg-card border border-sbg-division flex items-center justify-center text-sbg-gray">
                    <Users size={18} />
                  </div>
                  <img src={iconSingleSmileMagenta} alt="Smile" className="w-10 h-10 object-contain" />
                </div>

                <div className="font-mono text-xs text-sbg-gray">
                  <span className="text-sbg-secondary">#</span> networking
                </div>

                <h3 className="text-white font-bold text-xl font-mono leading-snug">
                  Conecta con líderes de industria
                </h3>

                <p className="text-sbg-gray text-sm leading-relaxed font-sans">
                  Speakers, profesionales AWS y otros estudiantes: una red valiosa para toda tu carrera.
                </p>

                <ul className="space-y-2 text-sbg-gray text-xs font-sans">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-pink" />
                    <span>Speakers invitados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-pink" />
                    <span>Programa de mentoría</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-pink" />
                    <span>Eventos de reclutamiento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-pink" />
                    <span>Red de egresados</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-sbg-division/40 flex items-center gap-2">
                <span className="text-[11px] font-mono text-sbg-gray bg-sbg-base px-2.5 py-1 rounded border border-sbg-division/60">
                  # community
                </span>
                <span className="text-[11px] font-mono text-sbg-gray bg-sbg-base px-2.5 py-1 rounded border border-sbg-division/60">
                  # mentorship
                </span>
              </div>
            </SpotlightCard>

            {/* Card 4: Desarrollo profesional */}
            <SpotlightCard
              spotlightColor="rgba(67, 180, 255, 0.15)"
              spotlightBorderColor="rgba(67, 180, 255, 0.4)"
              className="p-6 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-sbg-card border border-sbg-division flex items-center justify-center text-sbg-gray">
                    <Briefcase size={18} />
                  </div>
                  <img src={iconClockBlue} alt="Clock" className="w-8 h-8 object-contain" />
                </div>

                <div className="font-mono text-xs text-sbg-gray">
                  <span className="text-sbg-secondary">#</span> carrera
                </div>

                <h3 className="text-white font-bold text-xl font-mono leading-snug">
                  Desarrollo profesional
                </h3>

                <p className="text-sbg-gray text-sm leading-relaxed font-sans">
                  Habilidades reales y experiencia con proyectos que los empleadores valoran.
                </p>

                <ul className="space-y-2 text-sbg-gray text-xs font-sans">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-lightblue" />
                    <span>Revisión de CV</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-lightblue" />
                    <span>Preparación de entrevistas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-lightblue" />
                    <span>Prácticas e internships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-lightblue" />
                    <span>Acompañamiento de empleo</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-sbg-division/40 flex items-center gap-2">
                <span className="text-[11px] font-mono text-sbg-gray bg-sbg-base px-2.5 py-1 rounded border border-sbg-division/60">
                  # career
                </span>
                <span className="text-[11px] font-mono text-sbg-gray bg-sbg-base px-2.5 py-1 rounded border border-sbg-division/60">
                  # interview-prep
                </span>
              </div>
            </SpotlightCard>

            {/* Card 5: Acceso a créditos AWS */}
            <SpotlightCard
              spotlightColor="rgba(255, 153, 0, 0.15)"
              spotlightBorderColor="rgba(255, 153, 0, 0.4)"
              className="p-6 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className='flex items-center justify-between'>
                  <div className="w-9 h-9 rounded-lg bg-sbg-card border border-sbg-division flex items-center justify-center text-sbg-gray font-bold text-lg font-mono">
                    $
                  </div>
                  <img src={iconKeyAmber} alt="Key" className="w-8 h-8 object-contain" />
                </div>

                <div className="font-mono text-xs text-sbg-gray">
                  <span className="text-sbg-secondary">#</span> recursos
                </div>

                <h3 className="text-white font-bold text-xl font-mono leading-snug">
                  Acceso a créditos AWS
                </h3>

                <p className="text-sbg-gray text-sm leading-relaxed font-sans">
                  Experimenta con servicios AWS y construye tu portafolio con créditos cloud gratuitos.
                </p>

                <ul className="space-y-2 text-sbg-gray text-xs font-sans">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-orange" />
                    <span>AWS Educate credits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-orange" />
                    <span>Financiación de proyectos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-orange" />
                    <span>Trucos de free tier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-orange" />
                    <span>Cost management</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-sbg-division/40 flex items-center gap-2">
                <span className="text-[11px] font-mono text-sbg-gray bg-sbg-base px-2.5 py-1 rounded border border-sbg-division/60">
                  # credits
                </span>
                <span className="text-[11px] font-mono text-sbg-gray bg-sbg-base px-2.5 py-1 rounded border border-sbg-division/60">
                  # free-tier
                </span>
              </div>
            </SpotlightCard>

            {/* Card 6: Comunidad y mentoría */}
            <SpotlightCard
              spotlightColor="rgba(173, 92, 255, 0.15)"
              spotlightBorderColor="rgba(173, 92, 255, 0.4)"
              className="p-6 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className='flex items-center justify-between'>
                  <div className="w-9 h-9 rounded-lg bg-sbg-card border border-sbg-division flex items-center justify-center text-sbg-gray">
                    <TrendingUp size={18} />
                  </div>
                  <img src={iconTeamsPurple} alt="Teams" className="w-8 h-8 object-contain" />
                </div>

                <div className="font-mono text-xs text-sbg-gray">
                  <span className="text-sbg-secondary">#</span> comunidad
                </div>

                <h3 className="text-white font-bold text-xl font-mono leading-snug">
                  Comunidad y mentoría
                </h3>

                <p className="text-sbg-gray text-sm leading-relaxed font-sans">
                  Una comunidad de apoyo donde compartimos conocimiento y crecemos juntos.
                </p>

                <ul className="space-y-2 text-sbg-gray text-xs font-sans">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-purple" />
                    <span>Aprendizaje entre pares</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-purple" />
                    <span>Mentoría 1:1</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-purple" />
                    <span>Proyectos colaborativos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sbg-purple" />
                    <span>Eventos sociales</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-sbg-division/40 flex items-center gap-2">
                <span className="text-[11px] font-mono text-sbg-gray bg-sbg-base px-2.5 py-1 rounded border border-sbg-division/60">
                  # community
                </span>
                <span className="text-[11px] font-mono text-sbg-gray bg-sbg-base px-2.5 py-1 rounded border border-sbg-division/60">
                  # learning
                </span>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* ==========================================
            SECTION 3: CTA BANNER (# únete)
           ========================================== */}
        <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10 border-t border-sbg-division/30">
          {/* Section Identifier */}
          <div className="font-mono text-xs text-sbg-gray tracking-wider mb-2 flex items-center gap-1.5">
            <span className="text-sbg-secondary font-bold">#</span> únete
          </div>

          <h2 className="text-white font-bold text-3xl sm:text-5xl md:text-6xl mb-6 font-display">
            ¿Listo para disfrutar estos beneficios?
          </h2>

          <p className="text-sbg-gray text-base sm:text-lg max-w-3xl mb-10 leading-relaxed font-sans">
            Únete hoy al AWS Student Builder Group at UAEH - ESTL y comienza tu camino para convertirte en experto en la nube.
          </p>

          <div className='flex flex-wrap items-center'>
            <a
              href="https://www.instagram.com/aws.uaeh/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-sbg-base hover:bg-slate-200 font-mono font-semibold px-8 py-3 rounded-xl text-sm transition-all shadow-xl hover:shadow-white/20 active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <InstagramIcon size={16}/>
              <span>Entérate de todo</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
