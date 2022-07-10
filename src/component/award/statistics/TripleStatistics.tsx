import { UserStatistics } from "./component/UserStatistics";
import { ReviewStatistics } from "./component/ReviewStatistics";
import { ScheduleStatistics } from "./component/ScheduleStatistics";
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
