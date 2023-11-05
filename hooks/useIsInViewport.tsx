import React from "react";

export default function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  const [observer, setObserver] = React.useState<IntersectionObserver | null>(
    null
  );

  React.useEffect(() => {
    setObserver(
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      )
    );
  }, []);

  React.useEffect(() => {
    observer?.observe(ref.current);

    return () => {
      observer?.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
