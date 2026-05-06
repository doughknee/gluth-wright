import { FormEvent, useMemo, useState } from 'react'
import { PageContainer } from '../components/PageContainer'

interface ContactFormValues {
  intent: 'owner' | 'renter'
  fullName: string
  email: string
  phone: string
  message: string
}

interface ContactFormErrors {
  fullName?: string
  email?: string
  message?: string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}
  if (!values.fullName.trim()) {
    errors.fullName = 'Please add your full name.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) {
    errors.message = 'Please share how we can help.'
  }
  return errors
}

export function AboutContactPage(): JSX.Element {
  const [values, setValues] = useState<ContactFormValues>({
    intent: 'owner',
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors])

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState('error')
      return
    }

    setSubmitState('submitting')
    window.setTimeout(() => {
      setSubmitState('success')
    }, 600)
  }

  return (
    <PageContainer>
      <section className="py-14">
        <h1 className="text-4xl font-semibold tracking-tight">Local intelligence, white-glove execution</h1>
        <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
          John Gluth Wright Property Management brings boutique-level service to every owner relationship and every resident experience.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="panel p-6">
          <h2 className="text-2xl font-semibold">Our management process</h2>
          <ol className="mt-4 space-y-3 text-[var(--color-text-muted)]">
            <li>
              <span className="font-semibold text-[var(--color-text)]">1. Strategy:</span> We map goals, risk tolerance, and ideal resident profile.
            </li>
            <li>
              <span className="font-semibold text-[var(--color-text)]">2. Execution:</span> We launch marketing, leasing, and maintenance workflows with clear ownership.
            </li>
            <li>
              <span className="font-semibold text-[var(--color-text)]">3. Oversight:</span> We deliver reporting, resident care, and proactive optimization.
            </li>
          </ol>
        </article>

        <article className="panel p-6">
          <h2 className="text-2xl font-semibold">Direct contact</h2>
          <p className="mt-4 text-[var(--color-text-muted)]">Phone: (509) 555-0144</p>
          <p className="mt-2 text-[var(--color-text-muted)]">Email: hello@gluthwrightproperties.com</p>
          <p className="mt-2 text-[var(--color-text-muted)]">Office hours: Mon-Fri, 8:30 AM to 5:30 PM</p>
          <p className="mt-2 text-[var(--color-text-muted)]">Average response time: Same business day</p>
        </article>
      </section>

      <section className="py-10" id="contact-form">
        <div className="panel p-6">
          <h2 className="text-2xl font-semibold">Start a conversation with our team</h2>
          <p className="mt-2 text-[var(--color-text-muted)]">Tell us a little about your needs and we will follow up quickly.</p>
          <form className="mt-6 space-y-4" noValidate onSubmit={handleSubmit}>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">I am reaching out as</span>
              <select
                className="input"
                onChange={(event) => setValues((prev) => ({ ...prev, intent: event.target.value as ContactFormValues['intent'] }))}
                value={values.intent}
              >
                <option value="owner">Property owner</option>
                <option value="renter">Renter</option>
              </select>
            </label>

            <label className="block text-sm">
              <span className="mb-1 block font-medium">Full name</span>
              <input
                className="input"
                onChange={(event) => setValues((prev) => ({ ...prev, fullName: event.target.value }))}
                type="text"
                value={values.fullName}
              />
              {errors.fullName ? <span className="mt-1 block text-xs text-[var(--color-error)]">{errors.fullName}</span> : null}
            </label>

            <label className="block text-sm">
              <span className="mb-1 block font-medium">Email</span>
              <input
                className="input"
                onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                type="email"
                value={values.email}
              />
              {errors.email ? <span className="mt-1 block text-xs text-[var(--color-error)]">{errors.email}</span> : null}
            </label>

            <label className="block text-sm">
              <span className="mb-1 block font-medium">Phone (optional)</span>
              <input
                className="input"
                onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
                type="tel"
                value={values.phone}
              />
            </label>

            <label className="block text-sm">
              <span className="mb-1 block font-medium">How can we help?</span>
              <textarea
                className="input min-h-28"
                onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
                value={values.message}
              />
              {errors.message ? <span className="mt-1 block text-xs text-[var(--color-error)]">{errors.message}</span> : null}
            </label>

            <button className="btn-primary" disabled={submitState === 'submitting'} type="submit">
              {submitState === 'submitting' ? 'Sending...' : 'Send message'}
            </button>

            {submitState === 'success' ? (
              <p className="text-sm text-[var(--color-success)]">Thanks! Our team will reach out shortly.</p>
            ) : null}
            {submitState === 'error' && hasErrors ? (
              <p className="text-sm text-[var(--color-error)]">Please review the highlighted fields and try again.</p>
            ) : null}
          </form>
        </div>
      </section>
    </PageContainer>
  )
}
