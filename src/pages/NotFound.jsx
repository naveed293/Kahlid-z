import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Compass, Search } from 'lucide-react';

import usePageMeta from '../hooks/usePageMeta.js';
import { navLinks } from '../components/Navbar.jsx';

export default function NotFound() {
  const { pathname } = useLocation();
  usePageMeta('Page not found', 'The page you are looking for could not be found.');

  return (
    <section className="container-page flex flex-col items-center py-24 text-center lg:py-32">
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-medical-50 text-medical">
        <Compass className="h-8 w-8" aria-hidden="true" />
      </span>

      <p className="eyebrow mt-6">Error 404</p>

      <h1 className="mt-4 text-balance text-4xl font-extrabold text-navy sm:text-5xl">
        Page not found
      </h1>

      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
        We couldn't find{' '}
        <code className="rounded bg-surface px-2 py-1 text-sm font-semibold text-navy">{pathname}</code>
        . The address may be mistyped, or the page may have moved.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-primary">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
        <Link to="/contact" className="btn-secondary">
          Contact the clinic
        </Link>
      </div>

      <nav aria-label="Suggested pages" className="mt-14 w-full max-w-3xl">
        <p className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-navy">
          <Search className="h-4 w-4 text-medical" aria-hidden="true" />
          Try one of these pages
        </p>
        <ul className="grid gap-4 sm:grid-cols-3">
          {navLinks.slice(1).map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="card block h-full p-5 text-left transition hover:-translate-y-1 hover:border-medical/40 hover:shadow-card-hover"
              >
                <span className="text-sm font-bold text-navy">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
