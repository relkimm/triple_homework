import { IncreasingCount } from "./IncreasingCount";

export function ScheduleStatistics() {
  return (
    <div className="ly-stats-item stats-item">
      <strong>
        <IncreasingCount end={470} />만 개
      </strong>
      의 여행 일정
    </div>
  );
}
