import {
    useWeatherStore,
} from "../../store/weatherStore";

export default function WeeklyForecast() {

    const forecast =
        useWeatherStore(
            (state) => state.forecast
        );

    if (!forecast) return null;

    // Group by day
    const dailyMap = {};

    forecast.list.forEach(
        (item) => {

            const date =
                new Date(
                    item.dt * 1000
                ).toDateString();

            if (!dailyMap[date]) {
                dailyMap[date] = item;
            }
        }
    );

    const days =
        Object.values(dailyMap).slice(
            0,
            5
        );

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
                5-Day Forecast
            </h2>

            <div className="space-y-3">

                {days.map(
                    (day, index) => {

                        const date =
                            new Date(
                                day.dt * 1000
                            );

                        const icon =
                            day.weather?.[0]?.icon;

                        return (
                            <div
                                key={index}
                                className="
                flex
                items-center
                justify-between

                glass
                p-3
                rounded-xl
                "
                            >

                                <span>
                                    {date.toLocaleDateString(
                                        [],
                                        {
                                            weekday:
                                                "long",
                                        }
                                    )}
                                </span>

                                {icon && (
                                    <img
                                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                                        className="w-10 h-10"
                                    />
                                )}

                                <span>
                                    {Math.round(
                                        day.main.temp_max
                                    )}
                                    ° /
                                    {Math.round(
                                        day.main.temp_min
                                    )}
                                    °C
                                </span>

                            </div>
                        );
                    }
                )}

            </div>
        </div>
    );
}