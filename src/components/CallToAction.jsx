import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { doctor } from '../data/doctor.js';

/**
 * Reusable closing call-to-action band.
 */
export default function CallToAction({
  title = 'Ready to discuss your symptoms?',
  text = 'Arrange a consultation at Rifah Medical Complex in Kabul, or call the clinic to ask about available appointment times.',
}) {
  return (
    <section className="container-page" aria-labelledby="cta-heading">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-navy px-6 py-12 sm:px-10 sm:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-medical/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-teal/25 blur-3xl"
        />

        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-teal-300">Next step</p>
            <h2 id="cta-heading" className="mt-3 text-balance text-3xl font-extrabold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-200">{text}</p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link to="/contact" className="btn-light">
              Book an Appointment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={doctor.contact.phoneHref}
              className="btn border border-teal-400/60 bg-transparent text-white hover:border-teal-300 hover:bg-teal/15"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {doctor.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
