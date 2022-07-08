import { AppStoreAward } from "./app-store/AppStoreAward";
import { TripleAwardLogo } from "./logo/TripleAwardLogo";
import { AppStatistics } from "./statistics/AppStatistics";

export function AwardSection() {
  return (
    <div className="award-section">
      <TripleAwardLogo />
      <AppStatistics />
      <AppStoreAward />
    </div>
  );
}
