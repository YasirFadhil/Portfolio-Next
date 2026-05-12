export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-6xl mx-auto px-4 md:px-8 bg-gray-900 text-white text-center py-12 md:py-16 lg:py-20">
      <p className="text-sm md:text-base">
        &copy; {currentYear} Yassir. All rights reserved.
      </p>
    </footer>
  );
}
