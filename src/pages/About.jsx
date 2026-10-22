import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Hospital, Stethoscope, Users } from 'lucide-react';

import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import QualificationCard from '../components/QualificationCard.jsx';
import Reveal from '../components/Reveal.jsx';
import SafeImage from '../components/SafeImage.jsx';
import CallToAction from '../components/CallToAction.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

import { doctor } from '../data/doctor.js';
import doctorPhoto from '../assets/images/doctor-photo.webp';
import portraitFallback from '../assets/images/doctor-portrait.svg';

export default function About() {
  usePageMeta(
    'About Doctor',
    'Professional biography, education, qualifications and memberships of Dr. Khalid Khan Zadran, Consultant Neurosurgeon and Brain and Spine Surgeon in Kabul, Afghanistan.'
  );

  return (
    <>
      <PageHeader
        eyebrow="About Doctor"
        title="Meet Dr. Khalid Khan Zadran"
        description={doctor.shortBio}
      />

      {/* Biography ------------------------------------------------- */}
      <section className="container-page py-16 lg:py-24" aria-labelledby="biography-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="overflow-hidden rounded-[1.5rem] border border-navy-100 shadow-card">
                <SafeImage
                  src={doctorPhoto}
                  fallback={portraitFallback}
                  alt="Dr. Khalid Khan Zadran, Consultant Neurosurgeon"
                  lazy={false}
                  width={474}
                  height={474}
                  className="w-full bg-navy"
                  imgClassName="aspect-square object-cover object-top"
                />
              </div>

              <div className="card mt-6 p-6">
                <h2 className="text-lg font-extrabold text-navy">Practice details</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-3">
                    <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-medical" aria-hidden="true" />
                    {doctor.role} — {doctor.secondaryRole}
                  </li>
                  <li className="flex items-start gap-3">
                    <Hospital className="mt-0.5 h-4 w-4 shrink-0 text-medical" aria-hidden="true" />
                    {doctor.hospital.display}
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-medical" aria-hidden="true" />
                    <a href={doctor.contact.phoneHref} className="font-semibold text-medical hover:text-medical-700">
                      {doctor.contact.phoneDisplay}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <SectionTitle
                align="left"
                eyebrow="Biography"
                title="Professional background"
                id="biography-heading"
              />

              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/90">
                {doctor.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm leading-relaxed text-amber-900">
                  <span className="font-bold">Verification note:</span> qualifications,
                  memberships, historical claims and hospital affiliation are presented as supplied
                  in the professional profile. Please verify them with the clinic before relying on
                  them.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Qualifications ------------------------------------------- */}
      <section
        id="qualifications"
        className="scroll-mt-28 border-y border-navy-100 bg-surface py-16 lg:py-24"
        aria-labelledby="qualifications-heading"
      >
        <div className="container-page">
          <Reveal>
            <SectionTitle
              eyebrow="Education"
              title="Qualifications and Professional Affiliations"
              description="The credentials listed in the supplied professional profile, each identified by the kind of credential it represents."
              id="qualifications-heading"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {doctor.qualifications.map((qualification, index) => (
              <Reveal key={qualification.code} delay={index * 0.06} className="h-full">
                <QualificationCard qualification={qualification} />
              </Reveal>
            ))}
          </div>

          {/* Memberships */}
          <Reveal className="mt-16">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-2xl font-extrabold text-navy">Professional Organizations</h3>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
              The following organisations are listed in the supplied profile. No official logos are
              used, and listed affiliation should not be read as a claim of current membership
              status until confirmed with each organisation.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {doctor.memberships.map((membership, index) => (
              <Reveal key={membership.name} delay={index * 0.06}>
                <article className="card flex h-full items-start gap-4 p-5 transition hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal-100 font-display text-sm font-extrabold text-teal-800">
                    {membership.abbr}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-navy">{membership.name}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{membership.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical interests --------------------------------------- */}
      <section className="container-page py-16 lg:py-24" aria-labelledby="interests-heading">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionTitle
              align="left"
              eyebrow="Clinical interests"
              title="Areas of stated professional interest"
              description="The interests described in the supplied profile, which guide the educational content published on this website."
              id="interests-heading"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/specialties" className="btn-primary">
                Explore specialties
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact the clinic
              </Link>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {doctor.clinicalInterests.map((interest, index) => (
                <Reveal key={interest} delay={index * 0.06}>
                  <div className="flex h-full items-start gap-3 rounded-2xl bg-surface p-5">
                    <span className="mt-1 font-display text-sm font-extrabold text-medical">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm font-semibold leading-relaxed text-navy">{interest}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pb-16 lg:pb-24">
        <CallToAction
          title="Questions about Dr. Zadran's background?"
          text="Contact the clinic at Rifah Medical Complex to ask about qualifications, services available and appointment availability."
        />
      </div>
    </>
  );
}
