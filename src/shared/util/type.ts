/**
 * undefined 타입인지 체크하는 함수
 */
export const isUndefined = (x: unknown): x is undefined => {
  return x === undefined;
};

/**
 * 지정된(defined) 타입인지 체크하는 함수
 */
export const isDefined = <T>(x: T): x is T => {
  return !isUndefined(x);
};

/**
 * null 인지 체크하는 함수
 */
export const isNull = (x: unknown): x is null => {
  return x === null;
};
