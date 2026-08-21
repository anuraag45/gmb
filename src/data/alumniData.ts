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
    name: "Hardik V. Baraiya",
    photoLabel: "ALUMNI-PIPAVAV.JPG",
    role: "Terminal Operations Supervisor",
    employer: "APM Terminals Pipavav",
    hometown: "Rajula",
    batchYear: "2021",
    branch: "Mechanical Engineering",
    tipForJuniors: "Focus deeply on fluid machinery and electrical control panels in college labs — they are directly applicable on container port operations every single day."
  },
  {
    id: "alumni-gec-bhavnagar",
    name: "Pooja M. Joshi",
    photoLabel: "ALUMNI-GEC.JPG",
    role: "D2D Entry · Degree Engineering",
    employer: "Government Engineering College, Bhavnagar",
    hometown: "Jafrabad",
    batchYear: "2022",
    branch: "Mechanical Engineering",
    tipForJuniors: "GMB Polytechnic gives you strong practical workshop fundamentals that put diploma students far ahead during degree engineering practicals."
  },
  {
    id: "alumni-getco-amreli",
    name: "Krunal D. Rathod",
    photoLabel: "ALUMNI-GETCO.JPG",
    role: "Junior Engineer (Substation Operations)",
    employer: "GETCO Substation, Amreli",
    hometown: "Amreli",
    batchYear: "2020",
    branch: "Electrical Engineering",
    tipForJuniors: "Master single-line diagrams, transformer testing, and relay protection panels during your 5th and 6th semester lab practicals."
  }
];
