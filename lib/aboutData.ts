import {
  Smile,
  Award,
  Stethoscope,
  Users,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Activity,
  Shield,
  HeartHandshake,
  ShieldCheck,
  Target,
} from 'lucide-react';

// ==========================================
// ABOUT PAGE DATA - Dr. Hayan Musab
// ==========================================

// ------------------------------------------
// 1. DOCTOR'S TIMELINE - WORK EXPERIENCE (4 items only)
// ------------------------------------------
export const timeline = [
  {
    year: "2025 – 2026",
    title: "Orthodontist At Riva Dental Clinic",
    institution: "Riva Dental Clinic, Al Minya",
    description: "Advanced orthodontic treatments and management of multidisciplinary cases."
  },
  {
    year: "2022 – 2026",
    title: "Orthodontist At Nasef Dental Studio",
    institution: "Nasef Dental Studio, Al Minya",
    description: "Specialized orthodontic practice focusing on fixed appliances and clear aligners."
  },
  {
    year: "2020 – 2023",
    title: "General Dentist At Lotus Dental Center",
    institution: "Lotus Dental Center, Al Minya",
    description: "Provided comprehensive dental care and gained extensive clinical experience."
  },
  {
    year: "2020 – 2021",
    title: "General Dentist At White Dental Clinic",
    institution: "White Dental Clinic, Al Minya",
    description: "Provided comprehensive general dental care."
  }
];

// ------------------------------------------
// 2. CLINICAL SKILLS
// ------------------------------------------
export const skills = [
  { 
    name: "Advanced Orthodontic Diagnosis", 
    icon: Stethoscope, 
    description: "Cephalometric analysis, radiographic interpretation, and comprehensive treatment planning." 
  },
  { 
    name: "Fixed Appliance Therapy", 
    icon: Award, 
    description: "Precise bracket positioning, wire sequencing, bending, and treatment adjustments." 
  },
  { 
    name: "Clear Aligner Therapy", 
    icon: Smile, 
    description: "Planning, monitoring, and refinements for modern clear aligner systems." 
  },
  { 
    name: "Temporary Anchorage Devices (TADs)", 
    icon: Target, 
    description: "Placement and utilization of mini screws for efficient tooth movement." 
  },
  { 
    name: "Orthodontic Biomechanics", 
    icon: Activity, 
    description: "Application of biomechanical principles in treatment execution." 
  },
  { 
    name: "Digital Photography & Documentation", 
    icon: Sparkles, 
    description: "Clinical photography and digital record keeping for accurate treatment tracking." 
  },
  { 
    name: "Patient Education & Communication", 
    icon: Users, 
    description: "Enhancing patient understanding and case acceptance through clear communication." 
  },
];

// ------------------------------------------
// 3. COURSES (سيتم استخدامها في سكشن الكورسات الجديد)
// ------------------------------------------
export const courses = [
  {
    year: "18 Jan 2025",
    title: "Advanced Orthodontic Mini Screws Course",
    institution: "Egyptian Orthodontic Society",
    description: "Specialized training in mini screws techniques."
  },
  {
    year: "15 Jan 2025",
    title: "Clear Aligner Therapy Course",
    institution: "Prof. Giorgio Iodice",
    description: "Advanced clear aligner treatment planning and execution."
  },
  {
    year: "6 Nov 2022",
    title: "Clear Aligner Therapy Course",
    institution: "Prof. Ravindra Nanda",
    description: "Advanced training with world-renowned orthodontist."
  },
  {
    year: "5 Nov 2022",
    title: "Advanced Orthodontic Diagnosis & Treatment Planning",
    institution: "OneTrack Academy",
    description: "Comprehensive diagnosis and planning methodologies."
  },
  {
    year: "4 Nov 2022",
    title: "Orthodontic Wire Bending Course",
    institution: "OneTrack Academy",
    description: "Hands-on training in wire sequencing and bending."
  },
  {
    year: "4 Nov 2022",
    title: "Orthodontic Mini Screws Course",
    institution: "OneTrack Academy",
    description: "Hands-on training in wire sequencing and bending."
  }
];

// ------------------------------------------
// 4. ACHIEVEMENTS
// ------------------------------------------
export const achievements = [
  "Member of the Egyptian Orthodontic Society",
  "Attended multiple specialized orthodontic courses and professional workshops",
  "Active Content Creator focused on patient education through social media",
  "Recognized for consistency, discipline, and effective teamwork"
];

// ------------------------------------------
// 5. CLINIC VALUES
// ------------------------------------------
export const values = [
  { title: "Patient First", description: "Your comfort, goals, and confidence are our top priority.", icon: HeartHandshake },
  { title: "Precision & Excellence", description: "Meticulous attention to detail in every case.", icon: Award },
  { title: "Continuous Development", description: "Staying updated with the latest orthodontic techniques and advancements.", icon: Sparkles },
  { title: "Integrity", description: "Honest communication and transparent treatment plans.", icon: ShieldCheck },
  { title: "Education", description: "Empowering patients through knowledge and digital content.", icon: BookOpen },
  { title: "Compassion", description: "Gentle, caring approach for patients of all ages.", icon: Smile },
];