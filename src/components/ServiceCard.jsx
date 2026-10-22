import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Icon from './Icon.jsx';

/**
 * Service card used on the Home and Specialties pages.
 * `to` decides where "Learn More" points (defaults to the treatment page).
 */
export default function ServiceCard({
  service,
  to = `/specialties#${service.slug}`,
  compact = false,
  index = 0,
}) {
  return (
    <article
      id={service.slug}
      className="group card relative flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-medical/40 hover:shadow-card-hover"
    >
      <span className="absolute right-5 top-5 text-xs font-bold text-navy-100">
        {String(index + 1).padStart(2, '0')}
      </span>

      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-medical-50 text-medical transition-colors duration-300 group-hover:bg-medical group-hover:text-white">
        <Icon name={service.icon} className="h-7 w-7" />
      </span>

      <h3 className="mt-5 text-lg font-extrabold text-navy">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>

      {!compact && Array.isArray(service.details) && (
        <ul className="mt-4 space-y-2">
          {service.details.map((detail) => (
            <li key={detail} className="flex gap-2.5 text-sm leading-relaxed text-ink/80">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
              {detail}
            </li>
          ))}
        </ul>
      )}

      <Link
        to={to}
        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-bold text-medical hover:text-medical-700"
        aria-label={`Learn more about ${service.title}`}
      >
        {service.cta || 'Learn More'}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
