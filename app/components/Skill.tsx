import { skills } from "@/app/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
      <div className="grid grid-cols-3 gap-4">
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
