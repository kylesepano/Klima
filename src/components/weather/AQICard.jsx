import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import { useWeatherStore } from "../../store/weatherStore";

export default function AQICard() {
  const aqi = useWeatherStore((state) => state.aqi);

  if (!aqi) return null;

  const level = aqi.main?.aqi || 1;
  const components = aqi.components || {};
  const score = Math.min(100, Math.max(0, Math.round(level * 20)));

  const labels = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very Poor",
  };

  const colors = {
    1: "#4ade80",
    2: "#a3e635",
    3: "#facc15",
    4: "#fb923c",
    5: "#f87171",
  };

  const pollutants = [
    ["PM2.5", components.pm2_5],
    ["PM10", components.pm10],
    ["CO", components.co],
    ["NO2", components.no2],
    ["O3", components.o3],
  ];

  return (
    <div className="glass rounded-2xl p-5">
      <h2 className="mb-4 text-sm font-semibold text-white">Air Quality Index</h2>

      <div className="mx-auto h-36 w-36">
        <CircularProgressbar
          value={score}
          text={`${score}`}
          styles={buildStyles({
            pathColor: colors[level],
            textColor: "#fff",
            trailColor: "rgba(148, 163, 184, 0.25)",
            textSize: "24px",
            strokeLinecap: "round",
          })}
        />
      </div>

      <p className="mt-2 text-center text-sm font-semibold text-white">
        {labels[level]}
      </p>
      <p className="mt-1 text-center text-xs text-slate-300">
        Air quality is satisfactory.
      </p>

      <div className="mt-4 space-y-2 text-xs text-slate-300">
        {pollutants.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-3">
            <span>{label}</span>
            <span className="text-slate-100">
              {Number(value || 0).toFixed(value > 100 ? 0 : 1)} ug/m3
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
