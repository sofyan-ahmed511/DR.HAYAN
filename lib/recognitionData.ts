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
        name: "Prof. John Anderson",
        role: "Professor of Orthodontics",
        organization: "European Orthodontic Society",
        description: "Deep exchange on cutting-edge biomechanics and long-term stability protocols during an exclusive masterclass that reshaped my clinical philosophy.",
        event: "Advanced Orthodontic Masterclass",
        year: "2025",
        image: "https://i.postimg.cc/W3mgdqfV/photo-2026-07-03-19-00-50.jpg",
    },
    {
        id: 2,
        name: "Prof. Elena Moreau",
        role: "Director of Orthodontic Research",
        organization: "International Association for Orthodontics",
        description: "Privileged participation in a private scientific meeting focused on digital treatment planning and interdisciplinary approaches to complex malocclusions.",
        event: "Private Scientific Symposium",
        year: "2025",
        image: "https://i.postimg.cc/7YZ0L63t/photo-2026-07-03-19-01-11.jpg",
    },
];