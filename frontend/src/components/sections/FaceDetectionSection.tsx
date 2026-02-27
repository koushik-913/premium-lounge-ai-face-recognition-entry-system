import { useRef } from 'react';
import { Camera, Wifi, Activity } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function FaceDetectionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(sectionRef, [eyebrowRef, headingRef, descriptorRef, contentRef]);

  return (
    <section
      id="face-detection"
      ref={sectionRef}
      className="py-32 lg:py-40"
      style={{ background: 'oklch(0.97 0.003 240)' }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <div ref={eyebrowRef} className="opacity-0-init flex items-center gap-3">
              <div className="gold-divider" />
              <span className="section-eyebrow">Stage 01 — Face Detection</span>
            </div>

            {/* Heading */}
            <div ref={headingRef} className="opacity-0-init">
              <h2 className="section-heading">
                Intelligent Camera
                <br />
                Face Detection
              </h2>
            </div>

            {/* Descriptor */}
            <div ref={descriptorRef} className="opacity-0-init">
              <p className="section-descriptor">
                Our advanced camera system continuously monitors the entry zone, detecting and isolating
                facial features in real time. The system identifies passengers within milliseconds,
                initiating the verification sequence automatically.
              </p>
            </div>

            {/* Feature List */}
            <div className="flex flex-col gap-3 mt-2">
              {[
                'Real-time facial landmark detection',
                'Multi-angle recognition capability',
                'Low-light performance optimized',
                'Anti-spoofing liveness detection',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'oklch(0.75 0.12 75)' }}
                  />
                  <span className="text-sm" style={{ color: 'oklch(0.45 0.02 240)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Camera Viewfinder */}
          <div ref={contentRef} className="opacity-0-init">
            <div className="premium-card-elevated overflow-hidden">
              {/* Camera Header */}
              <div
                className="flex items-center justify-between px-5 py-3 border-b"
                style={{
                  background: 'oklch(0.22 0.06 240)',
                  borderColor: 'oklch(0.30 0.06 240)',
                }}
              >
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4" style={{ color: 'oklch(0.75 0.12 75)' }} />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: 'oklch(0.75 0.12 75)', letterSpacing: '0.15em' }}
                  >
                    Gate Camera — Terminal A
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-3.5 h-3.5" style={{ color: 'oklch(0.52 0.18 145)' }} />
                  <span className="text-xs" style={{ color: 'oklch(0.52 0.18 145)' }}>
                    LIVE
                  </span>
                  <span
                    className="w-2 h-2 rounded-full bg-success animate-pulse"
                  />
                </div>
              </div>

              {/* Camera Feed */}
              <div
                className="relative aspect-video"
                style={{ background: 'oklch(0.12 0.03 240)' }}
              >
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(oklch(0.75 0.12 75 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.12 75 / 0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Scanning line */}
                <div
                  className="absolute left-0 right-0 h-0.5 animate-scan-line"
                  style={{
                    background: 'linear-gradient(90deg, transparent, oklch(0.75 0.12 75), transparent)',
                    boxShadow: '0 0 12px oklch(0.75 0.12 75 / 0.6)',
                  }}
                />

                {/* Face detection frame */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 h-48">
                    {/* Corner brackets */}
                    {[
                      'top-0 left-0 border-t-2 border-l-2',
                      'top-0 right-0 border-t-2 border-r-2',
                      'bottom-0 left-0 border-b-2 border-l-2',
                      'bottom-0 right-0 border-b-2 border-r-2',
                    ].map((cls, i) => (
                      <div
                        key={i}
                        className={`absolute w-6 h-6 ${cls}`}
                        style={{ borderColor: 'oklch(0.75 0.12 75)' }}
                      />
                    ))}

                    {/* Center dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-3 h-3 rounded-full animate-pulse-border"
                        style={{ background: 'oklch(0.75 0.12 75 / 0.6)' }}
                      />
                    </div>

                    {/* Horizontal scan guides */}
                    <div
                      className="absolute top-1/3 left-0 right-0 h-px opacity-30"
                      style={{ background: 'oklch(0.75 0.12 75)' }}
                    />
                    <div
                      className="absolute top-2/3 left-0 right-0 h-px opacity-30"
                      style={{ background: 'oklch(0.75 0.12 75)' }}
                    />
                  </div>
                </div>

                {/* Status overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: 'oklch(0.75 0.12 75 / 0.15)',
                      border: '1px solid oklch(0.75 0.12 75 / 0.3)',
                      color: 'oklch(0.88 0.08 75)',
                    }}
                  >
                    <Activity className="w-3 h-3" />
                    Detecting Passenger Face
                  </div>
                  <div
                    className="text-xs font-mono"
                    style={{ color: 'oklch(0.65 0.02 240)' }}
                  >
                    4K · 60fps
                  </div>
                </div>
              </div>

              {/* Camera Footer */}
              <div
                className="px-5 py-3 flex items-center justify-between"
                style={{ background: 'oklch(0.18 0.04 240)' }}
              >
                <div className="flex items-center gap-4">
                  {['Brightness: 94%', 'Contrast: 87%', 'Focus: Sharp'].map((stat) => (
                    <span
                      key={stat}
                      className="text-xs"
                      style={{ color: 'oklch(0.55 0.02 240)' }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>
                <span
                  className="text-xs font-mono"
                  style={{ color: 'oklch(0.52 0.18 145)' }}
                >
                  ● REC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
