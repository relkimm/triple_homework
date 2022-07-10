import { AppleAward } from "./AppleAward";
import { GoogleAward } from "./GoogleAward";
import "./appStoreAward.css";

export function AppStoreAward() {
  return (
    <div className="ly-app-store-award app-store-award fade-in-seq-3">
      <GoogleAward />
      <AppleAward />
    </div>
  );
}
