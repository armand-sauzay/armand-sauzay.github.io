import { Github, Linkedin, Mail, Menu } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-6">
        <button className="text-gray-600 ml-auto">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-16">
        <h2 className="text-gray-600 text-6xl sm:text-7xl font-semibold mb-4">
          Hi, I&apos;m Armand{" "}
          <span role="img" aria-label="waving hand" className="inline-block">
            👋
          </span>
          <span className="text-teal-500">.</span>
        </h2>
        <p className="text-gray-600 text-xl sm:text-2xl font-light mb-12">
          &quot;Simple things should be simple&quot;
        </p>
        <div className="flex gap-8">
          <Link
            href="https://github.com/armand-sauzay"
            className="text-gray-500 hover:text-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/armandsauzay"
            className="text-gray-500 hover:text-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:sauzayarmand@gmail.com" className="text-gray-500 hover:text-gray-700 transition-colors">
            <Mail className="h-8 w-8" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </main>

      <footer className="flex justify-center items-center gap-4 p-6 text-sm text-gray-500">
        <Link
          href="https://github.com/armand-sauzay"
          className="hover:text-gray-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-4 w-4" />
        </Link>
        <Link
          href="https://linkedin.com/in/armandsauzay"
          className="hover:text-gray-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-4 w-4" />
        </Link>
        <Link href="mailto:sauzayarmand@gmail.com" className="hover:text-gray-700 transition-colors">
          <Mail className="h-4 w-4" />
        </Link>
        <span className="text-gray-400">© armand sauzay</span>
      </footer>
    </div>
  )
}

