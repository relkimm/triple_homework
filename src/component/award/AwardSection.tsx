import { useRef } from "react";
import { useIntersection } from "../../shared/hook/useIntersection";
import { TripleAwardLogo } from "./logo/TripleAwardLogo";
import { TripleStatistics } from "./statistics/TripleStatistics";
import { TripleStoreAward } from "./store/TripleStoreAward";
import "./awardSection.css";

export function AwardSection() {
  const awardSectionRef = useRef<HTMLDivElement>(null);
  const isIntersected = useIntersection(awardSectionRef);

  return (
    <div ref={awardSectionRef} className="award-section">
      {isIntersected && (
        <div className="ly-award-content award-content">
          <TripleAwardLogo />
          <TripleStatistics />
          <TripleStoreAward />
        </div>
      )}
    </div>
  );
}
