import { useState, useEffect, useRef } from 'react'

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
)
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
)
const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
    <line x1="2" x2="22" y1="2" y2="22"/>
  </svg>
)

export default function SettingsModal({ isOpen, onClose, apiKey, onSave }) {
  const [draft, setDraft]     = useState('')
  const [show, setShow]       = useState(false)
  const inputRef              = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setDraft(apiKey || '')
      setShow(false)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen, apiKey])

  // Trap focus and handle Escape
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 id="settings-title" className="font-display text-xl font-semibold text-forest-900">
              API Settings
            </h2>
            <p className="text-sm text-forest-500 mt-0.5">Configure the AI Lesson Builder</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close settings"
            className="p-1.5 rounded-lg text-forest-400 hover:text-forest-700 hover:bg-forest-50 transition-colors"
          >
            <XIcon />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="api-key-input" className="label">
              Anthropic API Key
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                id="api-key-input"
                type={show ? 'text' : 'password'}
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="sk-ant-..."
                className="input-field pr-10"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                aria-label={show ? 'Hide API key' : 'Show API key'}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-forest-400 hover:text-forest-600"
              >
                {show ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            <p className="mt-1.5 text-xs text-forest-500">
              Get your key at{' '}
              <a
                href="https://console.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tech-600 hover:underline"
              >
                console.anthropic.com
              </a>
              . Stored locally in your browser only.
            </p>
          </div>

          <div className="bg-forest-50 rounded-lg p-3 text-xs text-forest-600 space-y-1">
            <p className="font-semibold text-forest-700">For Vercel Deployment</p>
            <p>Add <code className="font-mono bg-white px-1 py-0.5 rounded text-tech-700">VITE_ANTHROPIC_API_KEY</code> in your Vercel project's Environment Variables to pre-configure for all users.</p>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={onClose} className="btn-secondary flex-1">
            Cancel
          </button>
          <button
            onClick={() => onSave(draft.trim())}
            disabled={!draft.trim()}
            className="btn-primary flex-1"
          >
            Save Key
          </button>
        </div>
      </div>
    </div>
  )
}