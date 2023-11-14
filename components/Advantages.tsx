import Image from "next/image";
import { ITranslations } from "@/i18n/get-dictionary";
import coverImage from "@images/advantages-cover.webp";
import Image1 from "@images/advantages1.svg";
import Image2 from "@images/advantages2.svg";
import Image3 from "@images/advantages3.svg";

import React from "react";

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
      className="services-image"
      src={sideImage.src}
      width={sideImage.width}
      height={sideImage.height}
      alt=""
    />
  );
};

export default function Advantages({
  dictionary,
}: {
  dictionary: ITranslations;
}) {
  const { advantages } = dictionary;

  return (
    <div className="section section-advantages">
      <div className="container">
        <h2>{advantages.title}</h2>

        <div className="subtitle">{advantages.subtitle}</div>

        <div className="advantages-wrapper">
          <div className="advantages">
            {advantages.advantages.map((a, index) => (
              <div key={a.title} className="advantage">
                <SideImage index={index} />

                <div>
                  <div className="advantage-title">{a.title}</div>
                  <div className="advantage-content">{a.content}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="advantages-cover-img">
            <Image className="services-image" {...coverImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
