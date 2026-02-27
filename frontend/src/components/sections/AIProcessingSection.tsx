import { useRef } from 'react';
import { Camera, Cpu, Database, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const steps = [
  {
    icon: Camera,
    step: '01',
    title: 'Capturing Image',
    description: 'High-resolution biometric image captured from the entry camera at 4K resolution.',
    progress: 100,
    status: 'Complete',
    statusColor: 'success',
    detail: '4K · 60fps · HDR',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'Extracting Facial Features',
    description: 'Deep neural network extracts 128-dimensional facial embedding vectors.',
    progress: 87,
    status: 'Processing',
    statusColor: 'gold',
    detail: '128-dim vectors · CNN',
  },
  {
    icon: Database,
    step: '03',
    title: 'Matching Member Database',
    description: 'Embedding compared against registered premium member biometric profiles.',
    progress: 62,
    status: 'Matching',
    statusColor: 'primary',
    detail: '10,240 profiles · <50ms',
  },
];

export default function AIProcessingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptorRef = useRef<HTMLDivElement>(null);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const overallRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(sectionRef, [eyebrowRef, headingRef, descriptorRef, card0Ref, card1Ref, card2Ref, overallRef]);

  const cardRefs = [card0Ref, card1Ref, card2Ref];

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
            <span className="section-eyebrow">Stage 02 — AI Processing</span>
          </div>
          <div ref={headingRef} className="opacity-0-init mb-4">
            <h2 className="section-heading">
              Neural Network
              <br />
              Processing Pipeline
            </h2>
          </div>
          <div ref={descriptorRef} className="opacity-0-init">
            <p className="section-descriptor">
              A three-stage AI pipeline processes the captured biometric data, extracting unique
              facial signatures and matching them against the premium member registry in real time.
            </p>
          </div>
        </div>

        {/* Processing Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isGold = step.statusColor === 'gold';
            const isSuccess = step.statusColor === 'success';
            const isPrimary = step.statusColor === 'primary';

            const statusBg = isSuccess
              ? 'oklch(0.92 0.08 145)'
              : isGold
              ? 'oklch(0.92 0.06 75)'
              : 'oklch(0.93 0.04 240)';
            const statusColor = isSuccess
              ? 'oklch(0.35 0.15 145)'
              : isGold
              ? 'oklch(0.50 0.10 75)'
              : 'oklch(0.32 0.06 240)';
            const progressColor = isSuccess
              ? 'oklch(0.52 0.18 145)'
              : isGold
              ? 'oklch(0.75 0.12 75)'
              : 'oklch(0.32 0.06 240)';

            return (
              <div
                key={i}
                ref={cardRefs[i]}
                className="opacity-0-init premium-card p-7 flex flex-col gap-5 hover:shadow-card-hover transition-shadow duration-300"
              >
                {/* Step number + icon */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'oklch(0.97 0.003 240)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: 'oklch(0.22 0.06 240)' }} />
                  </div>
                  <span
                    className="text-3xl font-display font-light"
                    style={{ color: 'oklch(0.90 0.005 240)', letterSpacing: '-0.02em' }}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: 'oklch(0.22 0.06 240)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.50 0.02 240)' }}>
                    {step.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium" style={{ color: 'oklch(0.45 0.02 240)' }}>
                      Progress
                    </span>
                    <span className="text-xs font-semibold" style={{ color: progressColor }}>
                      {step.progress}%
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: 'oklch(0.93 0.005 240)' }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${step.progress}%`,
                        background: progressColor,
                      }}
                    />
                  </div>
                </div>

                {/* Status + Detail */}
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: statusBg, color: statusColor }}
                  >
                    {isSuccess && <CheckCircle2 className="w-3 h-3" />}
                    {step.status}
                  </span>
                  <span className="text-xs font-mono" style={{ color: 'oklch(0.60 0.02 240)' }}>
                    {step.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall Progress */}
        <div
          ref={overallRef}
          className="opacity-0-init premium-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold" style={{ color: 'oklch(0.22 0.06 240)' }}>
                Overall Pipeline Progress
              </span>
              <span className="text-sm font-bold" style={{ color: 'oklch(0.75 0.12 75)' }}>
                83%
              </span>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: 'oklch(0.93 0.005 240)' }}
            >
              <div
                className="h-full rounded-full animate-progress-fill"
                style={{
                  width: '83%',
                  background: 'linear-gradient(90deg, oklch(0.32 0.06 240), oklch(0.75 0.12 75))',
                }}
              />
            </div>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
            style={{
              background: 'oklch(0.92 0.06 75 / 0.3)',
              color: 'oklch(0.50 0.10 75)',
              border: '1px solid oklch(0.75 0.12 75 / 0.3)',
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'oklch(0.75 0.12 75)' }} />
            Processing Active
          </div>
        </div>
      </div>
    </section>
  );
}
