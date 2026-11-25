import { createContext, useContext, useEffect, useRef, useState } from 'react'

// Submits to Formspree via fetch so the visitor stays on the page.
// The pieces below (FormSuccess, FormError, FormFields, SubmitButton) read the
// form status from context, so the page markup can stay as it is.

const FormContext = createContext({ status: 'idle', showError: false })

export function ContactForm({ action, className, children }) {
  const [status, setStatus] = useState('idle') // idle | sending | success
  const [showError, setShowError] = useState(false)
  const errorTimer = useRef()

  useEffect(() => () => clearTimeout(errorTimer.current), [])

  const flashError = () => {
    setShowError(true)
    clearTimeout(errorTimer.current)
    errorTimer.current = setTimeout(() => setShowError(false), 5000)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const response = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        form.reset()
        setStatus('success')
        return
      }
      flashError()
    } catch {
      flashError()
    }
    setStatus('idle')
  }

  return (
    <FormContext.Provider value={{ status, showError }}>
      <form id="contact-form" action={action} method="POST" className={className} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  )
}

export function FormSuccess({ className, children }) {
  const { status } = useContext(FormContext)
  return (
    <div id="form-success" className={status === 'success' ? className : `hidden ${className}`}>
      {children}
    </div>
  )
}

export function FormError({ className, children }) {
  const { showError } = useContext(FormContext)
  return (
    <div id="form-error" className={showError ? className : `hidden ${className}`}>
      {children}
    </div>
  )
}

export function FormFields({ className, children }) {
  const { status } = useContext(FormContext)
  return (
    <div id="form-fields" className={className} style={status === 'success' ? { display: 'none' } : undefined}>
      {children}
    </div>
  )
}

export function SubmitButton({ className, children }) {
  const { status } = useContext(FormContext)
  const sending = status === 'sending'
  return (
    <button type="submit" id="submit-btn" className={className} disabled={sending}>
      {sending ? 'Sending...' : children}
    </button>
  )
}
