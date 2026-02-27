import { useRef, useState } from 'react';
import { User, Award, BarChart2, Clock, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function VerificationResultSection() {
  const [accessGranted, setAccessGranted] = useState(true);

  const sectionRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptorRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(sectionRef, [eyebrowRef, headingRef, descriptorRef, cardRef, statusRef]);

  const passenger = {
    name: 'Alexandra Chen',
    id: 'PLM-2024-0847',
    tier: 'Platinum Elite',
    confidence: 98.7,
    verificationTime: '0.34s',
    nationality: 'Singapore',
    memberSince: '2019',
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 lg:py-40"
      style={{ background: 'oklch(0.97 0.003 240)' }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <div ref={eyebrowRef} className="opacity-0-init flex items-center gap-3">
              <div className="gold-divider" />
              <span className="section-eyebrow">Stage 03 — Verification Result</span>
            </div>
            <div ref={headingRef} className="opacity-0-init">
              <h2 className="section-heading">
                Identity Verified
                <br />
                Passenger Profile
              </h2>
            </div>
            <div ref={descriptorRef} className="opacity-0-init">
              <p className="section-descriptor">
                The AI engine returns a comprehensive verification result including passenger identity,
                membership tier, biometric confidence score, and processing time — all within milliseconds.
              </p>
            </div>

            {/* Info Grid */}
            <div ref={cardRef} className="opacity-0-init grid grid-cols-2 gap-4 mt-2">
              {[
                { icon: User, label: 'Passenger Name', value: passenger.name },
                { icon: Award, label: 'Membership Tier', value: passenger.tier },
                { icon: BarChart2, label: 'Confidence Score', value: `${passenger.confidence}%` },
                { icon: Clock, label: 'Verification Time', value: passenger.verificationTime },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="premium-card p-4 flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5" style={{ color: 'oklch(0.75 0.12 75)' }} />
                    <span className="text-xs font-medium tracking-wide uppercase" style={{ color: 'oklch(0.55 0.02 240)', letterSpacing: '0.08em' }}>
                      {label}
                    </span>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: 'oklch(0.22 0.06 240)' }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional Details */}
            <div className="flex gap-6 mt-2">
              <div>
                <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'oklch(0.55 0.02 240)' }}>
                  Member ID
                </span>
                <p className="text-sm font-mono font-semibold mt-1" style={{ color: 'oklch(0.22 0.06 240)' }}>
                  {passenger.id}
                </p>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'oklch(0.55 0.02 240)' }}>
                  Member Since
                </span>
                <p className="text-sm font-semibold mt-1" style={{ color: 'oklch(0.22 0.06 240)' }}>
                  {passenger.memberSince}
                </p>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'oklch(0.55 0.02 240)' }}>
                  Nationality
                </span>
                <p className="text-sm font-semibold mt-1" style={{ color: 'oklch(0.22 0.06 240)' }}>
                  {passenger.nationality}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Status Display */}
          <div ref={statusRef} className="opacity-0-init flex flex-col gap-6">
            {/* Large Status Badge */}
            <div
              className="premium-card-elevated p-10 flex flex-col items-center gap-6 text-center"
              style={{
                borderTop: `4px solid ${accessGranted ? 'oklch(0.52 0.18 145)' : 'oklch(0.55 0.22 25)'}`,
              }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: accessGranted ? 'oklch(0.92 0.08 145)' : 'oklch(0.94 0.08 25)',
                  boxShadow: accessGranted
                    ? '0 0 32px oklch(0.52 0.18 145 / 0.25)'
                    : '0 0 32px oklch(0.55 0.22 25 / 0.25)',
                }}
              >
                {accessGranted ? (
                  <CheckCircle2 className="w-10 h-10" style={{ color: 'oklch(0.52 0.18 145)' }} />
                ) : (
                  <XCircle className="w-10 h-10" style={{ color: 'oklch(0.55 0.22 25)' }} />
                )}
              </div>

              <div>
                <div
                  className="text-3xl font-display font-semibold mb-2"
                  style={{
                    color: accessGranted ? 'oklch(0.35 0.15 145)' : 'oklch(0.40 0.18 25)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {accessGranted ? 'Access Granted' : 'Access Denied'}
                </div>
                <p className="text-sm" style={{ color: 'oklch(0.55 0.02 240)' }}>
                  {accessGranted
                    ? 'Passenger identity confirmed. Entry authorized.'
                    : 'Identity could not be verified. Entry refused.'}
                </p>
              </div>

              {/* Confidence Meter */}
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'oklch(0.55 0.02 240)' }}>
                    Biometric Confidence
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: accessGranted ? 'oklch(0.52 0.18 145)' : 'oklch(0.55 0.22 25)' }}
                  >
                    {passenger.confidence}%
                  </span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: 'oklch(0.93 0.005 240)' }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${passenger.confidence}%`,
                      background: accessGranted ? 'oklch(0.52 0.18 145)' : 'oklch(0.55 0.22 25)',
                    }}
                  />
                </div>
              </div>

              {/* Timestamp */}
              <div
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl"
                style={{ background: 'oklch(0.97 0.003 240)' }}
              >
                <span className="text-xs font-medium" style={{ color: 'oklch(0.55 0.02 240)' }}>
                  Verified at
                </span>
                <span className="text-xs font-mono font-semibold" style={{ color: 'oklch(0.22 0.06 240)' }}>
                  {new Date().toLocaleTimeString()} · Gate A12
                </span>
              </div>
            </div>

            {/* Toggle Demo Button */}
            <button
              onClick={() => setAccessGranted(!accessGranted)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border text-sm font-medium transition-all duration-200 hover:shadow-card"
              style={{
                borderColor: 'oklch(0.88 0.008 240)',
                color: 'oklch(0.45 0.03 240)',
                background: 'white',
              }}
            >
              <RefreshCw className="w-4 h-4" />
              Toggle Demo: {accessGranted ? 'Show Denied' : 'Show Granted'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
