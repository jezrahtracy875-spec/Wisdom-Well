import DailyAgenda from "../components/dashboard/DailyAgenda";
import PriorityGoals from "../components/dashboard/PriorityGoals";
import DreamVisionBoard from "../components/dashboard/DreamVisionBoard";

export default function HomeDashboard() {
  return (
    <div className="dashboard-grid">
      <DailyAgenda />
      <PriorityGoals />
      <DreamVisionBoard />
    </div>
  );
}
