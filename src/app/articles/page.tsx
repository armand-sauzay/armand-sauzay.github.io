import Header from "../../components/Header"
import Link from "next/link"
import { articles } from "../../data/articles"

export default function ArticlesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.slug} className="border-b border-gray-200 pb-8">
              <Link href={`/articles/${article.slug}`} className="group">
                <h2 className="text-2xl font-medium text-gray-800 group-hover:text-[#24512B] transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-base mb-2">{article.description}</p>
                <time className="text-gray-400 text-sm">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
} 