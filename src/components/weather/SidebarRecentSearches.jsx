import { MapPin } from "lucide-react";

import { useWeatherStore } from "../../store/weatherStore";

export default function SidebarRecentSearches({
  setMobileMenuOpen,
  setActiveSection,
}) {
  const recentSearches = useWeatherStore((state) => state.recentSearches);
  const setLocation = useWeatherStore((state) => state.setLocation);

  if (!recentSearches || recentSearches.length === 0) return null;

  return (
    <div className="mt-6 border-t border-white/10 pt-5">
      <h3 className="mb-3 text-xs uppercase tracking-wider text-slate-400">
        Recent Searches
      </h3>

      <div className="space-y-2">
        {recentSearches.map((city, index) => (
          <button
            key={`${city.city}-${city.country}-${index}`}
            onClick={() => {
              setLocation(city);
              if (window.innerWidth < 768) {
                setMobileMenuOpen?.(false);
              }
              setActiveSection?.("dashboard");
            }}
            className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-xs text-slate-200 transition hover:bg-white/10"
          >
            <MapPin size={14} className="shrink-0 text-violet-300" />
            <span className="truncate">
              {city.city}, {city.country}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
