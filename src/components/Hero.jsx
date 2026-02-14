import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import fotoPerfil from "../assets/imgs/perfil-img.jpeg";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center px-4 py-12 overflow-hidden"
    >
      {/* CARD PRINCIPAL (Estilo Vidro) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
            relative z-10 flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-12 
            rounded-3xl border border-white/10 bg-white/5 p-8 
            backdrop-blur-xl shadow-2xl 
            md:flex-row md:p-16
        "
      >
        {/* LADO ESQUERDO: Texto */}
        <div className="flex flex-1 flex-col text-center md:text-left">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Olá, eu sou <br />
            {/* Gradiente no texto */}
            <span className="bg-linear-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Adrickson
            </span>
          </h1>

          <div className="mb-8 text-xl font-bold text-sky-400 md:text-3xl">
            <TypeAnimation
              sequence={[
                "Desenvolvedor Full Stack",
                1500,
                "Apaixonado por Tecnologia",
                1500,
                "Criativo & Proativo",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Transformo problemas complexos em interfaces simples, elegantes e
            intuitivas usando as melhores tecnologias do mercado.
          </p>
        </div>

        {/* LADO DIREITO: Imagem */}
        <div className="relative group">
          {/* Efeito de brilho atrás da foto */}
          <div className="absolute -inset-1 rounded-full bg-linear-to-r from-sky-500 to-indigo-600 opacity-50 blur-2xl transition duration-500 group-hover:opacity-100"></div>

          <img
            src={fotoPerfil}
            alt="Minha Foto"
            className="relative h-64 w-64 rounded-full border-4 border-white/10 object-cover shadow-2xl transition-transform duration-500 hover:scale-105 md:h-80 md:w-80"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
