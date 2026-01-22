import Image from "next/image";
import Link from "next/link";

type ProcessStep = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  number?: string;
};

type ProcessCta = {
  href: string;
  label: string;
};

type ProcessProps = {
  headline?: string;
  steps?: ProcessStep[];
  cta?: ProcessCta;
  baseClassName?: string;
  dark?: boolean;
};

const defaultSteps: ProcessStep[] = [
  {
    title: "Discovery & Vision",
    description: "We start by understanding your goals and context.",
    image: {
      src: "/assets/images/image-3.jpg",
      alt: "Discovery & Vision",
    },
  },
  {
    title: "Design & Strategy",
    description: "Tailored concepts backed by 3D visualization (where relevant).",
    image: {
      src: "/assets/images/image-10.jpg",
      alt: "Design & Strategy",
    },
  },
  {
    title: "Execution & Delivery",
    description: "On-time build with precision and quality assurance.",
    image: {
      src: "/assets/images/image-15.jpg",
      alt: "Execution & Delivery",
    },
  },
  {
    title: "Support & Follow-Through",
    description: "We ensure your space performs exactly as intended.",
    image: {
      src: "/assets/images/image-20.jpg",
      alt: "Support & Follow-Through",
    },
  },
];

const defaultCta: ProcessCta = {
  href: "/contact",
  label: "Start Your Project →",
};

export default function Process({
  headline = "A Clear, Collaborative Process",
  steps = defaultSteps,
  cta = defaultCta,
  baseClassName = "process",
  dark = false,
}: ProcessProps) {
  const sectionClassName = dark
    ? `${baseClassName} ${baseClassName}--dark`
    : baseClassName;

  return (
    <section className={sectionClassName}>
      <h2 className={`${baseClassName}__headline`}>{headline}</h2>

      <div className={`${baseClassName}__cards`}>
        {steps.map((step, index) => {
          const stepNumber =
            step.number ?? String(index + 1).padStart(2, "0");
          const image = (
            <div className={`${baseClassName}__image`}>
              <Image
                src={step.image.src}
                alt={step.image.alt}
                fill
                sizes="100vw"
              />
            </div>
          );
          const stepContent = (
            <div className={`${baseClassName}__step`}>
              <div className={`${baseClassName}__step-number`}>
                {stepNumber}
              </div>
              <h3 className={`${baseClassName}__step-title`}>{step.title}</h3>
              <p className={`${baseClassName}__step-description`}>
                {step.description}
              </p>
            </div>
          );

          return (
            <div
              key={`${baseClassName}-${index}`}
              className={`${baseClassName}__item ${baseClassName}__item--${
                index + 1
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  {image}
                  {stepContent}
                </>
              ) : (
                <>
                  {stepContent}
                  {image}
                </>
              )}
            </div>
          );
        })}
      </div>

      {cta ? (
        <Link href={cta.href} className={`${baseClassName}__cta`}>
          {cta.label}
        </Link>
      ) : null}
    </section>
  );
}
