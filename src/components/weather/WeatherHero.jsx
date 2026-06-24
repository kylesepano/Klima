import {
    useWeatherStore,
} from "../../store/weatherStore";

import {
    getLocalTime,
    formatLocalTime,
} from "../../utils/timezone";

export default function WeatherHero() {

    const weather =
        useWeatherStore(
            (state) => state.weather
        );

    const location =
        useWeatherStore(
            (state) => state.location
        );

    if (!weather || !location)
        return null;

    const icon =
        weather.weather?.[0]?.icon;

    const localTime =
        getLocalTime(weather);

    return (
        <div
            className="
      glass
      rounded-3xl
      p-6

      flex
      justify-between
      items-center
      "
        >

            {/* LEFT SIDE */}

            <div>

                <p
                    className="
          text-4xl
          text-slate-300
          "
                >
                    📍 {location.city},{" "}
                    {location.country}
                </p>

                <p
                    className="
          text-xl
          text-slate-400
          mt-1
          "
                >
                    {localTime &&
                        localTime.toDateString()}
                    {" • "}
                    {formatLocalTime(localTime)}
                </p>

                <h1
                    className="
          text-6xl
          font-bold
          mt-4
          "
                >
                    {Math.round(
                        weather.main?.temp
                    )}
                    °C
                </h1>

                <p
                    className="
          text-xl
          mt-2
          text-slate-200
          "
                >
                    {weather.weather?.[0]?.main}
                </p>

                {/* METRICS */}

                <div
                    className="
          flex
          gap-6
          mt-4
          text-sm
          text-slate-300
          "
                >
                    <span>
                        Feels like{" "}
                        {Math.round(
                            weather.main?.feels_like
                        )}
                        °C
                    </span>

                    <span>
                        Humidity{" "}
                        {weather.main?.humidity}%
                    </span>

                    <span>
                        Wind{" "}
                        Wind {Math.round(weather.wind?.speed * 3.6)} km/h
                    </span>
                </div>

            </div>

            {/* RIGHT SIDE ICON */}

            <div
                className="
        flex
        items-center
        justify-center
        "
            >
                {icon && (
                    <img
                        className="
            w-40
            h-40
            drop-shadow-xl
            "
                        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                        alt=""
                    />
                )}
            </div>

        </div>
    );
}