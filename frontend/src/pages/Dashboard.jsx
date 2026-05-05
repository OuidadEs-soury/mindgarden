import Garden from "../components/Garden";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Garden />
    </div>
  );
}