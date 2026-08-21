export interface StudentProject {
  id: string;
  title: string;
  category: string;
  branch: string;
  teamMembers: string;
  batchYear: string;
  description: string;
  prototypePhotoLabel?: string;
  status: string;
}

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: "project-weather-station",
    title: "IoT-Based Coastal Weather Station",
    category: "IoT & Instrumentation",
    branch: "NEEDS INPUT",
    teamMembers: "NEEDS INPUT",
    batchYear: "NEEDS INPUT",
    description: "NEEDS INPUT",
    prototypePhotoLabel: "PROJECT-WEATHER-STATION.JPG",
    status: "Prototype Complete"
  },
  {
    id: "project-cnc-lathe",
    title: "Miniature Lathe CNC Retrofit Kit",
    category: "Mechanical & Automation",
    branch: "NEEDS INPUT",
    teamMembers: "NEEDS INPUT",
    batchYear: "NEEDS INPUT",
    description: "NEEDS INPUT",
    prototypePhotoLabel: "PROJECT-CNC-LATHE.JPG",
    status: "Prototype Complete"
  },
  {
    id: "project-solar-buoy",
    title: "Solar-Powered Coastal Buoy Tracker",
    category: "Marine & Renewable",
    branch: "NEEDS INPUT",
    teamMembers: "NEEDS INPUT",
    batchYear: "NEEDS INPUT",
    description: "NEEDS INPUT",
    prototypePhotoLabel: "PROJECT-SOLAR-BUOY.JPG",
    status: "Prototype Complete"
  },
  {
    id: "project-smart-meter",
    title: "Smart Energy Meter for Marine Switchboards",
    category: "Electrical & Switchgear",
    branch: "NEEDS INPUT",
    teamMembers: "NEEDS INPUT",
    batchYear: "NEEDS INPUT",
    description: "NEEDS INPUT",
    prototypePhotoLabel: "PROJECT-SMART-METER.JPG",
    status: "Prototype Complete"
  }
];
