import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { doctor } from '../data/doctor.js';

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Doctor', to: '/about' },
  { label: 'Specialties', to: '/specialties' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'Patient Information', to: '/patient-information' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef(null);
  const reduceMotion = useReducedMotion();

 /* Close the mobile menu whenever the route changes */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* Track scroll position for the sticky/solid treatment */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll while the mobile menu is open + close on Escape */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClasses = ({ isActive }) =>
    [
      'whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors duration-200',
      isActive ? 'text-medical' : 'text-navy hover:text-medical',
    ].join(' ');

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-navy-100 bg-white/95 shadow-[0_6px_24px_rgba(18,48,74,0.08)] backdrop-blur'
          : 'border-transparent bg-white/80 backdrop-blur'
      }`}
    >
      <nav aria-label="Main" className="container-page">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Brand */}
          <Link to="/" className="group flex items-center gap-3" aria-label="Dr. Khalid Khan Zadran — home">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy font-display text-lg font-extrabold text-white transition-transform duration-300 group-hover:-translate-y-0.5">
              KZ
            </span>
            <span className="flex flex-col leading-tight">
              <span className="whitespace-nowrap font-display text-base font-extrabold text-navy sm:text-lg">
                Dr. Khalid Khan Zadran
              </span>
              <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-medical sm:text-xs">
                Consultant Neurosurgeon
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={doctor.contact.phoneHref}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-navy hover:text-medical xl:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {doctor.contact.phoneDisplay}
            </a>
            <Link to="/contact" className="btn-primary whitespace-nowrap">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book an Appointment
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link to="/contact" className="btn-primary whitespace-nowrap px-4 py-2.5 text-xs sm:text-sm">
              Book an Appointment
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              className="grid h-11 w-11 place-items-center rounded-xl border border-navy-100 text-navy transition hover:border-medical hover:text-medical"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden border-t border-navy-100 bg-white lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between whitespace-nowrap rounded-xl px-4 py-3 text-base font-semibold transition ${
                      isActive ? 'bg-medical-50 text-medical' : 'text-navy hover:bg-surface'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="mt-3 flex flex-col gap-3 border-t border-navy-100 pt-4">
                <a
                  href={doctor.contact.phoneHref}
                  className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 text-sm font-semibold text-navy"
                >
                  <Phone className="h-4 w-4 text-medical" aria-hidden="true" />
                  {doctor.contact.phoneDisplay}
                </a>
                <p className="px-1 text-xs leading-relaxed text-muted">
                  {doctor.hospital.name} · {doctor.hospital.city}, {doctor.hospital.country}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
