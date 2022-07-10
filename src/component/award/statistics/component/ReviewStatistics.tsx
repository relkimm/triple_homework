import { IncreasingCount } from "./IncreasingCount";

export function ReviewStatistics() {
  return (
    <div className="ly-stats-item stats-item">
      <strong>
        <IncreasingCount end={100} />만 개
      </strong>
      의 여행 리뷰
    </div>
  );
}
