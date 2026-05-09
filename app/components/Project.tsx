import { projects } from "@/app/data";

export default function Project() {
  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.title} className="border p-4 rounded">
            <h3 className="font-bold">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-blue-100 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
