import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <Code2 className="w-8 h-8 text-sky-500" />
            <span>
              Adrickson<span className="text-sky-500">.Dev</span>
            </span>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-sky-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10">
          <div className="flex flex-col space-y-4 px-6 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-sky-400 text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
