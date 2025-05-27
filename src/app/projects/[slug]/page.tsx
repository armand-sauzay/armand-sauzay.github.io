import Header from "../../../components/Header"
import { projects } from "../../../data/projects"
import MarkdownDisplay from "../../../components/MarkdownDisplay"

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }))
}

async function fetchMarkdown(url: string) {
  const res = await fetch(url, { next: { revalidate: 3600 } })
  if (!res.ok) return "# Not found"
  return res.text()
}

function resolveGithubImageUrl(src: string, markdownUrl: string) {
  if (/^https?:\/\//.test(src)) return src;
  const base = markdownUrl.replace(/\/[^\/]+$/, "/");
  return base + src.replace(/^\.?\//, "");
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-2xl font-semibold text-gray-800 mb-8">Project not found</h1>
        </main>
      </div>
    )
  }
  const markdown = await fetchMarkdown(project.markdownUrl)
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <MarkdownDisplay markdown={markdown} markdownUrl={project.markdownUrl} />
      </main>
    </div>
  )
}