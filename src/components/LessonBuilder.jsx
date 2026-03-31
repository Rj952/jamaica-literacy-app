import { useState } from 'react'
import { gradeLevels, literacyStrands, languageContexts, durations } from '../data/lessonConfig'

const Sparkles  = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
const Download  = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
const Refresh   = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
const Key       = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>
const Copy      = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
const Check     = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>

const SYSTEM_PROMPT = `You are an expert Jamaica literacy educator and curriculum designer with deep knowledge of:
- The National Standards Curriculum (NSC) Language & Literature Grades 1\u20139 (\u00A92019)
- The National Comprehensive Literacy Programme (NCLP, initiated 2007)
- Jamaica's bilingual ecology: Standard Jamaican English (SJE) and Jamaican Creole (JC)
- The 2025 Timetabled Reading Initiative (Grades 1\u20133, minimum 2 hrs/week)
- The ICT in Education Policy (2022) and BYOD policy
- The Language Education Policy (2001 draft) endorsing oral JC use in early years
- Ministry Paper 88 and its evidence base for reading coaches and diagnostic tools

Your lessons must:
1. Reference the specific NSC strand and attainment target by name
2. Reference the relevant national policy (NCLP, ICT Policy, Language Education Policy, or 2025 Initiative as appropriate)
3. Use culturally relevant Jamaican contexts, names, and examples throughout
4. Address the bilingual reality: acknowledge when JC bridging or SJE/JC contrastive work is appropriate
5. Include technology integration where the context calls for it (screen reading, digital writing, research)
6. Be immediately practical and classroom-ready for a Jamaican primary or secondary teacher
7. Include differentiation suggestions for struggling readers and advanced learners
8. Include a formative assessment aligned to the NSC attainment target

Format the lesson using clear markdown headings (##, ###) for: Lesson Overview, NSC Alignment, Policy Anchor, Learning Objectives, Materials, Lesson Phases (with timings), Differentiation, Formative Assessment, Extension Activity.`

function buildUserPrompt(form) {
  const strand = literacyStrands.find(s => s.value === form.strand)
  const attainmentList = strand?.attainmentTargets.join(', ') || ''
  const langCtx = languageContexts.find(l => l.value === form.langContext)
  return `Create a complete, classroom-ready literacy lesson for:

**Grade Level:** ${form.grade}
**NSC Strand:** ${form.strand}
**Attainment Target Focus:** ${form.attainmentTarget || 'Teacher to select from: ' + attainmentList}
**Language Context:** ${form.langContext} \u2014 ${langCtx?.description || ''}
**Lesson Duration:** ${form.duration} minutes
**Topic / Text / Theme:** ${form.topic || 'Teacher may select a culturally relevant Jamaican text or topic'}
**Number of Students:** ${form.studentCount || 'Typical Jamaican classroom (25\u201335 students)'}
**Special Considerations:** ${form.notes || 'None specified'}

Please generate a complete, print-ready lesson plan. Use specific Jamaican names, places, cultural references, and examples. Make it directly usable by a Jamaican teacher today.`
}

function renderMarkdown(text) {
  return text
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\`(.+?)\`/g, '<code>$1</code>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    .replace(/^(?!<[h|u|l])(.*\S.*)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '')
}

export default function LessonBuilder({ apiKey, onOpenSettings }) {
  const [form, setForm] = useState({
    grade: '', strand: '', attainmentTarget: '', langContext: 'SJE Focus',
    duration: '45', topic: '', studentCount: '', notes: '',
  })
  const [lesson, setLesson]     = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const [copied, setCopied]     = useState(false)
  const selectedStrand = literacyStrands.find(s => s.value === form.strand)
  const canGenerate    = apiKey && form.grade && form.strand && !loading
  const setField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (field === 'strand') setForm(prev => ({ ...prev, strand: value, attainmentTarget: '' }))
  }

  const generate = async () => {
    if (!canGenerate) return
    setLoading(true); setError(''); setLesson('')
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2500,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content: buildUserPrompt(form) }],
        }),
      })
      if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error(err?.error?.message || `API error ${res.status}`) }
      const data = await res.json()
      setLesson(data.content?.find(b => b.type === 'text')?.text || '')
    } catch (e) {
      setError(e.message || 'Something went wrong. Please check your API key and try again.')
    } finally { setLoading(false) }
  }

  const handleCopy = async () => { if (!lesson) return; await navigator.clipboard.writeText(lesson); setCopied(true); setTimeout(() => setCopied(false), 2000) }
  const handleDownload = () => {
    if (!lesson) return
    const blob = new Blob([lesson], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url
    a.download = `JLG_Lesson_${form.grade.replace(' ', '')}_${form.strand.replace(/\s/g, '_')}.txt`
    a.click(); URL.revokeObjectURL(url)
  }

  return (
    <div>
      <div className="bg-gradient-to-br from-tech-700 to-tech-600 text-white px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3 text-tech-200"><Sparkles /><span className="text-sm font-medium">AI-Powered \u00B7 NSC-Aligned \u00B7 Jamaica Context</span></div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Lesson Builder</h1>
          <p className="text-tech-100 text-sm md:text-base max-w-xl">Generate complete, classroom-ready literacy lessons grounded in the NSC, NCLP, and Jamaica's bilingual classroom reality. Powered by Claude AI.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 space-y-6">
        {!apiKey && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <Key /><div className="flex-1"><p className="text-sm font-semibold text-amber-800 mb-0.5">API Key Required</p><p className="text-sm text-amber-700">The Lesson Builder uses the Anthropic Claude API. Add your key in Settings to generate lessons.</p></div>
            <button onClick={onOpenSettings} className="btn-gold text-xs px-3 py-1.5 flex-shrink-0">Add Key</button>
          </div>
        )}
        <div className="grid lg:grid-cols-5 gap-6">
          <form className="lg:col-span-2 card space-y-4" onSubmit={e => { e.preventDefault(); generate() }} aria-label="Lesson generation form">
            <h2 className="font-display text-lg font-semibold text-forest-900">Lesson Details</h2>
            <div><label htmlFor="grade-select" className="label">Grade Level *</label>
              <select id="grade-select" value={form.grade} onChange={e => setField('grade', e.target.value)} className="select-field" required>
                <option value="">Select grade\u2026</option>
                {['Early Primary (1\u20133)', 'Upper Primary (4\u20136)', 'Secondary (7\u20139)'].map(band => (
                  <optgroup key={band} label={band}>{gradeLevels.filter(g => g.band === band.split(' ')[0] + ' ' + band.split(' ')[1]).map(g => (
                    <option key={g.value} value={g.value}>{g.label}</option>))}</optgroup>))}
              </select></div>
            <div><label htmlFor="strand-select" className="label">NSC Literacy Strand *</label>
              <select id="strand-select" value={form.strand} onChange={e => setField('strand', e.target.value)} className="select-field" required>
                <option value="">Select strand\u2026</option>
                {literacyStrands.map(s => (<option key={s.value} value={s.value}>{s.icon} {s.label}</option>))}
              </select></div>
            {selectedStrand && (<div><label htmlFor="at-select" className="label">Attainment Target</label>
              <select id="at-select" value={form.attainmentTarget} onChange={e => setField('attainmentTarget', e.target.value)} className="select-field">
                <option value="">AI selects appropriate target\u2026</option>
                {selectedStrand.attainmentTargets.map(t => (<option key={t} value={t}>{t}</option>))}
              </select></div>)}
            <div><label htmlFor="lang-select" className="label">Language Context</label>
              <select id="lang-select" value={form.langContext} onChange={e => setField('langContext', e.target.value)} className="select-field">
                {languageContexts.map(l => (<option key={l.value} value={l.value}>{l.label}</option>))}
              </select>
              <p className="mt-1 text-xs text-forest-400">{languageContexts.find(l => l.value === form.langContext)?.description}</p></div>
            <div><label htmlFor="dur-select" className="label">Lesson Duration</label>
              <select id="dur-select" value={form.duration} onChange={e => setField('duration', e.target.value)} className="select-field">
                {durations.map(d => (<option key={d.value} value={d.value}>{d.label}</option>))}
              </select></div>
            <div><label htmlFor="topic-input" className="label">Topic / Text / Theme</label>
              <input id="topic-input" type="text" value={form.topic} onChange={e => setField('topic', e.target.value)} placeholder="e.g. Anancy stories, weather, community helpers\u2026" className="input-field" /></div>
            <div><label htmlFor="count-input" className="label">Number of Students</label>
              <input id="count-input" type="text" value={form.studentCount} onChange={e => setField('studentCount', e.target.value)} placeholder="e.g. 30 (Grades 1\u20133)" className="input-field" /></div>
            <div><label htmlFor="notes-input" className="label">Special Considerations</label>
              <textarea id="notes-input" value={form.notes} onChange={e => setField('notes', e.target.value)} placeholder="e.g. Several students below grade level; limited devices; include BYOD activity\u2026" rows={3} className="input-field resize-none" /></div>
            <button type="submit" disabled={!canGenerate} className="btn-gold w-full justify-center">
              {loading ? (<>\u23F3 Generating\u2026</>) : (<><Sparkles /> Generate Lesson</>)}
            </button>
            {!apiKey && <p className="text-xs text-forest-400 text-center">API key required to generate lessons</p>}
          </form>
          <div className="lg:col-span-3 flex flex-col gap-4">
            {lesson && (<div className="flex items-center justify-between"><span className="tag tag-forest">Lesson Generated \u2713</span>
              <div className="flex gap-2">
                <button onClick={handleCopy} className="btn-secondary text-xs px-3 py-1.5">{copied ? <><Check /> Copied!</> : <><Copy /> Copy</>}</button>
                <button onClick={handleDownload} className="btn-secondary text-xs px-3 py-1.5"><Download /> Download</button>
                <button onClick={generate} className="btn-secondary text-xs px-3 py-1.5"><Refresh /> Regenerate</button>
              </div></div>)}
            {error && (<div role="alert" className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700"><strong>Error:</strong> {error}</div>)}
            {loading && (<div className="card animate-pulse space-y-3" aria-live="polite" aria-label="Generating lesson\u2026">
              <div className="h-5 bg-forest-100 rounded w-2/3"/><div className="h-3 bg-forest-100 rounded w-full"/><div className="h-3 bg-forest-100 rounded w-5/6"/><div className="h-3 bg-forest-100 rounded w-4/5"/>
              <div className="h-5 bg-forest-100 rounded w-1/2 mt-4"/><div className="h-3 bg-forest-100 rounded w-full"/><div className="h-3 bg-forest-100 rounded w-3/4"/>
              <p className="text-center text-sm text-forest-400 pt-2">Crafting your Jamaica-context lesson\u2026</p></div>)}
            {lesson && !loading && (<article aria-label="Generated lesson plan" className="card lesson-prose overflow-y-auto max-h-[70dvh]" dangerouslySetInnerHTML={{ __html: renderMarkdown(lesson) }} />)}
            {!lesson && !loading && !error && (<div className="card flex flex-col items-center justify-center text-center py-16 text-forest-400 border-2 border-dashed border-forest-100">
              <div className="text-5xl mb-4">\u{1F4DD}</div><p className="font-display text-lg text-forest-600 mb-1">Your lesson will appear here</p>
              <p className="text-sm">Fill in the form and click <strong>Generate Lesson</strong></p>
              {!apiKey && (<button onClick={onOpenSettings} className="mt-4 btn-secondary text-sm"><Key /> Add API Key First</button>)}</div>)}
          </div>
        </div>
        {selectedStrand && (<div className="card bg-forest-50 border border-forest-200">
          <h3 className="font-display text-sm font-semibold text-forest-800 mb-2">{selectedStrand.icon} NSC Reference: {selectedStrand.label} \u2014 Attainment Targets</h3>
          <ul className="grid sm:grid-cols-2 gap-1">{selectedStrand.attainmentTargets.map((t, i) => (
            <li key={i} className="text-xs text-forest-600 flex items-start gap-1.5"><span className="text-forest-400 mt-0.5">\u203A</span>{t}</li>))}</ul>
        </div>)}
      </div>
    </div>
  )
}