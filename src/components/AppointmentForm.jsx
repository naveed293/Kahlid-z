import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AlertTriangle, CheckCircle2, Loader2, Send, ShieldCheck } from 'lucide-react';
import { doctor } from '../data/doctor.js';

/**
 * ---------------------------------------------------------------------------
 * DEMONSTRATION MODE
 * ---------------------------------------------------------------------------
 * `DEMO_MODE = true` means the form validates the visitor's input and shows a
 * clearly-labelled confirmation, but NO data is transmitted or stored anywhere.
 *
 * For production:
 *   1. set DEMO_MODE to false, and
 *   2. POST the payload to a secure server-side endpoint (server-side
 *      validation, HTTPS, rate limiting, spam protection, restricted access)
 *      or to an approved clinic booking service.
 * Never place API keys in this file or anywhere in the frontend.
 * ---------------------------------------------------------------------------
 */
const DEMO_MODE = true;
const API_ENDPOINT = '/api/appointment-request';

const todayISO = () => new Date().toISOString().split('T')[0];

const countDigits = (value = '') => (value.match(/\d/g) || []).length;

export default function AppointmentForm() {
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      date: '',
      reason: '',
      message: '',
      consent: false,
      company: '', // honeypot — humans never fill this in
    },
  });

  const onSubmit = async (values) => {
    setStatus('idle');
    setMessage('');

    // Honeypot triggered by a bot: pretend success, send nothing.
    if (values.company) {
      setStatus('success');
      setMessage('Your request has been recorded.');
      return;
    }

    const payload = {
      fullName: values.fullName.trim(),
      phone: values.phone.trim(),
      email: values.email.trim() || undefined,
      date: values.date,
      reason: values.reason.trim(),
      message: values.message.trim() || undefined,
    };

    try {
      if (DEMO_MODE) {
        // Simulated network round-trip so the loading state is visible.
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setStatus('success');
        setMessage(
          'Demonstration mode: your request passed validation, but nothing was sent or stored. ' +
            'This form is not yet connected to the clinic booking system — please call to confirm an appointment.'
        );
        reset();
        return;
      }

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Request failed');

      setStatus('success');
      setMessage(
        'Your appointment request has been sent to the clinic. This is a request only — the clinic will contact you to confirm availability. Please do not treat this as a confirmed appointment.'
      );
      reset();
    } catch {
      setStatus('error');
      setMessage(
        'We could not send your request at the moment. Please try again, or call the clinic directly.'
      );
    }
  };

  return (
    <div className="card overflow-hidden">
      {DEMO_MODE && (
        <div className="flex items-start gap-3 border-b border-amber-200 bg-amber-50 px-6 py-4 text-sm text-amber-900">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            <span className="font-bold">Demonstration mode.</span> This form validates your input
            only — it does not send or store anything. To arrange an appointment, please call{' '}
            <a href={doctor.contact.phoneHref} className="font-bold underline">
              {doctor.contact.phoneDisplay}
            </a>
            .
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Full name */}
          <div className="sm:col-span-2">
            <label htmlFor="fullName" className="field-label">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              aria-invalid={errors.fullName ? 'true' : 'false'}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              className="field-input"
              {...register('fullName', {
                required: 'Please enter your full name.',
                minLength: { value: 2, message: 'Name must be at least 2 characters.' },
                maxLength: { value: 80, message: 'Name must be 80 characters or fewer.' },
              })}
            />
            {errors.fullName && (
              <span id="fullName-error" className="field-error" role="alert">
                {errors.fullName.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="field-label">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+93 7xx xxx xxxx"
              aria-invalid={errors.phone ? 'true' : 'false'}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className="field-input"
              {...register('phone', {
                required: 'Please enter a phone number so the clinic can reach you.',
                validate: (value) => {
                  const digits = countDigits(value);
                  if (digits < 7) return 'Enter a valid phone number (at least 7 digits).';
                  if (digits > 15) return 'Enter a valid phone number (no more than 15 digits).';
                  if (!/^[+\d\s()\-]+$/.test(value)) {
                    return 'Use only digits, spaces, +, - or parentheses.';
                  }
                  return true;
                },
              })}
            />
            {errors.phone && (
              <span id="phone-error" className="field-error" role="alert">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Email (optional) */}
          <div>
            <label htmlFor="email" className="field-label">
              Email Address <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="field-input"
              {...register('email', {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  message: 'Please enter a valid email address.',
                },
              })}
            />
            {errors.email && (
              <span id="email-error" className="field-error" role="alert">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="field-label">
              Preferred Appointment Date <span className="text-red-600">*</span>
            </label>
            <input
              id="date"
              type="date"
              min={todayISO()}
              aria-invalid={errors.date ? 'true' : 'false'}
              aria-describedby={errors.date ? 'date-error' : undefined}
              className="field-input"
              {...register('date', {
                required: 'Please choose a preferred date.',
                validate: (value) =>
                  value >= todayISO() || 'Please choose today or a future date.',
              })}
            />
            {errors.date && (
              <span id="date-error" className="field-error" role="alert">
                {errors.date.message}
              </span>
            )}
          </div>

          {/* Reason */}
          <div className="sm:col-span-2">
            <label htmlFor="reason" className="field-label">
              Reason for Consultation <span className="text-red-600">*</span>
            </label>
            <textarea
              id="reason"
              rows={3}
              placeholder="A brief description of the concern, e.g. persistent back pain with leg numbness"
              aria-invalid={errors.reason ? 'true' : 'false'}
              aria-describedby={errors.reason ? 'reason-error' : 'reason-hint'}
              className="field-input resize-y"
              {...register('reason', {
                required: 'Please tell us briefly what the appointment is for.',
                minLength: { value: 10, message: 'Please provide a little more detail (10 characters minimum).' },
                maxLength: { value: 400, message: 'Please keep this to 400 characters or fewer.' },
              })}
            />
            <span id="reason-hint" className="mt-1.5 block text-xs text-muted">
              Keep this brief — do not include detailed medical history, test results or sensitive
              information in this form.
            </span>
            {errors.reason && (
              <span id="reason-error" className="field-error" role="alert">
                {errors.reason.message}
              </span>
            )}
          </div>

          {/* Message (optional) */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="field-label">
              Additional Message <span className="font-normal text-muted">(optional)</span>
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Anything else you would like the clinic to know"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="field-input resize-y"
              {...register('message', {
                maxLength: { value: 1000, message: 'Message must be 1000 characters or fewer.' },
              })}
            />
            {errors.message && (
              <span id="message-error" className="field-error" role="alert">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Honeypot — hidden from real users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register('company')} />
          </div>
        </div>

        {/* Consent */}
        <div className="rounded-xl bg-surface px-4 py-4">
          <label htmlFor="consent" className="flex cursor-pointer items-start gap-3 text-sm text-ink">
            <input
              id="consent"
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy-300 text-medical focus:ring-medical"
              {...register('consent', {
                required: 'Please confirm you agree before sending your request.',
              })}
            />
            <span>
              I agree that the contact details provided may be used to respond to my request, as
              described in the{' '}
              <Link to="/privacy-policy" className="font-semibold text-medical underline">
                Privacy Policy
              </Link>
              . <span className="text-red-600">*</span>
            </span>
          </label>
          {errors.consent && (
            <span className="field-error" role="alert">
              {errors.consent.message}
            </span>
          )}
        </div>

        {/* Status messages */}
        {status === 'success' && (
          <div
            className="flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 px-4 py-4 text-sm text-teal-900"
            role="status"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p>{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div
            className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-800"
            role="alert"
          >
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p>{message}</p>
          </div>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex items-start gap-2 text-xs leading-relaxed text-muted">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
            Contact details are used only to respond to this request. This form never stores
            sensitive medical information in your browser.
          </p>

          <button type="submit" disabled={isSubmitting} className="btn-primary min-w-[190px]">
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Appointment Request
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
