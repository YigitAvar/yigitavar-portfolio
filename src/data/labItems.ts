export type LabItem = {
  title: string;
  description: string;
  status: "Live" | "In Progress" | "Planned";
  path: string;
  github?: string;
  tags: string[];
};

export const labItems: LabItem[] = [
  {
    title: "Daily Desk",
    description:
      "A lightweight productivity app for managing work and personal tasks in a focused daily workflow. It separates Today and Backlog, keeps priorities visible, tracks unfinished tasks, and turns completion history into a simple visual heatmap.",
    status: "In Progress",
    path: "#",
    tags: ["React", "Vite", "Productivity", "Local Storage", "UI Experiment"],
  },
  {
    title: "AI Text Tool",
    description:
      "A system-wide desktop tool that processes selected text through a local LLM via global keyboard shortcuts. Select text in any app, press a shortcut, and it translates, fixes grammar, formalizes tone, or summarizes in place. Runs locally-first with Ollama, lives in the system tray, and is fully config-driven so new actions can be added without touching code.",
    status: "In Progress",
    path: "#",
    github: "https://github.com/YigitAvar/ai-text-tool",
    tags: ["Python", "Ollama", "Local LLM", "System Tray", "Automation"],
  },
];
