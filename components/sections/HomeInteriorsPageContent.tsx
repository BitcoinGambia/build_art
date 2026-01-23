import ServicePageContent, {
  type ServicePageContentProps,
} from "components/sections/ServicePageContent";
import { exhibitionsContent } from "components/sections/ExhibitionsPageContent";

const homeTypeImages = [
  "/assets/images/image33.png",
  "/assets/images/image34.png",
  "/assets/images/image35.png",
  "/assets/images/image34.png",
];

const homeProcessImages = [
  "/assets/images/image1.png",
  "/assets/images/image2.png",
  "/assets/images/image3.png",
  "/assets/images/image4.png",
  "/assets/images/image5.png",
];

const homePortfolioImages = [
  ["/assets/images/image8.png", "/assets/images/image9.png"],
  ["/assets/images/image10.png", "/assets/images/image11.png"],
];

const homeInteriorsContent: ServicePageContentProps = {
  ...exhibitionsContent,
  hero: {
    ...exhibitionsContent.hero,
    image: {
      ...exhibitionsContent.hero.image,
      src: "/assets/images/image35.png",
    },
  },
  serviceIntro: exhibitionsContent.serviceIntro
    ? {
        ...exhibitionsContent.serviceIntro,
        image: {
          ...exhibitionsContent.serviceIntro.image,
          src: "/assets/images/image36.avif",
        },
      }
    : undefined,
  who: exhibitionsContent.who
    ? {
        ...exhibitionsContent.who,
        image: {
          ...exhibitionsContent.who.image,
          src: "/assets/images/image30.png",
        },
      }
    : undefined,
  scope: exhibitionsContent.scope
    ? {
        ...exhibitionsContent.scope,
        image: {
          ...exhibitionsContent.scope.image,
          src: "/assets/images/image31.png",
        },
        contentImage: {
          ...exhibitionsContent.scope.contentImage,
          src: "/assets/images/image32.png",
        },
      }
    : undefined,
  types: undefined,
  technical: exhibitionsContent.technical
    ? {
        ...exhibitionsContent.technical,
        image: {
          ...exhibitionsContent.technical.image,
          src: "/assets/images/image35.png",
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
          src: "/assets/images/image6.png",
        },
      }
    : undefined,
  experience: exhibitionsContent.experience
    ? {
        ...exhibitionsContent.experience,
        image: {
          ...exhibitionsContent.experience.image,
          src: "/assets/images/image7.png",
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
          src: "/assets/images/image12.png",
        },
      }
    : undefined,
  finalCta: exhibitionsContent.finalCta
    ? {
        ...exhibitionsContent.finalCta,
        image: {
          src: "/assets/images/image13.png",
          alt:
            exhibitionsContent.finalCta.image?.alt ?? "BuildArt Global Project",
        },
      }
    : undefined,
};

export default function HomeInteriorsPageContent() {
  return <ServicePageContent {...homeInteriorsContent} />;
}
