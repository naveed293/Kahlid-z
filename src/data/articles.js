/**
 * Medical education articles.
 *
 * PUBLISHING RULE: articles must be reviewed by a qualified medical
 * professional before publication, and must not be attributed to
 * Dr. Zadran without his explicit approval.
 */

import brainIllustration from '../assets/images/article-brain.svg';
import spineIllustration from '../assets/images/article-spine.svg';
import scanIllustration from '../assets/images/article-scan.svg';
import guideIllustration from '../assets/images/article-guide.svg';

export const articleIllustrations = {
  brain: brainIllustration,
  spine: spineIllustration,
  scan: scanIllustration,
  guide: guideIllustration,
};

export const articles = [
  {
    slug: 'understanding-brain-tumours',
    image: brainIllustration,
    title: 'Understanding Brain Tumours',
    category: 'Brain',
    summary:
      'A plain-language overview of what a brain tumour is, the symptoms people notice, how it is investigated, and why every case is different.',
    author: 'Medical Education Team',
    date: '2026-01-12',
    readingTime: '6 min read',
    reviewStatus: 'Awaiting clinical review',
    featured: true,
    sections: [
      {
        heading: 'What is a brain tumour?',
        paragraphs: [
          'A brain tumour is an abnormal growth of cells within the brain or its surrounding structures. Tumours are described as primary when they begin in the brain, and secondary when they spread from cancer elsewhere in the body. They are further described as benign or malignant, and by the type of tissue they arise from.',
          'The behaviour of a tumour depends on its type, size, location and rate of growth — which is why the same word can mean very different things for different patients.',
        ],
      },
      {
        heading: 'Symptoms people may notice',
        paragraphs: [
          'Symptoms depend on where the growth is pressing. Commonly reported symptoms include headaches that are worse in the morning, new seizures, changes in vision, weakness or clumsiness on one side of the body, difficulty with speech, and changes in memory, mood or personality.',
          'None of these symptoms alone proves a tumour exists — most people with headaches or dizziness do not have one. However, symptoms that are new, persistent, progressive or unusual for you should be assessed by a clinician.',
        ],
      },
      {
        heading: 'How it is investigated',
        paragraphs: [
          'Assessment begins with a medical history and a neurological examination. Imaging is usually the next step: MRI of the brain provides detailed pictures of soft tissue, while CT is often used in urgent situations.',
          'Further tests — including a biopsy in selected cases — may be recommended to establish the exact type of tumour before any treatment decision is made.',
        ],
      },
      {
        heading: 'Treatment approaches',
        paragraphs: [
          'Options may include observation with repeat imaging, surgery to remove or sample the tumour, medication to control symptoms such as swelling or seizures, and referral to oncology services for radiotherapy or chemotherapy when appropriate.',
          'The right approach is individual. A neurosurgical consultation does not automatically mean an operation is planned — often the first step is simply understanding the problem clearly.',
        ],
      },
      {
        heading: 'When to seek advice',
        paragraphs: [
          'Seek urgent medical care for a sudden severe headache, a first seizure, new weakness or confusion, or a rapid decline in alertness. For milder but persistent symptoms, arrange a routine appointment with your doctor.',
        ],
      },
    ],
  },
  {
    slug: 'common-causes-of-back-and-neck-pain',
    image: spineIllustration,
    title: 'Common Causes of Back and Neck Pain',
    category: 'Spine',
    summary:
      'Back and neck pain are extremely common. Learn which causes are frequent, which symptoms need attention, and when specialist input helps.',
    author: 'Medical Education Team',
    date: '2026-01-20',
    readingTime: '5 min read',
    reviewStatus: 'Awaiting clinical review',
    featured: true,
    sections: [
      {
        heading: 'Why back and neck pain happens',
        paragraphs: [
          'Most back and neck pain is related to muscles, ligaments and the small joints of the spine rather than to a serious underlying disease. Prolonged sitting, heavy lifting, awkward posture, deconditioning and stress are frequent contributors.',
          'Other causes include disc problems, narrowing of the spinal canal (stenosis), wear-and-tear changes with age, and occasionally infections, inflammatory conditions or tumours — which is why assessment matters when red flags are present.',
        ],
      },
      {
        heading: 'Symptoms that travel beyond the back',
        paragraphs: [
          'Pain that shoots into a leg or an arm, accompanied by numbness, tingling or weakness, suggests that a nerve may be compressed. This pattern sometimes needs imaging and a specialist opinion.',
          'Back pain combined with fever, unexplained weight loss, night pain that wakes you, or a history of cancer should be discussed with a doctor promptly.',
        ],
      },
      {
        heading: 'Common self-care and first steps',
        paragraphs: [
          'For simple back pain, remaining gently active, modifying heavy activities, adequate sleep and simple pain relief agreed with a pharmacist or doctor are usually the starting point. Prolonged bed rest is generally not recommended.',
          'If pain persists beyond a few weeks, interferes with daily life, or is associated with neurological symptoms, it is reasonable to seek a clinical review.',
        ],
      },
      {
        heading: 'When a neurosurgeon is involved',
        paragraphs: [
          'Neurosurgical assessment is typically considered when there is evidence of nerve compression, persistent symptoms despite conservative treatment, or a condition affecting the spinal cord itself. An appointment is a review — not a commitment to surgery.',
        ],
      },
    ],
  },
  {
    slug: 'what-is-a-herniated-disc',
    image: spineIllustration,
    title: 'What Is a Herniated Disc?',
    category: 'Spine',
    summary: 'How disc herniation develops, why it can press on nerves, and the treatment pathways that exist.',
    author: 'Medical Education Team',
    date: '2026-02-03',
    readingTime: '5 min read',
    reviewStatus: 'Awaiting clinical review',
    featured: true,
    sections: [
      {
        heading: 'The anatomy in simple terms',
        paragraphs: [
          'Between each pair of vertebrae sits a disc: a tough outer ring surrounding a soft, gel-like centre. The disc acts as a shock absorber and allows the spine to move.',
          'In a herniated disc — sometimes called a slipped or prolapsed disc — part of the soft centre pushes through a weakened outer ring and can press on a nearby nerve root or, less commonly, on the spinal cord.',
        ],
      },
      {
        heading: 'Symptoms',
        paragraphs: [
          'In the lower back, a herniated disc may cause sciatica: pain radiating down the buttock and leg, often with numbness, tingling or weakness in the foot. In the neck, symptoms can radiate into the shoulder, arm and hand.',
          'Some people have findings on a scan but no symptoms at all, so results should always be interpreted alongside the clinical picture.',
        ],
      },
      {
        heading: 'Investigation and treatment',
        paragraphs: [
          'Diagnosis is based on the history and examination, with MRI used to confirm the level and degree of nerve compression when it will change management.',
          'Most people improve with time, pain relief, activity modification and physiotherapy. In cases of persistent severe nerve compression, progressive weakness, or loss of bladder or bowel control, surgical options may be discussed.',
        ],
      },
      {
        heading: 'Red flags',
        paragraphs: [
          'New loss of bladder or bowel control, significant progressive leg weakness, numbness around the saddle region, or symptoms following major trauma require urgent medical assessment.',
        ],
      },
    ],
  },
  {
    slug: 'understanding-head-injuries',
    image: brainIllustration,
    title: 'Understanding Head Injuries',
    category: 'Brain',
    summary: 'What happens after a knock to the head, which symptoms matter, and how far is too far to wait.',
    author: 'Medical Education Team',
    date: '2026-02-11',
    readingTime: '6 min read',
    reviewStatus: 'Awaiting clinical review',
    featured: false,
    sections: [
      {
        heading: 'Types of head injury',
        paragraphs: [
          'Head injuries are commonly described as mild (such as concussion), moderate or severe. Even a mild injury can cause real symptoms, including headache, dizziness, nausea, light sensitivity, irritability and difficulty concentrating.',
          'More serious injuries may involve bleeding inside or around the brain, or a fracture at the base of the skull, and these require hospital assessment.',
        ],
      },
      {
        heading: 'What to watch for after a head injury',
        paragraphs: [
          'In the days after an injury, seek urgent help for a headache that keeps worsening, repeated vomiting, increasing drowsiness or confusion, weakness or numbness, a seizure, unequal pupils, clear fluid or blood from the nose or ear, or unusual behaviour.',
          'Someone who loses consciousness, cannot remember the event, or is on blood-thinning medication should be evaluated by a medical professional.',
        ],
      },
      {
        heading: 'Assessment and recovery',
        paragraphs: [
          'Assessment includes the mechanism of injury, examination and imaging such as CT when risk factors are present. Observation over a period of time is a common and important part of management.',
          'Recovery from concussion is usually gradual. Rest for the first days followed by a staged return to activity is generally advised; symptoms lasting longer than expected warrant reassessment.',
        ],
      },
      {
        heading: 'Prevention',
        paragraphs: [
          'Seat belts, appropriate helmets for cycling and motorcycling, safe lifting practices, and preventing falls in older adults all reduce the risk and severity of head injuries.',
        ],
      },
    ],
  },
  {
    slug: 'when-should-you-see-a-neurosurgeon',
    image: guideIllustration,
    title: 'When Should You See a Neurosurgeon?',
    category: 'Guidance',
    summary: 'A referral to a neurosurgeon does not mean an operation is certain. Here is what the appointment is really for.',
    author: 'Medical Education Team',
    date: '2026-02-18',
    readingTime: '4 min read',
    reviewStatus: 'Awaiting clinical review',
    featured: false,
    sections: [
      {
        heading: 'What a neurosurgeon actually does',
        paragraphs: [
          'Neurosurgeons assess conditions of the brain, spine and nervous system. A large part of their work is deciding whether surgery is appropriate — and equally often, deciding that it is not.',
          'Many patients are seen for an opinion, receive a management plan that does not involve surgery, and continue their care with their family doctor, a neurologist or a physiotherapist.',
        ],
      },
      {
        heading: 'Situations where a specialist opinion is reasonable',
        paragraphs: [
          'Examples include persistent sciatica or arm pain with weakness despite conservative treatment, symptoms suggesting spinal cord compression, a brain or spine lesion found on imaging, hydrocephalus, certain facial pain syndromes, and complex head injuries.',
          'Emergency symptoms — sudden weakness, speech difficulty, a seizure, loss of consciousness, or the worst headache of your life — need emergency care rather than an outpatient appointment.',
        ],
      },
      {
        heading: 'Making the most of the appointment',
        paragraphs: [
          'Bring your imaging on CD or USB as well as written reports, a current medication list, a timeline of your symptoms, and your questions written down. Asking what happens if you wait, and what the alternatives to surgery are, is always reasonable.',
        ],
      },
    ],
  },
  {
    slug: 'preparing-for-a-brain-or-spine-consultation',
    image: guideIllustration,
    title: 'Preparing for a Brain or Spine Consultation',
    category: 'Patient Guide',
    summary: 'A practical checklist to help you use your consultation time well and leave with clear next steps.',
    author: 'Medical Education Team',
    date: '2026-02-25',
    readingTime: '4 min read',
    reviewStatus: 'Awaiting clinical review',
    featured: false,
    sections: [
      {
        heading: 'Before you go',
        paragraphs: [
          'Write down when your symptoms started, how they have changed, and what makes them better or worse. Gather previous MRI, CT and X-ray reports and images, your medication list with doses, allergies, and any past operations.',
          'If someone can accompany you, they can take notes and help you remember the discussion afterwards.',
        ],
      },
      {
        heading: 'Questions worth asking',
        paragraphs: [
          'What is the most likely explanation for my symptoms? Which tests do I need and why? What are the treatment options, including doing nothing for now? What are the risks and benefits of each? What is the expected recovery, and what follow-up is planned?',
          'Also ask about expected costs and how many visits may be involved, so you can plan practically.',
        ],
      },
      {
        heading: 'After the consultation',
        paragraphs: [
          'Follow the plan you were given, attend follow-up appointments, and contact the clinic or an emergency department if your symptoms worsen — particularly weakness, speech changes, a new seizure, or severe sudden headache.',
        ],
      },
    ],
  },
  {
    slug: 'understanding-mri-and-ct-scans',
    image: scanIllustration,
    title: 'Understanding MRI and CT Scans',
    category: 'Diagnostics',
    summary: 'What these scans show, how they differ, and why a radiology report is only part of the picture.',
    author: 'Medical Education Team',
    date: '2026-03-04',
    readingTime: '5 min read',
    reviewStatus: 'Awaiting clinical review',
    featured: false,
    sections: [
      {
        heading: 'CT scans',
        paragraphs: [
          'Computed tomography uses X-rays to create cross-sectional images. CT is fast and widely available, making it the usual first choice in emergencies such as suspected bleeding after a head injury.',
          'It is particularly good at showing bone and acute blood, but gives less detail of soft tissue than MRI.',
        ],
      },
      {
        heading: 'MRI scans',
        paragraphs: [
          'MRI uses strong magnetic fields and radio waves, without ionising radiation, to produce detailed images of the brain, spinal cord, discs and nerves.',
          'Scans take longer, and certain implants or devices may require special precautions — always inform the radiology team about pacemakers, metallic implants or possible pregnancy before an MRI.',
        ],
      },
      {
        heading: 'Reading results in context',
        paragraphs: [
          'Scans frequently show age-related changes that cause no symptoms at all. A finding on a scan does not automatically explain your pain, and treatment decisions are made by combining the images with your history and examination.',
          'Always discuss your results with the clinician who ordered them so they can explain what they mean for you specifically.',
        ],
      },
    ],
  },
];

export const getArticleBySlug = (slug) => articles.find((article) => article.slug === slug);

export const getRelatedArticles = (slug, limit = 3) => {
  const current = getArticleBySlug(slug);
  if (!current) return articles.slice(0, limit);
  const sameCategory = articles.filter(
    (article) => article.slug !== slug && article.category === current.category
  );
  const others = articles.filter(
    (article) => article.slug !== slug && article.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
};
