import { projects } from "@/app/data";

export default function Project() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border p-4 md:p-6 rounded shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="font-bold">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-blue-600 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
