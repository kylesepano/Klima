import { Droplets, MapPin, Navigation, Thermometer } from "lucide-react";

import { useWeatherStore } from "../../store/weatherStore";
import { getLocalTime, formatLocalTime } from "../../utils/timezone";

export default function WeatherHero() {
  const weather = useWeatherStore((state) => state.weather);
  const location = useWeatherStore((state) => state.location);

  if (!weather || !location) return null;

  const icon = weather.weather?.[0]?.icon;
  const localTime = getLocalTime(weather);

  return (
    <div className="glass flex min-h-[410px] flex-col justify-between rounded-2xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-slate-100">
            <MapPin size={16} className="text-blue-400" />
            {location.city}, {location.country}
          </p>

          <p className="mt-2 text-sm text-slate-300">
            {localTime &&
              localTime.toLocaleDateString([], {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            {" - "}
            {formatLocalTime(localTime)}
          </p>
        </div>

        {icon && (
          <img
            className="h-36 w-36 shrink-0 drop-shadow-2xl sm:h-44 sm:w-44"
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt=""
          />
        )}
      </div>

      <div>
        <div className="flex items-end gap-2">
          <h1 className="text-6xl font-bold leading-none text-white md:text-7xl">
            {Math.round(weather.main?.temp)}
          </h1>
          <span className="mb-2 text-4xl font-semibold">°C</span>
        </div>

        <p className="mt-3 text-lg font-semibold text-slate-100">
          {weather.weather?.[0]?.main}
        </p>
      </div>

      <div className="space-y-3 text-sm text-slate-300">
        <p className="flex items-center gap-2">
          <Thermometer size={15} className="text-violet-300" />
          Feels like {Math.round(weather.main?.feels_like)}°C
        </p>
        <p className="flex items-center gap-2">
          <Droplets size={15} className="text-sky-300" />
          Humidity {weather.main?.humidity}%
        </p>
        <p className="flex items-center gap-2">
          <Navigation size={15} className="text-blue-300" />
          Wind {Math.round(weather.wind?.speed * 3.6)} km/h
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-4 text-sm">
        <span className="text-slate-300">
          Min{" "}
          <strong className="text-white">
            {Math.round(weather.main?.temp_min)}°C
          </strong>
        </span>
        <span className="text-slate-300">
          Max{" "}
          <strong className="text-white">
            {Math.round(weather.main?.temp_max)}°C
          </strong>
        </span>
      </div>
    </div>
  );
}
