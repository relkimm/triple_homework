export type EasingFunction = (n: number) => number;

export const linear = (n: number) => n;

export const outSine = (n: number) => {
  return Math.sin((n * Math.PI) / 2);
};

export const outExpo = (n: number) => {
  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
};
