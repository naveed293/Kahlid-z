import { Link } from 'react-router-dom';
import { Phone, MapPin, Hospital, ArrowUpRight } from 'lucide-react';
import { doctor } from '../data/doctor.js';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Specialties', to: '/specialties' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'Patient Information', to: '/patient-information' },
];

const resourceLinks = [
  { label: 'Medical Education', to: '/blog' },
  { label: 'FAQs', to: '/faq' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Medical Disclaimer', to: '/medical-disclaimer' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-navy text-navy-100">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Doctor */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal font-display text-base font-extrabold text-navy">
                KZ
              </span>
              <p className="font-display text-lg font-extrabold text-white">Dr. Khalid Khan Zadran</p>
            </div>
            <p className="mt-4 text-sm font-semibold text-teal-300">Consultant Neurosurgeon</p>
            <p className="mt-1 text-sm text-navy-200">Brain and Spine Care</p>
            <p className="mt-4 text-xs leading-relaxed text-navy-300">
              Educational information about neurological and spinal conditions. Content on this site
              does not replace individual medical advice.
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <nav aria-label="Footer quick links">
            <h2 className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-navy-200 hover:text-teal-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Contact */}
          <div>
            <h2 className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-white">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-navy-200">
              <li className="flex items-start gap-2.5">
                <Hospital className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
                <span>{doctor.hospital.name}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
                <span>
                  {doctor.hospital.city}, {doctor.hospital.country}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
                <a href={doctor.contact.phoneHref} className="hover:text-teal-300">
                  {doctor.contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Resources */}
          <nav aria-label="Footer resources">
            <h2 className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-white">
              Resources
            </h2>
            <ul className="mt-5 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-navy-200 hover:text-teal-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {doctor.socialLinks.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-3">
                {doctor.socialLinks.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 rounded-full border border-navy-600 px-3 py-1.5 text-xs font-semibold text-navy-100 hover:border-teal-300 hover:text-teal-300"
                    >
                      {social.label}
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-navy-700 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-navy-300">
            © {year} Dr. Khalid Khan Zadran. All rights reserved.
          </p>
          <p className="text-xs text-navy-300">
            Credentials, affiliations and clinic details are published as supplied and remain subject
            to verification.
          </p>
        </div>
      </div>
    </footer>
  );
}
