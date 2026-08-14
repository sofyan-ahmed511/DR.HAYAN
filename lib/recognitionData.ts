export interface RecognitionItem {
    id: number;
    name: string;
    role: string;
    organization: string;
    description: string;
    event: string;
    year: string;
    image: string;
}

export const recognitionData: RecognitionItem[] = [
    {
        id: 1,
        name: "Prof. Ravindra Nanda",
        role: "Professor of Orthodontics",
        organization: "European Orthodontic Society",
        description: "It was a great privilege to meet Prof. Ravindra Nanda and learn from his remarkable experience in orthodontics. His work and approach to biomechanics have been an important source of knowledge throughout my postgraduate journey. The opportunity to listen to his insights and benefit from his experience was truly valuable to me. His contribution to modern orthodontics continues to inspire me to approach every case with deeper understanding, precision, and a commitment to continuous learning.",
        event: "Advanced Orthodontic Masterclass",
        year: "2025",
        image: "https://i.postimg.cc/W3mgdqfV/photo-2026-07-03-19-00-50.jpg",
    },
    {
        id: 2,
        name: "Prof. Mike Papadopoulos",
        role: "Director of Orthodontic Research",
        organization: "International Association for Orthodontics",
        description: "Meeting Prof. Mike Papadopoulos was a memorable part of my orthodontic journey. I had the opportunity to hear his perspective on contemporary orthodontics and gain valuable knowledge from his extensive clinical and academic experience. Beyond the knowledge itself, what I appreciated most was the way he connected scientific principles with everyday clinical practice. These experiences have added meaningful value to my postgraduate education and continue to influence the way I develop as an orthodontist.",
        event: "Private Scientific Symposium",
        year: "2025",
        image: "https://i.postimg.cc/7YZ0L63t/photo-2026-07-03-19-01-11.jpg",
    },
];