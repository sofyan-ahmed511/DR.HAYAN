import {
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Clock,
  Smile,
  Award,
  Stethoscope,
  User,
  Activity,
  Zap,
  Globe,
  Search,
  CalendarCheck
} from 'lucide-react';

// ==========================================
// HOME PAGE DATA
// ==========================================
// This file contains all the textual and visual data used on the Home Page.
// You can easily modify titles, descriptions, icons, and images here without 
// having to search through the UI code.

// ------------------------------------------
// 1. FEATURES SECTION
// Highlight the top reasons patients choose your clinic.
// ------------------------------------------
export const features = [
  {
    title: "Personalized Care",
    description: "We listen to your needs and design a treatment plan that fits your goals and lifestyle.",
    icon: HeartHandshake // You can change this icon (import a new one from lucide-react above)
  },
  {
    title: "Advanced Tech",
    description: "Using the latest 3D digital scanning devices for accurate and fast results.",
    icon: Sparkles
  },
  {
    title: "Highest Sterilization",
    description: "We adhere to strict protocols to ensure a completely safe treatment environment.",
    icon: ShieldCheck
  },
  {
    title: "Flexible Appointments",
    description: "We value your time and provide flexible appointment schedules that fit your busy life.",
    icon: Clock
  }
];

// ------------------------------------------
// 2. SERVICES SECTION
// The main services offered by the clinic.
// ------------------------------------------
export const services = [
  {
    id: 'invisalign',
    title: "Clear Aligners",
    description: "Invisible and comfortable orthodontic treatment using custom clear trays, ideal for adults and those seeking a natural look.",
    icon: Smile,
    features: ["Virtually Invisible", "Removable", "Comfortable & Fast", "Digitally Predictable"]
  },
  {
    id: 'metal',
    title: "Metal & Ceramic Braces",
    description: "The traditional and most effective solution for treating all complex malocclusion cases with high precision.",
    icon: Award,
    features: ["Maximum Effectiveness", "Suitable for All Ages", "Clear Ceramic Options", "Cost-Effective"]
  },
  {
    id: 'surgical',
    title: "Surgical Orthodontics",
    description: "Integrated treatment for cases requiring surgical intervention to correct jaw position in cooperation with oral surgeons.",
    icon: Stethoscope,
    features: ["Radical Jaw Correction", "Aesthetic Improvement", "Improved Functions", "Precise Digital Planning"]
  },
  {
    id: 'pediatric',
    title: "Pediatric Orthodontics",
    description: "Early intervention for children to guide jaw growth and ensure permanent teeth erupt in the correct positions.",
    icon: User,
    features: ["Growth Guidance", "Habit Breaking", "Fun Environment", "Preventive Care"]
  },
  {
    id: 'lingual',
    title: "Lingual Braces",
    description: "Braces attached to the back of the teeth, making them completely invisible from the outside while providing full control.",
    icon: Sparkles,
    features: ["100% Invisible", "Custom Made", "High Precision", "Advanced Tech"]
  },
  {
    id: 'tmj',
    title: "TMJ Treatment",
    description: "Specialized care for jaw joint problems and teeth grinding using advanced splint therapy and bite correction.",
    icon: Activity,
    features: ["Pain Relief", "Joint Stability", "Bite Alignment", "Custom Splints"]
  },
  {
    id: 'damon',
    title: "Damon System",
    description: "Self-ligating braces that use low-friction force to move teeth more comfortably and often faster than traditional braces.",
    icon: Zap,
    features: ["Faster Treatment", "Fewer Appointments", "Greater Comfort", "Better Hygiene"]
  },
  {
    id: 'retainers',
    title: "Retention Phase",
    description: "Crucial post-orthodontic care using fixed or removable retainers to ensure your new smile stays perfect forever.",
    icon: ShieldCheck,
    features: ["Long-term Stability", "Custom Fit", "Night-time Wear", "Regular Checks"]
  },
  {
    id: 'digital-scan',
    title: "3D Digital Scanning",
    description: "Say goodbye to messy impressions. Our iTero scanner creates a precise 3D model of your teeth in minutes.",
    icon: Globe,
    features: ["High Precision", "No Mess", "Instant Results", "Better Planning"]
  }
];

// ------------------------------------------
// 3. WORK STEPS SECTION
// Explains the patient journey from consultation to results.
// ------------------------------------------
export const workSteps = [
  {
    id: 1,
    title: "Consultation & Exam",
    description: "A precise photography session and CT scan to study the case and determine the problem.",
    icon: Search
  },
  {
    id: 2,
    title: "Digital Treatment Plan",
    description: "Smile design and showing the expected result before starting using 3D simulation.",
    icon: Sparkles
  },
  {
    id: 3,
    title: "Start the Transformation",
    description: "Installing the braces and regular follow-ups to ensure teeth move according to the plan.",
    icon: CalendarCheck
  }
];

// ------------------------------------------
// 4. TESTIMONIALS SECTION
// Patient reviews displaying their satisfaction with their new smile.
// ------------------------------------------
export const testimonials = [
  {
    name: "Sarah Ahmed",
    text: "My experience with Dr. Hian was wonderful. I suffered from severe crowding and now I smile with full confidence. The clinic is very comfortable and the treatment is sophisticated.",
    image: "https://picsum.photos/seed/testimonial-1/400/400"
  },
  {
    name: "Mohamed Ali",
    text: "The best orthodontist in Egypt. Punctuality and attention to detail. The result far exceeded my expectations.",
    image: "https://picsum.photos/seed/testimonial-2/400/400"
  },
  {
    name: "Norhan Mahmoud",
    text: "I was very afraid of surgical orthodontics, but Dr. Hian reassured me and explained all the steps to me. I am very grateful to him.",
    image: "https://picsum.photos/seed/testimonial-3/400/400"
  },
  {
    name: "Karim Hassan",
    text: "Clear aligners changed my life. No one noticed I was wearing braces, and the result is amazing and in record time.",
    image: "https://picsum.photos/seed/testimonial-4/400/400"
  },
  {
    name: "Laila Youssef",
    text: "Excellent service and very professional staff. Dr. Hian is an expert in his field. Highly recommended!",
    image: "https://picsum.photos/seed/testimonial-5/400/400"
  },
  {
    name: "Ahmed Ibrahim",
    text: "I am very happy with my new smile. The treatment was painless and the results are perfect. Thank you Dr. Hian!",
    image: "https://picsum.photos/seed/testimonial-6/400/400"
  },
  {
    name: "Yasmine Fouad",
    text: "The digital scanning was so much better than the old impressions. Dr. Hian's technology is top-notch.",
    image: "https://picsum.photos/seed/testimonial-7/400/400"
  },
  {
    name: "Omar Khaled",
    text: "Professionalism at its best. The team is friendly and the results are life-changing.",
    image: "https://picsum.photos/seed/testimonial-8/400/400"
  },
  {
    name: "Hoda Mansour",
    text: "I brought my son here for early intervention. The experience was fun for him and effective for his teeth.",
    image: "https://picsum.photos/seed/testimonial-9/400/400"
  },
  {
    name: "Tarek Zaki",
    text: "Truly remarkable transformation. My bite feels perfect, and I can chew properly again.",
    image: "https://picsum.photos/seed/testimonial-10/400/400"
  },
  {
    name: "Salma Nabil",
    text: "Every visit was seamless. Dr. Hayan truly cares about his patients' well-being.",
    image: "https://picsum.photos/seed/testimonial-11/400/400"
  },
  {
    name: "Hussein Kamel",
    text: "The digital tracking of my progress kept me motivated every month.",
    image: "https://picsum.photos/seed/testimonial-12/400/400"
  },
  {
    name: "Rania Magdy",
    text: "I waited years to finally get braces, and I am so glad I chose this clinic for my journey.",
    image: "https://picsum.photos/seed/testimonial-13/400/400"
  },
  {
    name: "Amr Adel",
    text: "Quick responses, clean environment, and incredible medical expertise. What more could you want?",
    image: "https://picsum.photos/seed/testimonial-14/400/400"
  },
  {
    name: "Nouran Ezzat",
    text: "My confidence has skyrocketed. I can't stop smiling in photos now!",
    image: "https://picsum.photos/seed/testimonial-15/400/400"
  }
];

// ------------------------------------------
// 5. FAQ SECTION
// Frequently Asked Questions and their answers.
// ------------------------------------------
export const faqs = [
  {
    question: "How long does orthodontic treatment take?",
    answer: "The duration varies depending on the complexity of the case, but on average it ranges from 12 to 24 months. Simple cases using clear aligners may be completed within 6 months."
  },
  {
    question: "Are clear aligners as effective as metal braces?",
    answer: "Yes, clear aligners are very effective in treating most orthodontic cases, and even superior in some cases thanks to pre-digital planning. However, some very complex cases may require metal braces."
  },
  {
    question: "At what age should my child visit an orthodontist?",
    answer: "The American Association of Orthodontists recommends visiting an orthodontist at age 7. Early intervention can prevent complex problems in the future and guide jaw growth correctly."
  },
  {
    question: "Do I need to have teeth extracted for braces?",
    answer: "Not always. Thanks to modern techniques, we try to avoid extraction as much as possible. The decision to extract depends on the degree of crowding, tooth protrusion, and face shape."
  }
];
