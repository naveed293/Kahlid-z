import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ChevronRight, ShieldAlert } from 'lucide-react';

import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Reveal from '../components/Reveal.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import BlogCard from '../components/BlogCard.jsx';
import CallToAction from '../components/CallToAction.jsx';
import Icon from '../components/Icon.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

import { doctor } from '../data/doctor.js';
import { services } from '../data/services.js';
import { faqs } from '../data/faqs.js';
import { articles } from '../data/articles.js';

const featuredServices = services.slice(0, 4);
const featuredArticles = articles.filter((article) => article.featured).slice(0, 3);
const featuredFaqs = faqs.slice(0, 5);

export default function Home() {
  usePageMeta(
    'Expert Brain and Spine Care in Kabul',
    'Educational information about neurosurgical care, brain and spine conditions and treatment options, from the practice of Dr. Khalid Khan Zadran, Consultant Neurosurgeon at Rifah Medical Complex, Kabul.'
  );

  return (
    <>
      <Hero />

      {/* ---------------------------------------------------------- */}
      {/* Highlights                                                  */}
      {/* ---------------------------------------------------------- */}
      <section className="border-y border-navy-100 bg-surface" aria-label="Key highlights">
        <div className="container-page grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
          {doctor.highlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={index * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-2xl bg-white p-5 shadow-card">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-medical-50 text-medical">
                  <Icon name={highlight.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-base font-extrabold text-navy">{highlight.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{highlight.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* About preview                                               */}
      {/* ---------------------------------------------------------- */}
      <section className="container-page py-16 lg:py-24" aria-labelledby="about-preview-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionTitle
              align="left"
              eyebrow="About the doctor"
              title="Meet Dr. Khalid Khan Zadran"
              description={doctor.shortBio}
              id="about-preview-heading"
            />

            <ul className="mt-8 space-y-3">
              {doctor.clinicalInterests.slice(0, 4).map((interest) => (
                <li key={interest} className="flex items-start gap-3 text-sm text-ink sm:text-base">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                  {interest}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/about" className="btn-primary">
                Read Full Biography
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/about#qualifications" className="btn-secondary">
                Qualifications &amp; Affiliations
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card p-6 sm:p-8">
              <p className="eyebrow">Professional profile</p>

              <dl className="mt-6 divide-y divide-navy-100">
                {[
                  { label: 'Specialty', value: `${doctor.role} — Brain & Spine Surgery` },
                  { label: 'Hospital', value: doctor.hospital.name },
                  { label: 'Location', value: `${doctor.hospital.city}, ${doctor.hospital.country}` },
                  {
                    label: 'Key qualification',
                    value: 'FCPS in Neurosurgery (CPSP) — as supplied',
                  },
                ].map((row) => (
                  <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-4">
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                      {row.label}
                    </dt>
                    <dd className="text-sm font-semibold text-navy sm:col-span-2">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="rounded-xl bg-surface px-4 py-3 text-xs leading-relaxed text-muted">
                Qualifications, memberships and clinic details are published as supplied and should
                be confirmed with the clinic before they are relied upon.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Specialties preview                                         */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-surface py-16 lg:py-24" aria-labelledby="specialties-preview-heading">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              eyebrow="Neurosurgical specialties"
              title="Areas of brain and spine care"
              description="General educational information about common fields of neurosurgical practice. These describe the field in general — not a confirmed list of procedures offered at the clinic."
              id="specialties-preview-heading"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.07} className="h-full">
                <ServiceCard service={service} compact index={index} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex justify-center">
            <Link to="/specialties" className="btn-secondary">
              View all specialties
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Emergency notice                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="container-page pt-16 lg:pt-24" aria-labelledby="emergency-heading">
        <Reveal>
          <div className="flex flex-col gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 sm:flex-row sm:items-start sm:p-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-red-600 text-white">
              <ShieldAlert className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 id="emergency-heading" className="text-xl font-extrabold text-red-800">
                Medical emergencies need urgent care
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-red-900 sm:text-base">
                Sudden weakness, new speech difficulties, seizures, loss of consciousness, or a
                severe sudden headache may require immediate emergency care. Go to the nearest
                emergency department or call for emergency medical help — do not wait for a clinic
                appointment.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* FAQ preview                                                 */}
      {/* ---------------------------------------------------------- */}
      <section className="container-page py-16 lg:py-24" aria-labelledby="faq-preview-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionTitle
              align="left"
              eyebrow="Frequently asked"
              title="Questions patients often ask"
              description="Short, general answers. Individual medical questions should be discussed with a qualified clinician."
              id="faq-preview-heading"
            />
            <Link
              to="/faq"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-medical hover:text-medical-700"
            >
              See all questions
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <FAQAccordion items={featuredFaqs} idPrefix="home-faq" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Education preview                                           */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-surface py-16 lg:py-24" aria-labelledby="education-preview-heading">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              eyebrow="Medical education"
              title="Patient-friendly reading"
              description="Plain-language articles about common brain and spine topics. Articles are for general education and are pending review by a qualified medical professional."
              id="education-preview-heading"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.08} className="h-full">
                <BlogCard article={article} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex justify-center">
            <Link to="/blog" className="btn-secondary">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Browse all articles
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
