/**
 * =========================================================================
 * VERIFY BEFORE LAUNCH - CRITICAL ADMISSION & SCHOLARSHIP ELIGIBILITY CONFIG
 * =========================================================================
 *
 * IMPORTANT NOTICE:
 * Cutoff ranks, ACPDC calculation formulas, annual income ceilings, and
 * scholarship eligibility guidelines change annually per Government of Gujarat
 * notifications and ACPDC admission rounds.
 *
 * DO NOT treat these baseline parameters as final until verified and signed off
 * by the GMB Polytechnic Admissions Office and competent GTU/ACPDC authorities.
 *
 * Official Authoritative Portals:
 * 1. ACPDC Gujarat Diploma Admission: https://gujacpc.admissions.nic.in/
 * 2. Digital Gujarat Scholarship Portal: https://www.digitalgujarat.gov.in/
 * 3. MYSY (Mukhyamantri Yuva Swavalamban Yojana): https://mysy.guj.nic.in/
 * =========================================================================
 */

export interface MeritBand {
  minScore: number;
  maxScore: number;
  estimatedPercentileBand: string;
  competitiveBranches: string[];
  guidanceNote: string;
}

export interface ScholarshipScheme {
  id: string;
  name: string;
  shortCode: string;
  benefitSummary: string;
  description: string;
  officialPortalUrl: string;
  portalName: string;
  // Eligibility criteria (Flagged for Annual Verification)
  eligibleCategories: ('General' | 'EWS' | 'SEBC' | 'SC' | 'ST')[];
  eligibleGenders: ('Male' | 'Female' | 'Other')[];
  maxAnnualIncomeLakhs: number; // in Lakhs INR (e.g. 2.5, 6.0)
  minSscPercent?: number; // e.g., 80% for MYSY
}

/**
 * ACPDC Diploma Engineering Merit Score Estimator Config
 * Standard Diploma Merit Index = (Maths + Science marks out of 200 scaled, or direct core total)
 * [FLAGGED: VERIFY_BEFORE_LAUNCH with current ACPDC admission gazette]
 */
export const MERIT_SCORING_CONFIG = {
  minMark: 0,
  maxMark: 100,
  passingMarkPerSubject: 35,
  officialAcpdcUrl: "https://gujacpc.admissions.nic.in/",
  disclaimer: "This calculator provides an estimated merit indicator based on historical ACPDC trends. Official admission seat allotment is strictly determined by the ACPDC merit list during counselling rounds.",
  
  // Baseline cutoff bands [FLAGGED: VERIFY_BEFORE_LAUNCH]
  bands: [
    {
      minScore: 160,
      maxScore: 200,
      estimatedPercentileBand: "90th - 99th Percentile",
      competitiveBranches: [
        "Computer Engineering",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Civil Engineering"
      ],
      guidanceNote: "Strong probability for 1st Round Choice #1 in all diploma programmes at GMB Polytechnic, Rajula."
    },
    {
      minScore: 130,
      maxScore: 159.99,
      estimatedPercentileBand: "75th - 89th Percentile",
      competitiveBranches: [
        "Computer Engineering",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Civil Engineering"
      ],
      guidanceNote: "Highly competitive for Computer & Mechanical Engineering; solid probability in Round 1 & Round 2."
    },
    {
      minScore: 100,
      maxScore: 129.99,
      estimatedPercentileBand: "55th - 74th Percentile",
      competitiveBranches: [
        "Mechanical Engineering",
        "Electrical Engineering",
        "Civil Engineering",
        "Computer Engineering (Category/Round 2)"
      ],
      guidanceNote: "Solid probability for Mechanical, Electrical, and Civil Engineering; Computer Engineering depends on category quota."
    },
    {
      minScore: 70,
      maxScore: 99.99,
      estimatedPercentileBand: "Eligible Passing Range (35th - 54th Percentile)",
      competitiveBranches: [
        "Civil Engineering",
        "Electrical Engineering",
        "Mechanical Engineering (Subsequent Rounds)"
      ],
      guidanceNote: "Eligible for Gujarat ACPDC diploma counselling. Recommended to fill all branches across preference list."
    }
  ] as MeritBand[]
};

/**
 * Gujarat Government Scholarship Schemes Config
 * [FLAGGED: VERIFY_BEFORE_LAUNCH against current 2026-27 Gujarat Education Dept notifications]
 */
export const SCHOLARSHIP_SCHEMES_CONFIG: ScholarshipScheme[] = [
  {
    id: "mysy",
    name: "Mukhyamantri Yuva Swavalamban Yojana (MYSY)",
    shortCode: "MYSY",
    benefitSummary: "50% Tuition Fee Waiver (up to ₹25,000/year) + Book & Equipment Grant",
    description: "Financial assistance scheme by Government of Gujarat for meritorious diploma students across all categories with family income up to ₹6.00 Lakhs.",
    officialPortalUrl: "https://mysy.guj.nic.in/",
    portalName: "MYSY Gujarat Official Portal",
    eligibleCategories: ['General', 'EWS', 'SEBC', 'SC', 'ST'],
    eligibleGenders: ['Male', 'Female', 'Other'],
    maxAnnualIncomeLakhs: 6.0,
    minSscPercent: 80 // [VERIFY_BEFORE_LAUNCH: verify whether 80th percentile or percentage applies this year]
  },
  {
    id: "digital-gujarat-post-matric",
    name: "Digital Gujarat Post-Matric Scholarship",
    shortCode: "Digital Gujarat",
    benefitSummary: "Full/Partial Tuition Reimbursement, Exam Fees & Maintenance Allowance",
    description: "State umbrella scheme for SC, ST, SEBC/OBC, and EWS students administered directly by the Social Justice & Empowerment Department.",
    officialPortalUrl: "https://www.digitalgujarat.gov.in/",
    portalName: "Digital Gujarat Portal",
    eligibleCategories: ['SC', 'ST', 'SEBC', 'EWS'],
    eligibleGenders: ['Male', 'Female', 'Other'],
    maxAnnualIncomeLakhs: 2.5
  },
  {
    id: "kanya-kelavani",
    name: "Kanya Kelavani Nidhi (Girl Child Education Scheme)",
    shortCode: "Kanya Kelavani",
    benefitSummary: "100% Tuition Fee Exemption for Female Engineering Students",
    description: "Gujarat state initiative providing free education and complete tuition waiver for girls admitted into professional government and grant-in-aid diploma colleges.",
    officialPortalUrl: "https://mysy.guj.nic.in/",
    portalName: "Gujarat Education Department Portal",
    eligibleCategories: ['General', 'EWS', 'SEBC', 'SC', 'ST'],
    eligibleGenders: ['Female'],
    maxAnnualIncomeLakhs: 99.0 // Universal for female students meeting basic criteria [VERIFY_BEFORE_LAUNCH]
  }
];

export const SCHOLARSHIP_DISCLAIMER = 
  "This is a guide, not a final eligibility decision. Actual eligibility and disbursement are governed by the respective government department norms. Confirm with the GMB Polytechnic admissions helpdesk or the official portal.";
