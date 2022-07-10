import { useCountUp } from "../../../../shared/hook/useCountUp";

interface IncreasingCountProps {
  end: number;
  start?: number;
  duration?: number;
}

export function IncreasingCount({
  end,
  start,
  duration,
}: IncreasingCountProps) {
  const count = useCountUp(end, start, duration);
  return <span>{count}</span>;
}
