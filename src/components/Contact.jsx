import { useState } from "react";
import { Mail, Linkedin, Github, Check } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const contacts = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/adrickson-pinheiro-a5a194301",
      icon: <Linkedin className="w-6 h-6" />,
      color: "hover:bg-blue-600 hover:shadow-blue-500/50",
      target: "_blank",
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://github.com/adrickson",
      icon: <Github className="w-6 h-6" />,
      color: "hover:bg-slate-700 hover:shadow-slate-500/50",
      target: "_blank",
    },
    {
      id: 3,
      name: "E-mail",
      link: "mailto:pinheiroadrickson@gmail.com",
      emailReal: "pinheiroadrickson@gmail.com",
      isEmail: true,
      icon: <Mail className="w-6 h-6" />,
      color: "hover:bg-emerald-600 hover:shadow-emerald-500/50",
      target: "",
    },
  ];

  // Função para copiar o e-mail
  const handleEmailClick = async (e, email) => {
    e.preventDefault();

    try {
      await navigator.clipboard.writeText(email); // Método moderno para copiar
      setCopied(true);
    } catch (err) {
      // se falhar vai para o modelo antigo
      const textArea = document.createElement("textarea");
      textArea.value = email;

      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);

      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
        setCopied(true);
      } catch (err) {
        console.error("Falha ao copiar", err);
        // Último recurso: abre o mailto mesmo
        window.location.href = `mailto:${email}`;
      }

      document.body.removeChild(textArea);
    }

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      id="contact"
      className="py-24 px-6 relative z-10 bg-slate-900 border-t border-slate-800"
    >
      {/* Container Centralizado */}
      <div className="max-w-4xl mx-auto text-center">
        {/* TÍTULO ANIMADO */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Vamos trabalhar <span className="text-sky-400">juntos?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          Estou pronto para integrar sua equipe e contribuir desde o primeiro
          dia. Se você procura alguém disciplinado e que está em constante
          evolução, vamos conversar.
        </motion.p>

        {/* ÁREA DOS BOTÕES */}
        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.id}
              href={contact.link}
              target={contact.target || undefined}
              rel={
                contact.target === "_blank" ? "noopener noreferrer" : undefined
              }
              // Se for email, chama a function. Se não, é null.
              onClick={(e) =>
                contact.isEmail ? handleEmailClick(e, contact.emailReal) : null
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                 flex items-center gap-3 px-8 py-4 rounded-xl 
                 bg-slate-800 text-white font-bold border border-slate-700 
                 transition-all duration-300 shadow-lg cursor-pointer
                 ${contact.color}
               `}
            >
              {/* Lógica Visual: Se for Email e estiver copiado, muda o ícone */}
              {contact.isEmail && copied ? (
                <Check className="w-6 h-6" />
              ) : (
                contact.icon
              )}

              {/* Lógica de Texto: Se for Email e estiver copiado, muda o texto */}
              <span>
                {contact.isEmail && copied ? "Copiado!" : contact.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
