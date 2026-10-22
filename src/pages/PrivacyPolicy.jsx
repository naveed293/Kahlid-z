import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { doctor } from '../data/doctor.js';

const sections = [
  {
    heading: 'What this website collects',
    body: [
      'This website is informational. Browsing the site does not require an account and does not intentionally collect personal information.',
      'If you submit the appointment request form, the details provided are your name, phone number, optional email address, a preferred date, a brief reason for the consultation, and any optional message you choose to include.',
    ],
  },
  {
    heading: 'How contact details are used',
    body: [
      'Contact details are used for one purpose only: to respond to your request and, if you choose, to arrange an appointment. They are not sold, rented or used for marketing.',
      'We deliberately ask only for the minimum information needed to contact you. Please do not include detailed medical history, test results or other sensitive medical information in the form.',
    ],
  },
  {
    heading: 'Form status and storage',
    body: [
      'The appointment form currently runs in demonstration mode: it validates input in your browser and transmits nothing. No data is stored on a server while demonstration mode is active.',
      'When a secure backend or approved booking service is connected, submitted data will be sent over HTTPS, validated on the server, protected against unauthorised access, and retained only as long as necessary to handle the request.',
    ],
  },
  {
    heading: 'Browser storage',
    body: [
      "Sensitive medical information is never stored in your browser's local storage or cookies as a substitute for secure medical data handling.",
    ],
  },
  {
    heading: 'Third-party content',
    body: [
      'The site may display photographs from third-party image providers and, once the clinic address is confirmed, an embedded map. These services may process standard technical data such as your IP address under their own privacy policies.',
      'Web fonts are loaded from Google Fonts; requests are made to Google servers when the page loads.',
    ],
  },
  {
    heading: 'Your choices and contact',
    body: [
      'You may ask what information is held about you, request a correction, or ask for it to be deleted by contacting the clinic on ' +
        doctor.contact.phoneDisplay +
        ' or through the Contact page.',
      'Questions about this policy can be directed to the same contact details.',
    ],
  },
];

export default function PrivacyPolicy() {
  usePageMeta(
    'Privacy Policy',
    'How contact details submitted through this website are handled, what is collected, and the measures used to protect personal information.'
  );

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains how information you share through this website is handled. It should be reviewed with the clinic before publication."
      />

      <section className="container-page max-w-4xl py-14 lg:py-20">
        <div className="space-y-10">
          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.04}>
              <article>
                <h2 className="text-xl font-extrabold text-navy sm:text-2xl">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-base leading-[1.75] text-ink/90">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <p className="rounded-2xl border border-navy-100 bg-surface p-5 text-sm leading-relaxed text-muted">
              Last reviewed: January 2026. This policy is a template prepared for this website and
              should be checked against local legal requirements before publication.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
