import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CalendarDays } from 'lucide-react';
import SafeImage from './SafeImage.jsx';

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

export const formatDateShort = formatDate;

/**
 * Article preview card used on the Blog page and in related-article lists.
 */
export default function BlogCard({ article }) {
  return (
    <article
      className="group card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
    >
      <SafeImage
        className="h-44 w-full"
        src={article.image}
        alt={`Illustrative artwork for the article “${article.title}”`}
        imgClassName="transition-transform duration-500 group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
          <span className="rounded-full bg-teal-100 px-3 py-1 font-bold uppercase tracking-wide text-teal-800">
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {formatDate(article.date)}
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readingTime}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-extrabold text-navy group-hover:text-medical">
          <Link to={`/blog/${article.slug}`} className="focus-visible:outline-none">
            {article.title}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{article.summary}</p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-navy-100 pt-4">
          <span className="text-xs text-muted">By {article.author}</span>
          <Link
            to={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-medical hover:text-medical-700"
            aria-label={`Read “${article.title}”`}
          >
            Read article
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
