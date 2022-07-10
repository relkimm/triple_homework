import React, { useEffect, useState } from "react";
import { isNull, isUndefined } from "../util/type";

/**
 * 특정 html 요소(ref) 가 viewport 에 교차했는지 여부를 알려주는 hook
 *
 * @param ref : 교차 여부를 알고 싶은 html 요소(ref)
 * @param options : IntersectionObserver 에 전달하는 options
 * @returns : 특정 html 요소(ref) viewport 교차 여부
 */
export const useIntersection = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit | undefined = {
    threshold: 0.7,
  }
) => {
  const [isIntersected, setIsIntersected] = useState<boolean>(false);

  useEffect(() => {
    if (isUndefined(ref) || isNull(ref.current)) {
      return;
    }

    const onIntersected = (entries: IntersectionObserverEntry[]) => {
      // 교차하는 entry 가 하나라도 있으면, break 한다.
      const isIntersecting = entries.some((e) => e.isIntersecting);
      if (isIntersecting) {
        setIsIntersected(true);
        observer.disconnect(); // 한번 교차했으면, 더 이상 observe 하지 않는다.
      }
    };

    const observer = new IntersectionObserver(onIntersected, options);
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, setIsIntersected]);

  return isIntersected;
};
