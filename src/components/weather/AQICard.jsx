import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import { useWeatherStore } from "../../store/weatherStore";

export default function AQICard() {
  const aqi = useWeatherStore((state) => state.aqi);

  if (!aqi) return null;

  const level = aqi.main?.aqi || 1;

  const components = aqi.components || {};

  // Convert 1-5 scale to %
  const percentage = (level / 5) * 100;

  const getLabel = (level) => {
    switch (level) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Unknown";
    }
  };

  const getColor = (level) => {
    switch (level) {
      case 1:
        return "#22c55e";
      case 2:
        return "#84cc16";
      case 3:
        return "#facc15";
      case 4:
        return "#f97316";
      case 5:
        return "#ef4444";
      default:
        return "#64748b";
    }
  };

  return (
    <div
      className="
      glass
      rounded-3xl
      p-6
      flex
      flex-col
      items-center
      justify-center
      "
    >
      <h2
        className="
        text-sm
        text-slate-300
        mb-4
        "
      >
        Air Quality Index
      </h2>

      <div className="w-32 h-32">
        <CircularProgressbar
          value={percentage}
          text={`${level}`}
          styles={buildStyles({
            pathColor: getColor(level),
            textColor: "#fff",
            trailColor: "#1f2937",
            textSize: "28px",
          })}
        />
      </div>

      <p
        className="
        mt-4
        font-semibold
        text-lg
        "
        style={{
          color: getColor(level),
        }}
      >
        {getLabel(level)}
      </p>

      {/* Pollutants */}

      <div
        className="
        mt-4
        w-full
        text-xs
        space-y-2
        text-slate-300
        "
      >
        <div className="flex justify-between">
          <span>PM2.5</span>
          <span>{components.pm2_5}</span>
        </div>

        <div className="flex justify-between">
          <span>PM10</span>
          <span>{components.pm10}</span>
        </div>

        <div className="flex justify-between">
          <span>NO₂</span>
          <span>{components.no2}</span>
        </div>

        <div className="flex justify-between">
          <span>O₃</span>
          <span>{components.o3}</span>
        </div>
      </div>
    </div>
  );
}
