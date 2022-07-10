import { useCallback, useState } from "react";
import { useAnimation } from "./useAnimation";
import { outExpo } from "../util/easing";

/**
 * 카운트 증가(count-up) 애니메이션 처리를 하는 함수
 *
 * @param end : 종료 카운트
 * @param start : 시작 카운트
 * @param duration : 애니메이션 지속 시간
 * @returns 증가된 count
 */
export const useCountUp = (
  end: number,
  start: number = 0,
  duration: number = 2000
) => {
  const [count, setCount] = useState<number>(start);
  const step = useCallback(
    (progress: number) => {
      if (progress >= 1) {
        return;
      }

      const currCount = Math.ceil(end * progress);
      if (count !== currCount) {
        setCount(currCount);
      }
    },
    [end, count, setCount]
  );

  useAnimation(duration, step, outExpo);

  return count;
};
