import { ITranslations } from "@/i18n/get-dictionary";
import Link from "next/link";
import CircleImage from "@images/circle-big-hero.svg";
import HeroImage from "@images/hero-image-2x.webp";
import Image from "next/image";

export default function Cover({ dictionary }: { dictionary: ITranslations }) {
  const { homeCover } = dictionary;

  return (
    <section className="section section-cover">
      <div className="container">
        <div className="left">
          <div className="content">
            <h1>
              <span className="brand-color">{homeCover.brand}</span>{" "}
              {homeCover.title}
            </h1>
            <div className="subtitle">{homeCover.subtitle}</div>

            <Link href={homeCover.cta.url} className="cta-button cta-button-md">
              {homeCover.cta.title}
            </Link>
          </div>
        </div>

        <div className="right">
          {homeCover.featureLabels.map((l) => {
            return <span key={l.title}>{l.title}</span>;
          })}

          <Image
            priority
            className="cover-image cover-image-back"
            src={CircleImage.src}
            width={708}
            height={708}
            alt=""
          />

          <Image
            priority
            className="cover-image cover-image-right"
            src={HeroImage}
            alt=""
          />
        </div>

        <aside className="cover-aside">
          <p>{homeCover.aside}</p>
        </aside>
      </div>
    </section>
  );
}
