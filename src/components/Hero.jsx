import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Hospital, ShieldCheck } from 'lucide-react';
import { doctor } from '../data/doctor.js';
import doctorPhoto from '../assets/images/doctor-photo.webp';
import portraitFallback from '../assets/images/doctor-portrait.svg';
import SafeImage from './SafeImage.jsx';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] },
        };

  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="hero-heading">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(22,119,200,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(32,178,170,0.14),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        {/* Copy */}
        <div className="lg:col-span-6 xl:col-span-6">
          <motion.p {...fadeUp(0.05)} className="eyebrow">
            <span className="inline-block h-2 w-2 rounded-full bg-teal" />
            {doctor.specialtyLabel}
          </motion.p>

          <motion.h1
            id="hero-heading"
            {...fadeUp(0.15)}
            className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-6xl"
          >
            {doctor.hero.heading}
          </motion.h1>

          <motion.p {...fadeUp(0.28)} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {doctor.hero.supporting}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap items-center gap-4">
            <Link to={doctor.hero.primaryCta.to} className="btn-primary">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              {doctor.hero.primaryCta.label}
            </Link>
            <Link to={doctor.hero.secondaryCta.to} className="btn-secondary">
              {doctor.hero.secondaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp(0.52)}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-teal" aria-hidden="true" />
              Specialist brain &amp; spine assessment
            </span>
            <span className="inline-flex items-center gap-2">
              <Hospital className="h-4 w-4 text-teal" aria-hidden="true" />
              {doctor.hospital.name}, {doctor.hospital.city}
            </span>
            <a
              href={doctor.contact.phoneHref}
              className="inline-flex items-center gap-2 font-semibold text-medical hover:text-medical-700"
            >
              {doctor.contact.phoneDisplay}
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          className="lg:col-span-6 xl:col-span-6"
          initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-medical/15 via-teal/10 to-transparent blur-xl"
            />

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-medical/15 via-teal/10 to-transparent blur-xl"
              />

              <SafeImage
                src={doctorPhoto}
                fallback={portraitFallback}
                alt="Dr. Khalid Khan Zadran, Consultant Neurosurgeon"
                lazy={false}
                timeoutMs={8000}
                width={474}
                height={474}
                fetchpriority="high"
                className="relative w-full rounded-[1.75rem] border border-navy-100 bg-navy shadow-band"
                imgClassName="aspect-square object-cover object-top"
              />
            </div>

            {/* Floating specialty card */}
            <motion.div
              className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-navy-100 bg-white px-5 py-4 shadow-card-hover sm:block lg:-left-10"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-medical">
                Practising at
              </p>
              <p className="mt-1 font-display text-base font-extrabold text-navy">
                {doctor.hospital.name}
              </p>
              <p className="text-sm text-muted">
                {doctor.hospital.city}, {doctor.hospital.country}
              </p>
            </motion.div>

            <motion.div
              className="absolute -right-3 top-6 rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-card sm:-right-6"
              initial={reduceMotion ? false : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="font-display text-sm font-extrabold text-navy">Brain &amp; Spine</p>
              <p className="text-xs text-muted">Neurosurgery</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
