import { Sunrise, Sunset } from "lucide-react";

import { useWeatherStore } from "../../store/weatherStore";

export default function SunCard() {
  const weather = useWeatherStore((state) => state.weather);

  if (!weather) return null;

  const sunrise = new Date(weather.sys.sunrise * 1000);
  const sunset = new Date(weather.sys.sunset * 1000);
  const timeOptions = { hour: "numeric", minute: "2-digit" };

  return (
    <div className="glass rounded-2xl p-5">
      <h3 className="mb-4 text-sm font-semibold text-white">Sunrise & Sunset</h3>

      <div className="relative mx-auto mb-4 h-16 w-40 overflow-hidden">
        <div className="absolute left-2 right-2 top-5 h-28 rounded-t-full border-4 border-b-0 border-slate-500/40" />
        <div className="absolute left-2 top-5 h-28 w-36 rounded-t-full border-4 border-b-0 border-yellow-400 [clip-path:inset(0_50%_0_0)]" />
        <div className="absolute left-9 top-3 h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_18px_rgba(250,204,21,0.9)]" />
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="flex items-center gap-2 font-semibold text-white">
            <Sunrise size={16} className="text-yellow-300" />
            {sunrise.toLocaleTimeString([], timeOptions)}
          </p>
          <p className="mt-1 text-xs text-slate-400">Sunrise</p>
        </div>

        <div className="text-right">
          <p className="flex items-center justify-end gap-2 font-semibold text-white">
            {sunset.toLocaleTimeString([], timeOptions)}
            <Sunset size={16} className="text-orange-300" />
          </p>
          <p className="mt-1 text-xs text-slate-400">Sunset</p>
        </div>
      </div>
    </div>
  );
}
