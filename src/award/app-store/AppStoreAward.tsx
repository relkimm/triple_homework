import { AppleAward } from "./AppleAward";
import { GoogleAward } from "./GoogleAward";
import "./appStoreAward.css";

export function AppStoreAward() {
  return (
    <div className="app-store-award">
      <GoogleAward />
      <AppleAward />
    </div>
  );
}
