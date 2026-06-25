import {
    useWeatherStore,
} from "../../store/weatherStore";

export default function SidebarRecentSearches({ setMobileMenuOpen, setActiveSection }) {

    const recentSearches =
        useWeatherStore(
            (state) =>
                state.recentSearches
        );

    const setLocation =
        useWeatherStore(
            (state) =>
                state.setLocation
        );

    if (
        !recentSearches ||
        recentSearches.length === 0
    )
        return null;

    return (
        <div
            className="
      mt-6
      "
        >
            <h3
                className="
        text-xs
        uppercase
        tracking-wider
        text-slate-400
        mb-3
        "
            >
                Recent Searches
            </h3>

            <div className="space-y-2">

                {recentSearches.map(
                    (
                        city,
                        index
                    ) => (
                        <button
                            key={index}
                            onClick={() => {
                                setLocation(
                                    city
                                );
                                if (window.innerWidth < 768) {
                                    setMobileMenuOpen?.(false);
                                }
                                setActiveSection?.("dashboard");

                            }
                            }
                            className="
              w-full
              text-left

              px-3
              py-2

              rounded-lg

              hover:bg-white/10

              transition

              text-sm
              "
                        >
                            📍 {city.city}, {city.country}
                        </button>
                    )
                )}

            </div>
        </div>
    );
}