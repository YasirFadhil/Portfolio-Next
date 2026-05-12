import { user, studies, skills } from "@/app/data";

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-4 md:px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 md:mb-6">
        Hello, my name is {user.name}, and usually called {user.nick}. I was
        born on {user.birthdate}. And right now, I'm {user.age} years old.
      </p>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 md:mb-6">
        I'm a fresh graduate from {studies[3].school}. I have interests in{" "}
        {skills.map((skill) => skill.name).join(", ")}. My goal is to{" "}
        {user.goal}.
      </p>

      <div className="mt-8 md:mt-12">
        <h3 className="text-lg md:text-xl font-bold mb-4">My Hobbies</h3>
        <div className="flex flex-wrap gap-2">
          {user.hobbies.map((hobby) => (
            <span
              key={hobby}
              className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm md:text-base"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
