import { BookOpen, Code2, Brain } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <nav className="p-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-[#24512B] font-semibold text-xl">
          armandsauzay
        </Link>
        <div className="flex gap-6">
          <Link href="/articles" className="text-gray-600 hover:text-[#24512B] transition-colors flex items-center gap-2 cursor-pointer">
            <BookOpen className="h-5 w-5" />
            <span>Articles</span>
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-[#24512B] transition-colors flex items-center gap-2 cursor-pointer">
            <Code2 className="h-5 w-5" />
            <span>Projects</span>
          </Link>
          <Link href="/creative-lab" className="text-gray-600 hover:text-[#24512B] transition-colors flex items-center gap-2 cursor-pointer">
            <Brain className="h-5 w-5" />
            <span>Creative Lab</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
