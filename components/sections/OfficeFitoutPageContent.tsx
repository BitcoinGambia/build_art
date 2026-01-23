import ServicePageContent, {
  type ServicePageContentProps,
} from "components/sections/ServicePageContent";
import { exhibitionsContent } from "components/sections/ExhibitionsPageContent";

const officeTypeImages = [
  "/assets/images/image16.jpg",
  "/assets/images/image17.jpeg",
  "/assets/images/image18.jpeg",
  "/assets/images/image19.webp",
];

const officeProcessImages = [
  "/assets/images/image21.png",
  "/assets/images/image22.png",
  "/assets/images/image23.avif",
  "/assets/images/image24.avif",
  "/assets/images/image26.png",
];

const officePortfolioImages = [
  ["/assets/images/image29.png", "/assets/images/image30.png"],
  ["/assets/images/image31.png", "/assets/images/image32.png"],
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
          src: "/assets/images/image13.png",
        },
        contentImage: {
          ...exhibitionsContent.scope.contentImage,
          src: "/assets/images/image15.jpg",
        },
      }
    : undefined,
  types: undefined,
  technical: exhibitionsContent.technical
    ? {
        ...exhibitionsContent.technical,
        image: {
          ...exhibitionsContent.technical.image,
          src: "/assets/images/image20.webp",
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
          src: "/assets/images/image27.png",
        },
      }
    : undefined,
  experience: exhibitionsContent.experience
    ? {
        ...exhibitionsContent.experience,
        image: {
          ...exhibitionsContent.experience.image,
          src: "/assets/images/image28.png",
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
          src: "/assets/images/image33.png",
        },
      }
    : undefined,
  finalCta: exhibitionsContent.finalCta
    ? {
        ...exhibitionsContent.finalCta,
        image: {
          src: "/assets/images/image34.png",
          alt:
            exhibitionsContent.finalCta.image?.alt ?? "BuildArt Global Project",
        },
      }
    : undefined,
};

export default function OfficeFitoutPageContent() {
  return <ServicePageContent {...officeFitoutContent} />;
}
