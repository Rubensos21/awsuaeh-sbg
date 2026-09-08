import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

import { Navbar, navigateTo } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import DecryptedText from '../components/ui/DecryptedText';
import { SpotlightCard } from '../components/ui/SpotlightCard';

import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Code,
  ExternalLink,
} from 'lucide-react';

import iconMeetup from '../assets/svg/meetup.svg';
import iconBoltPurple from '../assets/svg/AWS Student Builder Group_RGB_Icons_Bolt_Purple.svg';
import iconSmileMagenta from '../assets/svg/AWS Student Builder Group_RGB_Icons_Double Bracket Smile_Magenta.svg';

interface EventItem {
  id: string;
  title: string;
  categoryTag: string;
  isUpcoming: boolean;
  startsAt: string;
  date: string;
  time: string;
  location: string;
  attendeesCount: number;
  description: string;
  speakers: {
    name: string;
    role: string;
    avatarUrl: string;
  }[];
  registrationUrl?: string;
  viewUrl?: string;
}

export const EventosPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [currentTime, setCurrentTime] = useState(() => Date.now());

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(
      '.event-animate',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      }
    );

    const statusTimer = window.setInterval(() => setCurrentTime(Date.now()), 30_000);
    return () => window.clearInterval(statusTimer);
  }, []);

  const upcomingEvents: EventItem[] = [
    {
      id: 'mixtle-sesion-1',
      title: 'Reto MIXTLE | Sesión 1: Fundamentos de la Nube',
      categoryTag: '',
      isUpcoming: false,
      startsAt: '2026-09-07T11:30:00-06:00',
      date: '7 de septiembre de 2026',
      time: '11:30 a. m. - 1:30 p. m.',
      location: 'Online | Universidad Madero (UMAD), Puebla',
      attendeesCount: 72,
      description:
        'Comienza el Reto MIXTLE con los fundamentos de Cloud Computing, modelos IaaS, PaaS y SaaS, y las ventajas de la nube para preparar la certificación AWS Certified Cloud Practitioner.',
      speakers: [
        {
          name: 'Mariano Rodríguez Díaz',
          role: 'Líder del AWS UG Mixtli',
          avatarUrl: iconMeetup,
        },
      ],
      registrationUrl: 'https://www.meetup.com/aws-sbg-at-madero-university/events/316327976/',
    },
    {
      id: 'mixtle-sesion-2',
      title: 'Reto MIXTLE | Sesión 2: Servicios de Cómputo',
      categoryTag: '',
      isUpcoming: false,
      startsAt: '2026-09-09T09:00:00-06:00',
      date: '9 de septiembre de 2026',
      time: '9:00 a. m. - 11:30 a. m.',
      location: 'Evento online',
      attendeesCount: 4,
      description:
        'Conoce las opciones de cómputo de AWS: máquinas virtuales, Amazon EC2, AWS Lambda, contenedores, Elastic Beanstalk y automatización con scripts.',
      speakers: [
        {
          name: 'Guillermo Guerrero',
          role: 'Open Source UPIITA',
          avatarUrl: iconMeetup,
        },
      ],
      registrationUrl: 'https://www.meetup.com/aws-sbg-at-national-polytechnic-institute-upiita-campus/events/316452718/',
    },
    {
      id: 'mixtle-sesion-4',
      title: 'Reto MIXTLE | Sesión 4: Seguridad en AWS',
      categoryTag: '',
      isUpcoming: false,
      startsAt: '2026-09-21T11:30:00-06:00',
      date: '21 de septiembre de 2026',
      time: '11:30 a. m. - 2:30 p. m.',
      location: 'Online | Escuela Superior de Tlahuelilpan (ESTl), Hidalgo',
      attendeesCount: 4,
      description:
        'Aprenderemos los pilares fundamentales para proteger tus recursos en la nube, ya que la seguridad es la prioridad número uno ("trabajo cero") dentro de AWS.',
      speakers: [
        {
          name: 'Roberto Flores Segundo (Siegfried)',
          role: 'Líder del AWS UG Playa Vicente',
          avatarUrl: iconMeetup,
        },
      ],
      registrationUrl: 'https://www.meetup.com/aws-sbg-at-autonomous-univ-of-hidalgo-state-tlahuelilpan/events/316464495/',
    },
    {
      id: 'mixtle-sesion-5',
      title: 'RETO MIXTLE | Sesion 5: Networking y Entrega de Contenido',
      categoryTag: '',
      isUpcoming: false,
      startsAt: '2026-09-21T04:30:00-06:00',
      date: '23 de septiembre de 2026',
      time: '04:30 p. m. - 07:00 p. m.',
      location: 'Online | Escuela Superior de Tlahuelilpan (ESTl), Hidalgo',
      attendeesCount: 4,
      description:
        'Aprenderemos a diseñar redes virtuales en la nube y cómo AWS distribuye información en todo el mundo a velocidades increíbles y con la menor latencia.',
      speakers: [
        {
          name: 'Rodrigo Esteban Morales Roldán ',
          role: 'ESCOM - IPN',
          avatarUrl: iconMeetup,
        },
      ],
      registrationUrl: 'https://www.meetup.com/aws-sbg-at-autonomous-univ-of-hidalgo-state-tlahuelilpan/events/316464848/',
    },
  ];

  const pastEvents: EventItem[] = [];

  const allEvents: EventItem[] = [...upcomingEvents, ...pastEvents].map((event) => {
    const isUpcoming = new Date(event.startsAt).getTime() > currentTime;

    return {
      ...event,
      isUpcoming,
      categoryTag: isUpcoming ? '# próximo' : '# finalizado',
    };
  });

  const displayedEvents = allEvents.filter((event) =>
    activeTab === 'upcoming'
      ? event.categoryTag.includes('próximo')
      : event.categoryTag.includes('finalizado')
  );

  const upcomingCount = allEvents.filter((e) => e.categoryTag.includes('próximo')).length;
  const pastCount = allEvents.filter((e) => e.categoryTag.includes('finalizado')).length;

  return (
    <div className="min-h-screen bg-sbg-base text-white flex flex-col selection:bg-sbg-secondary/30 selection:text-sbg-secondary">
      {/* Header / Navbar */}
      <Navbar currentPath="/eventos" />

      {/* Main Content */}
      <main className="grow pt-16">
        {/* ==========================================
            HERO SECTION: EVENTOS (Grid-Snapped Design)
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

          {/* Grid-Snapped SVGs decorativos y cuadrados de colores sólidos */}
          <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden max-w-7xl mx-auto px-6">
            <div className="absolute top-0 right-6 w-full h-100">
              {/* icono bolt */}
              <div className="absolute top-67.5 right-97.5 w-22.5 h-22.5 hidden md:flex items-center justify-center animate-float">
                <img src={iconBoltPurple} alt="Bolt" className="w-14 h-14 object-contain opacity-90" />
              </div>

              {/* cuadro transparente naranja */}
              <div className="absolute top-0 right-96.5 w-22.5 h-22.5 bg-sbg-orange/35 border border-sbg-orange/50 hidden md:block backdrop-blur-xs" />

              {/* Icono de smile */}
              <div className="absolute top-23 right-6.5 w-22.5 h-22.5 hidden md:flex items-center justify-center animate-float-delayed">
                <img src={iconSmileMagenta} alt="AWS SBG Icon" className="w-15 h-15 object-contain opacity-90" />
              </div>

              {/* cuadrado verde sólido */}
              <div className="absolute top-45 right-51.5 w-22.5 h-22.5 bg-sbg-lightgreen hidden md:block shadow-2xl shadow-sbg-lightgreen/30" />

              {/* cuadrado azul sólido */}
              <div className="absolute top-67.5 right-6.5 w-22.5 h-22.5 bg-sbg-lightblue hidden md:block shadow-2xl shadow-sbg-lightblue/30" />
            </div>
          </div>

          {/* Contenedor de Contenido del Hero */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full my-auto">
            {/* Breadcrumb */}
            <div className="event-animate font-mono text-xs text-sbg-gray tracking-wider mb-4 flex items-center gap-2">
              <button
                onClick={() => navigateTo('/')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                inicio
              </button>
              <span className="text-sbg-division">/</span>
              <span className="text-sbg-secondary">eventos</span>
            </div>

            {/* Identificador de sección */}
            <div className="event-animate font-mono text-xs text-sbg-gray tracking-wider mb-3 flex items-center gap-1.5">
              <span className="text-sbg-secondary font-bold">#</span> eventos
            </div>

            {/* H1 Main Title Stack */}
            <h1 className="event-animate text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] font-display max-w-3xl">
              <DecryptedText
                text="Eventos y workshops"
                speed={100}
                maxIterations={12}
                characters="ABCD1234#$%"
                animateOn="view"
                className="revealed"
              />
            </h1>

            {/* Descripción */}
            <p className="event-animate max-w-2xl text-sbg-gray text-base sm:text-lg leading-relaxed font-sans font-normal">
              Únete a nuestras sesiones prácticas, sesiones de estudio y hackathons. Aprende AWS junto a otros estudiantes.
            </p>
          </div>
        </section>

        {/* ==============================
            SECCIÓN 2: LISTADO DE EVENTOS
           =============================== */}
        <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
          {/* Pestañas de Selector (# próximos / # pasados) */}
          <div className="flex items-center gap-3 mb-10">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'upcoming'
                  ? 'bg-sbg-card border border-sbg-purple text-white shadow-lg shadow-sbg-purple/20'
                  : 'bg-sbg-base border border-sbg-division/60 text-sbg-gray hover:text-white hover:bg-sbg-card'
              }`}
            >
              <span># próximos</span>
              {upcomingCount > 0 && (
                <span className="bg-sbg-purple/20 text-sbg-purple text-[10px] px-2 py-0.5 rounded-full font-bold">
                  {upcomingCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('past')}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'past'
                  ? 'bg-sbg-card border border-sbg-purple text-white shadow-lg shadow-sbg-purple/20'
                  : 'bg-sbg-base border border-sbg-division/60 text-sbg-gray hover:text-white hover:bg-sbg-card'
              }`}
            >
              <span># pasados ({pastCount})</span>
            </button>
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedEvents.map((event, index) => (
              <SpotlightCard
                key={`card-${activeTab}-${index}`}
                spotlightColor={event.categoryTag.includes('próximo') ? 'rgba(173, 92, 255, 0.15)' : 'rgba(67, 180, 255, 0.15)'}
                spotlightBorderColor={event.categoryTag.includes('próximo') ? 'rgba(173, 92, 255, 0.4)' : 'rgba(67, 180, 255, 0.4)'}
                className="p-6 h-full flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Poster Visual Box matching Image 2 */}
                  <div className="relative bg-[#0F141D] border border-sbg-division/80 rounded-xl p-5 overflow-hidden">
                    {/* Background Decorative Notches */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-sbg-pink/30 rounded-bl-xl border-l border-b border-sbg-pink/40" />
                    <div className="absolute bottom-0 right-0 w-6 h-12 bg-sbg-purple/40 rounded-tl-xl border-l border-t border-sbg-purple/40" />
                    <div className="absolute top-1/2 right-3 -translate-y-1/2 text-sbg-division/40 font-mono text-xl">
                      <Code size={28} />
                    </div>

                    {/* Tag Badge */}
                    <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-sbg-purple text-sbg-base mb-4 shadow-sm">
                      {event.categoryTag}
                    </div>

                    {/* Speakers Section */}
                    <div className="space-y-3 relative z-10">
                      {event.speakers.map((speaker, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <img
                            src={speaker.avatarUrl}
                            alt={speaker.name}
                            className="w-10 h-10 rounded-full object-cover border border-sbg-division shrink-0"
                          />
                          <div className="min-w-0">
                            <h4 className="text-white text-xs font-bold font-mono truncate leading-tight">
                              {speaker.name}
                            </h4>
                            <p className="text-[11px] text-sbg-gray font-sans truncate">
                              {speaker.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-3">
                    <h3 className="text-white font-bold text-lg font-mono leading-snug group-hover:text-sbg-secondary transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-1.5 font-mono text-xs text-sbg-gray">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-sbg-purple shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-sbg-lightblue shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-sbg-lightgreen shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-sbg-orange shrink-0" />
                        <span>{event.attendeesCount} asistentes</span>
                      </div>
                    </div>

                    <p className="text-sbg-gray text-xs leading-relaxed font-sans line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-5 mt-6 border-t border-sbg-division/40">
                  {event.categoryTag.includes('próximo') ? (
                    <a
                      href={event.registrationUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white hover:bg-slate-200 text-sbg-base font-mono text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer"
                    >
                      <img src={iconMeetup} alt="Meetup" className="w-5 h-5 object-contain" />
                      <span>Registrarme</span>
                      <ArrowRight size={14} />
                    </a>
                  ) : (
                    <a
                      href={event.viewUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-sbg-card hover:bg-sbg-division/60 border border-sbg-division text-white font-mono text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
                    >
                      <img src={iconMeetup} alt='meetup' className="w-5 h-5 object-contain" />
                      <span>Ver detalles del evento</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
