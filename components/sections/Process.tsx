import Image from "next/image";
import Link from "next/link";

export default function Process() {
  return (
    <section className="process">
      <h2 className="process__headline">A Clear, Collaborative Process</h2>

      <div className="process__cards">
        <div className="process__item process__item--1">
          <div className="process__image">
            <Image
              src="/assets/images/image-3.jpg"
              alt="Discovery &amp; Vision"
              fill
              sizes="100vw"
            />
          </div>
          <div className="process__step">
            <div className="process__step-number">01</div>
            <h3 className="process__step-title">Discovery &amp; Vision</h3>
            <p className="process__step-description">
              We start by understanding your goals and context.
            </p>
          </div>
        </div>

        <div className="process__item process__item--2">
          <div className="process__step">
            <div className="process__step-number">02</div>
            <h3 className="process__step-title">Design &amp; Strategy</h3>
            <p className="process__step-description">
              Tailored concepts backed by 3D visualization (where relevant).
            </p>
          </div>
          <div className="process__image">
            <Image
              src="/assets/images/image-10.jpg"
              alt="Design &amp; Strategy"
              fill
              sizes="100vw"
            />
          </div>
        </div>

        <div className="process__item process__item--3">
          <div className="process__image">
            <Image
              src="/assets/images/image-15.jpg"
              alt="Execution &amp; Delivery"
              fill
              sizes="100vw"
            />
          </div>
          <div className="process__step">
            <div className="process__step-number">03</div>
            <h3 className="process__step-title">Execution &amp; Delivery</h3>
            <p className="process__step-description">
              On-time build with precision and quality assurance.
            </p>
          </div>
        </div>

        <div className="process__item process__item--4">
          <div className="process__step">
            <div className="process__step-number">04</div>
            <h3 className="process__step-title">Support &amp; Follow-Through</h3>
            <p className="process__step-description">
              We ensure your space performs exactly as intended.
            </p>
          </div>
          <div className="process__image">
            <Image
              src="/assets/images/image-20.jpg"
              alt="Support &amp; Follow-Through"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      <Link href="/contact" className="process__cta">
        Start Your Project →
      </Link>
    </section>
  );
}
