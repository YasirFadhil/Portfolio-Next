import { studies } from "@/app/data";

export default function Study() {
  return (
    <section id="education" className="max-w-3xl mx-auto px-4 md:px-8 py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        My Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {studies.map((study) => (
          <div key={study.school} className="border p-4 md:p-6 rounded">
            <h3 className="font-bold text-lg mb-2">{study.school}</h3>
            <p className="text-gray-600 dark:text-gray-400">{study.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
