export type Project = {
  title: string;
  description: string;
  technologies: string[];
  status: "In Progress" | "Completed" | "Improving";
  highlight: string;
  impact: string;
};

export const projects: Project[] = [
  {
    title: "Track Your Best",
    description:
      "A graduation project focused on fleet management, GPS/IoT-based vehicle tracking, trip analysis, driver behavior evaluation, anomaly detection, and driver scoring.",
    technologies: [
      "ASP.NET Web API",
      "PostgreSQL",
      "Python",
      "React",
      "GPS/IoT",
      "Analytics",
      "Machine Learning",
    ],
    status: "In Progress",
    highlight: "Graduation Project",
    impact:
      "Designed to transform raw trip and GPS data into meaningful driver and fleet insights.",
  },
  {
    title: "Restaurant Reservation System",
    description:
      "A full-stack reservation system for restaurants with role-based dashboards, booking calendar features, reservation management screens, and backend-oriented architecture.",
    technologies: ["Spring Boot", "React", "MySQL", "REST API", "Dashboard"],
    status: "Improving",
    highlight: "Full-Stack System",
    impact:
      "Built to support restaurant booking workflows with a scalable frontend and backend structure.",
  },
  {
    title: "C++/Qt Logging and Database Manager",
    description:
      "A desktop application integrated with PostgreSQL for event logging, debugging, error tracking, and system monitoring.",
    technologies: ["C++", "Qt", "PostgreSQL", "Desktop App", "Logging"],
    status: "Completed",
    highlight: "Desktop Engineering",
    impact:
      "Improved debugging and monitoring by storing and managing structured log data.",
  },
  {
    title: "Cinema Center Application",
    description:
      "A desktop application with ticketing, financial reporting, and management features developed using Java, MySQL, and JavaFX.",
    technologies: ["Java", "JavaFX", "MySQL", "Desktop App"],
    status: "Completed",
    highlight: "Java Application",
    impact:
      "Implemented a structured desktop application for cinema ticketing and reporting workflows.",
  },
];