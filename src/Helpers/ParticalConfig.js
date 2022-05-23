const particleConfig = {
    particles: {
      number: {
        value: 100,
      },
      color: {
        value: "rgb(221, 55, 55)"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
        },
      },
      opacity: {
        value: 0.8,
        random: false,
      },
      size: {
        value: 2,
        random: false,
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "rgb(221, 55, 55)",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: true,
        out_mode: "out",
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.1
        },
      }
    },
  };
export default particleConfig;