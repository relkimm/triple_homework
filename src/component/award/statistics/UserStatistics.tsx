import { UserCount } from "./count/UserCount";

export function UserStatistics() {
  return (
    <div className="ly-stats-item stats-item">
      <strong>
        <UserCount />만 명
      </strong>
      의 여행자
    </div>
  );
}
