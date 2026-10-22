import { Clock, Hospital, MapPin, Phone, ShieldCheck } from 'lucide-react';

import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import AppointmentForm from '../components/AppointmentForm.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import Reveal from '../components/Reveal.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

import { doctor } from '../data/doctor.js';
import { faqs } from '../data/faqs.js';

const contactCards = [
  {
    icon: Phone,
    label: 'Phone',
    value: doctor.contact.phoneDisplay,
    href: doctor.contact.phoneHref,
    note: 'Tap to dial. Call to ask about appointment availability.',
  },
  {
    icon: Hospital,
    label: 'Hospital',
    value: doctor.hospital.name,
    note: 'Consultation location as supplied for this website.',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: `${doctor.hospital.city}, ${doctor.hospital.country}`,
    note: 'A map will be added once the exact clinic address is confirmed.',
  },
  {
    icon: Clock,
    label: 'Appointments',
    value: 'By arrangement',
    note: 'Requests are confirmed by phone — no slot is held until the clinic confirms it.',
  },
];

export default function Contact() {
  usePageMeta(
    'Contact & Appointments',
    'Request a consultation with Dr. Khalid Khan Zadran at Rifah Medical Complex, Kabul. Call +93 78 765 4751 or send an appointment request.'
  );

  const contactFaqs = faqs.filter((faq) =>
    ['How can I contact Rifah Medical Complex?', 'How can I confirm appointment availability?'].includes(
      faq.question
    )
  );

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book an appointment"
        description="Send an appointment request or call the clinic directly. A request is not a confirmed appointment — the clinic will contact you to confirm."
      />

      {/* Contact details -------------------------------------------- */}
      <section className="container-page pt-12" aria-label="Clinic contact details">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, index) => {
            const Glyph = card.icon;
            const valueNode = card.href ? (
              <a href={card.href} className="font-display text-lg font-extrabold text-medical hover:text-medical-700">
                {card.value}
              </a>
            ) : (
              <p className="font-display text-lg font-extrabold text-navy">{card.value}</p>
            );

            return (
              <Reveal key={card.label} delay={index * 0.06} className="h-full">
                <div className="card h-full p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-medical-50 text-medical">
                    <Glyph className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {card.label}
                  </p>
                  <div className="mt-1">{valueNode}</div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{card.note}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Form -------------------------------------------------------- */}
      <section className="container-page grid gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20" aria-labelledby="form-heading">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionTitle
              align="left"
              eyebrow="Appointment request"
              title="Send your request"
              description="Fill in the form below with your contact details and a brief reason for the appointment. Please do not include detailed medical records or sensitive health information."
              id="form-heading"
            />
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
            <AppointmentForm />
          </Reveal>
        </div>

        <aside className="lg:col-span-5" aria-label="What happens next">
          <Reveal delay={0.12}>
            <div className="card p-6 sm:p-7">
              <h2 className="text-xl font-extrabold text-navy">What happens next</h2>
              <ol className="mt-6 space-y-5">
                {[
                  {
                    title: 'You send a request',
                    text: 'Your contact details and a short reason are prepared for the clinic.',
                  },
                  {
                    title: 'The clinic calls you back',
                    text: 'They confirm whether an appointment is available and agree a date and time with you.',
                  },
                  {
                    title: 'You attend the consultation',
                    text: 'Bring your reports, scans, medication list and your questions — see Patient Information.',
                  },
                ].map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy font-display text-xs font-extrabold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-7 rounded-xl bg-surface p-4">
                <p className="flex items-start gap-2.5 text-xs leading-relaxed text-muted">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  How your details are handled: contact information submitted through this form is
                  used only to respond to your request, is not sold or shared for marketing, and
                  sensitive medical information is never stored in your browser. See the Privacy
                  Policy for details.
                </p>
              </div>

              <a href={doctor.contact.phoneHref} className="btn-primary mt-6 w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {doctor.contact.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </aside>
      </section>

      {/* Location notice --------------------------------------------- */}
      <section className="border-y border-navy-100 bg-surface py-14" aria-labelledby="location-heading">
        <div className="container-page grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Clinic location</p>
            <h2 id="location-heading" className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
              {doctor.hospital.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {doctor.hospital.city}, {doctor.hospital.country}. Directions and an embedded map
              will be published here once the clinic's exact address and location have been
              confirmed with the hospital.
            </p>
            <a href={doctor.contact.phoneHref} className="btn-secondary mt-6">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call for directions
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-navy-100 bg-gradient-to-br from-navy to-medical p-8 text-white">
              <MapPin className="h-8 w-8 text-teal-300" aria-hidden="true" />
              <p className="mt-4 font-display text-lg font-extrabold">Address not yet confirmed</p>
              <p className="mt-2 text-sm leading-relaxed text-navy-100">
                To avoid publishing an incorrect location, no map embed has been added yet.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs -------------------------------------------------------- */}
      <section className="container-page py-14 lg:py-20" aria-labelledby="contact-faq-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <SectionTitle
              align="left"
              eyebrow="FAQ"
              title="Contact questions"
              id="contact-faq-heading"
            />
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal delay={0.08}>
              <FAQAccordion items={contactFaqs} idPrefix="contact-faq" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
