import { motion } from "framer-motion";

export default function MetricCard({ title, value }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="
      glass
    rounded-2xl
      p-5
      "
    >
      <p className="text-gray-400">{title}</p>

      <h3
        className="
        text-3xl
        mt-2
        "
      >
        {value}
      </h3>
    </motion.div>
  );
}
