import { useRef } from 'react';
import { CheckCircle2, DoorOpen, Clock, Hash, MapPin, FileText } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AccessAuthorizationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptorRef = useRef<HTMLDivElement>(null);
  const checkRef = useRef<HTMLDivElement>(null);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(sectionRef, [eyebrowRef, headingRef, descriptorRef, checkRef, card0Ref, card1Ref, card2Ref, logRef]);

  const cardRefs = [card0Ref, card1Ref, card2Ref];

  const gateInfo = [
    { icon: DoorOpen, label: 'Gate', value: 'A12 — Terminal 1' },
    { icon: Clock, label: 'Entry Time', value: new Date().toLocaleTimeString() },
    { icon: MapPin, label: 'Lounge', value: 'Premium Lounge — Level 3' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 lg:py-40"
      style={{ background: 'white' }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div ref={eyebrowRef} className="opacity-0-init flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="section-eyebrow">Stage 04 — Access Authorization</span>
          </div>
          <div ref={headingRef} className="opacity-0-init mb-4">
            <h2 className="section-heading">
              Access Authorized
              <br />
              Welcome to Premium Lounge
            </h2>
          </div>
          <div ref={descriptorRef} className="opacity-0-init">
            <p className="section-descriptor">
              Verification complete. The gate system receives the authorization signal and grants
              entry. All access events are logged immutably for security audit and compliance.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Confirmation */}
          <div className="lg:col-span-2 flex flex-col items-center text-center gap-8">
            {/* Animated Checkmark */}
            <div
              ref={checkRef}
              className="opacity-0-init w-32 h-32 rounded-full flex items-center justify-center"
              style={{
                background: 'oklch(0.92 0.08 145)',
                boxShadow: '0 0 48px oklch(0.52 0.18 145 / 0.3), 0 0 96px oklch(0.52 0.18 145 / 0.1)',
              }}
            >
              <CheckCircle2
                className="w-16 h-16"
                style={{ color: 'oklch(0.52 0.18 145)' }}
              />
            </div>

            {/* Confirmation Message */}
            <div>
              <h3
                className="text-2xl font-display font-semibold mb-3"
                style={{ color: 'oklch(0.22 0.06 240)', letterSpacing: '-0.01em' }}
              >
                Access Authorized
              </h3>
              <p
                className="text-base font-light leading-relaxed"
                style={{ color: 'oklch(0.45 0.02 240)' }}
              >
                Welcome to Premium Lounge.
                <br />
                Enjoy your exclusive experience.
              </p>
            </div>

            {/* Gold Divider */}
            <div className="gold-divider-wide w-24" />

            {/* Passenger Summary */}
            <div
              className="premium-card w-full p-5 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: 'oklch(0.22 0.06 240)', color: 'white' }}
                >
                  AC
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'oklch(0.22 0.06 240)' }}>
                    Alexandra Chen
                  </p>
                  <p className="text-xs" style={{ color: 'oklch(0.75 0.12 75)' }}>
                    Platinum Elite Member
                  </p>
                </div>
              </div>
              <div
                className="text-xs font-mono px-3 py-2 rounded-lg"
                style={{ background: 'oklch(0.97 0.003 240)', color: 'oklch(0.45 0.02 240)' }}
              >
                PLM-2024-0847 · Confidence: 98.7%
              </div>
            </div>
          </div>

          {/* Right: Gate Info + Log */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Gate Status Cards */}
            {gateInfo.map(({ icon: Icon, label, value }, i) => (
              <div
                key={i}
                ref={cardRefs[i]}
                className="opacity-0-init premium-card p-5 flex items-center gap-5"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'oklch(0.92 0.06 75 / 0.3)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'oklch(0.55 0.10 75)' }} />
                </div>
                <div>
                  <p
                    className="text-xs font-medium uppercase tracking-wide mb-1"
                    style={{ color: 'oklch(0.55 0.02 240)', letterSpacing: '0.1em' }}
                  >
                    {label}
                  </p>
                  <p className="text-base font-semibold" style={{ color: 'oklch(0.22 0.06 240)' }}>
                    {value}
                  </p>
                </div>
                <div className="ml-auto">
                  <span
                    className="w-2.5 h-2.5 rounded-full block"
                    style={{ background: 'oklch(0.52 0.18 145)' }}
                  />
                </div>
              </div>
            ))}

            {/* Entry Logged Badge */}
            <div
              ref={logRef}
              className="opacity-0-init premium-card p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-4 h-4" style={{ color: 'oklch(0.75 0.12 75)' }} />
                <span className="text-sm font-semibold" style={{ color: 'oklch(0.22 0.06 240)' }}>
                  Entry Logged
                </span>
                <span
                  className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'oklch(0.92 0.08 145)', color: 'oklch(0.35 0.15 145)' }}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  Recorded
                </span>
              </div>
              <div
                className="rounded-xl p-4 font-mono text-xs leading-relaxed"
                style={{ background: 'oklch(0.97 0.003 240)', color: 'oklch(0.45 0.02 240)' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Hash className="w-3 h-3" style={{ color: 'oklch(0.75 0.12 75)' }} />
                  <span style={{ color: 'oklch(0.75 0.12 75)' }}>LOG-{Date.now().toString().slice(-8)}</span>
                </div>
                <div>Passenger: Alexandra Chen (PLM-2024-0847)</div>
                <div>Tier: Platinum Elite · Gate: A12</div>
                <div>Confidence: 98.7% · Time: {new Date().toLocaleTimeString()}</div>
                <div>Result: ACCESS_GRANTED · Status: LOGGED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
