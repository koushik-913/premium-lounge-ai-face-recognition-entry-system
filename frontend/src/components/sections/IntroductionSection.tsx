import { useEffect, useRef } from 'react';
import { ChevronDown, Shield, Zap, Users } from 'lucide-react';

export default function IntroductionSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.add('animate-fade-in');
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById('face-detection');
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/lounge-hero.dim_1920x1080.jpg')`,
        }}
      />

      {/* Gradient Overlay — dark at bottom, lighter at top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, oklch(0.10 0.04 240 / 0.55) 0%, oklch(0.10 0.04 240 / 0.65) 40%, oklch(0.08 0.04 240 / 0.88) 100%)',
        }}
      />

      {/* Subtle top bar accent */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.75 0.12 75), transparent)' }}
      />

      {/* Content */}
      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-32 opacity-0">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ color: 'oklch(0.75 0.12 75)', letterSpacing: '0.3em' }}
            >
              Airport Lounge Access Control
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-display font-light leading-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: 'white',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
            }}
          >
            Premium Lounge AI
            <br />
            <span style={{ color: 'oklch(0.88 0.08 75)' }}>Face Recognition</span>
            <br />
            Entry System
          </h1>

          {/* Tagline */}
          <p
            className="text-lg font-light leading-relaxed mb-10"
            style={{ color: 'oklch(0.85 0.01 240)', maxWidth: '52ch', letterSpacing: '0.01em' }}
          >
            Seamless Access Through Advanced Recognition Technology.
            Intelligent biometric verification for premium lounge entry — fast, secure, and effortless.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: Shield, label: 'Biometric Security' },
              { icon: Zap, label: 'Sub-second Verification' },
              { icon: Users, label: 'Premium Members Only' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
                style={{
                  borderColor: 'oklch(0.75 0.12 75 / 0.4)',
                  background: 'oklch(0.75 0.12 75 / 0.1)',
                  color: 'oklch(0.92 0.06 75)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToNext}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:shadow-glow-gold hover:scale-105"
            style={{
              background: 'oklch(0.75 0.12 75)',
              color: 'oklch(0.15 0.03 75)',
              letterSpacing: '0.1em',
            }}
          >
            Explore the System
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scroll Chevron */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span
          className="text-xs font-medium tracking-[0.2em] uppercase"
          style={{ color: 'oklch(0.75 0.12 75 / 0.8)', letterSpacing: '0.2em' }}
        >
          Scroll
        </span>
        <button onClick={scrollToNext} className="animate-chevron-bounce" aria-label="Scroll down">
          <ChevronDown
            className="w-6 h-6"
            style={{ color: 'oklch(0.75 0.12 75)' }}
          />
        </button>
      </div>
    </section>
  );
}
