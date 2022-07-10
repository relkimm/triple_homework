import { ScheduleStatistics } from "./ScheduleStatistics";
import { ReviewStatistics } from "./ReviewStatistics";
import { UserStatistics } from "./UserStatistics";
import "./appStatistics.css";

export function AppStatistics() {
  return (
    <div className="ly-app-stats app-stats fade-in-seq-2">
      <UserStatistics />
      <ReviewStatistics />
      <ScheduleStatistics />
    </div>
  );
}
