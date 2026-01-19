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
  const section = document.querySelector(".about-story");
  const headline = document.querySelector(".about-story__headline");
  const text = document.querySelector(".about-story__text");
  const image = document.querySelector(".about-story__image");

  if (!section) return;

  let hasEntered = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasEntered) {
          hasEntered = true;

          gsap.from(headline, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
          });

          gsap.from(text, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
          });

          gsap.from(image, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: 0.4,
            ease: "power3.out",
          });
        }
      });
    },
    { threshold: 0.2 },
  );

  observer.observe(section);
}

function initAboutDefines() {
  const section = document.querySelector(".about-defines");
  const headline = document.querySelector(".about-defines__headline");
  const image = document.querySelector(".about-defines__image");
  const content = document.querySelector(".about-defines__content");

  if (!section) return;

  let hasEntered = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasEntered) {
          hasEntered = true;

          gsap.from(headline, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
          });

          gsap.from(image, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: 0.3,
            ease: "power3.out",
          });

          gsap.from(content, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.6,
            ease: "power3.out",
          });
        }
      });
    },
    { threshold: 0.2 },
  );

  observer.observe(section);
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

function init() {
  initAboutHero();
  initAboutStory();
  initAboutDefines();
  initAboutTechnical();
}

init();
