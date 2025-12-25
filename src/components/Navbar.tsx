import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-200 bg-white dark:bg-black dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg text-slate-900 dark:text-slate-100">
          Rushikesh Zende
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-slate-700 hover:text-blue-600 dark:text-slate-300">
            Home
          </Link>

          <Link
            href="/#about"
            className="text-slate-700 hover:text-blue-600 dark:text-slate-300"
          >
            About
          </Link>

          <Link
            href="/#projects"
            className="text-slate-700 hover:text-blue-600 dark:text-slate-300"
          >
            Projects
          </Link>

          <a
            href="/Rushikesh Zende copy.pdf"
            download="Rushikesh_Zende_Resume.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
