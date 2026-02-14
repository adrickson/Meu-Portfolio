import {
  GraduationCap,
  Code2,
  Gamepad2,
  Dumbbell,
  Download,
} from "lucide-react";

const About = () => {
  return (
    <div id="about" className="relative w-full bg-slate-900 py-18 px-6 z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-sky-400 md:text-4xl">
          Sobre Mim
        </h2>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
          <p>
            Minha jornada na tecnologia começou de forma inusitada: eu queria
            criar um jogo. Não fazia ideia do que era "programação", mas a
            curiosidade me levou a pesquisar e acabei caindo de paraquedas no
            desenvolvimento Web. O que era apenas curiosidade virou minha
            paixão.
          </p>

          <p>
            Atualmente, curso Engenharia de Software (5º Semestre) e transformei
            esse interesse em profissão. Tenho foco total no ecossistema
            JavaScript (React, Node, Express), sempre buscando criar interfaces
            modernas e funcionais.
          </p>

          <p>
            Quando não estou no computador, mantenho a disciplina na academia. A
            academia é minha válvula de escape para manter a mente limpa. E
            claro, nas horas vagas, volto às minhas origens jogando videogame —
            afinal, foi por causa deles que tudo começou.
          </p>
        </div>
        <div className="mt-6">
          <a
            href="/curriculo.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white shadow-lg 
    bg-sky-500 hover:bg-sky-600 hover:shadow-sky-500/50 
    transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5" /> Baixar Currículo
          </a>
        </div>
        {/*  GRID DE CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1: Formação */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-sky-500/50 transition-colors">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/10">
              <GraduationCap className="h-6 w-6 text-sky-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Engenharia</h3>
            <p className="text-gray-400">
              Cursando o 5º Semestre de Engenharia de Software.
            </p>
          </div>

          {/* Card 2: Hobbies */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-sky-500/50 transition-colors">
            <div className="mb-4 flex gap-2 items-center justify-center rounded-lg bg-sky-500/10 w-fit px-3 h-12">
              <Dumbbell className="h-6 w-6 text-sky-400" />
              <Gamepad2 className="h-6 w-6 text-sky-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Hobbies</h3>
            <p className="text-gray-400">
              Games e Treino diário para manter o foco.
            </p>
          </div>
        </div>

        {/*  TECNOLOGIAS  */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-8 h-8 text-sky-400" />
            <h3 className="text-2xl font-bold text-white">
              Minhas Tecnologias
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coluna 1: Dominio tec (Verde) */}
            <div>
              <h4 className="text-emerald-400 font-bold mb-4 uppercase text-sm tracking-wider">
                Base Sólida
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium hover:bg-emerald-500/20 transition-colors">
                  HTML5
                </span>
                <span className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium hover:bg-emerald-500/20 transition-colors">
                  CSS3
                </span>
                <span className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium hover:bg-emerald-500/20 transition-colors">
                  JavaScript
                </span>
                <span className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium hover:bg-emerald-500/20 transition-colors">
                  Git & GitHub
                </span>
                <span className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium hover:bg-emerald-500/20 transition-colors">
                  MySQL
                </span>
              </div>
            </div>

            {/* Coluna 2: Estudando (Azul) */}
            <div>
              <h4 className="text-sky-400 font-bold mb-4 uppercase text-sm tracking-wider">
                Estudando Agora
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/20 font-medium hover:bg-sky-500/20 transition-colors">
                  React.js
                </span>
                <span className="px-4 py-2 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/20 font-medium hover:bg-sky-500/20 transition-colors">
                  Vite
                </span>
                <span className="px-4 py-2 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/20 font-medium hover:bg-sky-500/20 transition-colors">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/20 font-medium hover:bg-sky-500/20 transition-colors">
                  Node.js
                </span>
                <span className="px-4 py-2 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/20 font-medium hover:bg-sky-500/20 transition-colors">
                  Express
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
