import { ITranslations } from "@/i18n/get-dictionary";
import Link from "next/link";
import CircleImage from "@images/circle-big-hero.svg";
import HeroImage from "@images/hero-image-2x.webp";
import HeroImageMobile from "@images/hero-image-2x_2_966x695.webp";
import Image from "next/image";
import { unstable_getImgProps as getImgProps } from "next/image";
import FeatureLabel from "./FeatureLabel";

export default function Cover({ dictionary }: { dictionary: ITranslations }) {
  const { homeCover } = dictionary;

  const {
    props: { srcSet: desktopSrcSet },
  } = getImgProps({
    src: HeroImage.src,
    alt: "",
    width: HeroImage.width,
    height: HeroImage.height,
  });

  const {
    props: { src: mobileSrc },
  } = getImgProps({
    src: HeroImageMobile.src,
    alt: "",
    width: HeroImageMobile.width,
    height: HeroImageMobile.height,
  });

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
          <Image
            priority
            className="cover-image cover-image-back"
            src={CircleImage.src}
            width={708}
            height={708}
            alt=""
          />

          <picture>
            <source
              srcSet={desktopSrcSet}
              width={HeroImage.width}
              height={HeroImage.height}
              media="(min-width: 640px)"
            />
            <img
              className="cover-image cover-image-right"
              src={mobileSrc}
              width={HeroImageMobile.width}
              height={HeroImageMobile.height}
              alt=""
            />
          </picture>

          {homeCover.featureLabels.map((l) => (
            <FeatureLabel key={l.title} text={l.title} x={l.x} y={l.y} />
          ))}
        </div>

        <aside className="cover-aside">
          <p>{homeCover.aside}</p>
        </aside>
      </div>
    </section>
  );
}
