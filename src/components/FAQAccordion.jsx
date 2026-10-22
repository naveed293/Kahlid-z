import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

/**
 * Accessible accordion: each question is a <button> with aria-expanded and
 * aria-controls; each answer region is labelled by its question button.
 */
export default function FAQAccordion({ items, allowMultiple = false, idPrefix = 'faq' }) {
  const [openIndexes, setOpenIndexes] = useState([0]);
  const reduceMotion = useReducedMotion();

  const toggle = (index) => {
    setOpenIndexes((current) => {
      const isOpen = current.includes(index);
      if (isOpen) return current.filter((i) => i !== index);
      return allowMultiple ? [...current, index] : [index];
    });
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const buttonId = `${idPrefix}-button-${index}`;
        const panelId = `${idPrefix}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={`card overflow-hidden transition-colors duration-300 ${
              isOpen ? 'border-medical/35 shadow-card-hover' : ''
            }`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className={`flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 ${
                  isOpen ? 'text-medical' : 'text-navy hover:text-medical'
                }`}
              >
                <span className="font-display text-base font-bold sm:text-lg">{item.question}</span>
                <span
                  className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                    isOpen ? 'bg-medical text-white' : 'bg-surface text-navy'
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 text-sm leading-relaxed text-muted sm:px-6 sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
