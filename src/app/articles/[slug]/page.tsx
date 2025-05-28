import { articles } from "../../../data/articles"
import MarkdownDisplay from "../../../components/MarkdownDisplay"

export function generateStaticParams() {
  return articles.map(article => ({ slug: article.slug }))
}

async function fetchMarkdown(url: string) {
  const res = await fetch(url, { next: { revalidate: 3600 } })
  if (!res.ok) return "# Not found"
  return res.text()
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-2xl font-semibold text-gray-800 mb-8">Article not found</h1>
        </main>
      </div>
    )
  }
  
  const markdown = await fetchMarkdown(article.markdownUrl);
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <MarkdownDisplay markdown={markdown} markdownUrl={article.markdownUrl} />
      </main>
    </div>
  )
}
