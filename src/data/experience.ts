export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "IT Intern",
    company: "Gen Era Diagnostics",
    period: "Jun. 2025 – Jul. 2025 | Oct. 2025 – Present",
    location: "Istanbul, Turkey",
    description: [
      "Performed daily IT operations including user account management, endpoint preparation, Office 365 administration, domain joining, and internal support requests.",
      "Managed user accounts, password resets, group-related tasks, and device operations in Active Directory and Office 365.",
      "Handled endpoint setup processes such as OS installation, Office setup, computer configuration, and corporate domain joining.",
      "Built internal automation workflows using Robusta RPA and created Power BI views for reporting needs.",
    ],
  },
  {
    role: "Software Intern",
    company: "MS Spektral Defense Industry",
    period: "Aug. 2025 – Sep. 2025",
    location: "Ankara, Turkey",
    description: [
      "Developed a logging and database manager desktop application using C++/Qt and PostgreSQL.",
      "Implemented logger message handling features for monitoring system events, debugging, and error tracking.",
      "Created a basic Python-based server to support lightweight backend communication and testing.",
    ],
  },
  {
    role: "Project Management Intern",
    company: "TNC Group / Europaeisches Bildungsinstitut",
    period: "Mar. 2025 – May. 2025",
    location: "Remote",
    description: [
      "Worked on case studies related to project life cycles, legal frameworks in IT, and AI-based data strategies.",
      "Participated in a cross-functional internship program focusing on both technical and managerial disciplines.",
    ],
  },
];