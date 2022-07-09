import { ScheduleStatistics } from "./ScheduleStatistics";
import { ReviewStatistics } from "./ReviewStatistics";
import { UserStatistics } from "./UserStatistics";
import "./appStatistics.css";

export function AppStatistics() {
  return (
    <div className="app-stats">
      <UserStatistics />
      <ReviewStatistics />
      <ScheduleStatistics />
    </div>
  );
}
