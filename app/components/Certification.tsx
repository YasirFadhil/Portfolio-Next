import { certifications } from "@/app/data";

export default function Certification() {
  return (
    <section
      id="certification"
      className="max-w-3xl mx-auto px-4 md:px-8 py-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        My Certifications
      </h2>
      <div className="space-y-4">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="border-l-4 border-blue-600 p-4 md:p-6 bg-white dark:bg-gray-900 rounded shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {cert.issuer}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
              {cert.date}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
