import { skills } from "@/app/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-20 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="border p-4 rounded text-center">
            <h3 className="font-bold">{skill.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
