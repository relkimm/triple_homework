import { useEffect } from "react";
import { EasingFunction, linear } from "../util/easing";

type StepFunction = (progress: number) => void;

/**
 * 애니메이션(animation) 처리할 때 사용하는 hook
 *
 * @param duration : 애니메이션 지속 시간
 * @param step : 각 프레임(frame) 별로 실행되는 함수
 * @param easing : ease 처리를 담당하는 함수 (ease-in, ease-out...)
 */
export const useAnimation = (
  duration: number,
  step: StepFunction,
  easing: EasingFunction = linear
) => {
  useEffect(() => {
    const stepping = (currTime: number) => {
      const progress = currTime / duration;
      if (currTime >= duration) {
        step(1);
        return;
      }
      step(easing(progress));
      window.requestAnimationFrame(stepping);
    };

    window.requestAnimationFrame(stepping);
  }, [duration, step, easing]);
};
