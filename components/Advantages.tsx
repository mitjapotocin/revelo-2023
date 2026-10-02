"use client";

import { ITranslations } from "@/i18n/get-dictionary";
import slugify from "slugify";
import BlobImage from "@images/services-blob.svg";
import Image1 from "@images/consulting-squareimg.webp";
import Image2 from "@images/prototyping-squareimg.webp";
import Image3 from "@images/training-squareimg.webp";
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
    }
  }, [index]);

  return (
    <Image
      className="tabbed-list-image"
      src={sideImage.src}
      width={sideImage.width}
      height={sideImage.height}
      alt=""
    />
  );
};

const Advantage = ({
  advantage,
  index,
  setAdvantagesInView,
}: {
  advantage: ITranslations["advantages"]["advantages"][number];
  index: number;
  setAdvantagesInView: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  const { ref, inView } = useInView({ threshold: 0.35 });

  React.useEffect(() => {
    setAdvantagesInView((v) =>
      inView ? [...v, index] : v.filter((i) => i !== index)
    );
  }, [inView, index, setAdvantagesInView]);

  return (
    <div ref={ref} id={slugify(advantage.title)} className="tabbed-list-item">
      <div className="left">
        <h3>{advantage.title}</h3>
        <p>{advantage.content}</p>
      </div>
      <div className="right">
        {index === 0 && (
          <Image
            className="tabbed-list-extra-image"
            src={BlobImage.src}
            width={702}
            height={621}
            alt=""
          />
        )}

        <SideImage index={index} />
        {advantage.featureLabels.map((l) => (
          <FeatureLabel key={l.text} text={l.text} x={l.x} y={l.y} />
        ))}
      </div>
    </div>
  );
};

export default function Advantages({
  dictionary,
}: {
  dictionary: ITranslations;
}) {
  const { advantages } = dictionary;
  const [advantagesInView, setAdvantagesInView] = React.useState<number[]>(
    []
  );
  const lowestAdvantageInView = React.useMemo(() => {
    return [...advantagesInView].sort()[0];
  }, [advantagesInView]);

  return (
    <section className="section section-advantages tabbed-list">
      <div className="container">
        <h2>{advantages.title}</h2>
      </div>

      <div className="tabbed-list-nav sticky">
        <div className="container">
          <div className="tabbed-list-nav-inner-wrapper">
            {advantages.advantages.map((a, index) => (
              <a
                key={a.title}
                className={lowestAdvantageInView === index ? "active" : ""}
                href={`#${slugify(a.title)}`}
              >
                {a.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          {advantages.advantages.map((a, index) => (
            <Advantage
              key={a.title}
              advantage={a}
              index={index}
              setAdvantagesInView={setAdvantagesInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
