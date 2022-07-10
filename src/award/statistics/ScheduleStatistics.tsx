import { ScheduleCount } from "./count/ScheduleCount";

export function ScheduleStatistics() {
  return (
    <div className="ly-stats-item stats-item">
      <strong>
        <ScheduleCount />만 개
      </strong>
      의 여행 일정
    </div>
  );
}
