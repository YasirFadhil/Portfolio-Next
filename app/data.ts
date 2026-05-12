interface Person {
  name: string;
  nick: string;
  birthdate: string;
  age: number;
  hobbies: string[];
  goal: string;
}

export const user: Person = {
  name: "Muchammad Yassir Nur Fadillah",
  nick: "Yassir",
  birthdate: "04 April 2007",
  age: 19,
  hobbies: ["Playing Games", "Reading", "Listening to Music", "Gardening"],
  goal: "Get a reliable job and have an stable income for me and my family",
};

export interface Study {
  school: string;
  year: string;
}

export const studies: Study[] = [
  { school: "SD Negeri 1 Patran", year: "2014 - 2016" },
  { school: "Mi Muhammadiyah Sabranglor", year: "2016 - 2020" },
  { school: "SMP Negeri 2 Trucuk", year: "2020 - 2023" },
  { school: "SMK Negeri 1 Klaten", year: "2023 - 2026" },
];

export interface Skills {
  name: string;
  level: string;
}
export const skills: Skills[] = [
  { name: "Design", level: "Newbie" },
  { name: "Programming", level: "Newbie" },
  { name: "Photography", level: "Intermediate" },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Healthcare Website",
    description: "A website for healthcare professionals.",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    link: "https://4sehat5sempurna.vercel.app",
  },
  {
    title: "Personal Profile Website with Astro (Experimental)",
    description: "Portfolio website built with Astro.",
    technologies: ["Astro", "Tailwind", "JavaScript", "CSS"],
    link: "https://yasirfadhil.vercel.app",
  },
  {
    title: "Portfolio Website (Next.js)",
    description: "A portfolio website built with Next.js.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
    link: "https://yasirfadhilnext.vercel.app",
  },
  {
    title: "NIXKs",
    description: "A Nixos configuration made by me for my personal use.",
    technologies: ["Nix", "NixOS", "Linux", "Shell"],
    link: "https://github.com/YasirFadhil/NIXKs",
  },
  {
    title: "Scenery Photography",
    description: "Some random photo I took outside",
    technologies: ["Vivo V15", "Gcam MGC 9.2"],
    link: "https://drive.google.com/drive/folders/1NQGOB9rSY6X5dqPjr2Ret2H0-uHh_8c-",
  },
  {
    title: "Graduation Biodata",
    description: "A final project from curriculum teacher",
    technologies: ["Canva", "Excel"],
    link: "https://canva.link/a1toyca34ugolpp",
  },
];

export interface Contact {
  name: string;
  email: string;
  phone: string;
}

export const contact: Contact = {
  name: "yasirfadhil",
  email: "yasirforbusinesse@gmail.com",
  phone: "+62-85169783454",
};

export interface Social {
  name: string;
  url: string;
}

export const socials: Social[] = [
  { name: "Instagram", url: "https://www.instagram.com/ysirnf_" },
  { name: "GitHub", url: "https://github.com/YasirFadhil" },
  { name: "X(Twitter)", url: "https://x.com/ysirnf" },
  { name: "TikTok", url: "https://www.tiktok.com/@ysirnf" },
];

export interface Link {
  name: string;
  url: string;
}

export const links: Link[] = [{ name: "", url: "" }];
