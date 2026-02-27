import { useState, useEffect } from 'react';
import { Menu, X, Scan } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Live Entry' },
  { id: 'members', label: 'Member Management' },
  { id: 'logs', label: 'Entry Logs' },
  { id: 'status', label: 'Security & System Status' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-navbar'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      style={{ borderBottom: '1px solid oklch(0.75 0.12 75 / 0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'oklch(0.22 0.06 240)' }}
            >
              <Scan className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: 'oklch(0.22 0.06 240)', letterSpacing: '0.12em' }}
              >
                Premium Lounge
              </span>
              <span
                className="text-[10px] font-medium tracking-[0.2em] uppercase"
                style={{ color: 'oklch(0.75 0.12 75)', letterSpacing: '0.2em' }}
              >
                AI Entry System
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`relative text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-200 pb-1 ${
                    isActive
                      ? 'nav-link-active'
                      : 'hover:opacity-70'
                  }`}
                  style={{
                    color: isActive ? 'oklch(0.22 0.06 240)' : 'oklch(0.45 0.03 240)',
                    letterSpacing: '0.12em',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: 'oklch(0.75 0.12 75)' }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* System Status Indicator */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: 'oklch(0.52 0.18 145)', letterSpacing: '0.1em' }}
            >
              System Online
            </span>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'oklch(0.22 0.06 240)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            borderColor: 'oklch(0.75 0.12 75 / 0.2)',
            background: 'white',
          }}
        >
          <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-200`}
                  style={{
                    color: isActive ? 'oklch(0.22 0.06 240)' : 'oklch(0.45 0.03 240)',
                    background: isActive ? 'oklch(0.92 0.06 75 / 0.3)' : 'transparent',
                    letterSpacing: '0.12em',
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
