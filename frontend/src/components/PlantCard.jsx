import { motion } from "framer-motion";

export default function PlantCard({ habit }) {

  const stages = ["🌱", "🌿", "🌳", "🌸"];

  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-xl mb-4">{habit.name}</h2>

      <div className="text-6xl">
        {stages[Math.floor(habit.growthStage)]}
      </div>

      <p className="mt-4">🔥 Streak: {habit.streak}</p>
    </motion.div>
  );
}