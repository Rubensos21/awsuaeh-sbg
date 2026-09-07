import React from 'react';
import { Calendar, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { navigateTo } from '../layout/Navbar';

interface EventItem {
  id: string;
  tag: 'taller' | 'conferencia' | 'certificación';
  tagColor: string;
  tagBg: string;
  title: string;
  description: string;
  modality: string;
  location: string;
  date: string;
  time: string;
}

const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'event-1',
    tag: 'taller',
    tagColor: '#00E482',
    tagBg: 'rgba(0, 228, 130, 0.12)',
    title: 'Reto MIXTLE | Sesión 1: Fundamentos de la Nube',
    description: 'Comienza el Reto MIXTLE con los fundamentos de Cloud Computing y las bases para prepararte para la certificación AWS Certified Cloud Practitioner.',
    modality: 'Híbrido',
    location: 'Universidad Madero (UMAD), Puebla',
    date: '7 de Septiembre, 2026',
    time: '11:30 - 13:30 hrs',
  },
  {
    id: 'event-2',
    tag: 'conferencia',
    tagColor: '#FF9900',
    tagBg: 'rgba(255, 153, 0, 0.12)',
    title: 'Reto MIXTLE | Sesión 2: Servicios de Cómputo',
    description: 'Conoce Amazon EC2, AWS Lambda, contenedores, Elastic Beanstalk y las principales opciones de cómputo de AWS.',
    modality: 'Virtual',
    location: 'Evento online',
    date: '9 de Septiembre, 2026',
    time: '09:00 - 11:30 hrs',
  },
];

export const EventsSection: React.FC = () => {
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
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Identifier */}
      <div className="event-animate font-mono text-xs text-sbg-gray tracking-wider mb-1 flex items-center gap-1.5">
        <span className="text-sbg-secondary font-bold">#</span> imprescindible
      </div>

      {/* Section Title */}
      <h2 className="event-animate text-white font-bold text-2xl sm:text-3xl md:text-4xl max-w-xl mt-2 mb-10 leading-tight">
        Lo que tenemos a futuro
      </h2>

      {/* Vertical List of Event Cards */}
      <div className="space-y-5">
        {UPCOMING_EVENTS.map((event) => (
          <div
            key={event.id}
            className="event-animate bg-sbg-base border border-sbg-division rounded-xl p-6 sm:p-8 hover:border-sbg-secondary/60 transition-all duration-300 shadow-lg hover:shadow-sbg-secondary/10 group relative"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-3 max-w-3xl">
                {/* Tag Superior */}
                <div className="inline-flex items-center gap-2">
                  <span
                    className="font-mono text-xs font-semibold px-3 py-1 rounded-md border"
                    style={{
                      color: event.tagColor,
                      backgroundColor: event.tagBg,
                      borderColor: `${event.tagColor}40`,
                    }}
                  >
                    #{event.tag}
                  </span>
                  <span className="font-mono text-xs text-sbg-gray flex items-center gap-1">
                    <Calendar size={12} className="text-sbg-gray" />
                    {event.date}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-white font-bold text-xl sm:text-2xl group-hover:text-sbg-secondary transition-colors flex items-center gap-2">
                  <span>{event.title}</span>
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sbg-secondary" />
                </h3>

                {/* Event Description */}
                <p className="text-sbg-gray text-sm leading-relaxed font-sans">
                  {event.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="md:self-center shrink-0">
                <a
                  href="/eventos"
                  onClick={handleNavClick('/eventos')}
                  className="inline-flex items-center justify-center bg-sbg-base hover:bg-sbg-secondary text-slate-200 hover:text-sbg-base border border-sbg-gray hover:border-sbg-secondary text-xs font-mono font-semibold px-4 py-2.5 rounded-lg transition-all shadow-sm"
                >
                  Apartar Lugar
                </a>
              </div>
            </div>

            {/* Footer de la Card: Modality, Location & Time */}
            <div className="mt-6 pt-4 border-t border-sbg-division flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-sbg-gray">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sbg-gray" />
                <span className="text-slate-300 font-semibold">{event.modality}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-sbg-gray" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={13} className="text-sbg-gray" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
