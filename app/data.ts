interface Person {
  name: string;
  age: number;
  school: string;
}

export const user: Person = {
  name: "Yassir",
  age: 19,
  school: "SMK Negeri 1 Klaten",
};

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
}

export const projects: Project[] = [
  {
    title: "About Me Website",
    description: "A personal website to introduce myself.",
    technologies: ["Astro", "Tailwind", "JavaScript"],
  },
  {
    title: "Healthcare Website",
    description: "A website for healthcare professionals.",
    technologies: ["HTML", "Tailwind", "JavaScript"],
  },
  {
    title: "Scenery Photography",
    description: "Some random photo I took outside",
    technologies: ["Vivo V15", "Gcam MGC 9.2"],
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
