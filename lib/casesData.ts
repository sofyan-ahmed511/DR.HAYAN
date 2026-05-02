
import { alignerCases } from './cases/aligner';
import { bimaxillaryProtrusionCases } from './cases/bimaxillaryProtrusion';
import { classIiCases } from './cases/classIi';
import { classIiiCases } from './cases/classIii';
import { cleftCases } from './cases/cleft';
import { crowdingCases } from './cases/crowding';
import { deepBiteCases } from './cases/deepBite';
import { fixedFunctionalCases } from './cases/fixedFunctional';
import { gummySmileCases } from './cases/gummySmile';
import { impactedTeethCases } from './cases/impactedTeeth';
import { openBiteCases } from './cases/openBite';
import { scissorBiteCases } from './cases/scissorBite';
import { spacingCases } from './cases/spacing';

const allCasesMap: Record<string, Record<string, any[]>> = {
  'aligner': alignerCases,
  'bimaxillary-protrusion': bimaxillaryProtrusionCases,
  'class-ii': classIiCases,
  'class-iii': classIiiCases,
  'cleft': cleftCases,
  'crowding': crowdingCases,
  'deep-bite': deepBiteCases,
  'fixed-functional': fixedFunctionalCases,
  'gummy-smile': gummySmileCases,
  'impacted-teeth': impactedTeethCases,
  'open-bite': openBiteCases,
  'scissor-bite': scissorBiteCases,
  'spacing': spacingCases,
};

// ==========================================
// CASES DATA
// ==========================================
// This file contains the data and logic for the Cases Page and the individual Case Details pages.

// ------------------------------------------
// 1. CASE CATEGORIES
// These are the main categories shown on the Cases overview page.
// ------------------------------------------
export const caseCategories = [
  { 
    id: 'aligner', 
    title: 'Aligner', 
    subtitle: 'Invisible Alignment Solutions', 
    iconImg: 'https://picsum.photos/seed/icon-aligner/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-aligner/800/600'
  },
  { 
    id: 'bimaxillary-protrusion', 
    title: 'Bimaxillary Protrusion', 
    subtitle: 'Correcting Dual Jaw Protraction', 
    iconImg: 'https://picsum.photos/seed/icon-bimax/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-bimax/800/600'
  },
  { 
    id: 'class-ii', 
    title: 'Class II', 
    subtitle: 'Overbite Correction Framework', 
    iconImg: 'https://picsum.photos/seed/icon-class2/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-class2/800/600'
  },
  { 
    id: 'class-iii', 
    title: 'Class III', 
    subtitle: 'Underbite & Skeletal Imbalance', 
    iconImg: 'https://picsum.photos/seed/icon-class3/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-class3/800/600'
  },
  { 
    id: 'cleft', 
    title: 'Cleft', 
    subtitle: 'Specialized Multi-Disciplinary Cases', 
    iconImg: 'https://picsum.photos/seed/icon-cleft/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-cleft/800/600'
  },
  { 
    id: 'crowding', 
    title: 'Crowding', 
    subtitle: 'Resolving Severe Space Deficiencies', 
    iconImg: 'https://picsum.photos/seed/icon-crowding/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-crowding/800/600'
  },
  { 
    id: 'deep-bite', 
    title: 'Deep Bite', 
    subtitle: 'Vertical Occlusion Adjustments', 
    iconImg: 'https://picsum.photos/seed/icon-deepbite/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-deepbite/800/600'
  },
  { 
    id: 'fixed-functional', 
    title: 'Fixed Functional Appliances', 
    subtitle: 'Permanent Arch Expansion', 
    iconImg: 'https://picsum.photos/seed/icon-fixedfunc/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-fixedfunc/800/600'
  },
  { 
    id: 'gummy-smile', 
    title: 'Gummy Smile', 
    subtitle: 'Aesthetic Gum Repositioning', 
    iconImg: 'https://picsum.photos/seed/icon-gummy/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-gummy/800/600'
  },
  { 
    id: 'impacted-teeth', 
    title: 'Impacted Teeth', 
    subtitle: 'Surgical Exposure & Ortho Movement', 
    iconImg: 'https://picsum.photos/seed/icon-impacted/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-impacted/800/600'
  },
  { 
    id: 'open-bite', 
    title: 'Open Bite', 
    subtitle: 'Restoring Anterior Contact', 
    iconImg: 'https://picsum.photos/seed/icon-openbite/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-openbite/800/600'
  },
  { 
    id: 'scissor-bite', 
    title: 'Scissor Bite', 
    subtitle: 'Transverse Discrepancy Correction', 
    iconImg: 'https://picsum.photos/seed/icon-scissor/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-scissor/800/600'
  },
  { 
    id: 'spacing', 
    title: 'Spacing', 
    subtitle: 'Closing Generalized Gaps', 
    iconImg: 'https://picsum.photos/seed/icon-spacing/200/200',
    subSections: ['Case Studies'],
    image: 'https://picsum.photos/seed/cat-spacing/800/600'
  }
];

// ------------------------------------------
// 2. GENERATE MOCK CASES
// A helper function to generate realistic clinical cases dynamically.
// ------------------------------------------

export const generateMockCases = (categoryId: string, subSection: string) => {
  let cases = [];
  if (allCasesMap[categoryId] && allCasesMap[categoryId][subSection]) {
    cases = allCasesMap[categoryId][subSection].slice(0, 2);
  }
  
  const defaultCases = [
    {
      id: `${categoryId}-${subSection}-1`,
      patientInfo: `Female, ${25 + (subSection.length % 10)} years old`,
      duration: `${14 + (subSection.length % 8)} Months`,
      description: `Severe ${categoryId.replace('-', ' ')} presentation resolved with comprehensive protocol.`,
      notes: `Patient presented with significant concerns regarding aesthetics and function. Utilizing advanced digital modeling and targeted mechanics, we established an ideal Class I relationship for this ${subSection.toLowerCase()} phase. The treatment achieved predictable results with minimal discomfort.`,
      beforeImg: `https://picsum.photos/seed/${categoryId}-${subSection}-before1/600/600`,
      afterImg: `https://picsum.photos/seed/${categoryId}-${subSection}-after1/800/600`,
      progressImages: [
         { img: `https://picsum.photos/seed/${categoryId}-${subSection}-prog1-1/800/600`, timeframe: 'Initial', label: 'Pre-treatment' },
         { img: `https://picsum.photos/seed/${categoryId}-${subSection}-prog1-2/800/600`, timeframe: '6 Months', label: 'Alignment Phase' },
         { img: `https://picsum.photos/seed/${categoryId}-${subSection}-prog1-3/800/600`, timeframe: '18 Months', label: 'Final Result' }
      ]
    },
    {
      id: `${categoryId}-${subSection}-2`,
      patientInfo: `Male, ${30 + (categoryId.length % 15)} years old`,
      duration: `${18 + (categoryId.length % 10)} Months`,
      description: `Complex clinical case demonstrating precise control and functional restoration.`,
      notes: `This ${subSection.toLowerCase()} case required meticulous torque control throughout the anterior retraction phase. Temporary anchorage devices (TADs) were positioned to optimize the spatial envelope. The outcome showcases long-term stability and a dramatically improved facial profile.`,
      beforeImg: `https://picsum.photos/seed/${categoryId}-${subSection}-before2/600/600`,
      afterImg: `https://picsum.photos/seed/${categoryId}-${subSection}-after2/800/600`,
      progressImages: [
         { img: `https://picsum.photos/seed/${categoryId}-${subSection}-prog2-1/800/600`, timeframe: 'Initial', label: 'Pre-treatment Assessment' },
         { img: `https://picsum.photos/seed/${categoryId}-${subSection}-prog2-2/800/600`, timeframe: '12 Months', label: 'Space Closure' },
         { img: `https://picsum.photos/seed/${categoryId}-${subSection}-prog2-3/800/600`, timeframe: '22 Months', label: 'Detailing & Finishing' }
      ]
    }
  ];

  while (cases.length < 2) {
    cases.push(defaultCases[cases.length]);
  }

  return cases.slice(0, 2);
};

