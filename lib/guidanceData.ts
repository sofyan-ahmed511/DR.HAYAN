import { 
  Sparkles, 
  Stethoscope, 
  Shield, 
  Zap, 
  Activity,
  Smile,
  HeartPulse
} from 'lucide-react';

// ==========================================
// GUIDANCE PAGE DATA
// ==========================================
// This file contains the categories, articles, and expert tips for the Guidance section.
// You can edit titles, descriptions, and article contents here.

// ------------------------------------------
// 1. GUIDANCE CATEGORIES
// The main topic boxes displayed on the Guidance index page.
// ------------------------------------------
export const guidanceCategories = [
  { 
    id: 'oral-hygiene', 
    title: 'Oral Hygiene', 
    icon: Sparkles, 
    color: 'bg-primary', 
    count: 15,
    image: 'https://picsum.photos/seed/cat-oralhygiene/800/600',
    description: 'Comprehensive strategies and daily habits to maintain peak oral health and prevent decay.',
    content: 'Oral hygiene is the practice of keeping one\'s mouth clean and free of disease and other problems by regular brushing of the teeth (dental hygiene) and cleaning between the teeth. It is important that oral hygiene be carried out on a regular basis to enable prevention of dental disease and bad breath.'
  },
  { 
    id: 'other-hygiene', 
    title: 'Hardware & Appliance Care', 
    icon: Smile, 
    color: 'bg-blue-500', 
    count: 24,
    image: 'https://picsum.photos/seed/cat-hardware/800/600',
    description: 'Specialized guidelines on managing hygiene for braces, clear aligners, and retainers.',
    content: 'Hygiene extends beyond just teeth. This includes managing braces, clear aligners, retainers, and general oral appliances. Proper care of these appliances prevents bacterial buildup and ensures treatment stays on track without complications.'
  },
  { 
    id: 'prevention', 
    title: 'Advanced Prevention', 
    icon: Shield, 
    color: 'bg-emerald-500', 
    count: 12,
    image: 'https://picsum.photos/seed/cat-prevention/800/600',
    description: 'Proactive medical measures and sealants to stop dental issues before they even start.',
    content: 'Preventive dentistry is the modern way of helping you keep a healthy mouth. It helps you to keep your teeth, and means you need to have less dental treatment. The two main causes of tooth loss are decay and gum disease. The better you prevent or deal with these two problems, the more chance you will have of keeping your teeth for life.'
  },
  { 
    id: 'nutrition', 
    title: 'Dental Nutrition', 
    icon: Zap, 
    color: 'bg-amber-500', 
    count: 8,
    image: 'https://picsum.photos/seed/cat-nutrition/800/600',
    description: 'Dietary tips focused on remineralization, maintaining strong teeth, and healthy, robust gums.',
    content: 'What you eat affects your teeth. Foods high in sugars and carbohydrates lead to tooth decay, while foods rich in calcium, phosphorus, and vitamins help strengthen enamel and gums.'
  },
  { 
    id: 'emergencies', 
    title: 'Dental Emergencies', 
    icon: Activity, 
    color: 'bg-rose-500', 
    count: 6,
    image: 'https://picsum.photos/seed/cat-emergencies/800/600',
    description: 'Immediate first-aid actions to take during a dental crisis such as avulsion or severe pain.',
    content: 'Dental emergencies can range from a broken tooth to a knocked-out tooth or severe infection. Knowing exactly what to do in the first 30 minutes can save a tooth. Always seek professional care immediately.'
  },
];

export const guidanceArticles = [
  {
    id: 'brushing',
    title: 'The Art of Brushing',
    subtitle: 'Precision & Technique',
    description: 'Mastering the technique is crucial. Learn the professional 45-degree angle method that hygienists swear by.',
    image: 'https://picsum.photos/seed/article-brushing-main/800/600',
    stats: [
      { label: 'Plaque Removal', value: '95%' },
      { label: 'Gum Health', value: '+40%' }
    ],
    videoUrl: 'https://www.youtube.com/embed/BhaALhBJJz0',
    carouselImages: [
      'https://picsum.photos/seed/article-brush-1/800/600',
      'https://picsum.photos/seed/article-brush-2/800/600',
      'https://picsum.photos/seed/article-brush-3/800/600'
    ],
    content: `
      ## Organizing Your Brushing Routine

      Brushing your teeth might seem simple, but mastering the art of brushing is fundamental to lifelong oral health. A proper technique removes plaque, stimulates the gums, and prevents calculus buildup.

      ### The 45-Degree Angle Method
      
      1. **Placement**: Place the bristles of your toothbrush against your gums at a 45-degree angle.
      2. **Movement**: Move the brush gently in short, tooth-wide strokes.
      3. **Coverage**: Brush the outer surfaces, inner surfaces, and the chewing surfaces of the teeth.
      4. **Behind the Front Teeth**: Tilt the brush vertically and make several up-and-down strokes to clean the inside surfaces of the front teeth.

      ### Professional Frequency
      
      You should brush at least twice a day, preferably morning and night, for two full minutes. The use of a soft-bristled brush is highly recommended to prevent enamel abrasion and gum recession.
    `
  },
  {
    id: 'bounds-of-service',
    title: 'The Bounds of the Service',
    subtitle: 'Interdental Excellence',
    description: 'Brushing only cleans 60% of your teeth. Flossing reaches the hidden 40% where most cavities naturally start.',
    image: 'https://picsum.photos/seed/article-floss-main/800/600',
    stats: [
      { label: 'Cavity Prevention', value: '85%' },
      { label: 'Fresh Breath', value: '100%' }
    ],
    videoUrl: 'https://www.youtube.com/embed/HhdoPXNKNqc',
    carouselImages: [
      'https://picsum.photos/seed/article-floss-1/800/600',
      'https://picsum.photos/seed/article-floss-2/800/600'
    ],
    content: `
      ## Expanding Beyond the Brush
      
      Dental care doesn't stop at brushing. The true bounds of our service encompass complete preventative care, deeply intertwined with your daily habits.

      ### The Hidden 40%

      When you don't floss, you leave nearly 40% of the tooth surface untouched. These interdental spaces are the perfect breeding ground for anaerobic bacteria, leading directly to interproximal cavities and gingivitis.

      ### How to Floss Properly

      - **Break off** about 18 inches of floss and wind it around your middle fingers.
      - **Hold** the floss tautly between your thumbs and forefingers.
      - **Guide** the floss between your teeth using a gentle rubbing motion. Never snap the floss into the gums.
      - **Curve** the floss into a C-shape against each tooth as it reaches the gum line.
    `
  }
];

export const expertTips = [
  { id: 'toothbrush-replacement', title: "Change your toothbrush", desc: "Every 3-4 months is the professional standard." },
  { id: 'tongue-hygiene', title: "Tongue hygiene", desc: "Plaque builds up on your tongue too. Clean it daily." },
  { id: 'fluoride', title: "Fluoride is key", desc: "Always use fluoride toothpaste for maximum protection." },
  { id: 'sugar-control', title: "Sugar control", desc: "Limit sugary snacks to prevent enamel erosion." }
];
