export const strategies = [
  {
    id: 'early-grade-reading',
    title: 'Early Grade Structured Reading',
    icon: 'BookOpen',
    category: 'Foundation Literacy',
    tag: 'NCLP Core',
    tagType: 'forest',
    description: 'A systematic, explicit approach to reading instruction in Grades 1–3 grounded in the NCLP and the 2025 Timetabled Reading Initiative. Instruction targets the five core components across a protected daily reading block.',
    policyAnchor: 'NCLP (2007); Timetabled Reading Initiative (2025)',
    nscStrand: 'Reading — Word Recognition, Fluency, Vocabulary, Reading for Enjoyment',
    gradeRange: 'Grades 1–3',
    tactics: [
      {
        name: 'Phonological Awareness Warm-Up (5 min)',
        description: 'Daily rhyme, syllable clap, or onset-rime activity using familiar Jamaican words, songs, or rhymes.',
      },
      {
        name: 'Explicit Phonics Instruction (10 min)',
        description: 'Teach one grapheme-phoneme correspondence explicitly. Use decodable texts featuring Jamaican names and contexts.',
      },
      {
        name: 'Guided Reading Groups (15 min)',
        description: 'Small groups matched to reading level rotate through the teacher. Use NCLP Informal Diagnostic Reading Inventory to inform group placement.',
      },
      {
        name: 'Independent Reading & Vocabulary (10 min)',
        description: 'Students read independently at their level. Pre-teach 3–5 Tier 2 vocabulary words from the text before independent reading.',
      },
      {
        name: 'Fluency Read-Aloud (5 min)',
        description: 'Model fluent reading with appropriate pace and expression using culturally relevant Caribbean texts. Echo reading or choral reading with the class.',
      },
    ],
    tips: [
      'All Grade 1–3 teachers are expected to teach reading as a timetabled subject from 2025 — minimum 2 hours per week',
      'Use the NCLP Diagnostic Reading Inventory to identify students below grade-level benchmarks',
      'Reading coaches can provide modelling and co-teaching support — request time if available in your school',
      'Incorporate Jamaican children\'s literature and culturally familiar texts to build motivation and engagement',
    ],
  },
  {
    id: 'bilingual-scaffolding',
    title: 'Bilingual Scaffolding: JC ↔ SJE',
    icon: 'Globe',
    category: 'Language & Literacy',
    tag: 'NSC Language Study',
    tagType: 'gold',
    description: 'A contrastive-awareness approach that acknowledges Jamaica\'s bilingual ecology (Jamaican Creole and Standard Jamaican English) to explicitly build language and literacy competence in both registers.',
    policyAnchor: 'Language Education Policy (2001 draft); NSC Language & Literature (2019); Early Childhood Curriculum Guide',
    nscStrand: 'Language Study — SJE vs JC; Speaking & Listening',
    gradeRange: 'K–9',
    tactics: [
      {
        name: 'Code-Switching Discussion (K–3)',
        description: 'Acknowledge JC as a valid home language. Use JC to activate prior knowledge ("Weh yuh know bout...?"), then scaffold into SJE equivalents.',
      },
      {
        name: 'Contrastive Grammar Chart (Grades 4–9)',
        description: 'Create a two-column "language bridge" chart — JC expression on the left, SJE equivalent on the right. Students build this chart across the year.',
      },
      {
        name: 'Register Awareness Tasks',
        description: 'Present texts in both registers. Students identify which is SJE, which is JC, and discuss when each is appropriate (home vs. school vs. workplace).',
      },
      {
        name: 'JC Oral Retelling → SJE Writing',
        description: 'Students retell a story or explain a concept orally in JC, then draft the same content in written SJE. Bridges oral fluency to academic writing.',
      },
    ],
    tips: [
      'NSC explicitly requires students to "recognise, value and make distinctions between home language and SJE"',
      'The Language Education Policy (still draft status) endorses oral JC use in early years — teachers should feel confident using this approach',
      'Avoid "correcting" JC as "wrong English" — this stigmatises students. Frame it as code-switching: different registers for different contexts',
      'Partner with the Early Childhood Commission for guidance on language practices in Grades K–3',
    ],
  },
  {
    id: 'ict-literacy',
    title: 'ICT-Enabled & Screen Literacy',
    icon: 'Monitor',
    category: 'Digital & Technology',
    tag: 'ICT Policy 2022',
    tagType: 'tech',
    description: 'Integrating digital reading and writing into literacy lessons, aligned to the NSC requirement that students read and write "on paper and on screen" and supported by Jamaica\'s 2022 ICT in Education Policy.',
    policyAnchor: 'ICT in Education Policy (2022); NSC Language & Literature (2019); BYOD Policy',
    nscStrand: 'Reading for Information (on screen); Writing — Digital/Screen; Study Skills',
    gradeRange: 'Grades 4–9',
    tactics: [
      {
        name: 'Purposeful Screen Reading',
        description: 'Assign structured digital reading tasks with explicit instruction in how to navigate, skim, scan, and evaluate online texts. Use websites from reputable Jamaican institutions (NLJ, MOEY, JIS).',
      },
      {
        name: 'Digital Drafting & Publishing',
        description: 'Students use devices to draft, revise, and publish written work. Teach digital writing conventions (hyperlinks, headers, audience awareness online).',
      },
      {
        name: 'Research & Source Evaluation',
        description: 'Model how to search, evaluate credibility, and cite digital sources. Align to NSC Study Skills strand: reading for information and research skills.',
      },
      {
        name: 'Multimodal Text Creation',
        description: 'Students create texts that combine writing with images, audio, or video. Platforms: Google Slides, Canva (free), or school-approved tools.',
      },
    ],
    tips: [
      'NSC explicitly lists reading "on screen" as an attainment target — this is not optional ICT enrichment, it is a required strand',
      'BYOD Policy supports device use in classrooms when aligned to NSC learning design',
      'If devices are limited, rotate groups and use the ICT time purposefully rather than incidentally',
      'The 2022 ICT Policy\'s Rolling Master Plan should inform school-level ICT integration planning',
    ],
  },
  {
    id: 'parent-engagement',
    title: 'Parent & Community Engagement',
    icon: 'Users',
    category: 'Community Literacy',
    tag: 'NCLP Pillar',
    tagType: 'forest',
    description: 'Structured parental involvement is a core NCLP pillar and is operationalized through training events, literate home environment guidance, and early childhood curriculum design.',
    policyAnchor: 'NCLP — "Sustained Parental Involvement" pillar; Ministry Paper 88 (2014); Early Childhood Curriculum Guide',
    nscStrand: 'Supporting strand across all literacy domains',
    gradeRange: 'K–6 (primary focus)',
    tactics: [
      {
        name: 'Literate Home Environment Workshops',
        description: 'Host parent sessions (modelled on NCLP\'s "Creating and Maintaining a Literate Home Environment" programme) that teach read-aloud routines, home library creation, and print-rich environment strategies.',
      },
      {
        name: 'Reading Partnership Bags',
        description: 'Send home weekly reading bags with levelled books, activity cards, and a simple reading log. Parents sign off on reading done at home.',
      },
      {
        name: 'Community Text Walks',
        description: 'Use community signs, billboards, menus, and church bulletins as authentic reading material for home reading activities. Grounds literacy in local context.',
      },
      {
        name: 'Read-Aloud Modelling',
        description: 'Teach parents simple read-aloud techniques (pausing to predict, asking questions, pointing to words). NCLP parent training sessions recorded hundreds to over a thousand participants.',
      },
    ],
    tips: [
      'NCLP explicitly names parental involvement as a pillar — not an add-on',
      'Low parental involvement was identified by Ministry Paper 88 as a direct alignment failure point',
      'The National Parenting Support Commission is a formal NCLP partner — leverage their resources',
      'Early childhood curriculum includes "Involving Parents" as a recurrent planning feature in every unit',
    ],
  },
  {
    id: 'remediation',
    title: 'Remediation & Corrective Reading',
    icon: 'Target',
    category: 'Intervention',
    tag: 'NCLP System',
    tagType: 'gold',
    description: 'A tiered intervention system grounded in the NCLP\'s diagnostic-to-intervention model, targeting students who do not achieve Grade 4 Literacy Test mastery on first sitting.',
    policyAnchor: 'NCLP (2007) — Remedial & Corrective Reading Grades 1–6; Ministry Paper 88 (2014)',
    nscStrand: 'Reading — all sub-strands; linked to Grade 4 Literacy Test attainment targets',
    gradeRange: 'Grades 1–6',
    tactics: [
      {
        name: 'Diagnostic-First Protocol',
        description: 'Administer the NCLP Informal Diagnostic Reading Inventory at the start of the year and after each term. Use scores to place students in intervention tiers.',
      },
      {
        name: 'Structured Intervention Groups',
        description: 'Small groups (3–5 students) meeting 3–4x per week for targeted decoding, fluency, or comprehension instruction. Sessions are 15–20 minutes, outside the regular reading block.',
      },
      {
        name: 'Corrective Reading Programmes',
        description: 'Use NCLP-endorsed corrective reading materials for students significantly below grade level. Reading coaches can model and co-deliver these sessions.',
      },
      {
        name: 'Progress Monitoring (Bi-weekly)',
        description: 'Use 1-minute fluency probes or running records every 2 weeks to track growth in intervention groups. Adjust grouping and strategy based on data.',
      },
    ],
    tips: [
      'NCLP specifically links teacher professional development to "normative, remedial, and corrective reading programmes from Grades 1 to 6"',
      'Ministry Paper 88 identifies inability to effectively teach aspects of curricula as a primary barrier — professional development is the remedy',
      'Reading coaches are assigned 5 schools each and can provide targeted intervention design support',
      'Grade 4 Literacy Test second sitting (by end of Term 1, Grade 5) allows most students to achieve mastery — design remediation toward this milestone',
    ],
  },
  {
    id: 'assessment-learning',
    title: 'Assessment for Learning',
    icon: 'BarChart2',
    category: 'Assessment',
    tag: 'NSC & NCLP',
    tagType: 'tech',
    description: 'Using formative and diagnostic assessment to drive literacy instruction, aligned to NCLP accountability measures and NSC built-in assessment criteria.',
    policyAnchor: 'NCLP — "Standardised National Assessment Programme" pillar; NSC attainment targets; Grade 4 Literacy Test',
    nscStrand: 'All strands — assessment criteria are embedded in NSC curriculum guide',
    gradeRange: 'Grades 1–9',
    tactics: [
      {
        name: 'Running Records',
        description: 'Use running records weekly with early readers to track accuracy, fluency, and comprehension. Inform guided reading group placement.',
      },
      {
        name: 'NSC Attainment Target Checklists',
        description: 'Create simple observation checklists drawn directly from NSC attainment targets. Record evidence of each target being met over the term.',
      },
      {
        name: 'Exit Tickets',
        description: 'End each lesson with a 2-minute written or oral exit ticket tied to the lesson\'s NSC learning objective. Informs next-day instruction.',
      },
      {
        name: 'Grade 4 Mock Literacy Tests',
        description: 'Administer practice Grade 4 Literacy Test items from Term 2 of Grade 3 onward. Familiarise students with format, vocabulary, and question types.',
      },
      {
        name: 'GSAT Language Arts Preparation (Grade 6)',
        description: 'Use past GSAT Language Arts questions (2009–2013 national average: 57–62%) as formative practice to identify gaps in reading and writing.',
      },
    ],
    tips: [
      'NSC curriculum guide contains built-in assessment criteria statements — use these, not generic rubrics',
      'NCLP\'s "standardised national assessment programme" is a formal pillar, not an afterthought',
      'Grade 4 Literacy Test mastery reached 76.3% at first administration by 2013 — national benchmark to work toward',
      'Assessment should diagnose AND monitor: use diagnostic data to design instruction, then monitor progress toward the same targets',
    ],
  },
]
