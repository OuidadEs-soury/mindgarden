import { useState } from "react";
import Garden from "../components/Garden";
import Timer from "../components/Timer";
import Particles from "../components/Particles";
import Stats from "../components/Stats";

export default function Dashboard() {
  const [raining, setRaining] = useState(false);

  return (
    <div className="min-h-screen relative">
      <Particles raining={raining} />

      <div className="p-6 grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <Garden />
          <Stats />
        </div>

        <div>
          <Timer onFocusChange={setRaining} />
        </div>
      </div>
    </div>
  );
}