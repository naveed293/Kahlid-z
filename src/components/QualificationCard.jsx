import { BadgeCheck } from 'lucide-react';

/**
 * Single qualification card.
 * `type` makes clear what kind of credential it is, so that not every
 * entry is presented as a specialist qualification.
 */
export default function QualificationCard({ qualification }) {
  return (
    <article className="card flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-extrabold text-navy">{qualification.code}</h3>
        <BadgeCheck className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
      </div>

      <p className="mt-2 text-sm font-semibold leading-snug text-medical">{qualification.title}</p>

      <p className="mt-3 rounded-lg bg-surface px-3 py-2 text-xs font-bold uppercase tracking-wide text-muted">
        {qualification.type}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted">{qualification.note}</p>
    </article>
  );
}
