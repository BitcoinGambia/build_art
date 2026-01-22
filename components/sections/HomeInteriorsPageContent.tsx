import ServicePageContent, {
  type ServicePageContentProps,
} from "components/sections/ServicePageContent";
import { exhibitionsContent } from "components/sections/ExhibitionsPageContent";

const homeTypeImages = [
  "/assets/images/image-40.jpg",
  "/assets/images/image-41.jpg",
  "/assets/images/image-42.jpg",
  "/assets/images/image-48.jpg",
];

const homeProcessImages = [
  "/assets/images/image-1.jpg",
  "/assets/images/image-2.jpg",
  "/assets/images/image-3.jpg",
  "/assets/images/image-4.jpg",
  "/assets/images/image-5.jpg",
];

const homePortfolioImages = [
  ["/assets/images/image-8.jpg", "/assets/images/image-9.jpg"],
  ["/assets/images/image-10.jpg", "/assets/images/image-11.jpg"],
];

const homeInteriorsContent: ServicePageContentProps = {
  ...exhibitionsContent,
  hero: {
    ...exhibitionsContent.hero,
    image: {
      ...exhibitionsContent.hero.image,
      src: "/assets/images/image-35.jpg",
    },
  },
  serviceIntro: exhibitionsContent.serviceIntro
    ? {
        ...exhibitionsContent.serviceIntro,
        image: {
          ...exhibitionsContent.serviceIntro.image,
          src: "/assets/images/image-36.jpg",
        },
      }
    : undefined,
  who: exhibitionsContent.who
    ? {
        ...exhibitionsContent.who,
        image: {
          ...exhibitionsContent.who.image,
          src: "/assets/images/image-37.jpg",
        },
      }
    : undefined,
  scope: exhibitionsContent.scope
    ? {
        ...exhibitionsContent.scope,
        image: {
          ...exhibitionsContent.scope.image,
          src: "/assets/images/image-38.jpg",
        },
        contentImage: {
          ...exhibitionsContent.scope.contentImage,
          src: "/assets/images/image-39.jpg",
        },
      }
    : undefined,
  types: exhibitionsContent.types
    ? {
        ...exhibitionsContent.types,
        cards: exhibitionsContent.types.cards.map((card, index) => ({
          ...card,
          image: {
            ...card.image,
            src: homeTypeImages[index] ?? card.image.src,
          },
        })),
      }
    : undefined,
  technical: exhibitionsContent.technical
    ? {
        ...exhibitionsContent.technical,
        image: {
          ...exhibitionsContent.technical.image,
          src: "/assets/images/image-49.jpg",
        },
      }
    : undefined,
  process: exhibitionsContent.process
    ? {
        ...exhibitionsContent.process,
        steps: exhibitionsContent.process.steps.map((step, index) => ({
          ...step,
          image: {
            ...step.image,
            src: homeProcessImages[index] ?? step.image.src,
          },
        })),
      }
    : undefined,
  why: exhibitionsContent.why
    ? {
        ...exhibitionsContent.why,
        image: {
          ...exhibitionsContent.why.image,
          src: "/assets/images/image-6.jpg",
        },
      }
    : undefined,
  experience: exhibitionsContent.experience
    ? {
        ...exhibitionsContent.experience,
        image: {
          ...exhibitionsContent.experience.image,
          src: "/assets/images/image-7.jpg",
        },
      }
    : undefined,
  portfolio: exhibitionsContent.portfolio
    ? {
        ...exhibitionsContent.portfolio,
        rows: exhibitionsContent.portfolio.rows.map((row, rowIndex) =>
          row.map((item, itemIndex) => ({
            ...item,
            image: {
              ...item.image,
              src:
                homePortfolioImages[rowIndex]?.[itemIndex] ?? item.image.src,
            },
          }))
        ),
      }
    : undefined,
  faq: exhibitionsContent.faq
    ? {
        ...exhibitionsContent.faq,
        image: {
          ...exhibitionsContent.faq.image,
          src: "/assets/images/image-12.jpg",
        },
      }
    : undefined,
  finalCta: exhibitionsContent.finalCta
    ? {
        ...exhibitionsContent.finalCta,
        image: {
          src: "/assets/images/image-13.jpg",
          alt:
            exhibitionsContent.finalCta.image?.alt ?? "BuildArt Global Project",
        },
      }
    : undefined,
};

export default function HomeInteriorsPageContent() {
  return <ServicePageContent {...homeInteriorsContent} />;
}
