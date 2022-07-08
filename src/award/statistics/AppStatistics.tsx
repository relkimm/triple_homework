import { DownloadStatistics } from "./DownloadStatistics";
import { ReviewStatistics } from "./ReviewStatistics";
import { UserStatistics } from "./UserStatistics";

export function AppStatistics() {
  return (
    <div className="app-stats">
      <UserStatistics />
      <ReviewStatistics />
      <DownloadStatistics />
    </div>
  );
}
