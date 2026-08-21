export interface AlumniSpotlight {
  id: string;
  name: string;
  photoLabel?: string;
  role: string;
  employer: string;
  hometown: string;
  batchYear: string;
  branch: string;
  tipForJuniors: string;
}

export const ALUMNI_DATA: AlumniSpotlight[] = [
  {
    id: "alumni-pipavav",
    name: "Alumnus (NEEDS INPUT)",
    photoLabel: "ALUMNI-PIPAVAV.JPG",
    role: "Terminal Operations Supervisor",
    employer: "APM Terminals Pipavav",
    hometown: "Rajula",
    batchYear: "NEEDS INPUT",
    branch: "NEEDS INPUT",
    tipForJuniors: "NEEDS INPUT"
  },
  {
    id: "alumni-gec-bhavnagar",
    name: "Alumnus (NEEDS INPUT)",
    photoLabel: "ALUMNI-GEC.JPG",
    role: "D2D Entry · Degree Student",
    employer: "Government Engineering College, Bhavnagar",
    hometown: "NEEDS INPUT",
    batchYear: "NEEDS INPUT",
    branch: "Mechanical Engineering",
    tipForJuniors: "NEEDS INPUT"
  },
  {
    id: "alumni-getco-amreli",
    name: "Alumnus (NEEDS INPUT)",
    photoLabel: "ALUMNI-GETCO.JPG",
    role: "Junior Engineer",
    employer: "GETCO Substation, Amreli",
    hometown: "NEEDS INPUT",
    batchYear: "NEEDS INPUT",
    branch: "NEEDS INPUT",
    tipForJuniors: "NEEDS INPUT"
  }
];
