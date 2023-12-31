"use client";

import { ITranslations } from "@/i18n/get-dictionary";
import slugify from "slugify";
import BlobImage from "@images/services-blob.svg";
import Image1 from "@images/consulting-squareimg.webp";
import Image2 from "@images/prototyping-squareimg.webp";
import Image3 from "@images/integrated-squareimg.webp";
import Image4 from "@images/training-squareimg.webp";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import FeatureLabel from "./FeatureLabel";

const SideImage = ({ index }: { index: number }) => {
  const sideImage = React.useMemo(() => {
    switch (index) {
      default:
      case 0:
        return Image1;
      case 1:
        return Image2;
      case 2:
        return Image3;
      case 3:
        return Image4;
    }
  }, [index]);

  return (
    <Image
      className="services-image"
      src={sideImage.src}
      width={sideImage.width}
      height={sideImage.height}
      alt=""
    />
  );
};

const Service = ({
  service,
  index,
  setServicesInView,
}: {
  service: any;
  index: number;
  setServicesInView: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  const { ref, inView } = useInView({ threshold: 0.35 });

  React.useEffect(() => {
    setServicesInView((v) =>
      inView ? [...v, index] : v.filter((i) => i !== index)
    );
  }, [inView, index, setServicesInView]);

  return (
    <div
      key={service.title}
      ref={ref}
      id={slugify(service.title)}
      className="service"
    >
      <div className="left">
        <h3>{service.title}</h3>
        <p>{service.content}</p>
      </div>
      <div className="right">
        {index === 0 && (
          <Image
            className="services-extra-image"
            src={BlobImage.src}
            width={702}
            height={621}
            alt=""
          />
        )}

        <SideImage index={index} />
        {service.featureLabels.map((l: any) => (
          <FeatureLabel key={l.text} text={l.text} x={l.x} y={l.y} />
        ))}
      </div>
    </div>
  );
};

export default function Services({
  dictionary,
}: {
  dictionary: ITranslations;
}) {
  const { services } = dictionary;
  const [servicesInView, setServicesInView] = React.useState<number[]>([]);
  const lowestServiceInView = React.useMemo(() => {
    return servicesInView.sort()[0];
  }, [servicesInView]);

  return (
    <section className="section section-services">
      <div className="container">
        <h2>{services.title}</h2>
      </div>

      <div className="services-nav sticky" data-services-nav>
        <div className="container">
          <div className="services-nav-inner-wrapper">
            {services.services.map((s, index) => (
              <a
                key={s.title}
                className={lowestServiceInView === index ? "active" : ""}
                href={`#${slugify(s.title)}`}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          {services.services.map((s, index) => (
            <Service
              key={s.title}
              service={s}
              index={index}
              setServicesInView={setServicesInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
