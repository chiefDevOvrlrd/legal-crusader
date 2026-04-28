// lib/siteData.ts
// All site content in one place — swap copy here without touching components

export const SITE_META = {
  name: "Legal Crusaders",
  tagline: "Immigration Law. Civil Litigation. Results-Driven.",
  lawyer: {
    fullName: "Ogban Chima-Oduko",
    title: "Principal Partner",
    credentials: "Called to the Bar in Canada",
    focus: "Immigration & Refugee Law",
    bio: "We provide clear guidance, strong representation, and strategic solutions tailored to your case. You don't have to navigate immigration alone.",
    website: "www.tiktok.com/@legalcrusaders",
    email: "info@legalcrusaderslaw.com",
    phone: "(431) 546-1220",
    fax: "204-219-4350",
    location: "79 Bayly street west, Unit 15 #741 Ajax Ontario, L1X 7K7",
    locationUrl: "https://share.google/X0aZI7qgPVZPZwVkF"
  },
  tagWords: ["Trusted.", "Strategic.", "Results-Driven."],
};

export const HERO_CHECKLIST = [
  "Apply for Permanent Residence?",
  "Submit an Express Entry profile?",
  "File a Refugee Claim?",
  "Sponsor your spouse or parents?",
  "Apply for a Work or Study Permit?",
  "Challenge a refusal in Federal Court?",
  "Resolve a contract dispute?",
  "Defend or commence a civil lawsuit?",
];

export const SERVICES = [
  //Immigration
  {
    id: "permanent-residence",
    icon: "🍁",
    title: "Permanent Residence Programs",
    description:
      "Navigate the most competitive pathways to permanent residency with Experienced legal strategy and preparation.",
    items: [
      "Express Entry",
      "Provincial Nominee Programs (PNP)",
      "Canadian Experience Class",
      "Federal Skilled Worker",
    ],
  },
  {
    id: "refugee",
    icon: "🤝",
    title: "Refugee & Humanitarian Applications",
    description:
      "Compassionate, thorough representation for those seeking protection and humanitarian relief.",
    items: [
      "Refugee Protection Claims",
      "Pre-Removal Risk Assessment (PRRA)",
      "Humanitarian & Compassionate (H&C) Applications",
    ],
  },
  {
    id: "judicial",
    icon: "⚖️",
    title: "Judicial Reviews & Appeals",
    description:
      "Federal Court challenges are complex and time-sensitive. Mistakes can cost you months or years.",
    items: [
      "Appeals & Federal Court Challenges",
      "Immigration Appeals & Litigation",
      "Advisory on Strategic Legal Options",
    ],
  },
  {
    id: "permits",
    icon: "📋",
    title: "Work & Study Permits",
    description:
      "Seamless permit applications and renewals to keep you on track for your Canadian future.",
    items: [
      "Open Work Permits",
      "Employer-Specific Work Permits",
      "Student Visas & Study Permits",
      "Permit Renewals & Extensions",
    ],
  },
  {
    id: "family",
    icon: "👨‍👩‍👧",
    title: "Family Sponsorship",
    description:
      "Reunite with the people who matter most through careful, thorough sponsorship applications.",
    items: [
      "Spousal & Partner Sponsorship",
      "Parent & Grandparent Sponsorship",
      "Dependent Children",
    ],
  },
  //civil litigation
  {
    id: "contract-law",
    icon: "📝",
    title: "Contract Law",
    description:
      "From drafting watertight agreements to enforcing them in court — protecting your interests at every stage of a contract's life.",
    items: [
      "Contract Drafting & Review",
      "Breach of Contract Claims",
      "Settlement & Negotiation",
      "NDAs, Employment & Business Agreements",
    ],
  },
  {
    id: "civil-litigation",
    icon: "🏛️",
    title: "Civil Litigation",
    description:
      "Strategic representation in non-criminal disputes — from the first demand letter to final judgment and enforcement.",
    items: [
      "Statement of Claim & Defence",
      "Examinations for Discovery",
      "Mediation & Arbitration",
      "Trial Representation",
    ],
  },
  {
    id: "commercial-disputes",
    icon: "💼",
    title: "Commercial & Business Disputes",
    description:
      "Protecting businesses and individuals in complex commercial conflicts with clear strategy and decisive action.",
    items: [
      "Business & Partnership Disputes",
      "Debt Recovery",
      "Employment Disputes",
      "Insurance Claims",
    ],
  },
  {
    id: "post-judgment",
    icon: "🔨",
    title: "Post-Judgment Enforcement",
    description:
      "Winning is only the first step. We pursue full enforcement of judgments to ensure you actually collect.",
    items: [
      "Garnishment Orders",
      "Seizure of Assets",
      "Filing & Defending Appeals",
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: "🎯",
    title: "Personalized Legal Strategy",
    description:
      "Every case is unique. We build strategies tailored specifically to your circumstances, not templates.",
  },
  {
    icon: "🔒",
    title: "Professional & Confidential",
    description:
      "Your information and case details are handled with absolute discretion and professionalism.",
  },
  {
    icon: "📞",
    title: "Dedicated Client Support",
    description:
      "We keep you informed at every stage. No surprises — just clear communication throughout.",
  },
  {
    icon: "⭐",
    title: "Proven Track Record",
    description:
      "Years of experience at the Federal Court and immigration tribunals, delivering results that matter.",
  },
  {
    icon: "🌍",
    title: "Serving Clients Globally",
    description:
      "Based in Canada, we serve clients across Canada and internationally with the same dedication.",
  },
  {
    icon: "⏱️",
    title: "Time-Sensitive Experiencedise",
    description:
      "Immigration deadlines are critical. We act swiftly to protect your interests and meet every deadline.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We review your situation, assess your options, and outline a clear path forward.",
  },
  {
    number: "02",
    title: "Case Preparation",
    description:
      "We gather evidence, draft submissions, and build the strongest possible case for you.",
  },
  {
    number: "03",
    title: "Filing & Representation",
    description:
      "We handle all filings and represent you before immigration authorities or Federal Court.",
  },
  {
    number: "04",
    title: "Resolution & Follow-up",
    description:
      "We see your case through to resolution and support you every step of the way.",
  },
];

export const STATS = [
  { value: "500+", label: "Cases Handled" },
  { value: "15+", label: "Years Experience" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "Canada", label: "& International" },
];
