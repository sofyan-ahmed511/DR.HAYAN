export const categoryDetails: Record<string, any> = {
  crowding: {
    layout: 'left-image',
    prefix: "Space Optimization",
    title: "Resolving Dental Crowding",
    desc: "Crowding represents a discrepancy between tooth size and jaw dimension. Our methodology prioritizes expansion and strategic reshaping to create room naturally.",
    points: ["Arch expansion techniques", "Non-extraction focus", "Improved periodontal health"],
    bgColor: "bg-[#F8F9FA]",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    causes: "Primarily genetic, often resulting from a mismatch between jaw size and tooth size. Early loss of primary teeth can also contribute.",
    duration: "12-24 months",
    faq: [
      { q: "Will I need teeth extracted?", a: "We prioritize non-extraction methods, focusing on arch expansion whenever clinically possible." },
      { q: "Is crowding just an aesthetic issue?", a: "No, severe crowding makes proper cleaning difficult, increasing the risk of decay and gum disease." }
    ],
    feedback: "The arch expansion entirely changed my smile. Dr. Chen avoided extractions which was my biggest fear. My teeth look broader and fuller."
  },
  spacing: {
    layout: 'right-image',
    prefix: "Gap Closure",
    title: "Diastema & Spacing Resolution",
    desc: "Spaces between teeth can result from microdontia, missing teeth, or oral habits. Our approach consolidates spaces while maintaining the bite relationship.",
    points: ["Precision gap closure", "Frenectomy integration when needed", "Bonded retainer protocols"],
    bgColor: "bg-white",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    causes: "Missing teeth, small teeth (microdontia), prominent labial frenum, or tongue-thrusting habits.",
    duration: "9-18 months",
    faq: [
      { q: "Will the spaces open back up?", a: "We use fixed bonded retainers (wires behind the teeth) to prevent relapse." },
      { q: "Can aligners close spaces?", a: "Yes, aligners are highly effective for closing mild to moderate spacing." }
    ],
    feedback: "Closing the gap between my front teeth boosted my confidence immensely. The process was much faster than I expected."
  },
  overbite: {
    layout: 'center-text',
    prefix: "Class II Correction",
    title: "Deep Overbite Management",
    desc: "A deep bite occurs when upper teeth overlap the lowers excessively. We use intrusion mechanics and posterior eruption to level the curve of Spee safely.",
    points: ["Bite opening mechanics", "Incisor intrusion", "Preventing excessive wear"],
    bgColor: "bg-slate-50",
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-50",
    causes: "Genetics, excessive overdevelopment of the bone supporting the teeth, or premature loss of back teeth.",
    duration: "18-24 months",
    faq: [
      { q: "Does an overbite cause jaw pain?", a: "Yes, a deep bite can force the lower jaw back, straining the temporomandibular joint (TMJ)." },
      { q: "How do you correct an overbite?", a: "We use bite planes, elastics, and sometimes bite turbos to allow the back teeth to erupt while keeping the front teeth stationary." }
    ],
    feedback: "My lower teeth used to bite into my palate. The correction didn't just fix my smile; it stopped my chronic jaw soreness."
  },
  underbite: {
    layout: 'left-image',
    prefix: "Class III Correction",
    title: "Addressing Underbites",
    desc: "Underbites manifest when the lower jaw protrudes past the upper. Early intervention is ideal, but adult camouflage or surgical integration are viable paths.",
    points: ["Growth modification (children)", "Camouflage orthodontics (adults)", "Surgical integration (severe)"],
    bgColor: "bg-white",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-50",
    causes: "Primarily skeletal and genetic (deficient upper jaw or overactive lower jaw growth).",
    duration: "18-30 months",
    faq: [
      { q: "Do all underbites require surgery?", a: "No. Mild underbites can be corrected with elastics. Severe skeletal underbites in adults usually require orthognathic surgery." },
      { q: "When should a child with an underbite be seen?", a: "As early as age 7. Early intervention with appliances like a facemask is highly effective." }
    ],
    feedback: "I avoided surgery through Dr. Chen's camouflage technique. My bite functions normally for the first time in my life."
  },
  crossbite: {
    layout: 'right-image',
    prefix: "Transversal Harmony",
    title: "Crossbite Correction",
    desc: "A crossbite (anterior or posterior) causes asymmetry and tissue wear. We employ palatal expanders and cross-elastics to achieve proper transversal harmony.",
    points: ["Palatal expansion", "Eliminating functional shifts", "Symmetry restoration"],
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-100",
    causes: "Narrow upper jaw, prolonged thumb-sucking, or delayed loss of baby teeth causing permanent teeth to erupt out of position.",
    duration: "12-24 months",
    faq: [
      { q: "What happens if a crossbite is left untreated?", a: "It can lead to asymmetric jaw growth, gum recession, and uneven tooth wear." },
      { q: "Is an expander painful?", a: "There is some pressure when activated, but it is generally well-tolerated and temporary." }
    ],
    feedback: "Untangling the crossbite immediately stopped me from biting my cheek. The expansion made my smile noticeably wider."
  },
  openbite: {
    layout: 'center-text',
    prefix: "Vertical Control",
    title: "Anterior Open Bite Resolution",
    desc: "Open bites prevent the front teeth from touching. By utilizing temporary anchorage devices (TADs) or specialized aligner protocols, we intrude posterior segments.",
    points: ["Posterior intrusion", "Habit cessation", "TAD integration"],
    bgColor: "bg-white",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-50",
    causes: "Thumb sucking, pacifier use, tongue thrusting, or skeletal growth patterns (hyperdivergent).",
    duration: "18-24 months",
    faq: [
      { q: "Can clear aligners fix an open bite?", a: "Yes, aligners are often superior to braces for open bites because the plastic covering the teeth naturally helps intrude the back teeth." },
      { q: "Will I need jaw surgery?", a: "Most cases can be treated non-surgically with TADs, but extreme skeletal cases may require orthognathic surgery." }
    ],
    feedback: "For years I couldn't bite right into a sandwich. Bringing my front teeth together changed how I eat and speak completely."
  },
  impacted: {
    layout: 'left-image',
    prefix: "Surgical Orthodontics",
    title: "Impacted Canine Exposure",
    desc: "Impacted teeth fail to erupt properly. We coordinate with oral surgeons to expose the tooth, applying calibrated traction to guide it into the arch safely.",
    points: ["CBCT 3D planning", "Guided eruption mechanics", "Periodontal preservation"],
    bgColor: "bg-zinc-50",
    iconColor: "text-zinc-500",
    iconBg: "bg-zinc-200",
    causes: "Overcrowding preventing eruption, retained baby teeth, or abnormal eruption paths.",
    duration: "24-30 months",
    faq: [
      { q: "Does the exposure surgery hurt?", a: "The exposure is performed under local anesthesia or sedation. Mild discomfort during recovery is manageable with over-the-counter pain relievers." },
      { q: "How long does it take for the tooth to come down?", a: "It typically takes 6 to 12 months of gentle, continuous traction to bring an impacted canine into the arch." }
    ],
    feedback: "Guiding the impacted tooth down felt like a miracle. The team kept the force gentle and constantly monitored the progress via 3D scans."
  },
  missing: {
    layout: 'right-image',
    prefix: "Prosthodontic Integration",
    title: "Managing Missing Teeth",
    desc: "Congenitally missing teeth require a dual approach: either closing the space entirely or opening it precisely to prep for implants and restorations.",
    points: ["Implant site preparation", "Space closure via protraction", "Multi-disciplinary care"],
    bgColor: "bg-white",
    iconColor: "text-sky-500",
    iconBg: "bg-sky-50",
    causes: "Hypodontia (genetically missing teeth, often upper lateral incisors or lower second premolars), trauma, or extraction.",
    duration: "18-36 months",
    faq: [
      { q: "Is it better to close the space or get an implant?", a: "It depends on your facial profile, bite, and the specific tooth. We evaluate both options thoroughly during consultation." },
      { q: "How do you hold the space open for an implant?", a: "We place an artificial tooth (pontic) on the braces or aligner until you are old enough for an implant." }
    ],
    feedback: "Opening the spaces for my implants was meticulously planned. When the oral surgeon placed the implants, the space was down to the millimeter perfect."
  },
  surgical: {
    layout: 'center-text',
    prefix: "Orthognathic Integration",
    title: "Surgical Orthodontics",
    desc: "For severe skeletal discrepancies, braces alone cannot correct the bite. We collaborate with top maxillofacial surgeons for a comprehensive transformation.",
    points: ["Pre-surgical decompensation", "Post-surgical finishing", "Skeletal harmony"],
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
    iconBg: "bg-red-100",
    causes: "Severe genetic jaw discrepancies (e.g., severe underbite, severe overbite, facial asymmetry).",
    duration: "24-36 months (including surgery)",
    faq: [
      { q: "How long do I wear braces before surgery?", a: "Pre-surgical orthodontics usually takes 12 to 18 months to align the teeth over the respective jaw bones." },
      { q: "Will I have braces after the surgery?", a: "Yes, post-surgical 'finishing' takes about 6 to 9 months to perfect the bite." }
    ],
    feedback: "The surgery combined with orthodontics literally changed my profile. It was a long journey, but the functional and aesthetic results are unbelievable."
  },
  aligner: {
    layout: 'right-image', // Image on the right
    prefix: "Clear Revolution",
    title: "Precision Without Brackets",
    desc: "Clear aligners map out custom movements pre-programmed via digital diagnostics. Through sequential tray changes, we address mild to complex cases seamlessly.",
    points: ["3D scanned diagnostics", "Invisible & Removable", "Predictable force vectors"],
    bgColor: "bg-white",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    causes: "A modern alternative treatment modality for almost all malocclusions.",
    duration: "6-24 months",
    faq: [
      { q: "Do I wear them all day?", a: "Aligners must be worn 22 hours a day, removed only for eating and brushing." },
      { q: "Are aligners as effective as braces?", a: "In experienced hands, yes. For some cases (like open bites), they can even be more effective." }
    ],
    feedback: "No one knew I was having orthodontic treatment. The aligners fit my lifestyle perfectly and the digital rendering showed me exactly what to expect."
  },
  interceptive: {
    layout: 'left-image',
    prefix: "Early Intervention",
    title: "Phase 1 Interceptive",
    desc: "Interceptive treatment in young children (ages 7-10) addresses developing severe bite issues, guiding jaw growth, and creating room for permanent teeth.",
    points: ["Growth modification", "Preventing impactions", "Airway optimization"],
    bgColor: "bg-[#F8F9FA]",
    iconColor: "text-teal-500",
    iconBg: "bg-teal-50",
    causes: "Developing crossbites, severe crowding, thumbsucking habits, or severe arch narrowness.",
    duration: "9-12 months",
    faq: [
      { q: "Does Phase 1 mean they won't need braces later?", a: "Usually, a short Phase 2 (full braces) is still needed in adolescence to finalize tooth alignment." },
      { q: "Why not just wait until all baby teeth fall out?", a: "Waiting can lead to impacted permanent teeth, jaw asymmetries, or the need for jaw surgery later in life." }
    ],
    feedback: "Correcting his crossbite early was the best decision. His adult teeth came in so much straighter than we expected, shortening his Phase 2 time."
  },
  tmj: {
    layout: 'center-text',
    prefix: "Joint Health",
    title: "TMJ & Joint Stability",
    desc: "Orthodontics must respect the temporomandibular joint. We ensure that the final bite coincides with a comfortable, seated jaw joint position.",
    points: ["Splint therapy integration", "Centric relation harmony", "Muscular desensitization"],
    bgColor: "bg-white",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    causes: "Bite interferences, grinding (bruxism), trauma, or stress causing dysfunction in the jaw joint.",
    duration: "Varies depending on severity",
    faq: [
      { q: "Can braces cure TMJ?", a: "If the TMJ pain is caused by a bite discrepancy, correcting the bite can relieve the pain. However, TMJ is multifactorial." },
      { q: "Will I need a splint?", a: "Often, we use a diagnostic splint to relax the jaw muscles to find the true bite before starting braces." }
    ],
    feedback: "The diagnostic splint therapy followed by precise bite correction alleviated my chronic headaches completely."
  },
  retreatment: {
    layout: 'left-image',
    prefix: "Refining the Smile",
    title: "Adult Retreatment",
    desc: "Many adults experience orthodontic relapse due to forgotten retainers. We offer expedited retreatment, often utilizing clear aligners to restore alignment swiftly.",
    points: ["Expedited aligner therapy", "Permanent retention solutions", "Focused minor corrections"],
    bgColor: "bg-slate-50",
    iconColor: "text-slate-600",
    iconBg: "bg-slate-200",
    causes: "Failure to wear retainers after previous orthodontic treatment, or late lower jaw growth.",
    duration: "3-12 months",
    faq: [
      { q: "Will I have to wear braces for 2 years again?", a: "Usually not. Retreatment for relapse is often much faster, taking only a few months with aligners." },
      { q: "How do you prevent it from relapsing again?", a: "We strongly recommend fixed bonded retainers (bars behind the teeth) along with nightly clear retainers." }
    ],
    feedback: "My teeth shifted in my 20s because I lost my retainer. The 6-month aligner process got everything back to perfect."
  }
};
