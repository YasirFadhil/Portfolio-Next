"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex justify-between items-center px-4 py-2 md:px-6">
        <div className="text-2xl font-bold">Yassir</div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl"
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative top-full left-0 right-0 md:top-auto md:right-auto bg-white/80 dark:bg-black/80 md:bg-transparent md:dark:bg-transparent w-full md:w-auto border-b md:border-b-0 border-zinc-200 dark:border-zinc-800`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 px-4 py-4 md:px-0 md:py-0">
            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={closeMenu}
                className="block hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="block hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="block hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block hover:text-blue-600 dark:hover:text-blue-400 transition"
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
