import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Foot() {
  return (
    <footer className="bg-zinc-900 text-zinc-100 px-6 py-10 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          Let’s make something great.
        </h2>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-xl">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
