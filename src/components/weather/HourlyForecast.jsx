import { Droplet } from "lucide-react";

import { useWeatherStore } from "../../store/weatherStore";

export default function HourlyForecast() {
  const forecast = useWeatherStore((state) => state.forecast);

  if (!forecast) return null;

  const hourly = forecast.list?.slice(0, 6) || [];

  return (
    <div className="glass rounded-2xl p-5">
      <h2 className="mb-4 text-sm font-semibold text-white">Hourly Forecast</h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {hourly.map((item) => {
          const time = new Date(item.dt * 1000);
          const icon = item.weather?.[0]?.icon;
          const rainChance = Math.round((item.pop || 0) * 100);

          return (
            <div
              key={item.dt}
              className="flex min-h-[116px] flex-col items-center justify-between rounded-xl bg-white/[0.06] p-3 text-center"
            >
              <p className="text-xs font-medium text-slate-300">
                {time.toLocaleTimeString([], {
                  hour: "numeric",
                  hour12: true,
                })}
              </p>

              {icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt=""
                  className="h-12 w-12"
                />
              )}

              <p className="text-sm font-semibold text-white">
                {Math.round(item.main.temp)}°C
              </p>

              <p className="flex items-center gap-1 text-[11px] text-sky-300">
                <Droplet size={11} />
                {rainChance}%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
