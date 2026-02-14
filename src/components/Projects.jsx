import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Rede Social +Info ",
      description:
        "Plataforma de interação social com arquitetura focada em segurança de dados. Implementa criptografia de senhas no banco, autenticação via JWT com controle de sessão e sistema completo de gerenciamento de perfis de usuário.",
      videoId: "Marg0BU-EvE",
      siteLink: "",
      repoLink: "",
    },
    {
      id: 2,
      title: "Cardápio Digital para Consulta",
      description:
        "Sistema de gestão de produtos voltado para consulta rápida de funcionários. Mantendo integridade de dados (exclusão em cascata de categorias/produtos) e edição dinâmica de preços e itens em tempo real.",
      videoId: "cmqJZTvxPVU",
      siteLink: "",
      repoLink: "",
    },
    {
      id: 3,
      title: "API de Autenticação JWT",
      description:
        "Backend focado em segurança demonstrando a implementação prática de JSON Web Token com Node.js e Express. Inclui middlewares de proteção e controle de acesso a rotas privadas.",
      videoId: null,
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop",
      repoLink: "https://github.com/adrickson/JWT",
    },
    {
      id: 4,
      title: "Simulador Assembly x86",
      description:
        "Aplicação interativa desenvolvida em equipe para simular instruções de baixo nível da arquitetura x86. Permite visualizar o comportamento da memória e registradores passo a passo.",
      videoId: null, // SEM VÍDEO. Vai mostrar imagem
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      siteLink: "https://simulador-de-instrucoes-assembly.vercel.app/",
      repoLink: "https://github.com/adrickson/simulador-instrucoes-assembly",
    },
  ];

  return (
    <div className="py-20 px-6 relative z-10" id="projects">
      <div className="flex justify-center mb-12">
        <h2
          className="
            inline-block px-8 py-4 rounded-2xl
            text-3xl font-bold text-white md:text-4xl
             bg-white/5 backdrop-blur-md border border-white/10 shadow-xl
        "
        >
          Meus <span className="text-sky-400">Projetos</span>
        </h2>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10"
          >
            {/* LÓGICA DE MÍDIA (VÍDEO OU IMAGEM) */}
            <div className="w-full aspect-video bg-black relative overflow-hidden ">
              {project.videoId ? (
                // SE TIVER VÍDEO: Renderiza o Iframe do YouTube
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                // SE NÃO TIVER VÍDEO: Renderiza a Imagem
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              )}
            </div>

            {/* DESCRIÇÕES DO PROJETO */}
            <div className="p-6 ">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* BOTÕES DE AÇÃO */}
              <div className="mt-auto flex items-center gap-4 pt-4 border-t border-slate-800">
                {/* Botão GitHub: Só aparece se tiver repoLink */}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors group/btn"
                  >
                    <Github className="w-5 h-5 group-hover/btn:text-white transition-colors" />
                    Código
                  </a>
                )}

                {/* Botão Demo: Só aparece se tiver siteLink */}
                {project.siteLink && (
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors group/btn"
                  >
                    <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    Ver Projeto
                  </a>
                )}

                {/* Se não tiver links (Projetos privados) */}
                {!project.repoLink && !project.siteLink && (
                  <div className="flex items-center gap-2 text-gray-500 text-xs italic">
                    <span>Projeto Privado</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>Demonstração no vídeo acima</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
