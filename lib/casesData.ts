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
    iconImg: 'https://i.postimg.cc/8CWd2tBB/Gemini-Generated-Image-9nr1cu9nr1cu9nr1.png',
    image: 'https://i.postimg.cc/8CWd2tBB/Gemini-Generated-Image-9nr1cu9nr1cu9nr1.png',
    subSections: ['Overview'],
    cases: cleftCases,
  },

  {
    id: 'crowding',
    title: 'Crowding',
    subtitle: 'Resolving Severe Space Deficiencies',
    iconImg: 'https://i.postimg.cc/x8b95NSQ/Gemini-Generated-Image-1kcqlj1kcqlj1kcq.png',
    image: 'https://i.postimg.cc/x8b95NSQ/Gemini-Generated-Image-1kcqlj1kcqlj1kcq.png',
    subSections: ['Overview'],
    cases: crowdingCases,
  },

  {
    id: 'deep-bite',
    title: 'Deep Bite',
    subtitle: 'Vertical Occlusion Adjustments',
    iconImg: 'https://i.postimg.cc/8zdJqsxm/Gemini-Generated-Image-pci0qzpci0qzpci0.png',
    image: 'https://i.postimg.cc/8zdJqsxm/Gemini-Generated-Image-pci0qzpci0qzpci0.png',
    subSections: ['Overview'],
    cases: deepBiteCases,
  },

  {
    id: 'fixed-functional',
    title: 'Fixed Functional Appliances',
    subtitle: 'Permanent Arch Expansion',
    iconImg: 'https://i.postimg.cc/ZRbc66pC/Gemini-Generated-Image-f9t2if9t2if9t2if.png',
    image: 'https://i.postimg.cc/ZRbc66pC/Gemini-Generated-Image-f9t2if9t2if9t2if.png',
    subSections: ['Overview'],
    cases: fixedFunctionalCases,
  },

  {
    id: 'gummy-smile',
    title: 'Gummy Smile',
    subtitle: 'Aesthetic Gum Repositioning',
    iconImg: 'https://i.postimg.cc/HxNyjM2H/Gemini-Generated-Image-rizl2srizl2srizl.png',
    image: 'https://i.postimg.cc/HxNyjM2H/Gemini-Generated-Image-rizl2srizl2srizl.png',
    subSections: ['Overview'],
    cases: gummySmileCases,
  },

  {
    id: 'impacted-teeth',
    title: 'Impacted Teeth',
    subtitle: 'Surgical Exposure & Ortho Movement',
    iconImg: 'https://i.postimg.cc/5NgFFDps/Gemini-Generated-Image-xdgpgkxdgpgkxdgp.png',
    image: 'https://i.postimg.cc/5NgFFDps/Gemini-Generated-Image-xdgpgkxdgpgkxdgp.png',
    subSections: ['Overview'],
    cases: impactedTeethCases,
  },

  {
    id: 'open-bite',
    title: 'Open Bite',
    subtitle: 'Restoring Anterior Contact',
    iconImg: 'https://i.postimg.cc/CKsyFHwM/Gemini-Generated-Image-5sri715sri715sri.png',
    image: 'https://i.postimg.cc/CKsyFHwM/Gemini-Generated-Image-5sri715sri715sri.png',
    subSections: ['Overview'],
    cases: openBiteCases,
  },

  {
    id: 'scissor-bite',
    title: 'Scissor Bite',
    subtitle: 'Transverse Discrepancy Correction',
    iconImg: 'https://i.postimg.cc/bvN5nSPq/Gemini-Generated-Image-7m4x677m4x677m4x.png',
    image: 'https://i.postimg.cc/bvN5nSPq/Gemini-Generated-Image-7m4x677m4x677m4x.png',
    subSections: ['Overview'],
    cases: scissorBiteCases,
  },

  {
    id: 'spacing',
    title: 'Spacing',
    subtitle: 'Closing Generalized Gaps',
    iconImg: 'https://i.postimg.cc/v8pW9XD3/Gemini-Generated-Image-5ug3tc5ug3tc5ug3.png',
    image: 'https://i.postimg.cc/v8pW9XD3/Gemini-Generated-Image-5ug3tc5ug3tc5ug3.png',
    subSections: ['Overview'],
    cases: spacingCases,
  },

  {
    id: 'mini-screw-tad',

    title: 'Mini Screw TAD',

    image:
      'https://i.postimg.cc/qRj0HHGz/Gemini-Generated-Image-56b0e956b0e956b0.png',

    iconImg:
      'https://i.postimg.cc/qRj0HHGz/Gemini-Generated-Image-56b0e956b0e956b0.png',

    subSections: ['Overview'],

    cases: miniScrewTad,
  },

  {
    id: 'cross-bite',

    title: 'Cross Bite',

    image:
      'https://i.postimg.cc/ZqKR2HrG/Gemini-Generated-Image-wstfxywstfxywstf.png',

    iconImg:
      'https://i.postimg.cc/ZqKR2HrG/Gemini-Generated-Image-wstfxywstfxywstf.png',

    subSections: ['Overview'],

    cases: crossBite,
  },

  {
    id: 'orthognathic-Camophlage',

    title: 'Orthognathic Camophlage',

    subtitle: 'Advanced Skeletal Camophlage Cases',

    image:
      'https://i.postimg.cc/bNJmYfqQ/Gemini-Generated-Image-z946x0z946x0z946.png',

    iconImg:
      'https://i.postimg.cc/bNJmYfqQ/Gemini-Generated-Image-z946x0z946x0z946.png',

    subSections: ['Overview'],

    cases: orthognathicCamophlage,
  },
];