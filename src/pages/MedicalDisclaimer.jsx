import { AlertTriangle } from 'lucide-react';

import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import CallToAction from '../components/CallToAction.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

const sections = [
  {
    heading: 'Educational purpose only',
    body: 'All content on this website — including specialty descriptions, treatment information, articles and frequently asked questions — is provided for general educational purposes. It is not medical advice and is not tailored to any individual.',
  },
  {
    heading: 'No diagnosis through this website',
    body: 'Nothing here can diagnose your condition. Symptoms such as headache, pain, weakness, numbness or dizziness have many possible causes, and only a qualified clinician who has examined you can advise on what is happening and what to do next.',
  },
  {
    heading: 'No doctor–patient relationship',
    body: 'Using this website, reading its articles, or submitting an appointment request does not create a doctor–patient relationship with Dr. Khalid Khan Zadran or with any clinic mentioned here.',
  },
  {
    heading: 'Services and credentials are subject to verification',
    body: 'Specialty cards describe general fields of neurosurgical care and are not a confirmed list of procedures offered at the clinic. Qualifications, memberships, distinctions and clinic details are published as supplied and remain subject to verification with the relevant institutions before being relied upon.',
  },
  {
    heading: 'Emergencies',
    body: 'This website is not monitored for urgent messages. If you or someone else experiences sudden weakness, new speech difficulty, a seizure, loss of consciousness, a severe sudden headache, or a serious head injury, seek emergency medical care immediately at the nearest emergency department.',
  },
  {
    heading: 'Accuracy and external links',
    body: 'Content is reviewed for accuracy but may not be complete or up to date at all times. Links to external websites are provided for convenience; we are not responsible for their content or privacy practices.',
  },
];

export default function MedicalDisclaimer() {
  usePageMeta(
    'Medical Disclaimer',
    'Important information about the educational nature of this website, its limits, and when to seek emergency medical care.'
  );

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Medical Disclaimer"
        description="Please read this before relying on any information published on this website."
      />

      <section className="container-page max-w-4xl py-14 lg:py-20">
        <Reveal>
          <div
            className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6"
            role="alert"
          >
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-amber-900 sm:text-base">
              <span className="font-bold">This website does not replace consultation with a
              qualified medical professional.</span>{' '}
              Do not delay seeking care because of something you have read here.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-10">
          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.04}>
              <article>
                <h2 className="text-xl font-extrabold text-navy sm:text-2xl">{section.heading}</h2>
                <p className="mt-3 text-base leading-[1.75] text-ink/90">{section.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pb-16 lg:pb-24">
        <CallToAction
          title="Need advice about your own symptoms?"
          text="Only a consultation can answer that. Call the clinic or send an appointment request to be seen at Rifah Medical Complex in Kabul."
        />
      </div>
    </>
  );
}
