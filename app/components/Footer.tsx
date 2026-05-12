import { socials } from "@/app/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-8xl mx-auto px-4 md:px-8 bg-gray-900 text-white text-center py-12 md:py-16 lg:py-20">
      <div className="mb-6 md:mb-8">
        <p className="text-sm md:text-base font-semibold mb-4">
          Follow me on social media:
        </p>
        <div className="flex justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition text-sm md:text-base"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <p className="text-sm md:text-base">
        &copy; {currentYear} Yassir. All rights reserved.
      </p>
    </footer>
  );
}
