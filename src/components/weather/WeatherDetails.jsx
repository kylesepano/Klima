import { useWeatherStore } from "../../store/weatherStore";

import MetricCard from "./MetricCard";

export default function WeatherDetails() {
  const weather = useWeatherStore((state) => state.weather);

  if (!weather) return null;

  return (
    <div
      className="
      grid
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-6
      gap-4
      mt-6
      "
    >
      <MetricCard title="Humidity" value={`${weather.main.humidity}%`} />

      <MetricCard title="Wind" value={`${weather.wind.speed} m/s`} />

      <MetricCard title="Pressure" value={`${weather.main.pressure} hPa`} />

      <MetricCard
        title="Visibility"
        value={`${(weather.visibility / 1000).toFixed(1)} km`}
      />

      <MetricCard
        title="Feels Like"
        value={`${Math.round(weather.main.feels_like)}°`}
      />

      <MetricCard title="Clouds" value={`${weather.clouds.all}%`} />
    </div>
  );
}
