import { Sparkles, Smile, ShieldCheck, Stethoscope } from 'lucide-react';

// ==========================================
// EDUCATION / NEWS PAGE DATA
// ==========================================
// Information for the Daily Dental Routine, educational categories, and video library.

// 1. Categories for dental education
export const educationCategories = [
  { id: 'brushing', title: 'Brushing', icon: Sparkles, color: 'bg-primary' },
  { id: 'flossing', title: 'Flossing', icon: Smile, color: 'bg-blue-500' },
  { id: 'gums', title: 'Gum Care', icon: ShieldCheck, color: 'bg-emerald-500' },
  { id: 'braces', title: 'Braces Care', icon: Stethoscope, color: 'bg-amber-500' },
];

// 2. Routine steps for daily care
export const routineSteps = [
  {
    number: '01',
    title: 'Morning Rinse',
    description: 'Start your day by rinsing with water or an alcohol-free mouthwash to remove overnight bacteria.',
    image: 'https://picsum.photos/seed/news-routine-1/800/600'
  },
  {
    number: '02',
    title: 'Proper Brushing',
    description: 'Brush for at least 2 minutes using a soft-bristled brush and fluoride toothpaste at a 45-degree angle.',
    image: 'https://picsum.photos/seed/news-routine-2/800/600'
  },
  {
    number: '03',
    title: 'Nightly Floss',
    description: 'Flossing before bed is crucial to remove plaque from between teeth where brushes can\'t reach.',
    image: 'https://picsum.photos/seed/news-routine-3/800/600'
  }
];

// 3. Educational Videos shown on this page
export const educationalVideos = [
  {
    id: 1,
    title: "How to Choose the Right Braces for You?",
    description: "Learn about the different types of braces available, including traditional metal braces, ceramic braces, and clear aligners. We will help you understand which option is best suited for your specific dental needs and lifestyle.",
    duration: "03:45",
    thumbnail: "https://picsum.photos/seed/edu1/800/600",
    category: "Pre-treatment Tips",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Daily Routine for Clear Aligner Care",
    description: "Discover the best practices for cleaning and maintaining your clear aligners to ensure they stay invisible and odor-free throughout your treatment.",
    duration: "05:20",
    thumbnail: "https://picsum.photos/seed/edu2/800/600",
    category: "Daily Care",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Is Orthodontics Painful? The Whole Truth",
    description: "We address one of the most common concerns about orthodontic treatment: pain. Learn what to expect during adjustments and how to manage any discomfort.",
    duration: "04:15",
    thumbnail: "https://picsum.photos/seed/edu3/800/600",
    category: "FAQs",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Stages of Face Shape Change After Braces",
    description: "Orthodontic treatment can subtly alter your facial profile. See the incredible transformations and understand how aligning your teeth can improve your overall facial symmetry.",
    duration: "06:30",
    thumbnail: "https://picsum.photos/seed/edu4/800/600",
    category: "Treatment Results",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "What to Eat During the First Week of Braces?",
    description: "Your teeth will be sensitive after getting braces. Here is a list of soft, nutritious, and delicious foods that are safe to eat during your first week.",
    duration: "04:50",
    thumbnail: "https://picsum.photos/seed/edu5/800/600",
    category: "Nutrition",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "The Importance of Retainers After Treatment",
    description: "Finishing your braces treatment is just the beginning. Learn why wearing your retainer is absolutely crucial to maintaining your newly aligned smile.",
    duration: "03:15",
    thumbnail: "https://picsum.photos/seed/edu6/800/600",
    category: "Post-treatment",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 7,
    title: "How to Floss with Braces Properly",
    description: "Flossing with braces can be tricky, but it's essential. Watch a step-by-step tutorial on how to use floss threaders and interdental brushes effectively.",
    duration: "04:30",
    thumbnail: "https://picsum.photos/seed/edu7/800/600",
    category: "Daily Care",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 8,
    title: "What Happens if a Bracket Breaks?",
    description: "Don't panic! Here's what you need to do if a bracket comes loose or a wire starts poking you before your next orthodontic appointment.",
    duration: "02:45",
    thumbnail: "https://picsum.photos/seed/edu8/800/600",
    category: "Emergencies",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 9,
    title: "Orthodontics for Adults: Is it Too Late?",
    description: "It is never too late to get the smile you have always wanted. Explore the benefits of adult orthodontics and the discreet options available to you.",
    duration: "06:10",
    thumbnail: "https://picsum.photos/seed/edu9/800/600",
    category: "Pre-treatment Tips",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 10,
    title: "The Role of Elastics in Your Treatment",
    description: "Why do you need to wear rubber bands? Uncover the science behind elastics and how they help correct your bite alignment.",
    duration: "03:55",
    thumbnail: "https://picsum.photos/seed/edu10/800/600",
    category: "Treatment Results",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 11,
    title: "Invisalign vs. Traditional Braces: Pros and Cons",
    description: "We compare clear aligners with metal brackets to help you decide which orthodontic path is genuinely the best fit for your lifestyle and budget.",
    duration: "07:20",
    thumbnail: "https://picsum.photos/seed/edu11/800/600",
    category: "Pre-treatment Tips",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 12,
    title: "How to Manage Mouth Sores from Braces",
    description: "Braces can sometimes cause irritation. Learn the best home remedies and professional tips to soothe and heal mouth sores quickly.",
    duration: "03:10",
    thumbnail: "https://picsum.photos/seed/edu12/800/600",
    category: "Daily Care",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 13,
    title: "Foods You MUST Avoid with Braces",
    description: "Protect your braces from breaking. We detail the hard, sticky, and chewy foods that you absolutely must avoid during your orthodontic journey.",
    duration: "05:00",
    thumbnail: "https://picsum.photos/seed/edu13/800/600",
    category: "Nutrition",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 14,
    title: "Can I Play Sports with Braces?",
    description: "Yes, you can! Learn about the importance of orthodontic mouthguards and how to protect your teeth and braces while playing contact sports.",
    duration: "02:50",
    thumbnail: "https://picsum.photos/seed/edu14/800/600",
    category: "FAQs",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 15,
    title: "Getting Your Braces Off: The Process",
    description: "The big day is here! We walk you through exactly what happens when it's time to remove your braces and reveal your new, beautiful smile.",
    duration: "04:40",
    thumbnail: "https://picsum.photos/seed/edu15/800/600",
    category: "Post-treatment",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];
