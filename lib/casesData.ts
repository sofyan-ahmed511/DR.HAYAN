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
import { crossBite } from './cases/crossBite';
import { miniScrewTad } from './cases/miniScrewTad';
import { orthognathicCamophlage } from './cases/orthognathicCamophlage';

export const caseCategories = [
  {
    id: 'aligner',
    title: 'Aligner',
    subtitle: 'Invisible Alignment Solutions',
    iconImg: 'https://i.postimg.cc/7hhtV6ff/Gemini-Generated-Image-2xabf92xabf92xab.png',
    image: 'https://i.postimg.cc/7hhtV6ff/Gemini-Generated-Image-2xabf92xabf92xab.png',
    subSections: ['Overview'],
    cases: alignerCases,
  },

  {
    id: 'bimaxillary-protrusion',
    title: 'Bimaxillary Protrusion',
    subtitle: 'Correcting Dual Jaw Protraction',
    iconImg: 'https://i.postimg.cc/SxdZwCCS/Gemini-Generated-Image-fg94zmfg94zmfg94.png',
    image: 'https://i.postimg.cc/SxdZwCCS/Gemini-Generated-Image-fg94zmfg94zmfg94.png',
    subSections: ['Overview'],
    cases: bimaxillaryProtrusionCases,
  },

  {
    id: 'class-ii',
    title: 'Class II',
    subtitle: 'Overbite Correction Framework',
    iconImg: 'https://i.postimg.cc/65g6C4yY/Gemini-Generated-Image-qg9f1zqg9f1zqg9f.png',
    image: 'https://i.postimg.cc/65g6C4yY/Gemini-Generated-Image-qg9f1zqg9f1zqg9f.png',
    subSections: ['Overview'],
    cases: classIiCases,
  },

  {
    id: 'class-iii',
    title: 'Class III',
    subtitle: 'Underbite & Skeletal Imbalance',
    iconImg: 'https://i.postimg.cc/FFq1VB6L/Gemini-Generated-Image-jkcyv6jkcyv6jkcy.png',
    image: 'https://i.postimg.cc/FFq1VB6L/Gemini-Generated-Image-jkcyv6jkcyv6jkcy.png',
    subSections: ['Overview'],
    cases: classIiiCases,
  },

  {
    id: 'cleft',
    title: 'Cleft',
    subtitle: 'Specialized Multi-Disciplinary Cases',
    iconImg: 'https://picsum.photos/seed/icon-cleft/200/200',
    image: 'https://picsum.photos/seed/cat-cleft/800/600',
    subSections: ['Overview'],
    cases: cleftCases,
  },

  {
    id: 'crowding',
    title: 'Crowding',
    subtitle: 'Resolving Severe Space Deficiencies',
    iconImg: 'https://picsum.photos/seed/icon-crowding/200/200',
    image: 'https://picsum.photos/seed/cat-crowding/800/600',
    subSections: ['Overview'],
    cases: crowdingCases,
  },

  {
    id: 'deep-bite',
    title: 'Deep Bite',
    subtitle: 'Vertical Occlusion Adjustments',
    iconImg: 'https://picsum.photos/seed/icon-deepbite/200/200',
    image: 'https://picsum.photos/seed/cat-deepbite/800/600',
    subSections: ['Overview'],
    cases: deepBiteCases,
  },

  {
    id: 'fixed-functional',
    title: 'Fixed Functional Appliances',
    subtitle: 'Permanent Arch Expansion',
    iconImg: 'https://picsum.photos/seed/icon-fixedfunc/200/200',
    image: 'https://picsum.photos/seed/cat-fixedfunc/800/600',
    subSections: ['Overview'],
    cases: fixedFunctionalCases,
  },

  {
    id: 'gummy-smile',
    title: 'Gummy Smile',
    subtitle: 'Aesthetic Gum Repositioning',
    iconImg: 'https://picsum.photos/seed/icon-gummy/200/200',
    image: 'https://picsum.photos/seed/cat-gummy/800/600',
    subSections: ['Overview'],
    cases: gummySmileCases,
  },

  {
    id: 'impacted-teeth',
    title: 'Impacted Teeth',
    subtitle: 'Surgical Exposure & Ortho Movement',
    iconImg: 'https://picsum.photos/seed/icon-impacted/200/200',
    image: 'https://picsum.photos/seed/cat-impacted/800/600',
    subSections: ['Overview'],
    cases: impactedTeethCases,
  },

  {
    id: 'open-bite',
    title: 'Open Bite',
    subtitle: 'Restoring Anterior Contact',
    iconImg: 'https://picsum.photos/seed/icon-openbite/200/200',
    image: 'https://picsum.photos/seed/cat-openbite/800/600',
    subSections: ['Overview'],
    cases: openBiteCases,
  },

  {
    id: 'scissor-bite',
    title: 'Scissor Bite',
    subtitle: 'Transverse Discrepancy Correction',
    iconImg: 'https://picsum.photos/seed/icon-scissor/200/200',
    image: 'https://picsum.photos/seed/cat-scissor/800/600',
    subSections: ['Overview'],
    cases: scissorBiteCases,
  },

  {
    id: 'spacing',
    title: 'Spacing',
    subtitle: 'Closing Generalized Gaps',
    iconImg: 'https://picsum.photos/seed/icon-spacing/200/200',
    image: 'https://picsum.photos/seed/cat-spacing/800/600',
    subSections: ['Overview'],
    cases: spacingCases,
  },

  {
    id: 'mini-screw-tad',

    title: 'Mini Screw TAD',

    image:
      'https://i.postimg.cc/6qk1D4zW/IMG-9922.jpg',

    iconImg:
      'https://i.postimg.cc/6qk1D4zW/IMG-9922.jpg',

    subSections: ['Overview'],

    cases: miniScrewTad,
  },

  {
    id: 'cross-bite',

    title: 'Cross Bite',

    image:
      'https://i.postimg.cc/J40GRhHt/IMG-7746.jpg',

    iconImg:
      'https://i.postimg.cc/J40GRhHt/IMG-7746.jpg',

    subSections: ['Overview'],

    cases: crossBite,
  },

  {
    id: 'orthognathic-Camophlage',

    title: 'Orthognathic Camophlage',

    subtitle: 'Advanced Skeletal Camophlage Cases',

    image:
      'https://i.postimg.cc/3R9bL1hM/IMG-9921.jpg',

    iconImg:
      'https://i.postimg.cc/3R9bL1hM/IMG-9921.jpg',

    subSections: ['Overview'],

    cases: orthognathicCamophlage,
  },
];