export type ProgramModule = {
  title: string
  description: string
}

export type Program = {
  id: string
  title: string
  subtitle: string
  duration: string
  price: string
  level: string
  color: string
  image: string
  description: string
  features: string[]
  modules: ProgramModule[]
  outcomes: string[]
  career: string
  certifications: string[]
}

export const programs: Program[] = [
  {
    id: 'advanced-mig-tig',
    title: 'Advanced MIG/TIG Welding',
    subtitle: 'Professional Level Training',
    duration: '12 Weeks',
    price: '$4,999',
    level: 'Intermediate',
    color: 'from-emerald-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
    description: 'Elevate your welding skills with advanced MIG and TIG techniques used in professional settings.',
    features: [
      'Advanced MIG welding techniques',
      'TIG welding mastery (steel, aluminum, stainless)',
      'Advanced metallurgy concepts',
      'Complex joint configurations',
      'Welding in all positions',
      'Quality control and inspection',
    ],
    modules: [
      {
        title: 'Metal Inert Gas (MIG)',
        description: `MIG (Metal Inert Gas) welding is a welding process in which an electric arc forms between a consumable wire electrode and the work piece. This process uses inert gases or gas mixtures as the shielding gas. Argon and helium are typically used for the MIG welding of non-ferrous metals such as aluminum.

Metal Inert Gas (MIG) welding is an arc welding process that uses a continuous solid wire electrode heated and fed into the weld pool from a welding gun. The gun feeds a shielding gas alongside the electrode helping protect the weld pool from airborne contaminants.

In MIG welding, there are four different basic modes to transfer weld metal (filler material) across the arc to the base material. These transfer modes are Short Circuit, Globular, Spray Arc and Pulsed MIG.

ধাতু নিষ্ক্রিয় গ্যাস (MIG)

MIG (ধাতু জড় গ্যাস) ঢালাই হল একটি ঢালাই প্রক্রিয়া যেখানে একটি ব্যবহারযোগ্য তারের ইলেক্ট্রোড এবং কাজের অংশের মধ্যে একটি বৈদ্যুতিক চাপ তৈরি হয়। এই প্রক্রিয়াটি নিষ্ক্রিয় গ্যাস বা গ্যাসের মিশ্রণকে রক্ষাকারী গ্যাস হিসেবে ব্যবহার করে। আর্গন এবং হিলিয়াম সাধারণত অ্যালুমিনিয়ামের মতো অ লৌহঘটিত ধাতুগুলির এমআইজি ঢালাইয়ের জন্য ব্যবহৃত হয়।

মেটাল ইনার্ট গ্যাস (এমআইজি) ঢালাই হল একটি আর্ক ওয়েল্ডিং প্রক্রিয়া যা একটি ঢালাই বন্দুক থেকে ওয়েল্ড পুলে উত্তপ্ত এবং খাওয়ানো একটি অবিচ্ছিন্ন কঠিন তারের ইলেক্ট্রোড ব্যবহার করে। বন্দুকটি ইলেক্ট্রোডের পাশাপাশি একটি শিল্ডিং গ্যাস ফিড করে যা ওয়েল্ড পুলকে বায়ুবাহিত দূষক থেকে রক্ষা করতে সহায়তা করে।

এমআইজি ওয়েল্ডিং-এ, চারটি ভিন্ন মৌলিক মোড রয়েছে যাতে ওয়েল্ড মেটাল (ফিলার উপাদান) আর্ক জুড়ে বেস উপাদানে স্থানান্তর করা হয়। এই স্থানান্তর মোডগুলি হল শর্ট সার্কিট, গ্লোবুলার, স্প্রে আর্ক এবং পালসড এমআইজি।`
      },
      {
        title: 'Tungsten Inert Gas (TIG)',
        description: `Tungsten Inert Gas (TIG) welding, also known as Gas Tungsten Arc Welding (GTAW) is an arc welding process that produces the weld with a non-consumable tungsten electrode.

The most important applications for TIG welding are pipeline and pipe welding. It is, however, used in many industries, such as aviation and aerospace and sheet metal industries when welding particularly thin materials and special materials such as titanium.

TIG welders can be used to weld steel, stainless steel, chromoly, aluminum, nickel alloys, magnesium, copper, brass, bronze, and even gold. TIG is a useful welding process for welding wagons, bike frames, lawn mowers, door handles, fenders, and more.

টংস্টেন নিষ্ক্রিয় গ্যাস (টিআইজি)

Tungsten Inert Gas (TIG) ঢালাই, যা গ্যাস টাংস্টেন আর্ক ওয়েল্ডিং (GTAW) নামেও পরিচিত একটি আর্ক ওয়েল্ডিং প্রক্রিয়া যা একটি অ-ভোগযোগ্য টংস্টেন ইলেক্ট্রোড দিয়ে ঢালাই তৈরি করে।

টিআইজি ঢালাইয়ের জন্য সবচেয়ে গুরুত্বপূর্ণ অ্যাপ্লিকেশন হল পাইপলাইন এবং পাইপ ঢালাই। তবে, এটি অনেক শিল্পে ব্যবহৃত হয়, যেমন বিমান এবং মহাকাশ এবং শীট মেটাল শিল্পে বিশেষত পাতলা উপকরণ এবং টাইটানিয়ামের মতো বিশেষ উপকরণ ঢালাই করার সময়।

টিআইজি ওয়েল্ডারগুলি স্টীল, স্টেইনলেস স্টীল, ক্রোমোলি, অ্যালুমিনিয়াম, নিকেল অ্যালয়, ম্যাগনেসিয়াম, তামা, পিতল, ব্রোঞ্জ এবং এমনকি সোনা ঢালাই করতে ব্যবহার করা যেতে পারে। TIG হল ঢালাই ওয়াগন, বাইকের ফ্রেম, লন মাওয়ার, দরজার হাতল, ফেন্ডার এবং আরও অনেক কিছুর জন্য একটি দরকারী ঢালাই প্রক্রিয়া।`
      },
      {
        title: 'Arc Welding',
        description: `Arc welding uses the power of an electric current to join two metals. The power supply for the electric current is transferred from a welding electrode (or a "metal stick") to the base metal, creating an "arc" that melts the metals upon contact. This process requires intense heat, and after the metals have cooled, a metallurgical bond is created.

There are four main types of welding. MIG – Gas Metal Arc Welding (GMAW), TIG – Gas Tungsten Arc Welding (GTAW), Stick – Shielded Metal Arc Welding (SMAW) and Flux-cored – Flux-cored Arc Welding (FCAW).

আর্ক ওয়েল্ডিং

আর্ক ওয়েল্ডিং দুটি ধাতুকে যুক্ত করতে বৈদ্যুতিক প্রবাহের শক্তি ব্যবহার করে। বৈদ্যুতিক প্রবাহের জন্য পাওয়ার সাপ্লাই একটি ওয়েল্ডিং ইলেক্ট্রোড (বা একটি "ধাতুর কাঠি") থেকে বেস মেটালে স্থানান্তরিত হয়, একটি "চাপ" তৈরি করে যা ধাতুগুলিকে গলিয়ে দেয় যোগাযোগের উপর। এই প্রক্রিয়াটির জন্য তীব্র তাপ প্রয়োজন, এবং ধাতুগুলি ঠান্ডা হওয়ার পরে, একটি ধাতব বন্ধন তৈরি হয়।

চারটি প্রধান ধরনের ঢালাই আছে। MIG - গ্যাস মেটাল আর্ক ওয়েল্ডিং (GMAW), TIG - গ্যাস টাংস্টেন আর্ক ওয়েল্ডিং (GTAW), স্টিক - শিল্ডেড মেটাল আর্ক ওয়েল্ডিং (SMAW) এবং Flux-cored - Flux-cored Arc ওয়েল্ডিং (FCAW)।`
      },
    ],
    outcomes: [
      'Master MIG and TIG welding processes',
      'Weld in all positions with precision',
      'Work with diverse metal types',
      'Meet industry quality standards',
    ],
    career: 'Certified welder, Pipe welder, Structural welder, Aerospace technician',
    certifications: ['AWS D1.1 Structural Welding', 'AWS D17.1 Aerospace Welding'],
  },
  {
    id: 'pipe-welding',
    title: 'Pipe Welding Specialist',
    subtitle: 'High-Demand Skill Set',
    duration: '16 Weeks',
    price: '$6,499',
    level: 'Advanced',
    color: 'from-accent-500 to-accent-600',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    description: 'Specialize in pipe welding for oil & gas, industrial, and construction sectors.',
    features: [
      'Pipe welding in all positions (2G, 5G, 6G)',
      'SMAW, GMAW, GTAW on pipe',
      'High-pressure pipe welding',
      'X-ray quality welds',
      'API and ASME code requirements',
      'Field welding techniques',
    ],
    modules: [
      {
        title: 'Pipe Fittings',
        description: `A fitting or adapter is used in pipe systems to connect straight sections of pipe or tube, adapt to different sizes or shapes, and for other purposes such as regulating (or measuring) fluid flow. These fittings are used in plumbing to manipulate the conveyance of water, gas, or liquid waste in domestic or commercial environments, within a system of pipes or tubes.

Various types of pipe fittings are available in plumbing systems for different purposes and functions. A pipe fitting is used in plumbing system to join multiple pipes of same size or different sizes, to regulate the flow or to measure the flow. They are made up of different materials like copper, iron, brass, PVC etc.

পাইপ ফিটিং

পাইপ সিস্টেমে একটি ফিটিং বা অ্যাডাপ্টার ব্যবহার করা হয় পাইপ বা টিউবের সোজা অংশগুলিকে সংযুক্ত করতে, বিভিন্ন আকার বা আকারের সাথে খাপ খাইয়ে নিতে এবং অন্যান্য উদ্দেশ্যে যেমন তরল প্রবাহ নিয়ন্ত্রণ (বা পরিমাপ) করার জন্য। এই ফিটিংগুলি পাইপ বা টিউবের একটি সিস্টেমের মধ্যে, গার্হস্থ্য বা বাণিজ্যিক পরিবেশে জল, গ্যাস বা তরল বর্জ্য পরিবহনের জন্য প্লাম্বিংয়ে ব্যবহৃত হয়।

বিভিন্ন ধরনের পাইপ ফিটিং বিভিন্ন উদ্দেশ্যে এবং ফাংশনের জন্য প্লাম্বিং সিস্টেমে পাওয়া যায়। একটি পাইপ ফিটিং প্লাম্বিং সিস্টেমে একই আকারের বা বিভিন্ন আকারের একাধিক পাইপ যুক্ত করতে, প্রবাহ নিয়ন্ত্রণ করতে বা প্রবাহ পরিমাপ করতে ব্যবহৃত হয়। এগুলি তামা, লোহা, পিতল, পিভিসি ইত্যাদি বিভিন্ন উপকরণ দিয়ে তৈরি।`
      },
      {
        title: 'Types of Pipe Fittings',
        description: `Different pipe fittings and their functions:

1. Elbow
2. Reducer
3. Tee Type
4. Cross type
5. Coupling
6. Unions
7. Adaptors
8. Olet
9. Plug
10. Cap
11. Valve

প্লাম্বিং সিস্টেমে পাইপ ফিটিং এর প্রকার

বিভিন্ন পাইপ ফিটিং এবং তাদের ফাংশন:

1. কনুই।
2. হ্রাসকারী।
3. Tee প্রকার।
4. ক্রস টাইপ।
5. কাপলিং।
6. ইউনিয়ন
7. অ্যাডাপ্টার
8. ওলেট।
9. প্লাগ
10. ক্যাপ
11. ভালভ`
      },
      {
        title: 'Advanced Positions',
        description: '5G and 6G position mastery with API and ASME standards compliance',
      },
      {
        title: 'Testing & Certification',
        description: 'Multiple certification tests for pipeline and industrial applications',
      },
    ],
    outcomes: [
      'Weld pipe in all positions',
      'Meet API and ASME standards',
      'Produce X-ray quality welds',
      'Work in high-pressure applications',
    ],
    career: 'Pipe welder, Pipeline welder, Refinery welder, Industrial maintenance welder',
    certifications: ['API 1104 Pipeline Welding', 'ASME Section IX', '6G Position Certification'],
  },
  {
    id: 'steel-fittings',
    title: 'Steel Fittings Training',
    subtitle: 'Specialized Steel Work',
    duration: '8 Weeks',
    price: '$3,499',
    level: 'Intermediate',
    color: 'from-purple-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    description: 'Comprehensive training in steel fittings, connections, and structural steel work.',
    features: [
      'Steel fitting techniques',
      'Structural steel connections',
      'Bolting and riveting',
      'Steel fabrication methods',
      'Quality control standards',
      'Safety procedures',
    ],
    modules: [
      {
        title: 'Steel Fittings',
        description: `A fitting or adapter is used in pipe systems to connect straight sections of pipe or tube, adapt to different sizes or shapes, and for other purposes such as regulating (or measuring) fluid flow. These fittings are used in plumbing to manipulate the conveyance of water, gas, or liquid waste in domestic or commercial environments, within a system of pipes or tubes.

Various types of pipe fittings are available in plumbing systems for different purposes and functions. A pipe fitting is used in plumbing system to join multiple pipes of same size or different sizes, to regulate the flow or to measure the flow. They are made up of different materials like copper, iron, brass, PVC etc.

স্টিল ফিটিং

স্টিল সিস্টেমে একটি ফিটিং বা অ্যাডাপ্টার ব্যবহার করা হয় পাইপ বা টিউবের সোজা অংশগুলিকে সংযুক্ত করতে, বিভিন্ন আকার বা আকারের সাথে খাপ খাইয়ে নিতে এবং অন্যান্য উদ্দেশ্যে যেমন তরল প্রবাহ নিয়ন্ত্রণ (বা পরিমাপ) করার জন্য। এই ফিটিংগুলি পাইপ বা টিউবের একটি সিস্টেমের মধ্যে, গার্হস্থ্য বা বাণিজ্যিক পরিবেশে জল, গ্যাস বা তরল বর্জ্য পরিবহনের জন্য প্লাম্বিংয়ে ব্যবহৃত হয়।

বিভিন্ন ধরনের পাইপ ফিটিং বিভিন্ন উদ্দেশ্যে এবং ফাংশনের জন্য প্লাম্বিং সিস্টেমে পাওয়া যায়। একটি পাইপ ফিটিং প্লাম্বিং সিস্টেমে একই আকারের বা বিভিন্ন আকারের একাধিক পাইপ যুক্ত করতে, প্রবাহ নিয়ন্ত্রণ করতে বা প্রবাহ পরিমাপ করতে ব্যবহৃত হয়। এগুলি তামা, লোহা, পিতল, পিভিসি ইত্যাদি বিভিন্ন উপকরণ দিয়ে তৈরি।`
      },
      {
        title: 'Types of Steel Fittings in Plumbing System',
        description: `Different Steel fittings and their functions are explained below.

1. Elbow
2. Reducer
3. Tee Type
4. Cross type
5. Coupling
6. Unions
7. Adaptors
8. Olet
9. Plug
10. Cap
11. Valve

প্লাম্বিং সিস্টেমে স্টিল ফিটিং এর প্রকার

বিভিন্ন স্টিল ফিটিং এবং তাদের ফাংশন নীচে ব্যাখ্যা করা হয়েছে.

1. কনুই।
2. হ্রাসকারী।
3. Tee প্রকার।
4. ক্রস টাইপ।
5. কাপলিং।
6. ইউনিয়ন
7. অ্যাডাপ্টার
8. ওলেট।
9. প্লাগ
10. ক্যাপ
11. ভালভ`
      },
      { title: 'Connection Methods', description: 'Bolted, welded, and hybrid connections' },
      { title: 'Quality & Safety', description: 'Inspection procedures and safety protocols' },
    ],
    outcomes: [
      'Install steel fittings professionally',
      'Create structural connections',
      'Follow industry standards',
      'Ensure safety compliance',
    ],
    career: 'Steel fitter, Structural steel worker, Fabrication technician',
    certifications: ['Steel Fittings Certificate', 'Structural Steel Installation'],
  },
  {
    id: 'construction-training',
    title: 'Construction Training',
    subtitle: 'Complete Site Skills',
    duration: '10 Weeks',
    price: '$3,999',
    level: 'Beginner',
    color: 'from-green-500 to-green-600',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    description: 'Learn essential construction skills for welding and fabrication on construction sites.',
    features: [
      'Construction site safety',
      'Reading construction blueprints',
      'Site welding techniques',
      'Equipment operation',
      'Material handling',
      'Team coordination',
    ],
    modules: [
      {
        title: 'Construction Training Course Overview',
        description: `Construction Training কোর্সটি বর্তমানে সমগ্র বিশ্বে একটি বহুল চাহিদা সম্পন্ন একটি ট্রেইনিং কোর্স। বিপুল চাহিদা সম্পন্ন এই কোর্সটি শিখে দেশে ও বিদেশে যেয়ে অনেকেই নিজের ভবিষ্যৎগড়ে নিচ্ছে।

আপনিও এই Construction Training course টি শিখে বিদেশে যেয়ে নিজের ভবিষ্যৎ পাল্টে দিতে আজই New Life Welding Training Center এ Construction Training কোর্সটিতে এডমিশন নিন।`
      },
      {
        title: 'Construction Training Course Modules',
        description: `Construction Training কোর্সটি তে যা আছে:

• ম্যাশন
• টাইলস ম্যাশন
• সাটারিং কারপেন্টার
• রড ব্যান্ডার
• প্লাম্বার
• পেইন্টার`
      },
      { title: 'Field Welding', description: 'On-site welding techniques and procedures' },
      { title: 'Project Coordination', description: 'Working with construction teams and supervisors' },
    ],
    outcomes: [
      'Work safely on construction sites',
      'Perform field welding operations',
      'Read construction documents',
      'Coordinate with project teams',
    ],
    career: 'Construction welder, Site fabricator, Field technician',
    certifications: ['OSHA 30 Construction', 'Construction Welding Certificate'],
  },
]

export const getProgramById = (id: string) => programs.find((program) => program.id === id)
