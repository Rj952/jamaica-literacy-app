import { useState } from 'react'

const BookOpen    = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
const LayoutDash  = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
const Library     = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
const Sparkles    = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
const LightBulb   = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
const TableIcon   = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>
const SettingsIcon= () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
const MenuIcon    = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
const CloseIcon   = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
const KeyIcon     = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>

const navItems = [
  { id: 'dashboard',  label: 'Dashboard',            Icon: LayoutDash },
  { id: 'policies',   label: 'Policy Library',        Icon: Library    },
  { id: 'lessons',    label: 'Lesson Builder',        Icon: Sparkles   },
  { id: 'strategies', label: 'Teaching Strategies',  Icon: LightBulb  },
  { id: 'alignment',  label: 'NSC Alignment',         Icon: TableIcon  },
]

export default function Navigation({ active, onNavigate, onOpenSettings, hasApiKey }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (id) => {
    onNavigate(id)
    setMobileOpen(false)
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        aria-label="Main navigation"
        className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-64 bg-forest-800 text-white z-40 shadow-sidebar"
      >
        {/* Brand */}
        <div className="px-6 py-6 border-b border-forest-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gold-500 flex items-center justify-center flex-shrink-0">
              <BookOpen />
            </div>
            <div>
              <div className="font-display font-semibold text-base leading-tight text-white">Jamaica</div>
              <div className="font-display text-xs text-gold-300 leading-tight">Literacy Guide</div>
            </div>
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex-1 py-4 overflow-y-auto">
          {navItems.map(({ id, label, Icon }) => {
            const isActive = active === id
            return (
              <button
                key={id}
                onClick={() => handleNav(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`
                  w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors duration-150 text-left
                  ${isActive
                    ? 'bg-forest-700 text-white border-r-2 border-gold-400'
                    : 'text-forest-200 hover:bg-forest-700 hover:text-white'
                  }
                `}
              >
                <span className={isActive ? 'text-gold-400' : 'text-forest-400'}>
                  <Icon />
                </span>
                {label}
              </button>
            )
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-forest-700 space-y-1">
          <button
            onClick={onOpenSettings}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-forest-300 hover:text-white hover:bg-forest-700 transition-colors text-sm"
          >
            <SettingsIcon />
            <span>API Settings</span>
            {hasApiKey && (
              <span className="ml-auto flex items-center gap-1 text-xs text-emerald-400">
                <KeyIcon /> Active
              </span>
            )}
          </button>
          <p className="text-xs text-forest-500 px-3 pt-1">
            Grounded in the NSC & NCLP
          </p>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-forest-800 shadow-md">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-gold-500 flex items-center justify-center">
            <BookOpen />
          </div>
          <span className="font-display font-semibold text-white text-sm">Jamaica Literacy Guide</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="p-1.5 rounded-md text-forest-200 hover:text-white hover:bg-forest-700 transition-colors"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {/* Mobile top-bar spacer */}
      <div className="lg:hidden h-14" aria-hidden="true" />

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div
            className="absolute inset-0 bg-forest-950/70"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            className="absolute top-14 left-0 right-0 bg-forest-800 shadow-xl"
            aria-label="Mobile navigation"
          >
            {navItems.map(({ id, label, Icon }) => {
              const isActive = active === id
              return (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`
                    w-full flex items-center gap-3 px-6 py-4 text-sm font-medium border-b border-forest-700
                    ${isActive ? 'bg-forest-700 text-white' : 'text-forest-200 hover:bg-forest-700 hover:text-white'}
                  `}
                >
                  <span className={isActive ? 'text-gold-400' : 'text-forest-400'}>
                    <Icon />
                  </span>
                  {label}
                </button>
              )
            })}
            <button
              onClick={() => { onOpenSettings(); setMobileOpen(false) }}
              className="w-full flex items-center gap-3 px-6 py-4 text-sm text-forest-300 hover:text-white hover:bg-forest-700"
            >
              <SettingsIcon />
              API Settings
              {hasApiKey && <span className="ml-auto text-xs text-emerald-400">● Active</span>}
            </button>
          </nav>
        </div>
      )}

      {/* Mobile Bottom Nav */}
      <nav
        aria-label="Bottom navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-forest-800 border-t border-forest-700 flex"
      >
        {navItems.map(({ id, label, Icon }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => handleNav(id)}
              aria-current={isActive ? 'page' : undefined}
              className={`
                flex-1 flex flex-col items-center justify-center py-2 gap-0.5 text-xs transition-colors
                ${isActive ? 'text-gold-400' : 'text-forest-400 hover:text-forest-200'}
              `}
            >
              <Icon />
              <span className="hidden sm:block">{label.split(' ')[0]}</span>
            </button>
          )
        })}
      </nav>
    </>
  )
}