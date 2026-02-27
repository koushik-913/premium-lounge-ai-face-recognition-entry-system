import { Scan, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'premium-lounge-ai'
  );

  return (
    <footer
      className="border-t"
      style={{
        borderColor: 'oklch(0.75 0.12 75 / 0.2)',
        background: 'oklch(0.22 0.06 240)',
      }}
    >
      {/* Gold accent line */}
      <div
        className="h-0.5"
        style={{
          background: 'linear-gradient(90deg, transparent, oklch(0.75 0.12 75), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'oklch(0.75 0.12 75 / 0.2)', border: '1px solid oklch(0.75 0.12 75 / 0.3)' }}
              >
                <Scan className="w-4 h-4" style={{ color: 'oklch(0.75 0.12 75)' }} />
              </div>
              <div>
                <p
                  className="text-sm font-semibold tracking-widest uppercase"
                  style={{ color: 'white', letterSpacing: '0.12em' }}
                >
                  Premium Lounge AI
                </p>
                <p
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: 'oklch(0.75 0.12 75)', letterSpacing: '0.2em' }}
                >
                  Face Recognition Entry System
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed max-w-xs" style={{ color: 'oklch(0.65 0.02 240)' }}>
              Advanced biometric access control for premium airport lounges.
              Secure, seamless, and intelligent.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            {['Live Entry', 'Member Management', 'Entry Logs', 'Security & System Status'].map((link) => (
              <span
                key={link}
                className="text-xs font-medium tracking-wide"
                style={{ color: 'oklch(0.60 0.02 240)' }}
              >
                {link}
              </span>
            ))}
          </div>

          {/* System Status */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-medium" style={{ color: 'oklch(0.52 0.18 145)' }}>
                All Systems Operational
              </span>
            </div>
            <div className="flex flex-col gap-1">
              {['Camera System', 'AI Engine', 'Member Database'].map((sys) => (
                <div key={sys} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'oklch(0.52 0.18 145)' }} />
                  <span className="text-xs" style={{ color: 'oklch(0.55 0.02 240)' }}>
                    {sys}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'oklch(0.30 0.04 240)' }}
        >
          <p className="text-xs" style={{ color: 'oklch(0.50 0.02 240)' }}>
            © {year} Premium Lounge AI. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-80"
            style={{ color: 'oklch(0.60 0.02 240)' }}
          >
            Built with{' '}
            <Heart
              className="w-3 h-3 fill-current"
              style={{ color: 'oklch(0.75 0.12 75)' }}
            />{' '}
            using{' '}
            <span className="font-semibold" style={{ color: 'oklch(0.75 0.12 75)' }}>
              caffeine.ai
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
