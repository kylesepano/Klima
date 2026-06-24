import {
    useEffect,
} from "react";

import {
    useWeatherStore,
} from "../../store/weatherStore";

import {
    getRecentSearches,
} from "../../utils/storage";

export default function RecentSearches() {

    const savedLocations =
        useWeatherStore(
            (state) =>
                state.savedLocations
        );

    const recentSearches =
        useWeatherStore(
            (state) =>
                state.recentSearches
        );

    const setRecentSearches =
        useWeatherStore(
            (state) =>
                state.setRecentSearches
        );

    const setLocation =
        useWeatherStore(
            (state) =>
                state.setLocation
        );

    useEffect(() => {
        setRecentSearches(
            getRecentSearches()
        );
    }, [setRecentSearches]);

    return (
        <div
            className="
      glass
      rounded-3xl
      p-6
      mt-6
      "
        >
            <h2
                className="
        text-xl
        font-semibold
        "
            >
                Recent Searches
            </h2>

            <div className="space-y-2">
                {recentSearches.map(
                    (
                        city,
                        index
                    ) => (
                        <button
                            key={index}
                            onClick={() =>
                                setLocation(
                                    city
                                )
                            }
                            className="
              block
              w-full
              text-left
              p-3
              glass
              rounded-xl
              hover:bg-white/10
              "
                        >
                            {city.city}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}