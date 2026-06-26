import { useWeatherStore } from "../../store/weatherStore";

export default function WeeklyForecast() {
  const forecast = useWeatherStore((state) => state.forecast);

  if (!forecast) return null;

  const dailyMap = {};

  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000).toDateString();

    if (!dailyMap[date]) {
      dailyMap[date] = item;
    }
  });

  const days = Object.values(dailyMap).slice(0, 5);

  return (
    <div className="glass rounded-2xl p-5">
      <h2 className="mb-4 text-sm font-semibold text-white">5-Day Forecast</h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {days.map((day, index) => {
          const date = new Date(day.dt * 1000);
          const icon = day.weather?.[0]?.icon;

          return (
            <div
              key={day.dt || index}
              className="rounded-xl bg-white/[0.06] p-3 text-center"
            >
              <p className="text-xs font-semibold text-white">
                {date.toLocaleDateString([], { weekday: "short" })}
              </p>

              {icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  className="mx-auto h-12 w-12"
                  alt=""
                />
              )}

              <p className="text-sm font-semibold text-white">
                {Math.round(day.main.temp_max)}°C
              </p>
              <p className="mt-1 text-sm text-slate-300">
                {Math.round(day.main.temp_min)}°C
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
