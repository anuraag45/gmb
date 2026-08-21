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
    branch: "Computer & Electrical Engineering",
    teamMembers: "Meet Patel, Rahul Gohil & Team",
    batchYear: "Batch 2025",
    description: "Solar-backed micro-weather sensor array transmitting ambient humidity, wind velocity, and barometric pressure data to cloud telemetry dashboards.",
    prototypePhotoLabel: "PROJECT-WEATHER-STATION.JPG",
    status: "Prototype Complete"
  },
  {
    id: "project-cnc-lathe",
    title: "Miniature Lathe CNC Retrofit Kit",
    category: "Mechanical & Automation",
    branch: "Mechanical Engineering",
    teamMembers: "Jayesh Parmar, Vivek Solanki & Team",
    batchYear: "Batch 2025",
    description: "Low-cost 2-axis stepper drive conversion kit converting manual center lathes into G-code programmable CNC turning centers.",
    prototypePhotoLabel: "PROJECT-CNC-LATHE.JPG",
    status: "Prototype Complete"
  },
  {
    id: "project-solar-buoy",
    title: "Solar-Powered Coastal Buoy Tracker",
    category: "Marine & Renewable",
    branch: "Electrical & Civil Engineering",
    teamMembers: "Divyesh Chauhan, Anjali Vala & Team",
    batchYear: "Batch 2025",
    description: "GPS and LoRa telemetry maritime navigation marker buoy powered by MPPT solar charging for coastal fishing channel marking.",
    prototypePhotoLabel: "PROJECT-SOLAR-BUOY.JPG",
    status: "Prototype Complete"
  },
  {
    id: "project-smart-meter",
    title: "Smart Energy Meter for Marine Switchboards",
    category: "Electrical & Switchgear",
    branch: "Electrical Engineering",
    teamMembers: "Kishan Makwana, Brijesh Rathod & Team",
    batchYear: "Batch 2025",
    description: "Digital power quality and harmonic monitoring unit designed for harbor power feeder panels and marine switchgears.",
    prototypePhotoLabel: "PROJECT-SMART-METER.JPG",
    status: "Prototype Complete"
  }
];
