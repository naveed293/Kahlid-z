/**
 * Treatment and procedure categories for the Treatments page.
 *
 * NOTE: general educational information only — not a confirmed list of
 * procedures offered at the clinic.
 */

export const treatmentCategories = [
  {
    id: 'brain',
    icon: 'Brain',
    title: 'Brain-Related Procedures',
    intro:
      'Assessment and management of conditions affecting the brain. The approach recommended for an individual depends on the diagnosis, its location, and the person\'s overall health.',
    items: [
      {
        title: 'Assessment of Brain Tumours',
        condition:
          'An abnormal growth within the brain or surrounding structures, which may be primary or have spread from elsewhere.',
        symptoms:
          'Headaches that are worsening or worse in the morning, new seizures, visual change, weakness, speech difficulty, or changes in memory and personality.',
        investigations:
          'Neurological examination, MRI of the brain with contrast, and in some cases CT, biopsy or other specialist tests.',
        treatment:
          'Options can include observation with scheduled imaging, surgical removal or sampling of the lesion, medication for symptoms such as swelling, and referral for further oncological treatment.',
      },
      {
        title: 'Surgical Management of Selected Brain Conditions',
        condition:
          'Certain brain conditions — including selected tumours, some vascular lesions and persistent focal epilepsy — may be considered for surgery when the likely benefit outweighs the risk.',
        symptoms:
          'Depends entirely on the underlying condition; symptoms are matched with imaging findings during consultation.',
        investigations:
          'Detailed history and examination, advanced imaging, and sometimes functional or electrophysiological studies before a decision is made.',
        treatment:
          'Where surgery is advised, the plan, alternatives and expected outcomes are discussed in advance. Where surgery is not advised, alternative or supportive care is arranged.',
      },
      {
        title: 'Evaluation of Traumatic Brain Injuries',
        condition:
          'Injury to the brain following trauma, ranging from concussion to bleeding within or around the brain.',
        symptoms:
          'Loss of confusion, memory loss, headache, drowsiness, vomiting, weakness, seizures, or a period of unconsciousness.',
        investigations:
          'CT of the brain in the acute setting, observation over time, and follow-up imaging or specialist review when symptoms persist.',
        treatment:
          'Mild injuries are usually managed with rest and monitored recovery. Bleeding or raised pressure may require urgent surgical intervention in a hospital setting.',
      },
      {
        title: 'Assessment of Hydrocephalus and Related Conditions',
        condition:
          'A build-up of cerebrospinal fluid within the brain, which may obstruct normal flow or absorption.',
        symptoms:
          'Headache, nausea, vision changes, difficulty walking, balance problems, or changes in concentration and continence — depending on age and type.',
        investigations:
          'MRI or CT of the brain, and sometimes additional tests of cerebrospinal fluid dynamics.',
        treatment:
          'May include monitoring, medication where appropriate, or surgical procedures to divert or drain cerebrospinal fluid.',
      },
    ],
  },
  {
    id: 'spine',
    icon: 'Bone',
    title: 'Spine-Related Procedures',
    intro:
      'Evaluation and management of spinal conditions that cause pain, weakness or numbness, including conditions that compress the spinal cord or nerve roots.',
    items: [
      {
        title: 'Evaluation of Herniated Discs',
        condition:
          'The inner material of a spinal disc pushes through its outer ring and presses on a nearby nerve.',
        symptoms:
          'Radiating pain into a limb, numbness, tingling or weakness, often following a characteristic pattern such as pain down the back of the leg.',
        investigations:
          'History and physical examination including nerve stretch tests, and MRI of the relevant spinal region when it will affect management.',
        treatment:
          'Most cases improve with pain management, activity modification, physiotherapy and time. Injections or surgery are considered when symptoms persist or nerve compression is significant.',
      },
      {
        title: 'Assessment of Spinal Stenosis',
        condition:
          'Narrowing of the spinal canal or the passages through which nerves exit the spine, most often related to age-related change.',
        symptoms:
          'Back or neck pain with leg or arm symptoms that worsen with standing or walking and improve when sitting or leaning forward.',
        investigations:
          'Clinical examination and MRI of the affected spinal segments.',
        treatment:
          'Conservative measures include physiotherapy, pain relief and activity adjustment. Surgery may be discussed when walking distance reduces significantly or neurological signs progress.',
      },
      {
        title: 'Surgical Options for Selected Spinal Disorders',
        condition:
          'Conditions such as significant nerve compression, spinal instability, deformity, or certain tumours affecting the spine.',
        symptoms:
          'Persistent pain, progressive weakness, sensory loss, or symptoms affecting balance and function despite non-surgical treatment.',
        investigations:
          'MRI and sometimes dynamic (movement) X-rays, CT, or further studies to plan the approach.',
        treatment:
          'Surgical options vary widely — from decompression (relieving pressure on nerves) to stabilisation procedures. The rationale, alternatives and rehabilitation requirements are discussed beforehand.',
      },
      {
        title: 'Assessment of Spinal Injuries and Spinal Cord Compression',
        condition:
          'Trauma to the vertebrae or spinal cord, or compression of the cord by disc, bone, tumour or other lesions.',
        symptoms:
          'Severe back or neck pain after injury, weakness or numbness in limbs, loss of coordination, or changes in bladder and bowel control.',
        investigations:
          'Urgent CT and MRI in hospital settings, along with a detailed neurological examination.',
        treatment:
          'Acute spinal trauma and cord compression frequently require urgent admission, immobilisation and possibly emergency surgery to prevent further damage.',
      },
    ],
  },
  {
    id: 'consultation',
    icon: 'ClipboardList',
    title: 'Consultation and Diagnosis',
    intro:
      'Most neurosurgical appointments follow a structured process designed to reach an accurate diagnosis and a clear, individualised plan.',
    items: [
      {
        title: 'Review of Symptoms and Medical History',
        condition: 'The starting point of every consultation.',
        symptoms:
          'You will be asked when symptoms started, how they have changed, what aggravates or relieves them, and how they affect daily life.',
        investigations:
          'A neurological examination assessing strength, sensation, reflexes, coordination and balance.',
        treatment:
          'Findings are explained in plain language, including what is likely and what still needs to be excluded.',
      },
      {
        title: 'Review of MRI, CT and Other Medical Imaging',
        condition: 'Imaging is interpreted alongside your symptoms, not in isolation.',
        symptoms: 'Bringing reports and images on CD, USB, or through any portal provided by the imaging centre.',
        investigations:
          'Comparison with previous scans where available, and additional imaging only when it is likely to change the plan.',
        treatment:
          'Findings are correlated with the examination — some scan abnormalities are common and cause no symptoms.',
      },
      {
        title: 'Discussion of Possible Treatment Options',
        condition: 'Applies whether the plan is surgical or non-surgical.',
        symptoms: 'Not applicable — this is a shared decision-making step.',
        investigations: 'Risk, benefit and alternatives to any proposed approach, including the option of observation.',
        treatment:
          'You should leave the consultation understanding the recommended option, the alternatives, and what happens if nothing is done for now.',
      },
      {
        title: 'Referral for Additional Investigations',
        condition: 'When more information is needed before a decision.',
        symptoms: 'May include further imaging, blood tests, nerve studies, or review by another specialist.',
        investigations: 'Referral letters and summaries are provided so the reason for each test is clear.',
        treatment: 'Results are then reviewed and the plan confirmed with you.',
      },
      {
        title: 'Post-Treatment Follow-Up Information',
        condition: 'Applies to everyone undergoing treatment or ongoing observation.',
        symptoms: 'Instructions on wound care, activity limits, medicines and expected recovery milestones.',
        investigations: 'Scheduled review appointments and imaging where indicated.',
        treatment:
          'Clear guidance on which symptoms require urgent contact, and how to reach the clinic between appointments.',
      },
    ],
  },
];

export const treatmentDisclaimer =
  'All content on this page is provided for general educational purposes. It describes common approaches to neurological and spinal conditions and does not constitute medical advice, diagnosis, or a commitment that any particular procedure is available at this clinic. Always consult a qualified medical professional about your own condition.';
