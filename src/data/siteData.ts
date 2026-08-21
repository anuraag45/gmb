export interface Department {
  id: string;
  name: string;
  seats: string;
  description: string;
  imageLabel: string;
  iconName: "cogs" | "building" | "zap" | "cpu";
  iconBg: string;
  accentColor: string;
  details: {
    overview: string;
    headOfDept: string;
    hodQualification: string;
    labs: string[];
    coreSubjects: string[];
    careerProspects: string[];
    topRecruiters: string[];
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Technical" | "Sports" | "Events" | "Industrial";
  imageLabel: string;
  size: "large" | "medium" | "small" | "wide";
  description: string;
}

export const SITE_INFO = {
  name: "GMB Polytechnic, Rajula",
  parentOrg: "GUJARAT MARITIME BOARD",
  estYear: "EST. 1984",
  authority: "GOVERNMENT OF GUJARAT",
  gtuCode: "GTU CODE: 992",
  affiliation: "Affiliated to GTU (Inst. Code: 992) · Approved by AICTE",
  phone: "+91 2794 294488",
  email: "principal@gmbpolytechnic.ac.in",
  address: "Near Narmada Water Works, Near Model School, At Post: Chhatadiya, Taluka: Rajula, Dist. Amreli, Gujarat 365560",
  locationLabel: "CAMPUS-LOCATION-MAP.JPG",
  heroImageLabel: "CAMPUS-EXTERIOR.JPG",
  principalImageLabel: "PRINCIPAL-PORTRAIT.JPG",
  admissionBadge: "Admission Enquiry 2026 – open now",
  admissionSession: "ADMISSIONS 2026-27",
};

export const DEPARTMENTS: Department[] = [
  {
    id: "computer",
    name: "Computer Engineering",
    seats: "60 SEATS",
    description: "Programming, databases, networking and web technologies taught across two dedicated computing labs.",
    imageLabel: "DEPT-COMPUTER-LAB.JPG",
    iconName: "cpu",
    iconBg: "bg-black",
    accentColor: "#09090b",
    details: {
      overview: "Computer Engineering offers rigorous training in modern full-stack development, network administration, database design, Linux sysadmin, and cyber hygiene across high-speed networked computing laboratories.",
      headOfDept: "Prof. Alpesh Vaghela",
      hodQualification: "M.E. (Computer Engg), Specialization in Blockchain & Network Security",
      labs: [
        "High-Performance Computing Lab (Core i7, Linux/Win)",
        "Web Technologies & Cloud Applications Lab",
        "Database Systems & Oracle/PostgreSQL Lab",
        "Networking & Cyber Infrastructure Lab",
        "Open Source & Python / AI Projects Lab"
      ],
      coreSubjects: [
        "Data Structures & Object Oriented Programming (C++, Java, Python)",
        "Database Management Systems & SQL",
        "Computer Networks & Network Security",
        "Web Development (HTML/CSS, JS, React, Node)",
        "Operating Systems & Linux System Administration"
      ],
      careerProspects: [
        "Junior Full-Stack Web Developer",
        "Database Administrator Assistant",
        "Network Support & Hardware Technician",
        "Software Quality Assurance Tester",
        "IT Support Executive (Port & Maritime Systems)"
      ],
      topRecruiters: [
        "TCS (Tata Consultancy Services)",
        "Infosys BPM",
        "eInfochips (Arrow Company)",
        "GMB IT Operations Wing",
        "TatvaSoft"
      ]
    }
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    seats: "60 SEATS",
    description: "Manufacturing processes, thermal engineering and machine design with an equipped workshop and CAD lab.",
    imageLabel: "DEPT-MECHANICAL-WORKSHOP.JPG",
    iconName: "cogs",
    iconBg: "bg-emerald-600",
    accentColor: "#059669",
    details: {
      overview: "The Department of Mechanical Engineering prepares technicians with profound hands-on fabrication, precision turning, thermal systems maintenance, and CNC/CAD modeling skills. Backed by proximity to Pipavav ship repair yards and heavy engineering industries.",
      headOfDept: "Prof. S. K. Parmar",
      hodQualification: "M.Tech (Thermal & Production Engg), 18+ yrs experience",
      labs: [
        "Machine Shop & Lathe Operations",
        "Fluid Mechanics & Hydraulic Machinery Lab",
        "Thermal Engineering & I.C. Engine Lab",
        "CAD/CAM Center (AutoCAD & SolidWorks)",
        "Material Testing & Metallurgy Lab"
      ],
      coreSubjects: [
        "Manufacturing Engineering & CNC Systems",
        "Thermodynamics & Heat Transfer",
        "Theory of Machines & Machine Design",
        "Industrial Safety & Plant Maintenance",
        "Metrology & Quality Control"
      ],
      careerProspects: [
        "Junior Engineer (Shipyards & Ports)",
        "Plant Maintenance Technician",
        "Quality Control Inspector",
        "CAD Draughtsman / Designer",
        "Thermal Power Plant Operator"
      ],
      topRecruiters: [
        "APM Terminals Pipavav",
        "Swan Energy Shipyard",
        "UltraTech Cement",
        "L&T Heavy Engineering",
        "Gujarat Gas Limited"
      ]
    }
  },
  {
    id: "civil",
    name: "Civil Engineering",
    seats: "60 SEATS",
    description: "Structures, surveying, concrete technology and construction management with regular field survey camps.",
    imageLabel: "DEPT-CIVIL-SURVEY.JPG",
    iconName: "building",
    iconBg: "bg-sky-500",
    accentColor: "#0284c7",
    details: {
      overview: "The Department of Civil Engineering imparts practical training in total station surveying, coastal structural analysis, soil mechanics, and highway engineering tailored for major infrastructure developments in coastal Gujarat.",
      headOfDept: "Prof. N. M. Joshi",
      hodQualification: "M.E. (Structural & Marine Construction), 15+ yrs experience",
      labs: [
        "Advanced Surveying & Total Station Lab",
        "Concrete Technology & NDT Testing Lab",
        "Geotechnical & Soil Mechanics Lab",
        "Environmental & Public Health Engg Lab",
        "Highway & Transportation Engineering Lab"
      ],
      coreSubjects: [
        "Structural Mechanics & RCC Design",
        "Surveying & Remote Sensing",
        "Concrete Technology & Construction Practice",
        "Quantity Surveying & Estimation",
        "Water Resources & Marine Structures"
      ],
      careerProspects: [
        "Site Supervisor / Junior Engineer (Govt & Private)",
        "Surveyor (Total Station / GIS)",
        "Quality Control Engineer (Concrete & Soil)",
        "Estimation & Billing Engineer",
        "Highway & Marine Infrastructure Assistant"
      ],
      topRecruiters: [
        "Gujarat Maritime Board (Port Projects)",
        "Adani Ports & SEZ",
        "L&T Construction",
        "Roads & Buildings Dept (R&B Gujarat)",
        "NCC Urban Infrastructure"
      ]
    }
  },
  {
    id: "electrical",
    name: "Electrical Engineering",
    seats: "60 SEATS",
    description: "Electrical machines, power systems and industrial drives, with hands-on switchgear and wiring practice.",
    imageLabel: "DEPT-ELECTRICAL-LAB.JPG",
    iconName: "zap",
    iconBg: "bg-red-600",
    accentColor: "#dc2626",
    details: {
      overview: "Electrical Engineering focuses on substation operations, industrial drive control, renewable power systems (solar/wind coastal grids), and PLC-based industrial automation.",
      headOfDept: "Dr. Sanket Raval",
      hodQualification: "Ph.D, M.Tech (Power Systems & EV Charging Infrastructure)",
      labs: [
        "AC & DC Machines Laboratory",
        "Power Systems & Switchgear Protection Lab",
        "Power Electronics & Industrial Drives Lab",
        "Industrial Automation & PLC / SCADA Lab",
        "Basic Electrical & Domestic Wiring Lab"
      ],
      coreSubjects: [
        "Electrical Machine Design & Operations",
        "Generation, Transmission & Distribution of Power",
        "Switchgear & Protective Relays",
        "Industrial Drives & Automation",
        "Renewable Energy Systems & Microgrids"
      ],
      careerProspects: [
        "Substation Operator & Line Technician",
        "Industrial Drive & PLC Technician",
        "Electrical Maintenance Engineer",
        "Solar/Wind Farm Technical Supervisor",
        "Testing & Commissioning Technician"
      ],
      topRecruiters: [
        "PGVCL / GETCO",
        "Torrent Power",
        "Tata Power Renewable Energy",
        "Pipavav Railway Corporation",
        "Suzlon Wind Energy"
      ]
    }
  }
];

export const WHY_US_CARDS = [
  {
    id: "curriculum",
    icon: "GraduationCap",
    title: "Industry-oriented curriculum",
    description: "GTU diploma syllabus delivered with added workshops, drawing practice and safety training aligned to what regional employers actually ask for."
  },
  {
    id: "labs",
    icon: "FlaskConical",
    title: "Working laboratories",
    description: "Machine shop, surveying, electrical machines and computing labs kept in running condition, with practicals conducted in small batches."
  },
  {
    id: "placements",
    icon: "Briefcase",
    title: "Placement support",
    description: "A dedicated Training & Placement Cell running mock interviews, aptitude sessions and campus drives from the fifth semester onwards."
  },
  {
    id: "proximity",
    icon: "Ship",
    title: "Maritime-sector proximity",
    description: "Located near the Pipavav port and shipbuilding belt, giving students industrial visits and apprenticeships within travelling distance."
  }
];

export const PRINCIPAL_INFO = {
  name: "Prof. (Dr.) K. H. Wandra",
  title: "Principal, GMB Polytechnic, Rajula",
  credentials: "Ph.D, M.Tech · Principal & Senior Academician",
  quote: "A diploma earned here is not just a certificate — it is three years of rigorous workshop hours, modern lab practice, and professional discipline that industry can rely on.",
  shortIntro: "Under the aegis of the Gujarat Maritime Board and GTU (Institute Code: 992), GMB Polytechnic Rajula has empowered students across coastal Saurashtra with industry-calibrated technical education and holistic character.",
  fullLetter: [
    "Welcome to GMB Polytechnic, Rajula — an autonomous state technical institution established under the Gujarat Maritime Board, Government of Gujarat.",
    "Our mission has always been anchored in practical shop-floor excellence: producing technicians who are competent, confident, and industry-ready from day one. Situated in Saurashtra's maritime corridor near Pipavav port, our students benefit from constant engagement with modern shipping, ports, heavy cement plants, and manufacturing units.",
    "With experienced faculty dedication across Computer, Mechanical, Civil, and Electrical engineering, modern laboratories, and strict GTU academic compliance, we ensure that every learner is equipped with technical mastery and sound ethical values.",
    "We invite aspiring matriculates and their parents to visit our vibrant campus in Rajula and experience firsthand how our 3-year diploma programs build promising engineering careers."
  ]
};

export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Apply online",
    description: "Register on the ACPDC admission portal, fill the diploma application form and upload your SSC marksheet."
  },
  {
    step: "02",
    title: "Document verification",
    description: "Visit a help centre or our campus with originals — marksheet, school leaving certificate, caste and income proof."
  },
  {
    step: "03",
    title: "Choice filling & counselling",
    description: "Fill your preference list. Merit-based seat allotment is published by the admission committee round-wise."
  },
  {
    step: "04",
    title: "Confirm your seat",
    description: "Pay the fee, report to the institute before the deadline and complete document submission to secure admission."
  }
];

export const STATS_DATA = [
  {
    value: "82%",
    label: "PLACEMENT RATE, 2025 BATCH"
  },
  {
    value: "45+",
    label: "RECRUITING COMPANIES"
  },
  {
    value: "40",
    label: "YEARS OF LEGACY"
  },
  {
    value: "240",
    label: "SANCTIONED ANNUAL INTAKE"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "campus-aerial",
    title: "GMB Polytechnic Panoramic Campus Complex",
    category: "Technical",
    imageLabel: "CAMPUS-MAIN.JPG",
    size: "large",
    description: "Aerial perspective of the sprawling state-of-the-art campus buildings, academic wings, and workshops in Rajula."
  },
  {
    id: "campus-courtyard",
    title: "Central Academic Block & Assembly Courtyard",
    category: "Events",
    imageLabel: "CAMPUS-COURTYARD.JPG",
    size: "wide",
    description: "Main institute facade with official GMB Polytechnic signage, flagpole, and central student gathering area."
  },
  {
    id: "electrical-lab",
    title: "Electrical Radial Feeder & Machine Testing Lab",
    category: "Technical",
    imageLabel: "DEPT-ELECTRICAL-LAB.JPG",
    size: "medium",
    description: "Radial feeder protection panels, DC shunt motor-generator sets, and switchgear test benches from Google Maps."
  },
  {
    id: "civil-models",
    title: "Civil Hydraulic Engineering & Dam Models Lab",
    category: "Technical",
    imageLabel: "DEPT-CIVIL-SURVEY.JPG",
    size: "medium",
    description: "Scale models of River Head Works, Suppressed Weirs, Gravity Dams, and Canal Drop hydraulic structures."
  },
  {
    id: "computer-lab",
    title: "Computer Engineering & Language Lab",
    category: "Technical",
    imageLabel: "DEPT-COMPUTER-LAB.JPG",
    size: "medium",
    description: "Modern networked workstations for programming, database management, and GTU digital practicals."
  },
  {
    id: "computer-center",
    title: "Advanced CAD & Computing Center",
    category: "Technical",
    imageLabel: "DEPT-COMPUTER-LAB2.JPG",
    size: "medium",
    description: "High-performance computing workstations with ergonomic seating for project development and simulation."
  },
  {
    id: "machine-shop",
    title: "Central Mechanical Machine Workshop",
    category: "Technical",
    imageLabel: "DEPT-MECHANICAL-WORKSHOP.JPG",
    size: "large",
    description: "Heavy precision lathe machines, shaping, drilling, and manufacturing tool bays in the central engineering workshop."
  },
  {
    id: "campus-admin",
    title: "Administrative Block & Main Entrance",
    category: "Events",
    imageLabel: "CAMPUS-ADMIN.JPG",
    size: "medium",
    description: "Main administrative portal, principal's office wing, and student help desk surrounded by palm landscaping."
  },
  {
    id: "campus-wing",
    title: "Academic Wings & Campus Corridors",
    category: "Events",
    imageLabel: "CAMPUS-WING.JPG",
    size: "small",
    description: "Modern architectural stairs, lecture corridors, and smart classrooms designed for natural daylight."
  },
  {
    id: "campus-gate",
    title: "Institute Main Gate & Approach Road",
    category: "Industrial",
    imageLabel: "CAMPUS-GMAPS.JPG",
    size: "small",
    description: "Campus gate on Vadhera-Chhatadiya road welcoming students across Rajula and coastal Amreli district."
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#why-us" },
  { name: "Departments", href: "#departments" },
  { name: "Projects", href: "#student-projects" },
  { name: "Admissions", href: "#admissions" },
  { name: "Scholarships", href: "#eligibility-wizard" },
  { name: "Faculty", href: "#principal" },
  { name: "Alumni", href: "#alumni" },
  { name: "Placements", href: "#stats" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" }
];

export const AFFILIATIONS = [
  { name: "GTU", fullName: "Gujarat Technological University" },
  { name: "GUJARAT MARITIME BOARD", fullName: "Ports & Transport Dept, Govt. of Gujarat" },
  { name: "AICTE", fullName: "All India Council for Technical Education" },
  { name: "DTE GUJARAT", fullName: "Directorate of Technical Education, Gujarat" }
];
