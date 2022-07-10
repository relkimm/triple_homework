import { PlayStoreAward } from "./PlayStoreAward";
import { AppStoreAward } from "./AppStoreAward";
import "./tripleStoreAward.css";

export function TripleStoreAward() {
  return (
    <div className="ly-triple-store-award triple-store-award fade-in-seq-3">
      <PlayStoreAward />
      <AppStoreAward />
    </div>
  );
}
