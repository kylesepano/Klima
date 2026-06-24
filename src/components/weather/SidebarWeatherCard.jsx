import {
    useWeatherStore,
} from "../../store/weatherStore";

export default function SidebarWeatherCard() {

    const weather =
        useWeatherStore(
            (state) => state.weather
        );

    if (!weather) return null;

    const icon =
        weather.weather?.[0]?.icon;

    return (
        <div
            className="
      mt-6
      glass
      rounded-2xl
      p-4
      "
        >
            <div className="flex justify-center">
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt=""
                />
            </div>

            <h3
                className="
        text-center
        font-semibold
        "
            >
                {Math.round(
                    weather.main.temp
                )}
                °C
            </h3>

            <p
                className="
        text-center
        text-sm
        text-slate-300
        "
            >
                {weather.weather[0].main}
            </p>

            <p
                className="
        text-center
        text-xs
        text-slate-400
        mt-2
        "
            >
                Stay prepared before
                you go.
            </p>
        </div>
    );
}