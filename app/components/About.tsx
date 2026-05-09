import { user } from "@/app/data";

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        Hi, Im {user.name}, {user.age} years old.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        Im a fresh graduate from {user.school}.
      </p>
    </section>
  );
}
