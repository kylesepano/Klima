import { useWeatherStore } from "../../store/weatherStore";

export default function SidebarWeatherCard() {
  const weather = useWeatherStore((state) => state.weather);

  if (!weather) return null;

  const icon = weather.weather?.[0]?.icon;

  return (
    <div className="glass mt-6 rounded-2xl p-4">
      <div className="flex justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
          className="h-20 w-20"
        />
      </div>

      <h3 className="text-center text-sm font-semibold">Stay prepared</h3>

      <p className="mt-2 text-center text-xs text-slate-300">
        Check the forecast before you go.
      </p>
    </div>
  );
}
