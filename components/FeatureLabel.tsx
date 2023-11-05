"use client";

import Checkmark from "@images/checkmark.svg";
import Image from "next/image";
import React from "react";

function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  const observer = React.useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  React.useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default function FeatureLabel({
  text,
  x,
  y,
}: {
  text: string;
  x: number;
  y: number;
}) {
  const ref = React.useRef<any>();

  const isInViewport = useIsInViewport(ref);
  return (
    <div
      ref={ref}
      className={`feature-label  ${isInViewport ? "show" : ""}`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <Image src={Checkmark.src} width={30} height={30} alt="" />
      <span>{text}</span>
    </div>
  );
}
