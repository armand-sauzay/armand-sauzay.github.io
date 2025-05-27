import Header from "../components/Header"
import SocialLinks from "../components/SocialLinks"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h2 className="text-gray-700 text-6xl sm:text-7xl font-bold mb-4 tracking-tight">
          {/* also include a waving hand and a */}
          Hi, I&apos;m Armand&nbsp;
          <span className="text-[#24512B]">👋</span>
          <span className="text-[#24512B]">.</span>
        </h2>
        <p className="text-gray-500 text-lg sm:text-xl font-light mb-8 max-w-2xl text-center">
          I&apos;m a software engineer passionate about building ML solutions.
        </p>
      </main>

      <footer className="flex justify-center items-center gap-4 p-6 text-sm text-gray-500">
        <SocialLinks className="" iconSize={16} />
        <span className="text-gray-400">© armand sauzay</span>
      </footer>
      {/* <span className="text-[#24512B]">.</span> */}
    </div>
  )
}

