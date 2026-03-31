import { masteryData } from '../data/policies'

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)
const TrendUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
)

const milestones = [
  { year: 2001, event: 'Education White Paper & Language Education Policy',  type: 'foundation' },
  { year: 2004, event: 'Task Force on Educational Reform',                    type: 'foundation' },
  { year: 2007, event: 'NCLP Initiated (National Comprehensive Literacy Programme)', type: 'programme' },
  { year: 2011, event: 'NCLP "12 Pillars" publicly communicated',             type: 'programme' },
  { year: 2012, event: 'NESP 2011\u20132020 Published',                            type: 'programme' },
  { year: 2014, event: 'Ministry Paper 88 & National Literacy Steering Committee', type: 'programme' },
  { year: 2019, event: 'NSC Language & Literature Guide (Grades 7\u20139)',         type: 'curriculum' },
  { year: 2022, event: 'ICT in Education Policy Issued',                       type: 'technology' },
  { year: 2025, event: 'Timetabled Reading \u2014 Grades 1\u20133 & Teacher Retooling', type: 'current' },
]

const typeColors = {
  foundation: 'bg-gold-500',
  programme:  'bg-forest-500',
  curriculum: 'bg-forest-700',
  technology: 'bg-tech-500',
  current:    'bg-tech-600',
}
const typeBadge = {
  foundation: 'tag-gold',
  programme:  'tag-forest',
  curriculum: 'tag-forest',
  technology: 'tag-tech',
  current:    'tag-tech',
}

const quickLinks = [
  {
    id: 'policies',
    title: 'Policy Library',
    desc: 'Explore all 8 national literacy policies and their NSC alignment.',
    color: 'from-forest-800 to-forest-700',
    accent: 'text-gold-400',
    icon: '\u{1F4DA}',
  },
  {
    id: 'lessons',
    title: 'AI Lesson Builder',
    desc: 'Generate NSC-aligned literacy lessons tailored to the Jamaican classroom context.',
    color: 'from-tech-700 to-tech-600',
    accent: 'text-tech-200',
    icon: '\u2728',
  },
  {
    id: 'strategies',
    title: 'Teaching Strategies',
    desc: 'Six research-grounded strategy clusters with practical classroom tactics.',
    color: 'from-forest-700 to-forest-600',
    accent: 'text-gold-300',
    icon: '\u{1F4A1}',
  },
  {
    id: 'alignment',
    title: 'NSC Alignment',
    desc: 'Policy-to-curriculum crosswalk table with classroom and assessment implications.',
    color: 'from-gold-600 to-gold-500',
    accent: 'text-forest-900',
    icon: '\u{1F5C2}\uFE0F',
  },
]

// Simple inline bar chart using divs
function MasteryChart() {
  const recent = masteryData.slice(-8)
  const max = 100
  return (
    <div role="img" aria-label="Grade 4 Literacy Test mastery rates 2006 to 2013, showing steady improvement">
      <div className="flex items-end gap-1.5 h-28">
        {recent.map((d) => (
          <div key={d.year} className="flex-1 flex flex-col items-center gap-0.5">
            <div className="w-full flex flex-col-reverse gap-0.5">
              {/* 2nd admin bar */}
              <div
                className="w-full rounded-sm bg-forest-300"
                style={{ height: `${(d.second / max) * 96}px` }}
                title={`${d.year} 2nd admin: ${d.second}%`}
              />
              {/* 1st admin bar overlaid */}
              <div
                className="w-full rounded-sm bg-forest-600"
                style={{ height: `${(d.first / max) * 96}px`, marginBottom: '-' + (d.first / max) * 96 + 'px' }}
                title={`${d.year} 1st admin: ${d.first}%`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-1.5 mt-1">
        {recent.map((d) => (
          <div key={d.year} className="flex-1 text-center text-xs text-forest-400 font-mono">
            {String(d.year).slice(2)}
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-3 text-xs text-forest-600">
        <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded-sm bg-forest-600"/> 1st Admin</span>
        <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded-sm bg-forest-300"/> 2nd Admin</span>
      </div>
    </div>
  )
}

export default function Dashboard({ onNavigate }) {
  const first1999  = masteryData[0].first
  const first2013  = masteryData[masteryData.length - 1].first
  const second2013 = masteryData[masteryData.length - 1].second

  return (
    <div>
      {/* Hero */}
      <section
        className="bg-forest-800 text-white px-6 py-12 md:py-16 relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-leaf-pattern opacity-40 pointer-events-none" aria-hidden="true"/>
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gold-500 opacity-10 pointer-events-none" aria-hidden="true"/>

        <div className="relative max-w-3xl">
          <div className="tag tag-gold mb-4">National Standards Curriculum \u2022 NCLP \u2022 2025 Initiative</div>
          <h1
            id="hero-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            Jamaica Literacy Guide
          </h1>
          <p className="text-forest-200 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            A policy-grounded resource for Jamaican literacy educators. Navigate national literacy policy,
            design NSC-aligned lessons with AI support, and apply evidence-based teaching strategies
            for every classroom context \u2014 including Standard Jamaican English and Jamaican Creole.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => onNavigate('lessons')} className="btn-gold">
              Build a Lesson <ArrowRight />
            </button>
            <button onClick={() => onNavigate('policies')} className="btn-secondary bg-transparent border-forest-600 text-forest-100 hover:bg-forest-700 hover:text-white">
              Explore Policies <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 space-y-10">

        {/* Key Stats */}
        <section aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">National literacy performance statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="card flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center flex-shrink-0 text-forest-600">
                <TrendUp />
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-forest-800">
                  {first1999}% \u2192 {first2013}%
                </div>
                <div className="text-sm text-forest-500 mt-0.5">
                  Grade 4 Literacy Mastery (1st admin, 1999\u20132013)
                </div>
              </div>
            </div>

            <div className="card flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-tech-100 flex items-center justify-center flex-shrink-0 text-tech-600">
                <span className="text-lg font-bold font-mono">2</span>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-forest-800">{second2013}%</div>
                <div className="text-sm text-forest-500 mt-0.5">
                  2nd admin mastery by 2013 \u2014 near Ministry target
                </div>
              </div>
            </div>

            <div className="card flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0 text-gold-700 text-lg font-bold">
                90
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-forest-800">450</div>
                <div className="text-sm text-forest-500 mt-0.5">
                  Primary schools supported by NCLP reading coaches (2013)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chart + Context */}
        <section aria-labelledby="chart-heading" className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 card">
            <h2 id="chart-heading" className="font-display text-lg font-semibold text-forest-800 mb-1">
              Grade 4 Literacy Test \u2014 Mastery Trend
            </h2>
            <p className="text-xs text-forest-500 mb-4">Public schools, 2006\u20132013 \u00B7 Source: Ministry Paper 88</p>
            <MasteryChart />
          </div>

          <div className="md:col-span-2 card bg-forest-800 text-white">
            <h2 className="font-display text-lg font-semibold text-gold-400 mb-3">
              The Policy Stack
            </h2>
            <p className="text-sm text-forest-200 leading-relaxed mb-4">
              Jamaica's national literacy system operates as a layered "policy stack" \u2014 each layer building on the last:
            </p>
            <div className="space-y-2">
              {['Reform Frameworks (2001\u20132004)', 'NCLP Programme Architecture (2007\u2013)', 'NSC Curriculum Alignment (2019)', 'ICT & Timetabled Reading (2022\u20132025)'].map((layer, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-gold-500 text-forest-900 text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-forest-100">{layer}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate('policies')}
              className="mt-5 text-sm text-gold-400 hover:text-gold-300 flex items-center gap-1 transition-colors"
            >
              Explore all policies <ArrowRight />
            </button>
          </div>
        </section>

        {/* Policy Timeline */}
        <section aria-labelledby="timeline-heading">
          <div className="section-header">
            <h2 id="timeline-heading" className="font-display text-xl font-semibold text-forest-900">
              Major Policy Milestones
            </h2>
            <p className="text-sm text-forest-500 mt-1">From the 2001 White Paper to the 2025 Reading Initiative</p>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-forest-100" aria-hidden="true"/>

            <ol className="space-y-4" aria-label="Policy timeline">
              {milestones.map((m, i) => (
                <li key={i} className="flex items-start gap-4 pl-12 relative">
                  <div
                    className={`absolute left-3.5 top-1 w-3 h-3 rounded-full border-2 border-white ${typeColors[m.type]}`}
                    aria-hidden="true"
                  />
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-mono text-sm font-bold text-forest-700 w-12 flex-shrink-0">{m.year}</span>
                    <span className="text-sm text-forest-700 flex-1">{m.event}</span>
                    <span className={`tag ${typeBadge[m.type]} flex-shrink-0 capitalize`}>
                      {m.type}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Quick Access Cards */}
        <section aria-labelledby="quicknav-heading">
          <div className="section-header">
            <h2 id="quicknav-heading" className="font-display text-xl font-semibold text-forest-900">
              Explore the Guide
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`card-hover text-left bg-gradient-to-br ${link.color} text-white group`}
              >
                <div className="text-3xl mb-3">{link.icon}</div>
                <h3 className={`font-display text-lg font-semibold mb-1 ${link.accent}`}>
                  {link.title}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">{link.desc}</p>
                <div className={`mt-4 flex items-center gap-1 text-sm ${link.accent} group-hover:gap-2 transition-all`}>
                  Open <ArrowRight />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Attribution note */}
        <footer className="text-xs text-forest-400 text-center pb-4">
          Content grounded in Ministry Paper 88, the NSC Language & Literature Guide, and official Jamaica government sources.
          Built for Jamaican literacy educators. Not an official Ministry publication.
        </footer>
      </div>
    </div>
  )
}