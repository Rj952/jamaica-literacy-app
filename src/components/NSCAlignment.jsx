import { useState } from 'react'

const alignmentData = [
  {
    policy:       'Task Force on Educational Reform (2004)',
    agency:       'Government / Education Sector',
    intent:       'Sets literacy-for-all as a strategic objective; notes remediation not yet systematised.',
    curriculumAnchor: 'Upstream agenda-setter — triggers NCLP design',
    gradeRange:   'System-wide',
    nscStrands:   ['All Strands — foundational mandate'],
    outcomes:     ['Policy-level push toward system remediation', 'Accountability for all students achieving literacy'],
    classroom:    'Teachers should understand this as the rationale for diagnostic tools and reading coaches in their schools.',
    assessment:   'Notes pilots and absence of systematic remediation as baseline problem',
    confidence:   'high',
    tags:         ['Foundation', 'Reform'],
  },
  {
    policy:       'NCLP — National Comprehensive Literacy Programme (2007)',
    agency:       'Ministry — National Literacy Coordinator; Literacy Specialists; Reading Coaches',
    intent:       'Consolidates literacy interventions; targets primary literacy; Grade 4 Literacy Test accountability.',
    curriculumAnchor: 'NCLP curriculum guides and literacy standards → NSC attainment targets',
    gradeRange:   'Grades 1–6',
    nscStrands:   ['Reading', 'Writing', 'Language Study'],
    outcomes:     ['Standards and benchmarks for reading by grade', 'Specialist coaching support for teachers', 'Parental involvement as a core pillar', 'Standardised assessment programme'],
    classroom:    'Access NCLP Diagnostic Reading Inventory for group placement. Work with reading coaches for intervention design. Deliver remedial/corrective reading programmes Grades 1–6.',
    assessment:   'Grade 4 Literacy Test (1st & 2nd admin); mastery rose from 52% (1999) to 76.3% (2013)',
    confidence:   'high',
    tags:         ['Programme', 'Assessment', 'Coaching'],
  },
  {
    policy:       'Language Education Policy (2001 — draft)',
    agency:       'Ministry of Education',
    intent:       'Maintains SJE as official language; endorses oral JC use in early years to scaffold English literacy.',
    curriculumAnchor: 'Early Childhood Curriculum Guide (K–3) → NSC Language Study Grades 7–9',
    gradeRange:   'K–9',
    nscStrands:   ['Language Study', 'Speaking & Listening'],
    outcomes:     ['Oral JC use permitted and encouraged in K–3', 'SJE↔JC contrastive awareness by secondary', 'Culturally relevant materials required'],
    classroom:    'Use JC orally to activate prior knowledge in K–3. Teach SJE/JC register distinction explicitly. Build two-column "language bridge" charts in Grades 4–9.',
    assessment:   'Not formally assessed; creates practice ambiguity — draft status is a governance gap',
    confidence:   'moderate',
    tags:         ['Language Policy', '⚠ Draft Status', 'JC/SJE'],
  },
  {
    policy:       'NESP 2011–2020 (published 2012)',
    agency:       'Ministry of Education',
    intent:       'Strategic emphasis on literacy/numeracy; calls for learner-centred, competency-based curricula → gives rise to the NSC.',
    curriculumAnchor: 'NESP → NSC development (Grades 1–9)',
    gradeRange:   'Grades 1–13',
    nscStrands:   ['All Strands — underpins NSC design philosophy'],
    outcomes:     ['Competency-based learning replacing content coverage', 'Communication and critical thinking as core competencies', 'Learner-centred pedagogy as design principle'],
    classroom:    'Lessons must demonstrate competency achievement, not just content delivery. Use performance tasks that require communication and critical thinking through literacy.',
    assessment:   'Cited as basis for NSC attainment targets and PEP assessment reform',
    confidence:   'high',
    tags:         ['Strategic', 'Curriculum Design'],
  },
  {
    policy:       'NSC Language & Literature (©2019)',
    agency:       'Ministry — Curriculum Units',
    intent:       'Encodes national literacy expectations through standards, attainment targets, and classroom assessment criteria.',
    curriculumAnchor: 'NSC APSE III — Language & Literature Grades 7–9; NSC Grades 1–6 documents',
    gradeRange:   'Grades 1–9',
    nscStrands:   ['Reading', 'Writing', 'Speaking & Listening', 'Language Study', 'Study Skills'],
    outcomes:     ['Reading for meaning and enjoyment', 'Reading for information (print + screen)', 'Writing process for different purposes', 'Appropriate use of SJE and JC', 'Distinguishing home language from SJE', 'Study skills and research literacy'],
    classroom:    'Every lesson references a specific NSC strand and attainment target. Include screen reading and digital writing. Contrastive language work must be part of Language Study units.',
    assessment:   'Built-in assessment criteria statements in curriculum guide; aligned to PEP at primary level',
    confidence:   'high',
    tags:         ['Curriculum', 'Primary Source', 'Active'],
  },
  {
    policy:       'ICT in Education Policy (2022)',
    agency:       'Ministry of Education',
    intent:       'ICT to transform teaching and learning; rolling master plan; ties to NSC screen-literacy requirements.',
    curriculumAnchor: 'NSC "on-screen" reading/writing targets; BYOD Policy',
    gradeRange:   'K–13',
    nscStrands:   ['Reading', 'Writing', 'Study Skills'],
    outcomes:     ['Reading on screen as an NSC attainment target', 'Writing on screen as an NSC attainment target', 'Research using digital sources', 'Multimodal text creation'],
    classroom:    'Plan device use in lessons explicitly tied to NSC on-screen literacy targets. Use BYOD policy to justify device integration. Teach how to evaluate online sources (NSC Study Skills strand).',
    assessment:   'Policy commits to M&E; NSC contains ICT-relevant literacy requirements as formal attainment targets',
    confidence:   'high',
    tags:         ['Technology', 'ICT Policy', 'Digital Literacy'],
  },
  {
    policy:       'Timetabled Reading Grades 1–3 (2025)',
    agency:       'Ministry leadership; Teacher Training Function',
    intent:       'Protected 2-hr/week reading block; massive teacher retooling on core reading components.',
    curriculumAnchor: 'NSC early-grade reading sub-strands: word recognition, vocabulary, fluency, enjoyment',
    gradeRange:   'Grades 1–3',
    nscStrands:   ['Reading'],
    outcomes:     ['Reading for fluency as explicit instruction target', 'Vocabulary building as explicit instruction target', 'Reading for enjoyment as instruction target', 'Word recognition as explicit instruction target'],
    classroom:    'All Grade 1–3 teachers must plan and deliver a dedicated, timetabled reading block — every week, minimum 2 hours. Cover all four components: fluency, vocabulary, word recognition, enjoyment.',
    assessment:   'Policy signal; monitoring dependent on teacher training rollout and materials deployment',
    confidence:   'moderate',
    tags:         ['Current', '2025', 'Early Primary'],
  },
]

const confidenceConfig = {
  high:     { label: 'Strong Alignment',   color: 'bg-forest-100 text-forest-700' },
  moderate: { label: 'Partial Alignment',  color: 'bg-gold-100 text-gold-700' },
  low:      { label: 'Developing',         color: 'bg-amber-100 text-amber-700' },
}

const strandColors = {
  'Reading':              'tag-forest',
  'Writing':              'tag-forest',
  'Speaking & Listening': 'tag-gold',
  'Language Study':       'tag-gold',
  'Study Skills':         'tag-tech',
  'All Strands — foundational mandate':           'tag-forest',
  'All Strands — underpins NSC design philosophy':'tag-forest',
}

function AlignmentRow({ row, isEven }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <tr className={`${isEven ? 'bg-forest-50/40' : 'bg-white'} hover:bg-gold-50/30 transition-colors`}>
        {/* Policy */}
        <td className="px-4 py-3 align-top">
          <div className="font-semibold text-sm text-forest-800 leading-snug">{row.policy}</div>
          <div className="text-xs text-forest-400 mt-0.5">{row.gradeRange}</div>
          <div className="flex flex-wrap gap-1 mt-1.5">
            {row.tags.map(t => (
              <span key={t} className={`tag text-xs ${t.includes('⚠') ? 'bg-amber-100 text-amber-700' : 'tag-forest'}`}>
                {t}
              </span>
            ))}
          </div>
        </td>

        {/* NSC Strands */}
        <td className="px-4 py-3 align-top">
          <div className="flex flex-wrap gap-1">
            {row.nscStrands.map(s => (
              <span key={s} className={`tag text-xs ${strandColors[s] || 'tag-forest'}`}>{s}</span>
            ))}
          </div>
        </td>

        {/* Curriculum Anchor */}
        <td className="px-4 py-3 align-top text-sm text-forest-700 leading-relaxed">
          {row.curriculumAnchor}
        </td>

        {/* Alignment confidence */}
        <td className="px-4 py-3 align-top">
          <span className={`tag text-xs ${confidenceConfig[row.confidence]?.color}`}>
            {confidenceConfig[row.confidence]?.label}
          </span>
        </td>

        {/* Expand button */}
        <td className="px-4 py-3 align-top">
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="text-xs text-tech-600 hover:text-tech-800 font-medium whitespace-nowrap"
          >
            {expanded ? '↑ Less' : '↓ More'}
          </button>
        </td>
      </tr>

      {expanded && (
        <tr className={isEven ? 'bg-forest-50/40' : 'bg-white'}>
          <td colSpan={5} className="px-4 pb-5 pt-0">
            <div className="border border-forest-100 rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-forest-100">
                <div className="p-4">
                  <h4 className="text-xs font-bold text-forest-500 uppercase tracking-wider mb-2">Learning Outcomes</h4>
                  <ul className="space-y-1">
                    {row.outcomes.map((o, i) => (
                      <li key={i} className="text-sm text-forest-700 flex items-start gap-1.5">
                        <span className="text-forest-400 mt-0.5 flex-shrink-0">›</span>{o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gold-50">
                  <h4 className="text-xs font-bold text-gold-600 uppercase tracking-wider mb-2">🏫 Classroom Implication</h4>
                  <p className="text-sm text-forest-700 leading-relaxed">{row.classroom}</p>
                </div>
                <div className="p-4 bg-tech-50">
                  <h4 className="text-xs font-bold text-tech-600 uppercase tracking-wider mb-2">📊 Assessment Signal</h4>
                  <p className="text-sm text-forest-700 leading-relaxed">{row.assessment}</p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default function NSCAlignment() {
  const [filter, setFilter] = useState('All')

  const strandFilters = ['All', 'Reading', 'Writing', 'Language Study', 'Study Skills', 'Technology']
  const filtered = filter === 'All'
    ? alignmentData
    : alignmentData.filter(r =>
        filter === 'Technology'
          ? r.tags.some(t => t.toLowerCase().includes('tech') || t.toLowerCase().includes('ict') || t.toLowerCase().includes('digital'))
          : r.nscStrands.some(s => s.includes(filter))
      )

  return (
    <div>
      {/* Page Header */}
      <div className="bg-white border-b border-forest-100 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <span className="tag tag-tech mb-3">Policy → Curriculum Crosswalk</span>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-forest-900 mb-2">
            NSC Alignment Table
          </h1>
          <p className="text-forest-500 text-sm md:text-base max-w-2xl">
            A comprehensive crosswalk mapping each national literacy policy to its NSC curriculum anchor,
            attainment targets, classroom implications, and assessment signals.
            Expand any row for full detail.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 space-y-5">
        {/* Strand filter */}
        <div role="group" aria-label="Filter by NSC strand" className="flex flex-wrap gap-2">
          {strandFilters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-forest-800 text-white'
                  : 'bg-white text-forest-600 border border-forest-200 hover:border-forest-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Alignment table — scrollable on mobile */}
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left" aria-label="NSC policy alignment crosswalk">
              <thead>
                <tr className="bg-forest-800 text-white">
                  <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-wider w-1/4">
                    Policy / Programme
                  </th>
                  <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-wider w-1/6">
                    NSC Strand(s)
                  </th>
                  <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-wider w-1/4">
                    Curriculum Anchor
                  </th>
                  <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-wider w-1/8">
                    Alignment
                  </th>
                  <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-wider w-1/12">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest-100">
                {filtered.map((row, i) => (
                  <AlignmentRow key={i} row={row} isEven={i % 2 === 0} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-forest-500">
          <span className="font-semibold">Alignment Key:</span>
          {Object.entries(confidenceConfig).map(([k, v]) => (
            <span key={k} className={`tag ${v.color}`}>{v.label}</span>
          ))}
        </div>

        {/* Recommendations Summary */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card bg-forest-50 border-forest-200">
            <h3 className="font-display text-sm font-semibold text-forest-800 mb-3">
              🚀 Short-Term Actions
            </h3>
            <ul className="space-y-2 text-sm text-forest-700">
              {[
                'Publish a national Literacy Progression Map (K–9)',
                'Convert 2025 timetabled reading into enforceable school-level guidance',
                'Standardise remediation triggers using NCLP diagnostic tools',
              ].map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-forest-500 mt-0.5 font-bold">{i + 1}.</span>{a}
                </li>
              ))}
            </ul>
          </div>

          <div className="card bg-gold-50 border-gold-200">
            <h3 className="font-display text-sm font-semibold text-gold-800 mb-3">
              📅 Medium-Term Actions
            </h3>
            <ul className="space-y-2 text-sm text-gold-700">
              {[
                'Formally ratify Language Education Policy with NSC-aligned guidance',
                'Institutionalise literacy coaching as a permanent staffing function',
                'Align ICT rolling master plan to NSC literacy outcomes (not device counts)',
              ].map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gold-500 mt-0.5 font-bold">{i + 1}.</span>{a}
                </li>
              ))}
            </ul>
          </div>

          <div className="card bg-tech-50 border-tech-200">
            <h3 className="font-display text-sm font-semibold text-tech-800 mb-3">
              🔭 Long-Term Actions
            </h3>
            <ul className="space-y-2 text-sm text-tech-700">
              {[
                'Build a public national learning measurement package (NSC-grade mapped)',
                'Create a Birth–Grade 3 oral language to text developmental continuum',
              ].map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-tech-500 mt-0.5 font-bold">{i + 1}.</span>{a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-xs text-forest-400 text-center pb-2">
          Crosswalk grounded in Ministry Paper 88 (2014), NSC Language & Literature Guide (©2019),
          and official Jamaica government sources. Recommendations drawn from the source policy document.
        </p>
      </div>
    </div>
  )
}
