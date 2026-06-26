import { useWeatherStore } from "../../store/weatherStore";

export default function ExtraInfoCard() {
  const weather = useWeatherStore((state) => state.weather);

  if (!weather) return null;

  const visibility = `${(weather.visibility / 1000).toFixed(0)} km`;
  const pressure = `${weather.main.pressure} hPa`;
  const clouds = `${weather.clouds?.all ?? 0}%`;

  const rows = [
    ["UV Index", "3 Moderate"],
    ["Visibility", visibility],
    ["Pressure", pressure],
    ["Clouds", clouds],
  ];

  return (
    <div className="glass rounded-2xl p-5">
      <h3 className="mb-4 text-sm font-semibold text-white">Additional Info</h3>

      <div className="space-y-3 text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4">
            <span className="text-slate-300">{label}</span>
            <span className="font-medium text-white">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
