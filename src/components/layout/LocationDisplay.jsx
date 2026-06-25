import { useWeatherStore } from "../../store/weatherStore";

export default function LocationDisplay() {
  const location = useWeatherStore((state) => state.location);

  if (!location) {
    return <div>No location selected</div>;
  }

  return (
    <div className="glass p-4 rounded-xl">
      <h2 className="text-xl">{location.city}</h2>

      <p>{location.country}</p>

      <p>
        {location.lat.toFixed(4)}, {location.lon.toFixed(4)}
      </p>
    </div>
  );
}
