import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  ClipboardList,
  ListChecks,
  MessageSquareText,
  PackageCheck,
} from 'lucide-react';

import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Reveal from '../components/Reveal.jsx';
import CallToAction from '../components/CallToAction.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

const stages = [
  {
    id: 'before',
    icon: ClipboardList,
    title: 'Before Your Appointment',
    items: [
      'Prepare a list of your symptoms and when they began.',
      'Bring previous MRI, CT, X-ray, and other relevant reports — plus the images themselves if you have them on CD or USB.',
      'Bring your current medication list, including doses and how often you take them.',
      'Bring previous medical records and surgical history, where relevant.',
      'Prepare questions about diagnosis and treatment.',
    ],
  },
  {
    id: 'during',
    icon: MessageSquareText,
    title: 'During Your Consultation',
    items: [
      'Explain your symptoms and medical history clearly, including what has changed over time.',
      'Ask about recommended investigations and why they are being suggested.',
      'Discuss potential treatment options and their risks.',
      'Ask about recovery, follow-up, and expected costs.',
      'Ask what happens if you decide to wait before making a decision.',
    ],
  },
  {
    id: 'after',
    icon: PackageCheck,
    title: 'After Your Consultation',
    items: [
      'Follow the treatment plan provided by your clinician.',
      'Attend recommended follow-up visits.',
      'Seek medical advice if symptoms worsen.',
      'Keep your reports and scan images together so they are easy to bring next time.',
      'Contact the clinic if you have questions about instructions you were given.',
    ],
  },
];

export default function PatientInformation() {
  usePageMeta(
    'Patient Information',
    'Practical checklist to help you prepare for a brain or spine consultation: what to bring, what to ask, and what to do afterwards.'
  );

  return (
    <>
      <PageHeader
        eyebrow="Patient Information"
        title="Preparing for your consultation"
        description="A short checklist to help you make the most of your appointment time and leave with clear next steps."
      />

      {/* Emergency notice ------------------------------------------- */}
      <section className="container-page pt-10" aria-labelledby="emergency-notice-heading">
        <Reveal>
          <div
            className="flex flex-col gap-5 rounded-2xl border border-red-300 bg-red-50 p-6 sm:flex-row sm:items-start sm:p-7"
            role="alert"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-red-600 text-white">
              <AlertTriangle className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 id="emergency-notice-heading" className="text-xl font-extrabold text-red-800">
                Emergency notice
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-red-900 sm:text-base">
                Sudden weakness, new speech difficulties, seizures, loss of consciousness, or a
                severe sudden headache may require immediate emergency care. Go to the nearest
                emergency department or call for emergency medical help straight away — do not wait
                for a clinic appointment.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Stages ------------------------------------------------------ */}
      <section className="container-page py-14 lg:py-20" aria-label="Consultation checklist">
        <div className="grid gap-6 lg:grid-cols-3">
          {stages.map((stage, index) => {
            const Glyph = stage.icon;
            return (
              <Reveal key={stage.id} delay={index * 0.1} className="h-full">
                <article className="card flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-medical text-white">
                      <Glyph className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-medical">
                        Step {index + 1}
                      </p>
                      <h2 className="text-lg font-extrabold text-navy">{stage.title}</h2>
                    </div>
                  </div>

                  <ul className="mt-6 flex-1 space-y-4">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink/85">
                        <ListChecks className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Questions to ask -------------------------------------------- */}
      <section className="border-y border-navy-100 bg-surface py-16 lg:py-24" aria-labelledby="questions-heading">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionTitle
              align="left"
              eyebrow="Bring these with you"
              title="Questions worth writing down"
              description="Patients often find it helpful to note questions in advance — consultations move quickly and it is easy to forget something."
              id="questions-heading"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Request an Appointment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/patient-information#checklist" className="btn-secondary">
                See what to bring
              </Link>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  'What is the most likely cause of my symptoms?',
                  'Which investigations do I need, and what will they show?',
                  'What are my treatment options — including waiting or non-surgical care?',
                  'What are the benefits and risks of each option?',
                  'What is the expected recovery, and what follow-up is planned?',
                  'What should I do if my symptoms get worse before the next visit?',
                  'What are the expected costs and how many visits are involved?',
                ].map((question, index) => (
                  <li
                    key={question}
                    className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card"
                  >
                    <span className="font-display text-sm font-extrabold text-medical">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-navy sm:text-base">
                      {question}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What to bring (anchor target) -------------------------------- */}
      <section id="checklist" className="container-page py-16 lg:py-24" aria-labelledby="bring-heading">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="card h-full p-6 sm:p-8">
              <h2 id="bring-heading" className="text-2xl font-extrabold text-navy">
                What to bring
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  'Photo identification and any referral letter.',
                  'A written list of symptoms and their timeline.',
                  'All previous MRI, CT and X-ray reports and images.',
                  'A current medication list with doses.',
                  'Relevant medical and surgical history documents.',
                  'Your list of questions, and a companion if you would like support.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/85">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card h-full p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold text-navy">Helpful to know</h2>
              <ul className="mt-6 space-y-3">
                {[
                  'A neurosurgical consultation does not mean an operation is planned.',
                  'You may ask for an explanation of any term used during the appointment.',
                  'You can bring someone with you to take notes.',
                  'Ask for written instructions if anything is unclear.',
                  'Scan images are often needed in addition to the written report.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/85">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-medical" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pb-16 lg:pb-24">
        <CallToAction
          title="Have your questions ready?"
          text="Send an appointment request or call the clinic — the team at Rifah Medical Complex will confirm what to bring for your visit."
        />
      </div>
    </>
  );
}
