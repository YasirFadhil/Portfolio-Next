import { contact } from "@/app/data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">My Contact</h2>
      <p className="text-lg mb-4">
        <strong>Email:</strong>{" "}
        <a
          href={`mailto:${contact.email}`}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {contact.email}
        </a>
      </p>

      <p className="text-lg mb-4">
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
