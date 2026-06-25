import { motion } from "framer-motion";

import { useWeatherStore } from "../../store/weatherStore";

export default function AnimatedBackground() {
  const weather = useWeatherStore((state) => state.weather);

  const condition = weather?.weather?.[0]?.main;

  const getBg = () => {
    switch (condition) {
      case "Rain":
        return "from-blue-900 via-blue-700 to-gray-900";

      case "Clouds":
        return "from-gray-800 via-slate-700 to-gray-900";

      case "Clear":
        return "from-blue-500 via-sky-400 to-indigo-600";

      case "Thunderstorm":
        return "from-gray-900 via-purple-900 to-black";

      default:
        return "from-slate-900 via-gray-800 to-black";
    }
  };

  return (
    <motion.div
      className={`
        fixed
        inset-0
        -z-10
        bg-gradient-to-br
        ${getBg()}
      `}
      animate={{
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
    />
  );
}
