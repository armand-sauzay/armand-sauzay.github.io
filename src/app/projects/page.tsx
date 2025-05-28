import Link from "next/link"
import { projects } from "../../data/projects"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {projects.map((project) => (
            <article key={project.slug} className="border-b border-gray-200 pb-8">
              <Link href={`/projects/${project.slug}`} className="group">
                <h2 className="text-2xl font-medium text-gray-800 group-hover:text-[#24512B] transition-colors mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-500 text-base">{project.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}