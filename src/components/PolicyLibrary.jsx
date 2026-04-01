import { useState } from 'react'
import { policies, eraLabels } from '../data/policies'

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
)
const ExternalLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
)
const CheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const eraCardColors = {
  foundation: 'border-gold-300 bg-gold-50',
  programme:  'border-forest-200 bg-forest-50',
  curriculum: 'border-forest-300 bg-forest-50',
  technology: 'border-tech-200 bg-tech-50',
  current:    'border-tech-300 bg-tech-50',
}
const eraAccent = {
  foundation: 'text-gold-700',
  programme:  'text-forest-700',
  curriculum: 'text-forest-800',
  technology: 'text-tech-700',
  current:    'text-tech-700',
}
const eraBadge = {
  foundation: 'tag-gold',
  programme:  'tag-forest',
  curriculum: 'tag-forest',
  technology: 'tag-tech',
  current:    'tag-tech',
}
const eraYearColor = {
  foundation: 'bg-gold-500',
  programme:  'bg-forest-600',
  curriculum: 'bg-forest-700',
  technology: 'bg-tech-500',
  current:    'bg-tech-600',
}

function PolicyCard({ policy, onClick }) {
  return (
    <article
      className={`card-hover rounded-xl border-2 ${eraCardColors[policy.era]} transition-all duration-200`}
      onClick={() => onClick(policy)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${policy.shortName}`}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(policy)}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span
          className={`inline-flex items-center justify-center w-12 h-7 rounded-md text-white text-xs font-bold font-mono ${eraYearColor[policy.era]}`}
        >
          {policy.year}
        </span>
        <div className="flex gap-1.5 flex-wrap justify-end">
          <span className={`tag ${eraBadge[policy.era]}`}>{eraLabels[policy.era].label}</span>
          {policy.status.includes('Draft') && (
            <span className="tag bg-amber-100 text-amber-700">Draft Status</span>
          )}
        </div>
      </div>

      <h3 className={`font-display text-base font-semibold leading-snug mb-2 ${eraAccent[policy.era]}`}>
        {policy.shortName}
      </h3>
      <p className="text-sm text-forest-600 leading-relaxed line-clamp-3 mb-3">
        {policy.intent}
      </p>

      <div className="flex items-center justify-between text-xs text-forest-400">
        <span>{policy.gradeRange}</span>
        <span className="font-medium text-forest-600 hover:text-forest-800 flex items-center gap-1">
          View details →
        </span>
      </div>
    </article>
  )
}

function PolicyModal({ policy, onClose }) {
  if (!policy) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90dvh] overflow-y-auto z-10"
        tabIndex={-1}
      >
        {/* Header */}
        <div className={`px-6 py-5 border-b border-forest-100 sticky top-0 bg-white rounded-t-2xl z-10`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className={`tag ${eraBadge[policy.era]}`}>{eraLabels[policy.era].label}</span>
                <span className="font-mono text-xs text-forest-500">{policy.year}</span>
                {policy.status.includes('Draft') && (
                  <span className="tag bg-amber-100 text-amber-700">⚠ Draft / Not Formally Ratified</span>
                )}
              </div>
              <h2
                id="policy-modal-title"
                className="font-display text-xl font-semibold text-forest-900 leading-snug"
              >
                {policy.name}
              </h2>
              <p className="text-sm text-forest-500 mt-0.5">{policy.agency}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close policy details"
              className="p-1.5 rounded-lg text-forest-400 hover:text-forest-700 hover:bg-forest-50 flex-shrink-0 transition-colors"
            >
              <XIcon />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
          {/* Intent */}
          <div className="bg-forest-50 rounded-xl p-4">
            <h3 className="text-xs font-bold text-forest-500 uppercase tracking-wider mb-2">Policy Intent</h3>
            <p className="text-sm text-forest-700 leading-relaxed">{policy.intent}</p>
          </div>

          {/* Key Points */}
          <div>
            <h3 className="text-xs font-bold text-forest-500 uppercase tracking-wider mb-3">Key Points</h3>
            <ul className="space-y-2" aria-label="Key policy points">
              {policy.keyPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-forest-700">
                  <span className="text-forest-500 mt-0.5 flex-shrink-0"><CheckCircle /></span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Two-column detail */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gold-50 rounded-xl p-4">
              <h3 className="text-xs font-bold text-gold-700 uppercase tracking-wider mb-2">
                Curriculum Anchor
              </h3>
              <p className="text-sm text-forest-700 leading-relaxed">{policy.curriculumAnchor}</p>
              <p className="text-xs text-forest-500 mt-2">Grade Range: <strong>{policy.gradeRange}</strong></p>
            </div>

            <div className="bg-tech-50 rounded-xl p-4">
              <h3 className="text-xs font-bold text-tech-700 uppercase tracking-wider mb-2">
                Assessment Signal
              </h3>
              <p className="text-sm text-forest-700 leading-relaxed">{policy.assessmentSignal}</p>
            </div>
          </div>

          {/* Classroom Implication */}
          <div className="border border-forest-200 rounded-xl p-4">
            <h3 className="text-xs font-bold text-forest-600 uppercase tracking-wider mb-2">
              🏫 Classroom Implication
            </h3>
            <p className="text-sm text-forest-700 leading-relaxed">{policy.classroomImplication}</p>
          </div>

          {/* Source link */}
          {policy.url && (
            <a
              href={policy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-tech-600 hover:text-tech-800 hover:underline"
            >
              <ExternalLink />
              View primary source document
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const ALL_ERAS = 'all'

export default function PolicyLibrary() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter]     = useState(ALL_ERAS)

  const eras = [ALL_ERAS, ...Object.keys(eraLabels)]
  const filtered = filter === ALL_ERAS ? policies : policies.filter(p => p.era === filter)

  return (
    <div>
      {/* Page Header */}
      <div className="bg-white border-b border-forest-100 px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <span className="tag tag-forest mb-3">8 Policies • 2001–2025</span>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-forest-900 mb-2">
            National Literacy Policy Library
          </h1>
          <p className="text-forest-500 text-sm md:text-base max-w-2xl">
            Jamaica's literacy policy environment operates as a layered “policy stack.”
            Each card links the policy to its NSC curriculum anchor and classroom implications.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 space-y-6">
        {/* Filter bar */}
        <div
          role="group"
          aria-label="Filter policies by era"
          className="flex flex-wrap gap-2"
        >
          {eras.map(era => (
            <button
              key={era}
              onClick={() => setFilter(era)}
              aria-pressed={filter === era}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === era
                  ? 'bg-forest-800 text-white'
                  : 'bg-white text-forest-600 border border-forest-200 hover:border-forest-400 hover:text-forest-800'
              }`}
            >
              {era === ALL_ERAS ? 'All Eras' : eraLabels[era]?.label}
              {era !== ALL_ERAS && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({policies.filter(p => p.era === era).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Policy grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
          aria-label={`${filtered.length} policies${filter !== ALL_ERAS ? ` in ${eraLabels[filter]?.label}` : ''}`}
        >
          {filtered.map(policy => (
            <div key={policy.id} role="listitem">
              <PolicyCard policy={policy} onClick={setSelected} />
            </div>
          ))}
        </div>

        {/* Governance gap callout */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h2 className="font-display text-base font-semibold text-amber-800 mb-2">
            ⚠ Documented Governance Gap: Language Education Policy
          </h2>
          <p className="text-sm text-amber-700 leading-relaxed">
            The Language Education Policy (2001) is widely described in academic and stakeholder sources as
            a <strong>draft document that has not been formally approved</strong>. This creates a mismatch
            between the bilingual classroom ecology that teachers manage daily and the formal policy status
            that would legitimate and standardise SJE↔JC contrastive approaches. The NSC already expects
            this practice — the policy needs to catch up.
          </p>
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <PolicyModal
          policy={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}
