function initAboutHero() {
  const hero = document.querySelector(".about-hero");
  const title = document.querySelector(".about-hero__title");
  const intro = document.querySelector(".about-hero__intro");

  if (!hero) return;

  gsap.from(title, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from(intro, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.8,
    ease: "power3.out",
  });
}

function initAboutStory() {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".about-story");
  const headline = document.querySelector(".about-story__headline");
  const text = document.querySelector(".about-story__text");
  const image = document.querySelector(".about-story__image");

  if (!section) return;

  if (headline) {
    gsap.from(headline, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  if (text) {
    gsap.from(text, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  if (image) {
    gsap.from(image, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }
}

function initAboutDefines() {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".about-defines");
  const headline = document.querySelector(".about-defines__headline");
  const image = document.querySelector(".about-defines__image");
  const content = document.querySelector(".about-defines__content");

  if (!section) return;

  if (headline) {
    gsap.from(headline, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  if (image) {
    gsap.from(image, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  if (content) {
    gsap.from(content, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }
}

function initAboutTechnical() {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".about-technical");
  const sidebar = document.querySelector(".about-technical__sidebar");
  const label = document.querySelector(".about-technical__label");
  const headline = document.querySelector(".about-technical__headline");
  const intro = document.querySelector(".about-technical__intro");
  const capabilities = document.querySelector(".about-technical__capabilities");
  const closing = document.querySelector(".about-technical__closing");
  const image = document.querySelector(".about-technical__image");

  if (!section) return;

  gsap.from(sidebar, {
    scaleY: 0,
    transformOrigin: "top",
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(label, {
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: label,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(headline, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: headline,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(intro, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: intro,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  const listItems = capabilities.querySelectorAll("li");
  gsap.from(listItems, {
    opacity: 0,
    x: -20,
    duration: 0.6,
    stagger: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger: capabilities,
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(closing, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: closing,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(image, {
    opacity: 0,
    scale: 1.05,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: image,
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.to(image, {
    yPercent: -12,
    ease: "none",
    scrollTrigger: {
      trigger: image,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

function initAboutProcess() {
  gsap.registerPlugin(ScrollTrigger);

  const processSection = document.querySelector(".about-process");
  const headline = document.querySelector(".about-process__headline");
  const cards = gsap.utils.toArray(".about-process__item");
  const cta = document.querySelector(".about-process__cta");

  if (!processSection || cards.length === 0) return;

  gsap.from(headline, {
    opacity: 0,
    y: 80,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: headline,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  ScrollTrigger.create({
    trigger: headline,
    start: "bottom top",
    end: "bottom top-=1",
    onEnter: () => {
      processSection.classList.add("about-process--dark");
    },
    onLeaveBack: () => {
      processSection.classList.remove("about-process--dark");
    },
  });

  cards.forEach((card, index) => {
    const image = card.querySelector(".about-process__image");
    const step = card.querySelector(".about-process__step");

    if (index < cards.length - 1) {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: () => `+=${window.innerHeight}`,
        pin: true,
        pinSpacing: false,
      });

      gsap.to(image, {
        "--pseudo-y": "-100%",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(step, {
        opacity: 0,
        y: 40,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(card, {
        scale: 0.7,
        rotateZ: -15,
        ease: "none",
        scrollTrigger: {
          trigger: cards[index + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    } else {
      gsap.to(image, {
        "--pseudo-y": "-100%",
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        duration: 1.2,
        ease: "power3.inOut",
      });

      gsap.from(step, {
        opacity: 0,
        y: 40,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 0.8,
        ease: "power3.out",
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        onEnter: () => {
          processSection.classList.remove("about-process--dark");
        },
        onLeaveBack: () => {
          processSection.classList.add("about-process--dark");
        },
      });
    }
  });

  if (cta) {
    gsap.from(cta, {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: cta,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      duration: 0.6,
      ease: "power3.out",
    });
  }
}

function initAboutTrust() {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".about-trust");
  const sidebar = document.querySelector(".about-trust__sidebar");
  const headline = document.querySelector(".about-trust__headline");
  const points = [
    document.querySelector(".about-trust__point-1"),
    document.querySelector(".about-trust__point-2"),
    document.querySelector(".about-trust__point-3"),
    document.querySelector(".about-trust__point-4"),
    document.querySelector(".about-trust__point-5"),
  ];
  const images = [
    document.querySelector(".about-trust__image-1"),
    document.querySelector(".about-trust__image-2"),
    document.querySelector(".about-trust__image-3"),
    document.querySelector(".about-trust__image-4"),
  ];
  const closing = document.querySelector(".about-trust__closing");

  if (!section) return;

  gsap.from(sidebar, {
    scaleY: 0,
    transformOrigin: "top",
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(headline, {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: headline,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  points.forEach((point, index) => {
    if (!point) return;

    gsap.from(point, {
      opacity: 0,
      x: index % 2 === 0 ? -40 : 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: point,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  images.forEach((image, index) => {
    if (!image) return;

    gsap.from(image, {
      opacity: 0,
      scale: 1.08,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: image,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(image.querySelector("img"), {
      yPercent: index === 3 ? -20 : -12,
      ease: "none",
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  const closingParagraphs = closing.querySelectorAll("p");
  gsap.from(closingParagraphs, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: closing,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
}

function initAboutPhilosophy() {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".about-philosophy");
  const label = document.querySelector(".about-philosophy__label");
  const headline = document.querySelector(".about-philosophy__headline");
  const content = document.querySelector(".about-philosophy__content");
  const image = document.querySelector(".about-philosophy__image");

  if (!section) return;

  gsap.from(label, {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: label,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  const headlineLines = headline.innerHTML.split("<br>");
  headline.innerHTML = headlineLines
    .map((line) => `<span class="line">${line}</span>`)
    .join("");

  const lines = headline.querySelectorAll(".line");
  gsap.from(lines, {
    opacity: 0,
    y: 80,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: headline,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  const paragraphs = content.querySelectorAll("p");
  gsap.from(paragraphs, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: content,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(image, {
    opacity: 0,
    scale: 1.1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: image,
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.to(image.querySelector("img"), {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: image,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

function init() {
  initAboutHero();
  initAboutStory();
  initAboutDefines();
  initAboutTechnical();
  initAboutProcess();
  initAboutPhilosophy();
}

init();
