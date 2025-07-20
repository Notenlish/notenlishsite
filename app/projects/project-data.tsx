export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Anifetch",
    year: 2025,
    description: "Animated Neofetch",
    url: "https://github.com/Notenlish/anifetch",
  },
  {
    title: "This website",
    year: 2025,
    description: "My personal website and blog",
    url: "https://notenlish.vercel.app/",
  },
  {
    title: "Itch.io Analytics",
    year: 2024,
    description: "Analytics for Itch.io jam games.",
    url: "https://itchanalytics.vercel.app/",
  },
  {
    title: "Pygame-ECS",
    year: 2024,
    description: "A simple ECS library for Pygame.",
    url: "https://github.com/Notenlish/pygame_ecs",
  },
  {
    title: "Bilateral Maker",
    year: 2024,
    description: "A tool for converting music to be bilateral.",
    url: "https://bilateral-maker.vercel.app/",
  }
];
