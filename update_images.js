const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'lib', 'cases');

const categories = [
  { id: 'aligner', subSections: ['Overview', 'Mild', 'Complex'] },
  { id: 'bimaxillary-protrusion', subSections: ['Overview'] },
  { id: 'class-ii', subSections: ['Overview'] },
  { id: 'class-iii', subSections: ['Overview'] },
  { id: 'cleft', subSections: ['Overview', 'Lip & Palate'] },
  { id: 'crowding', subSections: ['Overview', 'Severe Crowding'] },
  { id: 'deep-bite', subSections: ['Overview'] },
  { id: 'fixed-functional', subSections: ['Overview'] },
  { id: 'gummy-smile', subSections: ['Overview'] },
  { id: 'impacted-teeth', subSections: ['Overview', 'Canines'] },
  { id: 'open-bite', subSections: ['Overview'] },
  { id: 'scissor-bite', subSections: ['Overview'] },
  { id: 'spacing', subSections: ['Overview'] }
];

categories.forEach(cat => {
  const camelId = cat.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  let content = `// ==========================================\n// ${cat.id.toUpperCase()} CASES DATA\n// ==========================================\n// You can easily modify each card's data here.\n\n`;
  content += `export const ${camelId}Cases: Record<string, any[]> = {\n`;

  cat.subSections.forEach(sub => {
    content += `  "${sub}": [\n`;
    for (let i = 0; i < 15; i++) {
        const pInfo = i % 2 === 0 ? `Female patient, ${20 + i} years old` : `Male patient, ${25 + i} years old`;
        const dur = (12 + i * 2) + " months";
        content += `    {
      id: "${cat.id}-${sub.replace(/\\s+/g, '-')}-${i + 1}",
      patientInfo: "${pInfo}",
      duration: "${dur}",
      description: "Detailed description for this specific case of ${sub}. Arch expansion and detailed bite coordination.",
      notes: "Patient reported high satisfaction and comfortable progression.",
      beforeImg: "https://picsum.photos/seed/before-${cat.id}-${sub.replace(/\\s+/g, '-')}-${i + 1}/800/800",
      afterImg: "https://picsum.photos/seed/after-${cat.id}-${sub.replace(/\\s+/g, '-')}-${i + 1}/800/800",
      progressImages: [\n`;
        for (let j = 0; j < 12; j++) {
            const label = j === 0 ? "Initial Record" : j === 11 ? "Final Result" : `Month ${j + 1}`;
            content += `        { label: "${label}", timeframe: "Month ${j + 1}", img: "https://picsum.photos/seed/prog-${cat.id}-${sub.replace(/\\s+/g, '-')}-${i}-${j}/1200/800" },\n`;
        }
        content += `      ]
    },\n`;
    }
    content += `  ],\n`;
  });

  content += `};\n`;
  fs.writeFileSync(path.join(dir, `${camelId}.ts`), content);
});
console.log('updated files to 15 cases and 12 images');
