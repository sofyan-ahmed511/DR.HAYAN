import { Sparkles, Smile, Shield, Zap, Activity } from 'lucide-react';

// ==========================================
// VIDEO LIBRARY DATA
// ==========================================
// This file contains the categorization and list of all videos displayed in the Video Library.

// ------------------------------------------
// 1. VIDEO CATEGORIES
// Used to filter videos on the library page.
// ------------------------------------------
export const videoCategories = [
  { id: 'all', label: 'All Resources', icon: Sparkles },
  { id: 'oral-hygiene', label: 'Oral Hygiene', icon: Sparkles },
  { id: 'other-hygiene', label: 'Other Hygiene', icon: Smile },
  { id: 'prevention', label: 'Prevention', icon: Shield },
  { id: 'nutrition', label: 'Nutrition', icon: Zap },
  { id: 'emergencies', label: 'Emergencies', icon: Activity },
  { id: 'brushing', label: 'Brushing Techniques', icon: Sparkles },
  { id: 'bounds-of-service', label: 'Flossing & Beyond', icon: Shield },
];

export const libraryVideos = [
  // Oral Hygiene & Brushing
  {
    id: 'vid-1',
    category: 'oral-hygiene',
    title: 'The Modified Bass Technique',
    description: 'Learn the professional 45-degree angle method for brushing. This technique ensures that plaque is removed right at the gumline where it is most dangerous, promoting long-term gum health and preventing gingivitis.',
    thumbnail: 'https://picsum.photos/seed/oral-1/800/600',
    duration: '04:15',
    videoId: 'BhaALhBJJz0',
  },
  {
    id: 'vid-2',
    category: 'oral-hygiene',
    title: 'Precision Electric Toothbrushing',
    description: 'A detailed walkthrough of how to guide an oscillating electric toothbrush across each tooth surface for maximum plaque disruption.',
    thumbnail: 'https://picsum.photos/seed/oral-2/800/600',
    duration: '06:30',
    videoId: 'HhdoPXNKNqc',
  },
  {
    id: 'vid-3',
    category: 'oral-hygiene',
    title: 'Tongue Scraping Explained',
    description: 'Why brushing your teeth isn\'t enough. Integrating tongue scraping daily significantly reduces halitosis (bad breath) and decreases the overall bacterial load in your mouth.',
    thumbnail: 'https://picsum.photos/seed/oral-3/800/600',
    duration: '03:45',
    videoId: 'BhaALhBJJz0',
  },
  {
    id: 'vid-4',
    category: 'brushing',
    title: 'Brushing with Braces & Hardware',
    description: 'Orthodontic hardware creates thousands of traps for plaque. Watch a step-by-step tutorial on navigating brackets and wires without causing damage.',
    thumbnail: 'https://picsum.photos/seed/brush-1/800/600',
    duration: '05:20',
    videoId: 'HhdoPXNKNqc',
  },
  {
    id: 'vid-5',
    category: 'brushing',
    title: 'Choosing the Optimal Toothpaste',
    description: 'Fluoride, Stannous Fluoride, or Hydroxyapatite? Decoding toothpaste ingredients to choose the right one for sensitivity, whitening, or cavity protection.',
    thumbnail: 'https://picsum.photos/seed/brush-2/800/600',
    duration: '07:10',
    videoId: 'BhaALhBJJz0',
  },

  // Flossing & Interdental (Bounds of Service / Other Hygiene)
  {
    id: 'vid-6',
    category: 'bounds-of-service',
    title: 'String Floss Masterclass',
    description: 'The C-shape flossing technique is mandatory for interproximal health. Understand how to wrap, glide, and curve the floss to remove hidden plaque.',
    thumbnail: 'https://picsum.photos/seed/floss-1/800/600',
    duration: '04:55',
    videoId: 'HhdoPXNKNqc',
  },
  {
    id: 'vid-7',
    category: 'other-hygiene',
    title: 'Water Flossers: Do They Work?',
    description: 'An analysis of oral irrigators. While they are excellent at flushing out food debris, learn how they complement, rather than replace, traditional string floss.',
    thumbnail: 'https://picsum.photos/seed/floss-2/800/600',
    duration: '05:40',
    videoId: 'BhaALhBJJz0',
  },
  {
    id: 'vid-8',
    category: 'other-hygiene',
    title: 'Using Interdental Brushes',
    description: 'For patients with open contacts, periodontal disease, or braces, interdental brushes often outperform string floss. Here is how to size and use them.',
    thumbnail: 'https://picsum.photos/seed/floss-3/800/600',
    duration: '03:30',
    videoId: 'HhdoPXNKNqc',
  },
  {
    id: 'vid-9',
    category: 'other-hygiene',
    title: 'Clear Aligner Total Maintenance',
    description: 'Keep your Invisalign or clear aligners invisible and odor-free. The essential cleaning protocols using safe chemical agents and soft brushing.',
    thumbnail: 'https://picsum.photos/seed/aligner-maint/800/600',
    duration: '04:15',
    videoId: 'BhaALhBJJz0',
  },
  {
    id: 'vid-10',
    category: 'other-hygiene',
    title: 'Retainer Lifelong Care Guide',
    description: 'Your retainer is for life, and so is its maintenance. Step-by-step cleaning to prevent calculus buildup on Essex and Hawley retainers.',
    thumbnail: 'https://picsum.photos/seed/retainer-care/800/600',
    duration: '03:50',
    videoId: 'HhdoPXNKNqc',
  },

  // Prevention
  {
    id: 'vid-11',
    category: 'prevention',
    title: 'How Cavities Form (Animation)',
    description: 'An animated micro-level view of demineralization. Understand the role of Streptococcus mutans and time in the decay process.',
    thumbnail: 'https://picsum.photos/seed/cavity-form/800/600',
    duration: '08:20',
    videoId: 'BhaALhBJJz0',
  },
  {
    id: 'vid-12',
    category: 'prevention',
    title: 'Dental Sealants Demystified',
    description: 'Sealants block the deep grooves (pits and fissures) of molars where 80% of cavities occur. See how they are painlessly applied.',
    thumbnail: 'https://picsum.photos/seed/sealants/800/600',
    duration: '04:10',
    videoId: 'HhdoPXNKNqc',
  },
  {
    id: 'vid-13',
    category: 'prevention',
    title: 'Fluoride Varnish Treatments Guide',
    description: 'Why professional high-concentration fluoride is a game-changer for remineralizing weak enamel and reversing early white-spot lesions.',
    thumbnail: 'https://picsum.photos/seed/fluoride/800/600',
    duration: '05:05',
    videoId: 'BhaALhBJJz0',
  },
  {
    id: 'vid-14',
    category: 'prevention',
    title: 'Preventing Enamel Acid Erosion',
    description: 'Acidic diets weaken enamel before brushing even begins. Learn the timing rules: wait 30 minutes after acidic foods before brushing.',
    thumbnail: 'https://picsum.photos/seed/erosion/800/600',
    duration: '06:15',
    videoId: 'HhdoPXNKNqc',
  },
  {
    id: 'vid-15',
    category: 'prevention',
    title: 'Managing Nighttime Teeth Grinding',
    description: 'Bruxism destroys tooth structure and causes TMJ pain. Identifying the signs of grinding and how custom night guards offer protection.',
    thumbnail: 'https://picsum.photos/seed/grinding/800/600',
    duration: '07:30',
    videoId: 'BhaALhBJJz0',
  },

  // Nutrition
  {
    id: 'vid-16',
    category: 'nutrition',
    title: 'The Stephan Curve of pH Drops',
    description: 'Understand how frequency of eating matters more than quantity. Every sugar exposure drops oral pH to critical levels for 20 minutes.',
    thumbnail: 'https://picsum.photos/seed/stephan/800/600',
    duration: '06:45',
    videoId: 'HhdoPXNKNqc',
  },
  {
    id: 'vid-17',
    category: 'nutrition',
    title: 'The Absolute Worst Foods for Enamel',
    description: 'Sticky candies, citrus fruits, and continuous sipping of soft drinks. Discover the biggest dietary culprits of enamel destruction.',
    thumbnail: 'https://picsum.photos/seed/worstfoods/800/600',
    duration: '05:50',
    videoId: 'BhaALhBJJz0',
  },
  {
    id: 'vid-18',
    category: 'nutrition',
    title: 'Remineralizing & Safe Foods',
    description: 'Cheese, milk, and crunchy structural vegetables. How specific dietary choices actively help rebuild your tooth enamel and stimulate saliva.',
    thumbnail: 'https://picsum.photos/seed/safefoods/800/600',
    duration: '04:40',
    videoId: 'HhdoPXNKNqc',
  },
  {
    id: 'vid-19',
    category: 'nutrition',
    title: 'Hydration Therapy for Oral Health',
    description: 'Dry mouth drastically accelerates decay. The critical importance of water intake for salivary flow, which naturally cleanses the teeth.',
    thumbnail: 'https://picsum.photos/seed/hydration/800/600',
    duration: '03:15',
    videoId: 'BhaALhBJJz0',
  },

  // Emergencies
  {
    id: 'vid-20',
    category: 'emergencies',
    title: 'Knocked Out Avulsed Tooth Protocol',
    description: 'Time is critical. What to do in the first 30 minutes if a permanent adult tooth gets completely knocked out. (Hint: Keep it in milk!).',
    thumbnail: 'https://picsum.photos/seed/knockout/800/600',
    duration: '04:00',
    videoId: 'HhdoPXNKNqc',
  },
  {
    id: 'vid-21',
    category: 'emergencies',
    title: 'Handling a Broken Orthodontic Bracket',
    description: 'Orthodontic emergencies happen. How to safely secure a loose bracket or clip an irritating wire until you can see your orthodontist.',
    thumbnail: 'https://picsum.photos/seed/bracket/800/600',
    duration: '03:25',
    videoId: 'BhaALhBJJz0',
  },
  {
    id: 'vid-22',
    category: 'emergencies',
    title: 'Severe Throbbing Toothache First Aid',
    description: 'Differentiating between sensitivity and the severe throbbing pain of an abscess. Safe pain management strategies before your clinical visit.',
    thumbnail: 'https://picsum.photos/seed/toothache/800/600',
    duration: '05:30',
    videoId: 'HhdoPXNKNqc',
  },
  {
    id: 'vid-23',
    category: 'emergencies',
    title: 'Chipped or Severely Broken Tooth',
    description: 'From minor chips to severe fractures. Identifying the depth of the break, managing sensitivity, and protecting the remaining structure.',
    thumbnail: 'https://picsum.photos/seed/chipped/800/600',
    duration: '04:45',
    videoId: 'BhaALhBJJz0',
  },
  {
    id: 'vid-24',
    category: 'emergencies',
    title: 'Soft Tissue Dental Lacerations',
    description: 'Managing bleeding and cuts on the lips, cheek, or tongue following trauma. Recognizing when sutures and professional care are required.',
    thumbnail: 'https://picsum.photos/seed/laceration/800/600',
    duration: '03:55',
    videoId: 'HhdoPXNKNqc',
  },
  {
    id: 'vid-25',
    category: 'emergencies',
    title: 'Lost Crown or Amalgam Filling',
    description: 'A displaced restoration leaves the tooth highly sensitive and vulnerable. Temporary measures you can take at home to protect it.',
    thumbnail: 'https://picsum.photos/seed/lostcrown/800/600',
    duration: '04:10',
    videoId: 'BhaALhBJJz0',
  }
];
