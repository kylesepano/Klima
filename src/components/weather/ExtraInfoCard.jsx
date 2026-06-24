import {
  useWeatherStore,
} from "../../store/weatherStore";

export default function ExtraInfoCard() {

  const weather =
    useWeatherStore(
      (state) => state.weather
    );

  if (!weather) return null;

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
        Additional Info
      </h3>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>UV Index</span>
          <span>Moderate</span>
        </div>

        <div className="flex justify-between">
          <span>Visibility</span>
          <span>
            {weather.visibility / 1000}
            km
          </span>
        </div>

        <div className="flex justify-between">
          <span>Pressure</span>
          <span>
            {weather.main.pressure}
            hPa
          </span>
        </div>

      </div>
    </div>
  );
}