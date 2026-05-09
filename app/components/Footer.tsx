export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white text-center py-8">
      <p>&copy; {currentYear} Yassir. All rights reserved.</p>
    </footer>
  );
}
