import Image from "next/image";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-cta__grid">
          <div className="final-cta__image">
            <Image
              src="/assets/images/image-32.jpg"
              alt="BuildArt Global Project"
              fill
              sizes="100vw"
            />
          </div>

          <div className="final-cta__content">
            <h2 className="final-cta__headline">
              Ready to Transform
              <br />
              Your Space?
            </h2>

            <p className="final-cta__subheadline">
              Tell us your project goals and we'll guide you with clarity and
              confidence.
            </p>

            <div className="final-cta__buttons">
              <Link href="/contact" className="btn btn--primary">
                Start a Project
              </Link>
              <Link href="/contact?quote=true" className="btn btn--secondary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
