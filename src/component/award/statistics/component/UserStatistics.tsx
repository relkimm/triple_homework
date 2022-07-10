import { IncreasingCount } from "./IncreasingCount";

export function UserStatistics() {
  return (
    <div className="ly-stats-item stats-item">
      <strong>
        <IncreasingCount end={700} />만 명
      </strong>
      의 여행자
    </div>
  );
}
