function initHeroSlider() {
  const slides = document.querySelectorAll(".hero__bg-slide");
  if (slides.length === 0) return;

  let currentSlide = 0;
  const slideInterval = 3000;

  slides[0].classList.add("active");

  function showSlide(index) {
    const prevIndex = currentSlide;

    slides[prevIndex].classList.add("exiting");
    slides[prevIndex].classList.remove("active");

    setTimeout(() => {
      slides[index].classList.add("active");
      slides[index].classList.remove("exiting");
    }, 50);

    setTimeout(() => {
      slides[prevIndex].classList.remove("exiting");
    }, 3000);
  }

  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
    currentSlide = nextIndex;
  }

  setInterval(nextSlide, slideInterval);
}

function initHeroAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const heroServiceLeft = document.querySelector(".hero__service-left");
  const heroServiceCenter = document.querySelector(".hero__service-center");
  const heroServiceRight = document.querySelector(".hero__service-right");
  const heroTitle = document.querySelector(".hero__title");
  const heroCtas = document.querySelector(".hero__ctas");

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    delay: 0.5,
  });

  tl.from(heroServiceLeft, {
    opacity: 0,
    x: -40,
    duration: 1,
  })
    .from(
      heroServiceCenter,
      {
        opacity: 0,
        y: 0,
        duration: 1,
      },
      "-=0.8",
    )
    .from(
      heroServiceRight,
      {
        opacity: 0,
        x: 40,
        duration: 1,
      },
      "-=0.8",
    )
    .from(
      heroTitle,
      {
        opacity: 0,
        y: 60,
        duration: 1.4,
      },
      "-=0.5",
    )
    .from(
      heroCtas,
      {
        opacity: 0,
        y: 0,
        duration: 0.8,
      },
      "-=0.6",
    );

  gsap.to(heroTitle, {
    yPercent: -50,
    scale: 0.95,
    ease: "none",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to([heroServiceLeft, heroServiceCenter, heroServiceRight], {
    yPercent: -80,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(heroCtas, {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

function initIntroAnimation() {
  const introSection = document.querySelector(".intro");
  const introText = document.querySelector(".intro__text");
  const speedLines = document.querySelectorAll(".intro .speed-line");

  if (!introText) return;

  Splitting({ target: introText, by: "words" });

  const words = introText.querySelectorAll(".word");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: introSection,
      start: "top top",
      end: `+=${words.length * 100}`,
      scrub: 1,
      pin: true,
    },
  });

  speedLines.forEach((line, index) => {
    tl.fromTo(
      line,
      {
        y: window.innerHeight,
        opacity: 0,
      },
      {
        y: -window.innerHeight,
        opacity: 1,
        duration: 0.5,
        ease: "none",
      },
      index * 0.2,
    );
  });

  words.forEach((word, index) => {
    tl.to(
      word,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      index * 0.1,
    );
  });
}

function initTrustAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const trustSection = document.querySelector(".trust");
  const images = document.querySelectorAll(".trust__image");
  const content = document.querySelector(".trust__content");

  if (!trustSection) return;

  gsap.from(images, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: trustSection,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(content, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: trustSection,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
}

function initServicesAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".services");
  const title = document.querySelector(".services__title");
  const cardsContainer = document.querySelector(".services__cards-container");
  const wrapper = document.querySelector(".services__wrapper");
  const cards = gsap.utils.toArray(".service-card");

  if (!section || !cardsContainer || !wrapper || cards.length === 0) return;

  if (title) {
    gsap.from(title, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  ScrollTrigger.create({
    trigger: cardsContainer,
    start: "top top",
    end: "bottom bottom",
    pin: wrapper,
    pinSpacing: false,
  });

  cards.forEach((card, index) => {
    if (index > 0) {
      gsap.set(card, { xPercent: 100 });
    }
  });

  cards.forEach((card, index) => {
    if (index === 0) return;

    const progress = (index - 1) / cards.length;
    const nextProgress = index / cards.length;

    gsap.fromTo(
      card,
      { xPercent: 100 },
      {
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: cardsContainer,
          start: `top+=${progress * cardsContainer.offsetHeight} top`,
          end: `top+=${nextProgress * cardsContainer.offsetHeight} top`,
          scrub: true,
        },
      },
    );
  });
}

function initPersuasionAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const persuasionSection = document.querySelector(".persuasion");
  const header = document.querySelector(".persuasion__header");
  const images = document.querySelectorAll(".persuasion__image");
  const bullets = document.querySelector(".persuasion__bullets");
  const cta = document.querySelector(".persuasion__cta");

  if (!persuasionSection) return;

  if (header) {
    gsap.from(header, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: persuasionSection,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  gsap.from(images, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.1,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: persuasionSection,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  if (bullets) {
    gsap.from(bullets, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: persuasionSection,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  if (cta) {
    gsap.from(cta, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: persuasionSection,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }
}

function initProcessAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const processSection = document.querySelector(".process");
  const headline = document.querySelector(".process__headline");
  const cards = gsap.utils.toArray(".process__item");
  const cta = document.querySelector(".process__cta");

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
      processSection.classList.add("process--dark");
    },
    onLeaveBack: () => {
      processSection.classList.remove("process--dark");
    },
  });

  cards.forEach((card, index) => {
    const image = card.querySelector(".process__image");
    const step = card.querySelector(".process__step");

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
          processSection.classList.remove("process--dark");
        },
        onLeaveBack: () => {
          processSection.classList.add("process--dark");
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

function initSocialProofAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const socialProofSection = document.querySelector(".social-proof");
  const headline = document.querySelector(".social-proof__headline");
  const images = document.querySelectorAll(".social-proof__image");
  const cta = document.querySelector(".social-proof__cta");

  if (!socialProofSection) return;

  if (headline) {
    gsap.from(headline, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: socialProofSection,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  gsap.from(images, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.1,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: socialProofSection,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  if (cta) {
    gsap.from(cta, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: socialProofSection,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }
}

function initSeoValueAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const seoValueSection = document.querySelector(".seo-value");
  const headline = document.querySelector(".seo-value__headline");
  const content = document.querySelector(".seo-value__text");
  const locations = document.querySelectorAll(".seo-value__location-item");
  const backgroundMap = document.querySelector(".seo-value__map");

  if (!seoValueSection) return;

  if (headline) {
    Splitting({ target: headline, by: "words" });
  }

  const words = headline ? headline.querySelectorAll(".word") : [];
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: seoValueSection,
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  if (backgroundMap) {
    tl.from(
      backgroundMap,
      {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "power2.out",
      },
      0,
    );
  }

  words.forEach((word, index) => {
    tl.to(
      word,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      index * 0.08,
    );
  });

  locations.forEach((location, index) => {
    tl.from(
      location,
      {
        opacity: 0,
        x: -30,
        duration: 0.7,
      },
      index * 0.15 + 0.3,
    );
  });

  if (content) {
    tl.from(
      content,
      {
        opacity: 0,
        y: 40,
        duration: 1,
      },
      "-=0.5",
    );
  }

  if (backgroundMap) {
    gsap.to(backgroundMap, {
      y: -80,
      ease: "none",
      scrollTrigger: {
        trigger: seoValueSection,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }

  if (headline) {
    gsap.to(headline, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: seoValueSection,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }
}

function initFinalCtaAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const finalCtaSection = document.querySelector(".final-cta");
  const image = document.querySelector(".final-cta__image");
  const headline = document.querySelector(".final-cta__headline");
  const subheadline = document.querySelector(".final-cta__subheadline");
  const buttons = document.querySelector(".final-cta__buttons");

  if (!finalCtaSection) return;

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: finalCtaSection,
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  if (image) {
    tl.to(image, {
      "--pseudo-y": "-100%",
      duration: 1.2,
      ease: "power3.inOut",
    });
  }

  if (headline) {
    tl.from(
      headline,
      {
        opacity: 0,
        y: 60,
        duration: 0.8,
      },
      "-=0.6",
    );
  }

  if (subheadline) {
    tl.from(
      subheadline,
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
      },
      "-=0.4",
    );
  }

  if (buttons) {
    tl.from(
      buttons,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
      },
      "-=0.3",
    );
  }

  if (image) {
    const img = image.querySelector("img");
    if (img) {
      gsap.to(img, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: finalCtaSection,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }

  if (headline) {
    gsap.to(headline, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: finalCtaSection,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }
}

function initFooterAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const footer = document.querySelector(".footer");
  const logo = document.querySelector(".footer__logo");
  const nav = document.querySelector(".footer__nav");
  const contact = document.querySelector(".footer__contact");
  const legal = document.querySelector(".footer__legal");

  if (!footer) return;

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: footer,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  if (logo) {
    tl.from(logo, {
      opacity: 0,
      y: 30,
      duration: 0.8,
    });
  }

  if (nav) {
    tl.from(
      nav.querySelectorAll("a"),
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.05,
      },
      "-=0.4",
    );
  }

  if (contact) {
    tl.from(
      contact,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
      },
      "-=0.5",
    );
  }

  if (legal) {
    tl.from(
      legal,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
      },
      "-=0.3",
    );
  }
}

function init() {
  initLenis();
  initMobileMenu();
  initHeaderScroll();
  initHeroSlider();
  initHeroAnimations();
  initIntroAnimation();
  initTrustAnimation();
  initServicesAnimation();
  initPersuasionAnimation();
  initProcessAnimation();
  initSocialProofAnimation();
  initSeoValueAnimation();
  initFinalCtaAnimation();
  initFooterAnimation();
}

init();
