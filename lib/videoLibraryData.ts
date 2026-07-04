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
    thumbnail: 'https://plus.unsplash.com/premium_photo-1744085660375-b7781f2bf5cd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '02:16',
    url: 'https://youtu.be/0BMXT9UdWQc?si=LbdEJGsEiqTFNmVC',
  },
  {
    id: 'vid-2',
    category: 'oral-hygiene',
    title: 'Precision Electric Toothbrushing',
    description: 'A detailed walkthrough of how to guide an oscillating electric toothbrush across each tooth surface for maximum plaque disruption.',
    thumbnail: 'https://images.unsplash.com/photo-1575325342632-92615b50d3e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '06:30',
    url: 'https://www.youtube.com/embed/2cM9wxDDr7Qhttps://youtu.be/RdQeEbfd444?si=0ujLV4uOG7EEZJRs',
  },
  {
    id: 'vid-3',
    category: 'oral-hygiene',
    title: 'Tongue Scraping Explained',
    description: 'Why brushing your teeth isn\'t enough. Integrating tongue scraping daily significantly reduces halitosis (bad breath) and decreases the overall bacterial load in your mouth.',
    thumbnail: 'https://images.unsplash.com/photo-1615592602923-9fb437226763?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '03:45',
    url: 'https://youtu.be/Y40MZF0KRLs?si=J7OldrbGpT7GWlOQ',
  },
  {
    id: 'vid-4',
    category: 'brushing',
    title: 'Brushing with Braces & Hardware',
    description: 'Orthodontic hardware creates thousands of traps for plaque. Watch a step-by-step tutorial on navigating brackets and wires without causing damage.',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1744085660376-4e8f8ddb38d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8',
    duration: '05:20',
    url: 'https://youtu.be/qJzf-LbzVVI?si=f9CW1R-ImFnPV_7J',
  },
  {
    id: 'vid-5',
    category: 'brushing',
    title: 'Choosing the Optimal Toothpaste',
    description: 'Fluoride, Stannous Fluoride, or Hydroxyapatite? Decoding toothpaste ingredients to choose the right one for sensitivity, whitening, or cavity protection.',
    thumbnail: 'https://images.unsplash.com/photo-1676897288522-e8a081e71430?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '07:10',
    url: 'https://youtu.be/ZdNLkDqitW0?si=MzV4qMSBw0lzrvid',
  },

  // Flossing & Interdental (Bounds of Service / Other Hygiene)
  {
    id: 'vid-6',
    category: 'bounds-of-service',
    title: 'String Floss Masterclass',
    description: 'The C-shape flossing technique is mandatory for interproximal health. Understand how to wrap, glide, and curve the floss to remove hidden plaque.',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1744142824369-c9e97e2c282c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
    duration: '04:55',
    url: 'https://youtu.be/WviE5aa5Ha0?si=uwsJATZZ1XKiuYnt',
  },
  {
    id: 'vid-7',
    category: 'other-hygiene',
    title: 'Water Flossers: Do They Work?',
    description: 'An analysis of oral irrigators. While they are excellent at flushing out food debris, learn how they complement, rather than replace, traditional string floss.',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1744142824197-fa24720db4b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
    duration: '05:40',
    url: 'https://youtu.be/yaZtNAVZ1Ao?si=ZRWp4JyHRb5OAw_E',
  },
  {
    id: 'vid-8',
    category: 'other-hygiene',
    title: 'Using Interdental Brushes',
    description: 'For patients with open contacts, periodontal disease, or braces, interdental brushes often outperform string floss. Here is how to size and use them.',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1744142824876-385256bd8855?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW50ZXJkZW50YWwlMjBCcnVzaHxlbnwwfHwwfHx8MA%3D%3D',
    duration: '03:30',
    url: 'https://youtu.be/2LC7YKwJEqQ?si=55RH5eLcpQV_xXpe',
  },
  {
    id: 'vid-9',
    category: 'other-hygiene',
    title: 'Clear Aligner Total Maintenance',
    description: 'Keep your Invisalign or clear aligners invisible and odor-free. The essential cleaning protocols using safe chemical agents and soft brushing.',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1744085660476-c00f5906f961?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
    duration: '04:15',
    url: 'https://youtu.be/xFecpkyu-zU?si=cm7oz4b9YizW2RzA',
  },
  {
    id: 'vid-10',
    category: 'other-hygiene',
    title: 'Retainer Lifelong Care Guide',
    description: 'Your retainer is for life, and so is its maintenance. Step-by-step cleaning to prevent calculus buildup on Essex and Hawley retainers.',
    thumbnail: 'https://images.unsplash.com/photo-1777446899714-c26de766dffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmV0YWluZXIlMjBMaWZlbG9uZyUyMENhcmUlMjBHdWlkZXxlbnwwfHwwfHx8MA%3D%3D',
    duration: '03:50',
    url: 'https://youtu.be/VP3Wpwhek3M?si=0qKsHXd7fEk9aF4F',
  },

  // Prevention
  {
    id: 'vid-11',
    category: 'prevention',
    title: 'How Cavities Form (Animation)',
    description: 'An animated micro-level view of demineralization. Understand the role of Streptococcus mutans and time in the decay process.',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1661591348040-69bb38969964?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
    duration: '08:20',
    url: 'https://youtu.be/BapR9J86ZZw?si=SHCVzDCG5vEfly_U',
  },
  {
    id: 'vid-12',
    category: 'prevention',
    title: 'Dental Sealants Demystified',
    description: 'Sealants block the deep grooves (pits and fissures) of molars where 80% of cavities occur. See how they are painlessly applied.',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1661630922028-ebbb556285e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VhbGFudCUyMFBsYWNlbWVudCUyMFByb2NlZHVyZXxlbnwwfHwwfHx8MA%3D%3D',
    duration: '04:10',
    url: 'https://youtu.be/Twxd7v9zlE4?si=_dw13BbxPFtoLTgz',
  },
  {
    id: 'vid-13',
    category: 'prevention',
    title: 'Fluoride Varnish Treatments Guide',
    description: 'Why professional high-concentration fluoride is a game-changer for remineralizing weak enamel and reversing early white-spot lesions.',
    thumbnail: 'https://images.unsplash.com/photo-1664529845836-433c172142ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rmx1b3JpZGUlMjBWYXJuaXNoJTIwVHJlYXRtZW50cyUyMEd1aWRlfGVufDB8fDB8fHww',
    duration: '05:05',
    url: 'https://youtu.be/oeCPCPYf6PY?si=ba4IXN3oNdA5EiWT',
  },
  {
    id: 'vid-14',
    category: 'prevention',
    title: 'Preventing Enamel Acid Erosion',
    description: 'Acidic diets weaken enamel before brushing even begins. Learn the timing rules: wait 30 minutes after acidic foods before brushing.',
    thumbnail: 'https://images.unsplash.com/photo-1664529845848-00f5fa16df86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHJldmVudGluZyUyMEVuYW1lbCUyMEFjaWQlMjBFcm9zaW9ufGVufDB8fDB8fHww',
    duration: '06:15',
    url: 'https://youtu.be/O6LHSV-tDOY?si=lYGkW0eQkwDKo4VO',
  },
  {
    id: 'vid-15',
    category: 'prevention',
    title: 'Managing Nighttime Teeth Grinding',
    description: 'Bruxism destroys tooth structure and causes TMJ pain. Identifying the signs of grinding and how custom night guards offer protection.',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1681995355228-0f31d4f41f80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TWFuYWdpbmclMjBOaWdodHRpbWUlMjBUZWV0aCUyMEdyaW5kaW5nfGVufDB8fDB8fHww',
    duration: '07:30',
    url: 'https://youtu.be/ir2RuPSg3w4?si=JTrIy0U5J6eP0ZW-',
  },

  // Nutrition
  {
    id: 'vid-16',
    category: 'nutrition',
    title: 'The Stephan Curve of pH Drops',
    description: 'Understand how frequency of eating matters more than quantity. Every sugar exposure drops oral pH to critical levels for 20 minutes.',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1722873143643-ea42854f97d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk2fHx8ZW58MHx8fHx8',
    duration: '06:45',
    url: 'https://youtu.be/b47m5DtT260?si=3BIHDJG8Ha2IV9tU',
  },
  {
    id: 'vid-17',
    category: 'nutrition',
    title: 'The Absolute Worst Foods for Enamel',
    description: 'Sticky candies, citrus fruits, and continuous sipping of soft drinks. Discover the biggest dietary culprits of enamel destruction.',
    thumbnail: 'https://images.unsplash.com/photo-1612568401148-684c9166f16b?q=80&w=1517&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '05:50',
    url: 'https://youtu.be/AsPB8lYkB-0?si=T8iq5WlVdc6_KbGs',
  },
  {
    id: 'vid-18',
    category: 'nutrition',
    title: 'Remineralizing & Safe Foods',
    description: 'Cheese, milk, and crunchy structural vegetables. How specific dietary choices actively help rebuild your tooth enamel and stimulate saliva.',
    thumbnail: 'https://images.unsplash.com/photo-1467453678174-768ec283a940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVtaW5lcmFsaXppbmclMjAlMjYlMjBTYWZlJTIwRm9vZHN8ZW58MHx8MHx8fDA%3D',
    duration: '04:40',
    url: 'https://youtu.be/85y3hTvMQYM?si=klgowvDSaT2QXt33',
  },
  {
    id: 'vid-19',
    category: 'nutrition',
    title: 'Hydration Therapy for Oral Health',
    description: 'Dry mouth drastically accelerates decay. The critical importance of water intake for salivary flow, which naturally cleanses the teeth.',
    thumbnail: 'https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
    duration: '03:15',
    url: 'https://youtu.be/lP0P-zduVcQ?si=2zUqRn2GlLTS2-K7',
  },

  // Emergencies
  {
    id: 'vid-20',
    category: 'emergencies',
    title: 'Knocked Out Avulsed Tooth Protocol',
    description: 'Time is critical. What to do in the first 30 minutes if a permanent adult tooth gets completely knocked out. (Hint: Keep it in milk!).',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1722873143746-232707ff0bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEhvdyUyMFRvJTIwU2F2ZSUyMEElMjBLbm9ja2VkLU91dCUyMFRvb3RofGVufDB8fDB8fHww',
    duration: '04:00',
    url: 'https://youtu.be/Sf6y5s_qc4E?si=0a_h53LSDqQWrlHU',
  },
  {
    id: 'vid-21',
    category: 'emergencies',
    title: 'Handling a Broken Orthodontic Bracket',
    description: 'Orthodontic emergencies happen. How to safely secure a loose bracket or clip an irritating wire until you can see your orthodontist.',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1677174625625-fb6f183af447?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SG93JTIwdG8lMjBGSVglMjBCUk9LRU4lMjBCUkFDRVN8ZW58MHx8MHx8fDA%3D',
    duration: '03:25',
    url: 'https://youtu.be/c9VJmhqt1l0?si=ykUBv4VmRoSspfsy',
  },
  {
    id: 'vid-22',
    category: 'emergencies',
    title: 'Severe Throbbing Toothache First Aid',
    description: 'Differentiating between sensitivity and the severe throbbing pain of an abscess. Safe pain management strategies before your clinical visit.',
    thumbnail: 'https://images.unsplash.com/photo-1592400400196-bf709e32aa88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2V2ZXJlJTIwVGhyb2JiaW5nJTIwVG9vdGhhY2hlJTIwRmlyc3QlMjBBaWR8ZW58MHx8MHx8fDA%3D',
    duration: '05:30',
    url: 'https://www.youtube.com/watch?v=V7j21Vz1XXI',
  },
  {
    id: 'vid-23',
    category: 'emergencies',
    title: 'Chipped or Severely Broken Tooth',
    description: 'From minor chips to severe fractures. Identifying the depth of the break, managing sensitivity, and protecting the remaining structure.',
    thumbnail: 'https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENoaXBwZWQlMjBvciUyMFNldmVyZWx5JTIwQnJva2VuJTIwVG9vdGh8ZW58MHx8MHx8fDA%3D',
    duration: '04:45',
    url: 'https://www.youtube.com/watch?v=Pz89JoSOFOk',
  },
  {
    id: 'vid-24',
    category: 'emergencies',
    title: 'Soft Tissue Dental Lacerations',
    description: 'Managing bleeding and cuts on the lips, cheek, or tongue following trauma. Recognizing when sutures and professional care are required.',
    thumbnail: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U29mdCUyMFRpc3N1ZSUyMERlbnRhbCUyMExhY2VyYXRpb25zfGVufDB8fDB8fHww',
    duration: '03:55',
    url: 'https://www.youtube.com/watch?v=NgRmP95iito',
  },
  {
    id: 'vid-25',
    category: 'emergencies',
    title: 'Lost Crown or Amalgam Filling',
    description: 'A displaced restoration leaves the tooth highly sensitive and vulnerable. Temporary measures you can take at home to protect it.',
    thumbnail: 'https://images.unsplash.com/photo-1660732205502-2c4dcd3af74d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TG9zdCUyMENyb3duJTIwb3IlMjBBbWFsZ2FtJTIwRmlsbGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    duration: '04:10',
    url: 'https://www.youtube.com/watch?v=5e4KkvPFRHM',
  }
];
