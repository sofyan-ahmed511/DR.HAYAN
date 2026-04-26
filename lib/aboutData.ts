import {
  Smile,
  Award,
  Stethoscope,
  User,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Activity,
  Shield,
  HeartHandshake,
  ShieldCheck,
  Target,
  Users
} from 'lucide-react';

// ==========================================
// ABOUT PAGE DATA
// ==========================================
// This file contains all the textual and visual data used on the About Page.
// Including the doctor's timeline, skills, certifications, and core values.

// ------------------------------------------
// 1. DOCTOR'S TIMELINE
// Academic and professional achievements over the years.
// ------------------------------------------
export const timeline = [
  {
    year: "2010",
    title: "Bachelor of Oral and Dental Surgery",
    institution: "Cairo University",
    description: "Graduated with first class honors."
  },
  {
    year: "2012",
    title: "Clinical Residency",
    institution: "Kasr Al-Ainy Hospital",
    description: "Intensive training in general dental procedures and emergencies."
  },
  {
    year: "2015",
    title: "Master's in Orthodontics",
    institution: "Cairo University",
    description: "Specialization in Orthodontics and Dentofacial Orthopedics."
  },
  {
    year: "2017",
    title: "Invisalign Certification",
    institution: "Align Technology",
    description: "Certified provider for clear aligner therapy."
  },
  {
    year: "2018",
    title: "British Fellowship in Orthodontics",
    institution: "Royal College of Surgeons - Edinburgh",
    description: "Member of the Royal College of Surgeons in Orthodontics."
  },
  {
    year: "2020 - Present",
    title: "Consultant Orthodontist",
    institution: "Smile Care Clinics",
    description: "Head of Orthodontics Department and supervision of complex cases."
  }
];

// ------------------------------------------
// 2. DOCTOR'S SKILLS
// Core competencies and specialties.
// ------------------------------------------
export const skills = [
  { name: "Invisalign", icon: Smile, description: "Advanced clear aligner system for a discreet and comfortable orthodontic experience." },
  { name: "Metal & Ceramic Braces", icon: Award, description: "High-precision traditional and aesthetic braces for effective correction of all dental issues." },
  { name: "Surgical Orthodontics", icon: Stethoscope, description: "Specialized care for complex cases requiring surgical jaw correction and alignment." },
  { name: "Pediatric Orthodontics", icon: User, description: "Early intervention and growth guidance to ensure healthy dental development in children." },
  { name: "Impacted Canines", icon: CheckCircle2, description: "Expert surgical and orthodontic management of impacted teeth to bring them into position." },
  { name: "Jaw Growth Modification", icon: BookOpen, description: "Orthopedic treatments to guide jaw growth and correct skeletal imbalances during development." },
  { name: "Digital Smile Design", icon: Sparkles, description: "3D simulation and planning to design your perfect smile before treatment even begins." },
  { name: "TMJ Management", icon: Activity, description: "Comprehensive diagnosis and treatment for jaw joint pain and functional disorders." },
  { name: "Lingual Orthodontics", icon: Shield, description: "Completely invisible braces placed behind the teeth for maximum aesthetic discretion." },
];

// ------------------------------------------
// 3. DOCTOR'S CERTIFICATIONS
// Official certificates and achievements with images.
// ------------------------------------------
export const certifications = [
  { id: 1, title: "Master's in Orthodontics", institution: "Cairo University", image: "https://picsum.photos/seed/cert1/600/450" },
  { id: 2, title: "British Fellowship", institution: "Royal College of Surgeons", image: "https://picsum.photos/seed/cert2/600/450" },
  { id: 3, title: "Invisalign Platinum Provider", institution: "Align Technology", image: "https://picsum.photos/seed/cert3/600/450" },
  { id: 4, title: "Digital Dentistry Expert", institution: "Global Dental Academy", image: "https://picsum.photos/seed/cert4/600/450" },
  { id: 5, title: "Advanced Surgical Ortho", institution: "European Ortho Society", image: "https://picsum.photos/seed/cert5/600/450" },
  { id: 6, title: "Pediatric Care Excellence", institution: "International Dental Assoc", image: "https://picsum.photos/seed/cert6/600/450" },
];

// ------------------------------------------
// 4. CLINIC VALUES
// Core values that guide patient care.
// ------------------------------------------
export const values = [
  { title: "Patient First", description: "Your comfort and goals are our top priority in every treatment plan.", icon: HeartHandshake },
  { title: "Innovation", description: "We constantly invest in the latest digital technologies for better results.", icon: Sparkles },
  { title: "Integrity", description: "Honest communication and transparent pricing for all our patients.", icon: ShieldCheck },
  { title: "Excellence", description: "Striving for the highest international standards in orthodontic care.", icon: Award },
  { title: "Education", description: "Empowering patients with knowledge for long-term dental health.", icon: BookOpen },
  { title: "Compassion", description: "A gentle touch and empathetic care for patients of all ages.", icon: Smile },
  { title: "Safety", description: "Strict adherence to global sterilization and safety protocols.", icon: Shield },
  { title: "Precision", description: "Meticulous attention to detail in every adjustment and procedure.", icon: Target },
  { title: "Teamwork", description: "A collaborative approach between our staff and patients.", icon: Users },
];
