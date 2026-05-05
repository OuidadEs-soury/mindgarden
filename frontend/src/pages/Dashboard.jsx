import Garden from "../components/Garden";
import Timer from "../components/Timer";
import Particles from "../components/Particles";

export default function Dashboard() {
  return (
    <div className="text-white min-h-screen relative">
      <Particles />

      <div className="p-6 grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <Garden />
        </div>

        <div>
          <Timer />
        </div>
      </div>
    </div>
  );
}