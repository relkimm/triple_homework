import { ScheduleStatistics } from "./ScheduleStatistics";
import { ReviewStatistics } from "./ReviewStatistics";
import { UserStatistics } from "./UserStatistics";
import "./tripleStatistics.css";

export function TripleStatistics() {
  return (
    <div className="ly-triple-stats triple-stats fade-in-seq-2">
      <UserStatistics />
      <ReviewStatistics />
      <ScheduleStatistics />
    </div>
  );
}
