export type Project = {
  title: string;
  description: string;
  technologies: string[];
  status: "In Progress" | "Completed" | "Improving" | "Live";
  highlight: string;
  impact: string;
  liveUrl?: string;
  repoUrl?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Track Your Best",
    description:
      "A real-time fleet tracking and driver analytics platform built by a three-person team. ESP32 devices stream live GPS over MQTT into a .NET 8 microservice backend, while a Python ML layer powers predictive ETA, anomaly detection, and driver scoring. Geospatial data and routing run on PostgreSQL/PostGIS with the OSRM engine, surfaced through a Next.js dashboard.",
    technologies: [
      ".NET 8",
      "Python",
      "MQTT",
      "PostgreSQL/PostGIS",
      "Next.js",
      "OSRM",
    ],
    status: "Live",
    highlight: "Graduation Project",
    impact:
      "Turns raw GPS streams into live fleet visibility, ETA predictions, and driver scores.",
    liveUrl: "https://trackyourbest.net",
    repoUrl: "https://github.com/bariscanaslan/track-your-best",
  },
  {
    title: "Restaurant Reservation System",
    description:
      "A multi-role full-stack reservation system built with Spring Boot, React, and MySQL by a three-person team. It serves admin, manager, restaurant owner, and customer roles, with JWT authentication, calendar-based booking, payment and quota management, and a REST API.",
    technologies: ["Spring Boot", "React", "MySQL", "JWT", "REST API"],
    status: "Completed",
    highlight: "Full-Stack System",
    impact:
      "Built to support restaurant booking workflows with a scalable frontend and backend structure.",
    repoUrl: "https://github.com/bariscanaslan/Restaurant-Reservation-System",
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
    note: "Proprietary — developed during a defense-industry internship",
  },
  {
    title: "Cinema Center Application",
    description:
      "A Java OOP course final project: a cinema management system built with Java, JavaFX, and MySQL, featuring admin, manager, and cashier roles for ticketing and reporting workflows.",
    technologies: ["Java", "JavaFX", "MySQL", "Desktop App"],
    status: "Completed",
    highlight: "Java Application",
    impact:
      "Implemented a structured desktop application for cinema ticketing and reporting workflows.",
    repoUrl: "https://github.com/YigitAvar/Cinema_Center_Manager-Java-JavaFX-SQL-",
  },
];
