import { useCountUp } from "../../../shared/hook/useCountUp";

export function ReviewCount() {
  const count = useCountUp(100);
  return <span>{count}</span>;
}
