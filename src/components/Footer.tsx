import SocialLinks from "./SocialLinks"

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center gap-4 p-6 text-sm text-gray-500 mt-auto">
      <SocialLinks className="" iconSize={16} />
      <span className="text-gray-400">© armand sauzay</span>
    </footer>
  )
}
