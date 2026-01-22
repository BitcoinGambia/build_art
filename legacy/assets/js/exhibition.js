function initExhibitionsHero() {
  const hero = document.querySelector(".exhibitions-hero");
  const image = document.querySelector(".exhibitions-hero__image");
  const content = document.querySelector(".exhibitions-hero__content");
  const headline = document.querySelector(".exhibitions-hero__headline");
  const text = document.querySelector(".exhibitions-hero__text");
  const ctas = document.querySelector(".exhibitions-hero__ctas");
  const trust = document.querySelector(".exhibitions-hero__trust");

  if (!hero) return;

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    delay: 0.3,
  });

  tl.from(image, {
    opacity: 0,
    scale: 1.1,
    duration: 1.2,
  })

    .from(
      content,
      {
        opacity: 0,
        y: 60,
        duration: 1,
      },
      "-=0.6",
    )

    .from(
      headline,
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
      },
      "-=0.4",
    )

    .from(
      text,
      {
        opacity: 0,
        y: 20,
        duration: 0.8,
      },
      "-=0.5",
    )

    .from(
      ctas,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
      },
      "-=0.4",
    )

    .from(
      trust,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
      },
      "-=0.3",
    );
}

function initExhibitionTypes() {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".exhibition__types");
  const headline = document.querySelector(".exhibition__types-headline");
  const stage = document.querySelector(".exhibition__types-stage");
  const wrapper = document.querySelector(".exhibition__types-wrapper");
  const cards = gsap.utils.toArray(".exhibition__type-card");

  if (!section || cards.length === 0) return;

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

  // Skip all animations on mobile
  if (window.innerWidth <= 768) {
    return;
  }

  ScrollTrigger.create({
    trigger: stage,
    start: "top top",
    end: "bottom bottom",
    pin: wrapper,
    pinSpacing: false,
  });

  cards.forEach((card, index) => {
    const progress = index / cards.length;
    const nextProgress = (index + 1) / cards.length;

    if (index < cards.length - 1) {
      const isEven = index % 2 === 0;

      gsap.set(card, {
        clipPath: "inset(0 0 0 0)",
      });

      gsap.to(card, {
        clipPath: isEven ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: `top+=${progress * stage.offsetHeight} top`,
          end: `top+=${nextProgress * stage.offsetHeight} top`,
          scrub: true,
        },
      });
    }
  });
}

function initExhibitionProcess() {
  gsap.registerPlugin(ScrollTrigger);

  const processSection = document.querySelector(".exhibition__process");
  const headline = document.querySelector(".exhibition__process-headline");
  const cards = gsap.utils.toArray(".exhibition__process-item");

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
      processSection.classList.add("exhibition__process--dark");
    },
    onLeaveBack: () => {
      processSection.classList.remove("exhibition__process--dark");
    },
  });

  cards.forEach((card, index) => {
    const image = card.querySelector(".exhibition__process-image");
    const step = card.querySelector(".exhibition__process-step");

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
          processSection.classList.remove("exhibition__process--dark");
        },
        onLeaveBack: () => {
          processSection.classList.add("exhibition__process--dark");
        },
      });
    }
  });
}

function initExhibitionFAQ() {
  const section = document.querySelector(".exhibition__faq");
  if (!section) return;

  const items = Array.from(section.querySelectorAll(".exhibition__faq-item"));

  items.forEach((item) => {
    const answer = item.querySelector(".exhibition__faq-answer");
    const icon = item.querySelector(".exhibition__faq-icon");
    if (!answer) return;
    gsap.set(answer, { height: 0, opacity: 0 });
    if (icon) gsap.set(icon, { rotate: 0 });
    item.open = false;
  });

  items.forEach((item) => {
    const answer = item.querySelector(".exhibition__faq-answer");
    const icon = item.querySelector(".exhibition__faq-icon");
    if (!answer) return;

    item.addEventListener("toggle", () => {
      if (item.open) {
        items.forEach((other) => {
          if (other === item) return;
          const a = other.querySelector(".exhibition__faq-answer");
          const i = other.querySelector(".exhibition__faq-icon");
          if (other.open) other.open = false;
          if (a)
            gsap.to(a, {
              height: 0,
              opacity: 0,
              duration: 0.35,
              ease: "power2.out",
            });
          if (i) gsap.to(i, { rotate: 0, duration: 0.35, ease: "power2.out" });
        });

        gsap.to(answer, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        if (icon)
          gsap.to(icon, { rotate: 45, duration: 0.35, ease: "power2.out" });
      } else {
        gsap.to(answer, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power2.out",
        });
        if (icon)
          gsap.to(icon, { rotate: 0, duration: 0.35, ease: "power2.out" });
      }
    });
  });
}

function init() {
  initExhibitionsHero();
  initExhibitionTypes();
  initExhibitionProcess();
  initExhibitionFAQ();
}

init();
