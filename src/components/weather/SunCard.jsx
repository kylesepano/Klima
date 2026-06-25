import { useWeatherStore } from "../../store/weatherStore";

export default function SunCard() {
  const weather = useWeatherStore((state) => state.weather);

  if (!weather) return null;

  const sunrise = new Date(weather.sys.sunrise * 1000);

  const sunset = new Date(weather.sys.sunset * 1000);

  return (
    <div
      className="
      glass
      rounded-3xl
      p-5
      "
    >
      <h3
        className="
        font-semibold
        mb-4
        "
      >
        Sunrise & Sunset
      </h3>

      <div
        className="
        flex
        justify-between
        "
      >
        <div>
          <p className="text-yellow-400">☀ Sunrise</p>

          <p className="mt-2">
            {sunrise.toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
        </div>

        <div>
          <p className="text-orange-400">🌙 Sunset</p>

          <p className="mt-2">
            {sunset.toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
