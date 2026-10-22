import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ImageOff, X, ZoomIn } from 'lucide-react';

import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import SafeImage from '../components/SafeImage.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

import { galleryCategories, galleryItems } from '../data/gallery.js';

export default function Gallery() {
  usePageMeta(
    'Gallery',
    'Professional photographs, conference appearances, lectures and clinic facilities associated with Dr. Khalid Khan Zadran — pending approved images.'
  );

  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const reduceMotion = useReducedMotion();

  const visibleItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  /* Close the lightbox on Escape and lock background scroll */
  useEffect(() => {
    if (!lightbox) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setLightbox(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightbox]);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Professional photographs"
        description="Conference appearances, lectures, teaching sessions and clinic facilities. Only authentic, approved images are published here — the items below are placeholders until approved photographs are supplied."
      />

      <section className="container-page py-14 lg:py-20" aria-label="Photo gallery">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter images by category">
          {galleryCategories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-medical text-white shadow-[0_8px_20px_rgba(22,119,200,0.25)]'
                    : 'border border-navy-200 bg-white text-navy hover:border-medical hover:text-medical'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.06} className="h-full">
              <figure className="group card h-full overflow-hidden">
                <button
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="relative block w-full cursor-zoom-in overflow-hidden"
                  aria-label={`Expand image: ${item.caption}`}
                >
                  <SafeImage
                    className="h-56 w-full"
                    src={item.src}
                    alt={item.alt}
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-navy/0 transition group-hover:bg-navy/35" aria-hidden="true" />
                  <span className="absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100">
                    <ZoomIn className="h-8 w-8 text-white" aria-hidden="true" />
                  </span>
                </button>

                <figcaption className="flex items-start justify-between gap-3 p-4">
                  <span className="text-sm font-semibold leading-snug text-navy">{item.caption}</span>
                  {item.placeholder && (
                    <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-800">
                      Placeholder
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {visibleItems.length === 0 && (
          <p className="mt-10 rounded-2xl bg-surface p-8 text-center text-sm text-muted">
            No images in this category yet.
          </p>
        )}

        <Reveal className="mt-12 rounded-2xl border border-navy-100 bg-surface p-6">
          <div className="flex items-start gap-4">
            <ImageOff className="mt-0.5 h-5 w-5 shrink-0 text-medical" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted">
              <span className="font-bold text-navy">Image policy:</span> only authentic,
              authorized photographs may be shown. Identifiable patient photographs, medical
              records and surgical images are never published without documented consent. Images
              are optimised for fast loading and given descriptive alternative text.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.caption}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
              aria-label="Close image viewer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <motion.figure
              className="max-h-full w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-band"
              initial={reduceMotion ? false : { scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <SafeImage
                className="w-full bg-navy"
                imgClassName="max-h-[70vh] w-full object-contain"
                src={lightbox.src}
                alt={lightbox.alt}
              />
              <figcaption className="p-5">
                <p className="text-sm font-bold text-navy">{lightbox.caption}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{lightbox.alt}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
