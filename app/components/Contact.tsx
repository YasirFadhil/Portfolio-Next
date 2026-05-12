import { contact } from "@/app/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto py-20 px-4 md:px-8 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">My Contact</h2>
      <p className="text-base md:text-lg mb-4 md:mb-8">
        <strong>Email:</strong>{" "}
        <a
          href={`mailto:${contact.email}`}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {contact.email}
        </a>
      </p>

      <p className="text-base md:text-lg mb-4 md:mb-8">
        <strong>Phone:</strong>{" "}
        <a
          href={`tel:${contact.phone}`}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {contact.phone}
        </a>
      </p>
    </section>
  );
}
