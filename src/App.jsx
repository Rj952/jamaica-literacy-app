import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import PolicyLibrary from './components/PolicyLibrary'
import LessonBuilder from './components/LessonBuilder'
import TeachingStrategies from './components/TeachingStrategies'
import NSCAlignment from './components/NSCAlignment'
import SettingsModal from './components/SettingsModal'

const SECTIONS = {
  dashboard:  Dashboard,
  policies:   PolicyLibrary,
  lessons:    LessonBuilder,
  strategies: TeachingStrategies,
  alignment:  NSCAlignment,
}

export default function App() {
  const [activeSection, setActiveSection]   = useState('dashboard')
  const [settingsOpen,  setSettingsOpen]    = useState(false)
  const [apiKey, setApiKey]                 = useState('')

  // Load API key from env or localStorage on mount
  useEffect(() => {
    const envKey   = import.meta.env.VITE_ANTHROPIC_API_KEY
    const storedKey = localStorage.getItem('jlg_anthropic_api_key')
    setApiKey(envKey || storedKey || '')
  }, [])

  const handleSaveKey = (key) => {
    setApiKey(key)
    localStorage.setItem('jlg_anthropic_api_key', key)
    setSettingsOpen(false)
  }

  const handleNavigate = (section) => {
    setActiveSection(section)
    // Scroll to top on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const ActiveComponent = SECTIONS[activeSection] || Dashboard

  return (
    <div className="min-h-screen bg-cream flex flex-col lg:flex-row">
      {/* Skip link rendered in index.html; Navigation is the sidebar */}
      <Navigation
        active={activeSection}
        onNavigate={handleNavigate}
        onOpenSettings={() => setSettingsOpen(true)}
        hasApiKey={!!apiKey}
      />

      <main
        id="main-content"
        className="flex-1 lg:ml-64 min-h-screen pb-20 lg:pb-0"
        tabIndex={-1}
      >
        <div className="page-enter">
          <ActiveComponent
            apiKey={apiKey}
            onOpenSettings={() => setSettingsOpen(true)}
            onNavigate={handleNavigate}
          />
        </div>
      </main>

      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        apiKey={apiKey}
        onSave={handleSaveKey}
      />
    </div>
  )
}