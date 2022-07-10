import { useEffect } from "react";
import { EasingFunction, linear } from "../util/easing";

type StepFunction = (progress: number) => void;

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
