export const gradeLevels = [
  { value: 'Grade 1', label: 'Grade 1', band: 'Early Primary' },
  { value: 'Grade 2', label: 'Grade 2', band: 'Early Primary' },
  { value: 'Grade 3', label: 'Grade 3', band: 'Early Primary' },
  { value: 'Grade 4', label: 'Grade 4', band: 'Upper Primary' },
  { value: 'Grade 5', label: 'Grade 5', band: 'Upper Primary' },
  { value: 'Grade 6', label: 'Grade 6', band: 'Upper Primary' },
  { value: 'Grade 7', label: 'Grade 7', band: 'Secondary' },
  { value: 'Grade 8', label: 'Grade 8', band: 'Secondary' },
  { value: 'Grade 9', label: 'Grade 9', band: 'Secondary' },
]

export const literacyStrands = [
  {
    value: 'Reading',
    label: 'Reading',
    icon: '📖',
    attainmentTargets: [
      'Reading for meaning and enjoyment',
      'Reading for information (print texts)',
      'Reading for information (digital / on-screen texts)',
      'Comprehension strategy instruction (predict, infer, monitor, summarise)',
      'Word recognition and phonics decoding',
      'Reading fluency development',
      'Vocabulary building in context',
      'Critical reading and text evaluation',
    ],
  },
  {
    value: 'Writing',
    label: 'Writing',
    icon: '✍️',
    attainmentTargets: [
      'Writing process (planning, drafting, revising, editing, publishing)',
      'Writing for different purposes (to inform, persuade, entertain, describe)',
      'Writing for different audiences',
      'Narrative / creative writing',
      'Expository / academic writing',
      'Digital / on-screen writing and publishing',
      'Sentence structure, grammar, and mechanics',
      'Vocabulary and word choice in writing',
    ],
  },
  {
    value: 'Speaking and Listening',
    label: 'Speaking & Listening',
    icon: '🗣️',
    attainmentTargets: [
      'Oral language development and fluency',
      'Listening comprehension',
      'Discussion, dialogue, and accountable talk',
      'Oral presentation and public speaking',
      'SJE oral register for academic contexts',
      'Storytelling and oral narrative',
    ],
  },
  {
    value: 'Language Study',
    label: 'Language Study',
    icon: '🔤',
    attainmentTargets: [
      'SJE grammar, syntax, and usage',
      'Vocabulary and morphology',
      'Contrastive language awareness: SJE vs Jamaican Creole (JC)',
      'Language for academic purposes',
      'Word families, roots, prefixes, and suffixes',
      'Punctuation and sentence conventions',
    ],
  },
  {
    value: 'Study Skills',
    label: 'Study Skills',
    icon: '🔍',
    attainmentTargets: [
      'Reading for information and research',
      'Note-taking and summarising',
      'Using reference materials (print and digital)',
      'Information literacy and source evaluation',
      'Research process across subjects',
      'Skimming and scanning techniques',
    ],
  },
]

export const languageContexts = [
  {
    value: 'SJE Focus',
    label: 'SJE Focus — Standard Jamaican English',
    description: 'Lesson conducted primarily in Standard Jamaican English. Appropriate for all grades where SJE academic register is the primary goal.',
  },
  {
    value: 'SJE-JC Contrastive',
    label: 'SJE↔JC Contrastive Approach',
    description: 'Explicitly compares SJE and Jamaican Creole to build register awareness. Ideal for Language Study and vocabulary-building lessons.',
  },
  {
    value: 'JC to SJE Bridge',
    label: 'JC → SJE Bridging (Early Years)',
    description: 'Uses oral JC to activate prior knowledge, then scaffolds into SJE. Recommended for Grades K–3 per the Language Education Policy.',
  },
  {
    value: 'Digital Literacy Context',
    label: 'Digital / Screen Literacy Context',
    description: 'Lesson centres on reading or writing using digital tools and screen texts. Aligned to ICT Policy 2022 and NSC on-screen literacy targets.',
  },
]

export const durations = [
  { value: '30', label: '30 minutes' },
  { value: '45', label: '45 minutes' },
  { value: '60', label: '60 minutes (double period)' },
  { value: '75', label: '75 minutes' },
  { value: '90', label: '90 minutes (extended block)' },
]
