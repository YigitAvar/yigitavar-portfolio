export type LabItem = {
  title: string;
  description: string;
  status: "Live" | "In Progress" | "Planned";
  path: string;
  tags: string[];
};

export const labItems: LabItem[] = [
  {
    title: "Calendar Demo",
    description:
      "A reservation-oriented calendar experiment designed for table-based booking workflows and timeline views.",
    status: "In Progress",
    path: "/lab/calendar",
    tags: ["React", "Calendar", "Reservations", "UI Experiment"],
  },
  {
    title: "Driver Scoring Demo",
    description:
      "A future demo area for GPS-based trip analysis, driver grading logic, and anomaly-oriented scoring ideas.",
    status: "Planned",
    path: "#",
    tags: ["Analytics", "GPS", "Python", "PostgreSQL"],
  },
  {
    title: "IT Tools",
    description:
      "Small utilities and notes for enterprise IT workflows, troubleshooting, and infrastructure operations.",
    status: "Planned",
    path: "#",
    tags: ["Microsoft 365", "Active Directory", "Endpoint", "Tools"],
  },
];