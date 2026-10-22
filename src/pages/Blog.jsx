import { useMemo, useState } from 'react';
import { BookOpen } from 'lucide-react';

import PageHeader from '../components/PageHeader.jsx';
import BlogCard from '../components/BlogCard.jsx';
import Reveal from '../components/Reveal.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

import { articles } from '../data/articles.js';

export default function Blog() {
  usePageMeta(
    'Medical Education',
    'Plain-language articles about brain tumours, back and neck pain, herniated discs, head injuries, scans and preparing for a neurosurgical consultation.'
  );

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(articles.map((article) => article.category)))],
    []
  );
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleArticles =
    activeCategory === 'All'
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <>
      <PageHeader
        eyebrow="Medical Education"
        title="Articles and patient education"
        description="General, plain-language reading about brain and spine health. Articles are educational only and are pending review by a qualified medical professional before publication."
      />

      <section className="container-page py-14 lg:py-20" aria-label="Article list">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-medical text-white shadow-[0_8px_20px_rgba(22,119,200,0.25)]'
                    : 'border border-navy-200 bg-white text-navy hover:border-medical hover:text-medical'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article, index) => (
            <Reveal key={article.slug} delay={(index % 3) * 0.07} className="h-full">
              <BlogCard article={article} />
            </Reveal>
          ))}
        </div>

        {visibleArticles.length === 0 && (
          <p className="mt-10 rounded-2xl bg-surface p-8 text-center text-sm text-muted">
            No articles in this category yet.
          </p>
        )}

        <Reveal className="mt-12 rounded-2xl border border-medical-100 bg-medical-50 p-6">
          <div className="flex items-start gap-4">
            <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-medical" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-ink/85">
              <span className="font-bold">Editorial note:</span> these articles provide general
              health information and are not a substitute for individual medical advice,
              diagnosis or treatment. They must be reviewed by a qualified medical professional
              before publication and are not attributed to Dr. Zadran without his approval.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
