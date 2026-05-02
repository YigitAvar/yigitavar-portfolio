export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Enterprise IT",
    description:
      "Hands-on infrastructure operations, user support, endpoint preparation and Microsoft ecosystem administration.",
    items: [
      "Active Directory",
      "Office 365",
      "Endpoint Central",
      "ServiceDesk Plus",
      "Domain Join",
      "User Support",
    ],
  },
  {
    title: "Backend & Databases",
    description:
      "Backend services, API development and database-backed system design for practical software projects.",
    items: [
      "Spring Boot",
      "ASP.NET Web API",
      "PostgreSQL",
      "MySQL",
      "SQL",
      "REST API",
    ],
  },
  {
    title: "Programming",
    description:
      "Programming languages used across backend, automation, desktop applications and engineering projects.",
    items: ["Java", "C#", "Python", "C/C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend & Desktop",
    description:
      "Modern web interfaces and desktop GUI applications built with frontend and UI-oriented technologies.",
    items: ["React", "Vite", "HTML", "CSS", "JavaFX", "Qt"],
  },
  {
    title: "Tools & Reporting",
    description:
      "Development, reporting, automation and engineering tools used in academic and professional workflows.",
    items: ["GitHub", "Power BI", "Robusta RPA", "Matlab/Simulink", "VS Code"],
  },
];