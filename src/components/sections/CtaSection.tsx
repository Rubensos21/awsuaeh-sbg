import React from 'react';
import { MessageSquare } from 'lucide-react';
import iconTeamsPurple from '../../assets/svg/AWS Student Builder Group_RGB_Icons_Teams_Purple.svg';
import iconSmileMint from '../../assets/svg/AWS Student Builder Group_RGB_Icons_Single Bracket Smile_Mint.svg';
import iconTrophyBlue from '../../assets/svg/AWS Student Builder Group_RGB_Icons_Trophy_Blue.svg';
import iconProgramAmber from '../../assets/svg/AWS Student Builder Group_RGB_Program Icon_Amber.svg';
import iconMeetup from '../../assets/svg/meetup.svg';

export const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Container Box */}
      <div className="bg-sbg-base border border-sbg-division rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        {/* Background Subtle Gradient */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sbg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sbg-accent/10 rounded-full blur-3xl pointer-events-none" />

        {/* Identifier Tag */}
        <div className="cta-animate font-mono text-xs text-sbg-gray tracking-wider mb-2 flex items-center gap-1.5">
          <span className="text-sbg-secondary font-bold">#</span> da el salto
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="cta-animate text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              ¿Te animas a subirte a las nubes con nosotros?
            </h2>

            <p className="cta-animate text-sbg-gray text-base leading-relaxed max-w-xl font-sans">
              Síguenos en todos nuestros canales, mantén el radar encendido para los próximos workshops y súmate a una comunidad que literalmente está por las nubes. ¡El próximo gran proyecto lo construimos juntos!
            </p>

            {/* botones comunicacion */}
            <div className="cta-animate pt-4 flex flex-wrap gap-4 font-mono text-xs">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/aws.uaeh/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sbg-purple hover:bg-sbg-purple/60 text-white font-semibold px-5 py-3 rounded-lg transition-all shadow-lg hover:shadow-sbg-purple/30 flex items-center gap-2"
              >
                <MessageSquare size={16} />
                <span>Instagram SBG</span>
              </a>

              {/* Meetup */}
              <a
                href="https://www.meetup.com/aws-sbg-at-autonomous-univ-of-hidalgo-state-tlahuelilpan/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sbg-pink hover:bg-sbg-pink/60 text-sbg-white font-bold px-5 py-3 rounded-lg transition-all shadow-lg hover:shadow-sbg-pink/30 flex items-center gap-2"
              >
                <img src={iconMeetup} alt="Meetup" className="w-6 h-6 object-contain" />
                <span>Grupo Meetup</span>
              </a>
            </div>
          </div>

          {/* Right Column: Floating Pixel Art Decorative Group */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-75">
            {/* Tech Grid Backdrop Box */}
            <div className="w-full max-w-sm h-72 bg-sbg-base border border-sbg-division rounded-xl relative flex items-center justify-center p-6 shadow-inner">
              {/* Subtle Grid pattern overlay inside right card */}
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    'linear-gradient(sbg-gray 1px, transparent 1px), linear-gradient(90deg, sbg-gray 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Floating SVG 1: Teams (Morado #AD5CFF) */}
              <div className="absolute top-6 left-6 animate-float">
                <div className="p-3.5 rounded-xl bg-sbg-base/90 border border-sbg-purple/60 shadow-xl shadow-sbg-purple/10 flex flex-col items-center gap-1.5 backdrop-blur-sm hover:scale-105 transition-transform">
                  <img src={iconTeamsPurple} alt="Community" className="w-10 h-10 object-contain" />
                  <span className="font-mono text-[10px] text-sbg-purple font-semibold uppercase tracking-wider">
                    Community
                  </span>
                </div>
              </div>

              {/* Floating SVG 2: Single Bracket Smile (Mint #00E482) */}
              <div className="absolute bottom-8 right-6 animate-float-delayed">
                <div className="p-3.5 rounded-xl bg-sbg-base/90 border border-sbg-lightgreen/60 shadow-xl shadow-sbg-lightgreen/10 flex flex-col items-center gap-1.5 backdrop-blur-sm hover:scale-105 transition-transform">
                  <img src={iconSmileMint} alt="Builder Bot" className="w-10 h-10 object-contain" />
                  <span className="font-mono text-[10px] text-sbg-lightgreen font-semibold uppercase tracking-wider">
                    ¡Hola Builder!
                  </span>
                </div>
              </div>

              {/* Floating SVG 3: Trophy (Amber #FF9900) */}
              <div className="absolute bottom-6 left-12 animate-float-slow">
                <div className="p-3.5 rounded-xl bg-sbg-base/90 border border-sbg-lightblue shadow-xl shadow-sbg-lightblue/10 flex flex-col items-center gap-1.5 backdrop-blur-sm hover:scale-105 transition-transform">
                  <img src={iconTrophyBlue} alt="AWS Badges" className="w-10 h-10 object-contain" />
                  <span className="font-mono text-[10px] text-sbg-lightblue font-semibold uppercase tracking-wider">
                    AWS Badges
                  </span>
                </div>
              </div>

              {/* Center SVG 4: Teams Blue */}
              <div className="z-10 p-3 rounded-full bg-sbg-base border border-sbg-orange/40 flex items-center justify-center">
                <img src={iconProgramAmber} alt="AWS Student Builder Group" className="w-10 h-10 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
