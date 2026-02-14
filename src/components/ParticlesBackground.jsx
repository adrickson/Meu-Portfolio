import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Carrega a versão leve da biblioteca para não pesar o site
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#020617", // Cor de fundo (azul bem escuro, quase preto)
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Faz as linhas se conectarem ao mouse
            },
            onClick: {
              enable: true,
              mode: "push", // Adiciona mais bolinhas ao clicar
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#38bdf8", // Cor das bolinhas (azul claro neon)
          },
          links: {
            color: "#38bdf8", // Cor das linhas
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1, // Velocidade das partículas
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80, // Quantidade de bolinhas
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Importante: Coloca o fundo atrás de tudo
      }}
    />
  );
};

export default ParticlesBackground;
