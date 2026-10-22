import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';

import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import Reveal from '../components/Reveal.jsx';
import CallToAction from '../components/CallToAction.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

import { services } from '../data/services.js';

export default function Specialties() {
  usePageMeta(
    'Neurosurgical Specialties',
    'Educational overview of neurosurgical areas of care including brain tumours, head injuries, spine disorders, herniated discs, spinal cord conditions and hydrocephalus.'
  );

  return (
    <>
      <PageHeader
        eyebrow="Specialties"
        title="Neurosurgical Specialties"
        description="Common areas of brain and spine care, explained in plain language. Each card describes a general field of neurosurgery for educational purposes."
      />

      <section className="container-page py-14 lg:py-20" aria-label="Specialty areas">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 0.07} className="h-full">
              <ServiceCard service={service} to="/contact" index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex items-start gap-4 rounded-2xl border border-medical-100 bg-medical-50 p-6">
            <Info className="mt-1 h-5 w-5 shrink-0 text-medical" aria-hidden="true" />
            <div>
              <h2 className="text-lg font-extrabold text-navy">About these categories</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/85">
                These cards describe general neurosurgical fields, not a verified list of procedures
                personally offered by Dr. Zadran. Please confirm the clinic's actual services
                before presenting or relying on them as available treatments.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link to="/treatments" className="btn-primary">
            View Treatments and Procedures
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link to="/patient-information" className="btn-secondary">
            Preparing for your appointment
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-navy-100 bg-surface py-16 lg:py-20" aria-labelledby="when-heading">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              eyebrow="Guidance"
              title="When should you seek specialist advice?"
              description="A consultation is a review of your symptoms — it does not automatically mean surgery is planned."
              id="when-heading"
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Routine referral',
                text: 'Persistent back, neck or limb symptoms that have not improved with initial treatment, or a finding reported on an MRI or CT scan.',
              },
              {
                title: 'Urgent review',
                text: 'Progressive weakness, worsening numbness, balance problems, new bladder or bowel changes, or symptoms that are steadily deteriorating.',
              },
              {
                title: 'Emergency care',
                text: 'Sudden weakness, new speech difficulty, a seizure, loss of consciousness, a severe sudden headache, or a serious head injury.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="h-full">
                <div className="card h-full p-6">
                  <span className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-teal-800">
                    {index === 0 ? 'Routine' : index === 1 ? 'Urgent' : 'Emergency'}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
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
