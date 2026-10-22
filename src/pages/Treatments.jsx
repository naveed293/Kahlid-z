import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Search, Stethoscope, Syringe, ClipboardCheck } from 'lucide-react';

import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import CallToAction from '../components/CallToAction.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

import { treatmentCategories, treatmentDisclaimer } from '../data/treatments.js';

const detailRows = [
  { key: 'condition', label: 'Condition', icon: Stethoscope },
  { key: 'symptoms', label: 'Common symptoms', icon: Search },
  { key: 'investigations', label: 'Possible investigations', icon: Syringe },
  { key: 'treatment', label: 'General treatment approaches', icon: ClipboardCheck },
];

export default function Treatments() {
  usePageMeta(
    'Treatments and Procedures',
    'General educational information about brain and spine procedures, investigations and consultation pathways, including why individualised medical assessment matters.'
  );

  return (
    <>
      <PageHeader
        eyebrow="Treatments"
        title="Treatments and Procedures"
        description="An educational overview of how brain-related and spine-related conditions are assessed and managed, together with what happens during a consultation."
      >
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">
            Request a Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link to="/patient-information" className="btn-secondary">
            Prepare for your visit
          </Link>
        </div>
      </PageHeader>

      {/* Disclaimer ------------------------------------------------ */}
      <section className="container-page pt-10" aria-label="Medical disclaimer">
        <Reveal>
          <div className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-amber-900">
              <span className="font-bold">Medical disclaimer.</span> {treatmentDisclaimer}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Categories ------------------------------------------------ */}
      <div className="container-page space-y-16 py-14 lg:space-y-24 lg:py-20">
        {treatmentCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-28"
            aria-labelledby={`category-${category.id}`}
          >
            <Reveal>
              <div className="flex flex-col gap-6 border-b border-navy-100 pb-8 sm:flex-row sm:items-start">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy text-white">
                  <Icon name={category.icon} className="h-7 w-7" />
                </span>
                <div>
                  <p className="eyebrow">{`0${categoryIndex + 1} — Category`}</p>
                  <h2
                    id={`category-${category.id}`}
                    className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl"
                  >
                    {category.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                    {category.intro}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {category.items.map((item, itemIndex) => (
                <Reveal key={item.title} delay={(itemIndex % 2) * 0.08} className="h-full">
                  <article className="card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-extrabold text-teal">
                        {String(itemIndex + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg font-extrabold text-navy">{item.title}</h3>
                    </div>

                    <dl className="mt-5 space-y-4">
                      {detailRows.map((row) => {
                        const Glyph = row.icon;
                        return (
                          <div key={row.key} className="rounded-xl bg-surface px-4 py-3.5">
                            <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-medical">
                              <Glyph className="h-3.5 w-3.5" aria-hidden="true" />
                              {row.label}
                            </dt>
                            <dd className="mt-1.5 text-sm leading-relaxed text-ink/85">
                              {item[row.key]}
                            </dd>
                          </div>
                        );
                      })}
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Why individual assessment matters -------------------------- */}
      <section className="bg-surface py-16 lg:py-24" aria-labelledby="individual-heading">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              eyebrow="Individualised assessment"
              title="Why your own assessment matters"
              description="The same symptom can have very different causes — and the right next step depends on your history, examination and imaging together."
              id="individual-heading"
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Symptoms vary between people',
                text: 'Headache, pain, numbness or weakness can arise from many different causes. A consultation exists to work out which one applies to you.',
              },
              {
                title: 'Scans need clinical context',
                text: 'Imaging frequently shows age-related changes with no symptoms. Results are only meaningful alongside your examination.',
              },
              {
                title: 'Options, risks and recovery differ',
                text: 'Any proposed treatment should be explained with its alternatives, risks, expected recovery and follow-up — and you should have time to ask questions.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="h-full">
                <div className="card h-full p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-medical-50 font-display text-sm font-extrabold text-medical">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Book a Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/faq" className="btn-secondary">
              Frequently asked questions
            </Link>
          </Reveal>
        </div>
      </section>

      <div className="py-16 lg:py-24">
        <CallToAction />
      </div>
    </>
  );
}
