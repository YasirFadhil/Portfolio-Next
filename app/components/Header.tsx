export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-2xl font-bold">Yassir</div>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
