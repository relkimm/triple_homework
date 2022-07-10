import { useCountUp } from "../../../../shared/hook/useCountUp";

export function ScheduleCount() {
  const count = useCountUp(470);
  return <span>{count}</span>;
}
