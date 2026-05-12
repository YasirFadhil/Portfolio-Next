export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6">
      <div className="text-center space-y-3 md:space-y-4 lg:space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Hi, Im Yassir
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
          Freshgrade • SMK Negeri 1 Klaten
        </p>
      </div>

      <div className="flex gap-4 mt-4 justify-center">
        <a
          href="/resume.pdf"
          download="Muchammad_Yassir_Nur_Fadillah_CV.pdf"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-md transition-all duration-300"
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-md transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
