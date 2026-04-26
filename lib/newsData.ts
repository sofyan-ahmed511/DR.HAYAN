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
    duration: "03:45",
    thumbnail: "https://picsum.photos/seed/edu1/800/600",
    category: "Pre-treatment Tips",
    url: "https://youtube.com" // You can replace this with actual video URLs
  },
  {
    id: 2,
    title: "Daily Routine for Clear Aligner Care",
    duration: "05:20",
    thumbnail: "https://picsum.photos/seed/edu2/800/600",
    category: "Daily Care",
    url: "https://youtube.com"
  },
  {
    id: 3,
    title: "Is Orthodontics Painful? The Whole Truth",
    duration: "04:15",
    thumbnail: "https://picsum.photos/seed/edu3/800/600",
    category: "FAQs",
    url: "https://youtube.com"
  },
  {
    id: 4,
    title: "Stages of Face Shape Change After Braces",
    duration: "06:30",
    thumbnail: "https://picsum.photos/seed/edu4/800/600",
    category: "Treatment Results",
    url: "https://youtube.com"
  },
  {
    id: 5,
    title: "What to Eat During the First Week of Braces?",
    duration: "04:50",
    thumbnail: "https://picsum.photos/seed/edu5/800/600",
    category: "Nutrition",
    url: "https://youtube.com"
  },
  {
    id: 6,
    title: "The Importance of Retainers After Treatment",
    duration: "03:15",
    thumbnail: "https://picsum.photos/seed/edu6/800/600",
    category: "Post-treatment",
    url: "https://youtube.com"
  },
  {
    id: 7,
    title: "How to Floss with Braces Properly",
    duration: "04:30",
    thumbnail: "https://picsum.photos/seed/edu7/800/600",
    category: "Daily Care",
    url: "https://youtube.com"
  },
  {
    id: 8,
    title: "What Happens if a Bracket Breaks?",
    duration: "02:45",
    thumbnail: "https://picsum.photos/seed/edu8/800/600",
    category: "Emergencies",
    url: "https://youtube.com"
  },
  {
    id: 9,
    title: "Orthodontics for Adults: Is it Too Late?",
    duration: "06:10",
    thumbnail: "https://picsum.photos/seed/edu9/800/600",
    category: "Pre-treatment Tips",
    url: "https://youtube.com"
  },
  {
    id: 10,
    title: "The Role of Elastics in Your Treatment",
    duration: "03:55",
    thumbnail: "https://picsum.photos/seed/edu10/800/600",
    category: "Treatment Results",
    url: "https://youtube.com"
  },
  {
    id: 11,
    title: "Invisalign vs. Traditional Braces: Pros and Cons",
    duration: "07:20",
    thumbnail: "https://picsum.photos/seed/edu11/800/600",
    category: "Pre-treatment Tips",
    url: "https://youtube.com"
  },
  {
    id: 12,
    title: "How to Manage Mouth Sores from Braces",
    duration: "03:10",
    thumbnail: "https://picsum.photos/seed/edu12/800/600",
    category: "Daily Care",
    url: "https://youtube.com"
  },
  {
    id: 13,
    title: "Foods You MUST Avoid with Braces",
    duration: "05:00",
    thumbnail: "https://picsum.photos/seed/edu13/800/600",
    category: "Nutrition",
    url: "https://youtube.com"
  },
  {
    id: 14,
    title: "Can I Play Sports with Braces?",
    duration: "02:50",
    thumbnail: "https://picsum.photos/seed/edu14/800/600",
    category: "FAQs",
    url: "https://youtube.com"
  },
  {
    id: 15,
    title: "Getting Your Braces Off: The Process",
    duration: "04:40",
    thumbnail: "https://picsum.photos/seed/edu15/800/600",
    category: "Post-treatment",
    url: "https://youtube.com"
  }
];
