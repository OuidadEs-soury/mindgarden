import { motion } from "framer-motion";

export default function PlantCard({ habit }) {
  const scale = 0.5 + habit.growthStage * 0.3;

  return (
    <motion.div className="glass p-6 text-center"
      whileHover={{ scale: 1.05 }}>

      <h2>{habit.name}</h2>

      <motion.svg width="100" height="150"
        viewBox="0 0 100 150"
        animate={{ scale }}>

        <rect x="45" y="80" width="10" height="50" fill="brown" />
        <circle cx="50" cy="60" r="30" fill="green" />
      </motion.svg>

      <p>🔥 {habit.streak}</p>
    </motion.div>
  );
}