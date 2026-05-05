import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Stats() {
  const data = {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [{
      label: "Focus Hours",
      data: [1,2,1.5,3,2.5,4,3]
    }]
  };

  return (
    <div className="glass p-4 mt-6">
      <Line data={data} />
    </div>
  );
}