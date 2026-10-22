import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert } from 'lucide-react';

import PageHeader from '../components/PageHeader.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import Reveal from '../components/Reveal.jsx';
import CallToAction from '../components/CallToAction.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

import { faqs } from '../data/faqs.js';

export default function FAQ() {
  usePageMeta(
    'Frequently Asked Questions',
    'Short, general answers to common questions about neurosurgery, preparing for an appointment, and contacting Dr. Khalid Khan Zadran in Kabul.'
  );

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="General answers to common questions. They are educational and do not replace individual medical advice."
      />

      <section className="container-page grid gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20" aria-label="Questions and answers">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="card p-6">
              <h2 className="text-lg font-extrabold text-navy">Still have a question?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The clinic can answer questions about appointments, what to bring, and how to
                prepare for your visit.
              </p>
              <Link to="/contact" className="btn-primary mt-5 w-full">
                Contact the clinic
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-red-900">
                In an emergency — sudden weakness, speech difficulty, seizure, loss of consciousness
                or a severe sudden headache — go to the nearest emergency department immediately.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.08}>
            <FAQAccordion items={faqs} idPrefix="faq-page" />
          </Reveal>
        </div>
      </section>

      <div className="pb-16 lg:pb-24">
        <CallToAction />
      </div>
    </>
  );
}
