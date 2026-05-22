export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Static Shader",
    year:2026,
    description:"Minecraft shader attempt",
    url:"https://modrinth.com/shader/static-shader"
  },
  {
    title: "Cool Emu",
    year:2026,
    description:"Web based retro emulator",
    url:"https://cool-emu.pages.dev/"
  },
  {
    title: "Vscode Ext Downloader",
    year:2026,
    description:"Incredibly basic tool to download vscode extensions",
    url:"https://vscode-ext-downloader.pages.dev/"
  },
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
    url: "https://notenlish.com/",
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
