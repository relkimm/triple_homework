import { useCountUp } from "../../../../shared/hook/useCountUp";

export function UserCount() {
  const count = useCountUp(700);
  return <span>{count}</span>;
}
