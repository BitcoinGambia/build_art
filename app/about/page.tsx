import type { Metadata } from "next";
import AboutAnimations from "components/animations/AboutAnimations";
import AboutDefines from "components/sections/AboutDefines";
import AboutHero from "components/sections/AboutHero";
import AboutStory from "components/sections/AboutStory";
import AboutTechnical from "components/sections/AboutTechnical";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutDefines />
      <AboutTechnical />
      <AboutAnimations />
    </main>
  );
}
