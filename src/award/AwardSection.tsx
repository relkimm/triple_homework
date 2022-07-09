import { TripleAwardLogo } from "./logo/TripleAwardLogo";
import { AppStatistics } from "./statistics/AppStatistics";
import { AppStoreAward } from "./app-store/AppStoreAward";
import "./awardSection.css";

export function AwardSection() {
  return (
    <div className="award-section">
      <div className="award-content">
        <TripleAwardLogo />
        <AppStatistics />
        <AppStoreAward />
      </div>
    </div>
  );
}
