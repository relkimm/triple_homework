import { ReviewCount } from "./count/ReviewCount";

export function ReviewStatistics() {
  return (
    <div className="ly-stats-item stats-item">
      <strong>
        <ReviewCount />만 개
      </strong>
      의 여행 리뷰
    </div>
  );
}
