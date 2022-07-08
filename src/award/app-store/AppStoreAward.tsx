import { AppleAward } from "./AppleAward";
import { GoogleAward } from "./GoogleAward";

export function AppStoreAward() {
  return (
    <div className="app-store-award">
      <GoogleAward />
      <AppleAward />
    </div>
  );
}
