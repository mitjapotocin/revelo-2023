import { getDictionary } from "@i18n/get-dictionary";
import { Locale } from "@/i18n-config";
import Form from "@/components/Form";
import Image from "next/image";
import CircleImage from "@images/circle-big-hero.svg";
import HeroImage from "@images/hero-image-2x.webp";
import HeroImageMobile from "@images/hero-image-2x_2_966x695.webp";

export default async function Contact({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dictionary = getDictionary(locale);

  return (
    <main className="contact-us">
      <section className="section section-cover">
        <div className="container">
          <div className="left">
            <Form dictionary={dictionary} />
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
                srcSet="/images/contact-us-hero.webp"
                width={HeroImage.width}
                height={HeroImage.height}
                media="(min-width: 640px)"
              />
              <img
                className="cover-image cover-image-right"
                src="/images/contact-us-hero.webp"
                width={HeroImageMobile.width}
                height={HeroImageMobile.height}
                alt=""
              />
            </picture>
          </div>
        </div>
      </section>
    </main>
  );
}
