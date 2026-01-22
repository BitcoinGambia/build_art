import type { Metadata } from "next";
import ExhibitionsAnimations from "components/animations/ExhibitionsAnimations";
import ExhibitionsPageContent from "components/sections/ExhibitionsPageContent";

export const metadata: Metadata = {
  title: "Exhibitions",
};

export default function ExhibitionsPage() {
  return (
    <main>
      <ExhibitionsPageContent />
      <ExhibitionsAnimations />
    </main>
  );
}
