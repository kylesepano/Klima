import { useWeatherStore } from "../../store/weatherStore";

export default function HourlyForecast() {
  const forecast = useWeatherStore((state) => state.forecast);

  if (!forecast) return null;

  // Take first 8 items (~24 hours)
  const hourly = forecast.list?.slice(0, 8);

  return (
    <div
      className="
      glass
      rounded-3xl
      p-6
      "
    >
      <h2
        className="
        font-semibold
        mb-4
        "
      >
        Hourly Forecast
      </h2>

      <div
        className="
  grid
  grid-cols-2
  sm:grid-cols-4
  gap-4
  "
      >
        {hourly.map((item, index) => {
          const time = new Date(item.dt * 1000);

          const icon = item.weather?.[0]?.icon;

          return (
            <div
              key={item.dt}
              className=" glass rounded-2xl p-4 text-center flex
    flex-col
    items-center
    justify-center

    hover:scale-105
    transition

    min-h-[140px]
  "
            >
              <p
                className="
      text-sm
      text-slate-300
      font-medium
    "
              >
                {time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>

              {icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt=""
                  className="w-14 h-14"
                />
              )}

              <p className=" text-xl font-bold">
                {Math.round(item.main.temp)}°
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
