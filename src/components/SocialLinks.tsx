import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

interface SocialLinksProps {
  iconSize?: number
  className?: string
  iconClassName?: string
}

export default function SocialLinks({
  iconSize = 32,
  className = "",
  iconClassName = "",
}: SocialLinksProps) {
  return (
    <div className={`flex gap-8 items-center ${className}`}>
      <Link
        href="https://github.com/armand-sauzay"
        className={`text-gray-500 hover:text-[#24512B] transition-transform transform hover:scale-110 ${iconClassName}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className={`h-${iconSize/4} w-${iconSize/4}`} style={{ width: iconSize, height: iconSize }} />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="https://linkedin.com/in/armandsauzay"
        className={`text-gray-500 hover:text-[#24512B] transition-transform transform hover:scale-110 ${iconClassName}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className={`h-${iconSize/4} w-${iconSize/4}`} style={{ width: iconSize, height: iconSize }} />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="mailto:sauzayarmand@gmail.com"
        className={`text-gray-500 hover:text-[#24512B] transition-transform transform hover:scale-110 ${iconClassName}`}
      >
        <Mail className={`h-${iconSize/4} w-${iconSize/4}`} style={{ width: iconSize, height: iconSize }} />
        <span className="sr-only">Email</span>
      </Link>
    </div>
  )
}
