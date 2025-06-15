"use client";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const App = () => {
  const { theme } = useTheme(); // light, dark, or system
  const [mounted, setMounted] = useState(false);
  const [particlesContainer, setParticlesContainer] = useState(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (particlesContainer && theme) {
      particlesContainer.loadTheme(theme === "dark" ? "dark" : "light");
    }
  }, [theme, particlesContainer]);

  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    setParticlesContainer(container);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true },
      themes: [
        {
          name: "light",
          default: {
            value: true,
            mode: "light",
          },
          options: {
            background: { color: { value: "#ffffff" } },
            particles: {
              color: { value: "#000000" },
              links: { color: "#000000" },
            },
          },
        },
        {
          name: "dark",
          default: {
            value: false,
            mode: "dark",
          },
          options: {
            background: { color: { value: "#000000" } },
            particles: {
              color: { value: "#ffffff" },
              links: { color: "#ffffff" },
            },
          },
        },
      ],
      background: {
        color: { value: theme === "dark" ? "#000000" : "#ffffff" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: theme === "dark" ? "#ffffff" : "#000000" },
        links: {
          color: theme === "dark" ? "#ffffff" : "#000000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    [theme]
  );

  if (!mounted) return null;

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default App;
