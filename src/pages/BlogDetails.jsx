import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, CalendarDays, Clock, User } from 'lucide-react';

import SectionTitle from '../components/SectionTitle.jsx';
import BlogCard from '../components/BlogCard.jsx';
import Reveal from '../components/Reveal.jsx';
import CallToAction from '../components/CallToAction.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

import { getArticleBySlug, getRelatedArticles } from '../data/articles.js';
import { formatDateShort } from '../components/BlogCard.jsx';

export default function BlogDetails() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  usePageMeta(
    article ? article.title : 'Article not found',
    article ? article.summary : 'The requested article could not be found.'
  );

  if (!article) {
    return (
      <section className="container-page py-24 text-center">
        <h1 className="text-3xl font-extrabold text-navy">Article not found</h1>
        <p className="mt-4 text-muted">
          The article you are looking for does not exist or may have been moved.
        </p>
        <Link to="/blog" className="btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to all articles
        </Link>
      </section>
    );
  }

  const related = getRelatedArticles(slug, 3);

  return (
    <>
      {/* Header */}
      <section className="border-b border-navy-100 bg-surface">
        <div className="container-page max-w-4xl py-14 lg:py-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-medical hover:text-medical-700"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="rounded-full bg-teal-100 px-3 py-1 font-bold uppercase tracking-wide text-teal-800">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDateShort(article.date)}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {article.readingTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted">
              <User className="h-3.5 w-3.5" aria-hidden="true" />
              {article.author}
            </span>
          </div>

          <h1 className="mt-5 text-balance text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            {article.title}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{article.summary}</p>
        </div>
      </section>

      {/* Body */}
      <article className="container-page max-w-4xl py-14 lg:py-16">
        <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          <BookOpen className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            <span className="font-bold">General information only.</span> This article is for
            education and does not provide individual medical advice. Review status:{' '}
            <span className="font-bold">{article.reviewStatus}</span>.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {article.sections.map((section, index) => (
            <Reveal key={section.heading} delay={0.03 * index}>
              <section aria-labelledby={`section-${index}`}>
                <h2
                  id={`section-${index}`}
                  className="text-2xl font-extrabold text-navy sm:text-[1.7rem]"
                >
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-base leading-[1.75] text-ink/90"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-navy-100 bg-surface p-6 text-sm leading-relaxed text-muted">
          <span className="font-bold text-navy">About this article:</span> written by{' '}
          {article.author} and published on {formatDateShort(article.date)}. Medical articles are
          reviewed by a qualified medical professional before publication.
        </div>
      </article>

      {/* Related */}
      <section className="border-t border-navy-100 bg-surface py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              eyebrow="Keep reading"
              title="Related articles"
              id="related-heading"
              align="left"
            />
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedArticle, index) => (
              <Reveal key={relatedArticle.slug} delay={index * 0.07} className="h-full">
                <BlogCard article={relatedArticle} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16 lg:py-24">
        <CallToAction />
      </div>
    </>
  );
}
