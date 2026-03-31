import { useState } from 'react'
import { strategies } from '../data/strategies'

const ChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
const ChevronUp   = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
const BookOpen    = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
const Globe       = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
const Monitor     = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
const Users       = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
const Target      = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
const BarChart2   = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>

const iconMap = { BookOpen, Globe, Monitor, Users, Target, BarChart2 }
const tagClasses = { forest: 'tag-forest', gold: 'tag-gold', tech: 'tag-tech' }
const headerBg = { forest: 'bg-forest-800', gold: 'bg-gold-600', tech: 'bg-tech-600' }

function StrategyCard({ strategy }) {
  const [open, setOpen] = useState(false)
  const Icon = iconMap[strategy.icon] || BookOpen
  return (
    <article className="card overflow-hidden p-0">
      <div className={`${headerBg[strategy.tagType]} text-white px-5 pt-5 pb-4`}>
        <div className="flex items-start justify-between gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"><Icon /></div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-2">
              <span className={`tag ${tagClasses[strategy.tagType]} bg-white/20 text-white border-0`}>{strategy.tag}</span>
              <span className="tag bg-white/10 text-white/80 border-0 text-xs">{strategy.gradeRange}</span>
            </div>
            <h3 className="font-display text-base font-semibold text-white leading-snug">{strategy.title}</h3>
            <p className="text-xs text-white/70 mt-0.5">{strategy.category}</p>
          </div>
        </div>
      </div>
      <div className="px-5 py-4">
        <p className="text-sm text-forest-600 leading-relaxed mb-3">{strategy.description}</p>
        <div className="flex items-center justify-between text-xs text-forest-400 mb-1">
          <span>\u{1F4CC} {strategy.policyAnchor.split(';')[0]}</span>
        </div>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`strategy-detail-${strategy.id}`}
          className="w-full mt-3 flex items-center justify-between px-3 py-2 rounded-lg bg-forest-50 hover:bg-forest-100 text-forest-700 text-sm font-medium transition-colors">
          {open ? 'Hide tactics & tips' : 'Show classroom tactics & tips'}
          {open ? <ChevronUp /> : <ChevronDown />}
        </button>
        {open && (
          <div id={`strategy-detail-${strategy.id}`} className="mt-4 space-y-4">
            <div className="text-xs text-forest-500 bg-forest-50 rounded-lg px-3 py-2"><strong>Policy Anchor:</strong> {strategy.policyAnchor}</div>
            <div className="text-xs text-forest-500 bg-gold-50 rounded-lg px-3 py-2"><strong>NSC Strand:</strong> {strategy.nscStrand}</div>
            <div><h4 className="font-display text-sm font-semibold text-forest-800 mb-3">Classroom Tactics</h4>
              <div className="space-y-3">{strategy.tactics.map((tactic, i) => (
                <div key={i} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-forest-100 text-forest-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <div><p className="text-sm font-semibold text-forest-800">{tactic.name}</p><p className="text-sm text-forest-600 leading-relaxed mt-0.5">{tactic.description}</p></div>
                </div>))}</div></div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-amber-800 mb-2">\u{1F4A1} Teacher Tips</h4>
              <ul className="space-y-1.5">{strategy.tips.map((tip, i) => (
                <li key={i} className="text-sm text-amber-700 flex items-start gap-2"><span className="text-amber-500 flex-shrink-0 mt-0.5">\u203A</span>{tip}</li>))}</ul></div>
          </div>)}
      </div>
    </article>
  )
}

export default function TeachingStrategies() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', ...new Set(strategies.map(s => s.category))]
  const filtered = activeCategory === 'All' ? strategies : strategies.filter(s => s.category === activeCategory)
  return (
    <div>
      <div className="bg-white border-b border-forest-100 px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <span className="tag tag-gold mb-3">6 Strategy Clusters \u00B7 NCLP & NSC Grounded</span>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-forest-900 mb-2">Teaching Strategies</h1>
          <p className="text-forest-500 text-sm md:text-base max-w-2xl">Evidence-grounded instructional strategy clusters for Jamaican literacy educators. Each strategy links to its national policy anchor, NSC strand, and provides immediately actionable classroom tactics.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 space-y-6">
        <div role="group" aria-label="Filter by strategy category" className="flex flex-wrap gap-2">
          {categories.map(cat => (<button key={cat} onClick={() => setActiveCategory(cat)} aria-pressed={activeCategory === cat}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-forest-800 text-white' : 'bg-white text-forest-600 border border-forest-200 hover:border-forest-400 hover:text-forest-800'}`}>{cat}</button>))}
        </div>
        <div className="grid md:grid-cols-2 gap-5" role="list" aria-label={`${filtered.length} teaching strategies`}>
          {filtered.map(strategy => (<div key={strategy.id} role="listitem"><StrategyCard strategy={strategy} /></div>))}
        </div>
        <div className="bg-tech-50 border border-tech-200 rounded-xl p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-tech-600 text-white flex items-center justify-center flex-shrink-0 text-lg">\u{1F4C5}</div>
            <div>
              <h2 className="font-display text-base font-semibold text-tech-800 mb-1">2025 Timetabled Reading Initiative \u2014 What It Means for You</h2>
              <p className="text-sm text-tech-700 leading-relaxed">From 2025, reading is a <strong>timetabled subject</strong> for Grades 1\u20133 with a minimum of 2 hours per week. Every Grade 1\u20133 teacher is expected to deliver explicit reading instruction covering <strong>fluency, vocabulary, word recognition, and reading for enjoyment</strong>. This is a shift from integrated literacy to protected instructional time. Use the Early Grade Structured Reading strategy as your framework.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">{['Fluency', 'Vocabulary', 'Word Recognition', 'Reading for Enjoyment'].map(c => (<span key={c} className="tag tag-tech">{c}</span>))}</div>
            </div>
          </div>
        </div>
        <div className="bg-gold-50 border border-gold-200 rounded-xl p-5">
          <h2 className="font-display text-base font-semibold text-gold-800 mb-2">\u{1F1EF}\u{1F1F2} Teaching in a Bilingual Classroom</h2>
          <p className="text-sm text-gold-700 leading-relaxed mb-2">Jamaica's classrooms are bilingual. The NSC explicitly requires students to <strong>recognise, value, and distinguish</strong> Jamaican Creole (JC) from Standard Jamaican English (SJE). This is not a deficit perspective \u2014 it is a <strong>linguistic asset approach</strong>.</p>
          <p className="text-sm text-gold-700 leading-relaxed">The Language Education Policy (2001, draft) endorses oral JC use in early years (K\u20133) to facilitate English literacy. Teachers should feel empowered to use JC orally to activate prior knowledge, then bridge deliberately into SJE academic register.</p>
        </div>
      </div>
    </div>
  )
}