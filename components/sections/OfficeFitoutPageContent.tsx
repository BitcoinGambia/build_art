import ServicePageContent, {
  type ServicePageContentProps,
} from "components/sections/ServicePageContent";
import { exhibitionsContent } from "components/sections/ExhibitionsPageContent";

const officeTypeImages = [
  "/assets/images/image-16.jpg",
  "/assets/images/image-17.jpg",
  "/assets/images/image-18.jpg",
  "/assets/images/image-19.jpg",
];

const officeProcessImages = [
  "/assets/images/image-21.jpg",
  "/assets/images/image-22.jpg",
  "/assets/images/image-23.jpg",
  "/assets/images/image-24.jpg",
  "/assets/images/image-26.jpg",
];

const officePortfolioImages = [
  ["/assets/images/image-29.jpg", "/assets/images/image-30.jpg"],
  ["/assets/images/image-31.jpg", "/assets/images/image-32.jpg"],
];

const officeFitoutContent: ServicePageContentProps = {
  ...exhibitionsContent,
  hero: {
    ...exhibitionsContent.hero,
    image: {
      ...exhibitionsContent.hero.image,
      src: "/assets/images/office-1.png",
    },
  },
  serviceIntro: exhibitionsContent.serviceIntro
    ? {
        ...exhibitionsContent.serviceIntro,
        image: {
          ...exhibitionsContent.serviceIntro.image,
          src: "/assets/images/office-2.png",
        },
      }
    : undefined,
  who: exhibitionsContent.who
    ? {
        ...exhibitionsContent.who,
        image: {
          ...exhibitionsContent.who.image,
          src: "/assets/images/office-3.png",
        },
      }
    : undefined,
  scope: exhibitionsContent.scope
    ? {
        ...exhibitionsContent.scope,
        image: {
          ...exhibitionsContent.scope.image,
          src: "/assets/images/image-14.jpg",
        },
        contentImage: {
          ...exhibitionsContent.scope.contentImage,
          src: "/assets/images/image-15.jpg",
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
            src: officeTypeImages[index] ?? card.image.src,
          },
        })),
      }
    : undefined,
  technical: exhibitionsContent.technical
    ? {
        ...exhibitionsContent.technical,
        image: {
          ...exhibitionsContent.technical.image,
          src: "/assets/images/image-20.jpg",
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
            src: officeProcessImages[index] ?? step.image.src,
          },
        })),
      }
    : undefined,
  why: exhibitionsContent.why
    ? {
        ...exhibitionsContent.why,
        image: {
          ...exhibitionsContent.why.image,
          src: "/assets/images/image-27.jpg",
        },
      }
    : undefined,
  experience: exhibitionsContent.experience
    ? {
        ...exhibitionsContent.experience,
        image: {
          ...exhibitionsContent.experience.image,
          src: "/assets/images/image-28.jpg",
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
                officePortfolioImages[rowIndex]?.[itemIndex] ?? item.image.src,
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
          src: "/assets/images/image-33.jpg",
        },
      }
    : undefined,
  finalCta: exhibitionsContent.finalCta
    ? {
        ...exhibitionsContent.finalCta,
        image: {
          src: "/assets/images/image-34.jpg",
          alt:
            exhibitionsContent.finalCta.image?.alt ?? "BuildArt Global Project",
        },
      }
    : undefined,
};

export default function OfficeFitoutPageContent() {
  return <ServicePageContent {...officeFitoutContent} />;
}
