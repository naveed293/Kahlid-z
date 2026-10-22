/**
 * Professional profile data for Dr. Khalid Khan Zadran.
 *
 * IMPORTANT: Everything in this file is SUPPLIED information that has not yet
 * been independently verified. Confirm qualifications, memberships, historical
 * claims, hospital affiliation and contact details with the clinic before the
 * website is published.
 */

export const doctor = {
  name: 'Dr. Khalid Khan Zadran',
  shortName: 'Dr. Zadran',
  role: 'Consultant Neurosurgeon',
  secondaryRole: 'Brain and Spine Surgeon',
  specialtyLabel: 'Consultant Neurosurgeon | Brain & Spine Surgery',
  location: 'Kabul, Afghanistan',

  hospital: {
    name: 'Rifah Medical Complex',
    city: 'Kabul',
    country: 'Afghanistan',
    display: 'Rifah Medical Complex, Kabul, Afghanistan',
  },

  contact: {
    phoneDisplay: '+93 78 765 4751',
    phoneHref: 'tel:+93787654751',
  },

  hero: {
    heading: 'Expert Brain and Spine Care in Kabul',
    supporting:
      'Learn about neurosurgical care, brain and spine conditions, and available treatment options. Explore the professional profile of Dr. Khalid Khan Zadran and contact the clinic to inquire about a consultation.',
    primaryCta: { label: 'Book a Consultation', to: '/contact' },
    secondaryCta: { label: 'Explore Services', to: '/specialties' },
  },

  highlights: [
    {
      title: 'Neurosurgical Consultation',
      text: 'Specialist assessment of brain, spine and nerve concerns with a clear discussion of next steps.',
      icon: 'Stethoscope',
    },
    {
      title: 'Brain and Spine Conditions',
      text: 'Educational guidance on a wide range of neurological and spinal disorders and their symptoms.',
      icon: 'Brain',
    },
    {
      title: 'Patient-Centered Care',
      text: 'Explanations in plain language so patients and families can take an informed role in decisions.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Modern Treatment Approaches',
      text: 'Discussion of contemporary investigative and surgical options appropriate to each individual case.',
      icon: 'Activity',
    },
  ],

  shortBio:
    'Dr. Khalid Khan Zadran is a Consultant Neurosurgeon and Brain and Spine Surgeon based in Kabul, Afghanistan. His professional background includes medical training and clinical experience associated with Afghanistan and Pakistan.',

  bio: [
    'Dr. Khalid Khan Zadran is described in his supplied professional profile as a Consultant Neurosurgeon and Brain and Spine Surgeon based in Kabul, Afghanistan. His professional background includes medical training and clinical experience associated with Afghanistan and Pakistan.',
    'His stated areas of professional interest include neurological disorders, brain conditions, spinal diseases, complex neurotrauma, and modern neurosurgical techniques. These interests guide the educational content published on this website, which is intended to help patients and families understand when a specialist opinion may be useful.',
    'The supplied profile lists qualifications including MBBS, MD, RMP, MCPS, and FCPS in Neurosurgery, and describes the reported achievement of being the first Afghan neurosurgeon to obtain FCPS in Neurosurgery from the College of Physicians and Surgeons Pakistan.',
    'Visitors are encouraged to contact the clinic directly to confirm current practice arrangements, the services available, and appointment availability. Information published here is educational and does not replace an individual consultation with a qualified medical professional.',
  ],

  qualifications: [
    {
      code: 'MBBS',
      title: 'Bachelor of Medicine, Bachelor of Surgery',
      type: 'Primary medical qualification',
      note: 'The foundational medical degree required to practise medicine.',
    },
    {
      code: 'MD',
      title: 'Doctor of Medicine',
      type: 'Postgraduate medical qualification',
      note: 'A postgraduate qualification; the exact level and awarding body should be confirmed with the clinic.',
    },
    {
      code: 'RMP',
      title: 'Registered Medical Practitioner',
      type: 'Professional registration',
      note: 'Indicates registration to practise as a medical practitioner.',
    },
    {
      code: 'MCPS',
      title: 'Member of the College of Physicians and Surgeons Pakistan',
      type: 'Postgraduate membership',
      note: 'A postgraduate membership awarded in a clinical specialty.',
    },
    {
      code: 'FCPS — Neurosurgery',
      title: 'Fellow of the College of Physicians and Surgeons Pakistan in Neurosurgery',
      type: 'Specialist surgical qualification',
      note: 'The specialist fellowship in neurosurgery awarded by CPSP.',
    },
  ],

  memberships: [
    {
      name: 'College of Physicians and Surgeons Pakistan (CPSP)',
      abbr: 'CPSP',
      note: 'Postgraduate medical college that awards the FCPS qualification.',
    },
    {
      name: 'American Association of Neurological Surgeons (AANS)',
      abbr: 'AANS',
      note: 'Professional organisation for neurological surgeons.',
    },
    {
      name: 'World Federation of Neurosurgical Societies (WFNS)',
      abbr: 'WFNS',
      note: 'International federation of national neurosurgical societies.',
    },
    {
      name: 'Pakistan Society of Neurosurgeons',
      abbr: 'PSNS',
      note: 'Professional society of neurosurgeons based in Pakistan.',
    },
  ],

  clinicalInterests: [
    'Neurological disorders',
    'Brain conditions and brain tumours',
    'Spinal diseases and degenerative spine conditions',
    'Complex neurotrauma and head injuries',
    'Modern neurosurgical techniques',
  ],

  /** Verified social accounts only — leave empty until accounts are confirmed. */
  socialLinks: [],
};

/** Structured data for search engines (organization/physician schema). */
export const doctorJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: doctor.name,
  medicalSpecialty: 'Neurosurgery',
  description: doctor.shortBio,
  telephone: doctor.contact.phoneDisplay,
  address: {
    '@type': 'PostalAddress',
    addressLocality: doctor.hospital.city,
    addressCountry: doctor.hospital.country,
  },
  worksFor: {
    '@type': 'Hospital',
    name: doctor.hospital.name,
  },
};
