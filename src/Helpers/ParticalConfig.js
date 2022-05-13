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
          color: "#000000"
        },
        
       
      },
      opacity: {
        value: 0.8,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#000000",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 8,
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
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
  };
export default particleConfig;