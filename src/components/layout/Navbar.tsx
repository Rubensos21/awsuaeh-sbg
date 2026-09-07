import React, { useState } from 'react';
import {
  Menu,
  X,
  Home,
  Info,
  Star,
  Calendar,
  Grid,
  Users,
  LayoutGrid,
  Globe,
} from 'lucide-react';
import logoSvg from '../../assets/svg/logo.svg';
import logomeetup from '../../assets/svg/meetup.svg';

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

export const navigateTo = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new Event('popstate'));
  window.dispatchEvent(new Event('locationchange'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

interface NavbarProps {
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath = '/' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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

  const navItems = [
    { label: 'Inicio', path: '/', icon: Home, match: (p: string) => p === '/' },
    { label: 'Nosotros', path: '/nosotros', icon: Info, match: (p: string) => p.includes('nosotros') },
    { label: 'Beneficios', path: '/beneficios', icon: Star, match: (p: string) => p.includes('beneficios') },
    { label: 'Eventos', path: '/eventos', icon: Calendar, match: (p: string) => p.includes('eventos') },
    { label: 'Servicios AWS', path: '/servicios', icon: Grid, match: (p: string) => p === '/servicios' || p === '/servicios/' },
    { label: 'Equipo', path: '/equipo', icon: Users, match: (p: string) => p.includes('equipo') },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-sbg-base/90 backdrop-blur-md border-b border-sbg-division/40 transition-all duration-300 h-16 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo SVG & Typography */}
          <a
            href="/"
            onClick={handleNavClick('/')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img src={logoSvg} alt="AWS SBG UAEH" className="w-8 h-8 object-contain" />
            <span className="font-sans font-bold text-sm sm:text-base tracking-wider text-white group-hover:text-[#FF9900] transition-colors uppercase">
              AWS SBG UAEH
            </span>
          </a>

          {/* Right: Hamburger Menu Icon Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-10 h-10 rounded-xl bg-sbg-card border border-sbg-division/80 flex items-center justify-center text-white hover:text-[#FF9900] hover:border-[#FF9900]/60 transition-colors focus:outline-none cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Side Drawer Modal Overlay matching Screenshot Pixel-Perfect */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Container (Side Panel) */}
          <div className="relative z-50 w-80 sm:w-96 bg-[#0E131B] border-r border-sbg-division/60 p-6 flex flex-col justify-between h-full shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-300">
            <div>
              {/* Header inside Drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-sbg-division/30">
                <div className="flex items-center gap-3">
                  <img src={logoSvg} alt="AWS SBG" className="w-8 h-8 object-contain" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-sans font-bold text-sm text-white">AWS Student</span>
                    <span className="font-mono text-xs text-sbg-gray">
                      Builder Group <span className="text-sbg-gray/70">at UAEH</span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-xl bg-sbg-card border border-sbg-division/80 flex items-center justify-center text-sbg-gray hover:text-white hover:border-[#FF9900]/60 transition-colors cursor-pointer"
                  aria-label="Cerrar menú"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Title #nav */}
              <h2 className="text-2xl font-bold font-mono text-white mt-6 mb-4">
                <span className="text-sbg-secondary">#</span>nav
              </h2>

              {/* Navigation Items List */}
              <nav className="space-y-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.match(currentPath);

                  return (
                    <a
                      key={item.label}
                      href={item.path}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={handleNavClick(item.path)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-sm transition-all duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-sbg-purple text-sbg-base font-bold shadow-lg shadow-sbg-purple/30'
                          : 'text-sbg-gray hover:text-white hover:bg-sbg-card/70'
                      }`}
                    >
                      <Icon size={18} className={isActive ? 'text-sbg-base' : 'text-sbg-gray'} />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </nav>

              {/* CTA Button inside Drawer */}
              <div className="mt-6">
                <button
                  onClick={handleNavClick('/#cta')}
                  className="w-full bg-white text-sbg-base hover:bg-slate-200 font-mono font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-xl active:scale-95 transition-all cursor-pointer"
                >
                  <img src={logomeetup} alt="Meetup" className="w-5 h-5 object-contain" />
                  <span>Entérate de todo</span>
                </button>
              </div>
            </div>

            {/* Footer inside Drawer */}
            <div className="pt-8 border-t border-sbg-division/30 space-y-6">
              <div className="flex items-center">
                <LayoutGrid size={20} className="text-sbg-gray hover:text-white transition-colors cursor-pointer" />
              </div>

              <div className="flex items-center gap-4 text-sbg-gray">
                <a
                  href="https://aws.amazon.com/developer/community/student-builders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9900] transition-colors p-1"
                >
                  <Globe size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A66C2] transition-colors p-1"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E4405F] transition-colors p-1"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

