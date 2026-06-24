import {
  searchCity,
} from "../../api/weatherApi";

import {
  useWeatherStore,
} from "../../store/weatherStore";

import {
  addRecentSearch,
} from "../../utils/storage";

import { Crosshair } from "lucide-react";

export default function SearchBar() {

  const query =
    useWeatherStore(
      (state) =>
        state.searchQuery
    );

  const setQuery =
    useWeatherStore(
      (state) =>
        state.setSearchQuery
    );

  const setLocation =
    useWeatherStore(
      (state) =>
        state.setLocation
    );

  const searchResults =
    useWeatherStore(
      (state) =>
        state.searchResults
    );

  const setSearchResults =
    useWeatherStore(
      (state) =>
        state.setSearchResults
    );

  const setRecentSearches =
    useWeatherStore(
      (state) =>
        state.setRecentSearches
    );

  const handleInput =
    async (value) => {

      setQuery(value);

      if (
        value.trim().length < 2
      ) {
        setSearchResults([]);
        return;
      }

      try {

        const results =
          await searchCity(
            value
          );

        setSearchResults(
          results
        );

      } catch (error) {
        console.error(error);
      }
    };
  const setSearchQuery = useWeatherStore(
    (state) => state.setSearchQuery
  );
  const selectCity = (city) => {

    const cityData = {
      city: city.name,
      country: city.country,
      lat: city.lat,
      lon: city.lon,
    };

    setLocation(cityData);

    setSearchQuery(
      `${city.name}, ${city.country}`
    );

    setSearchResults([]);

    addRecentSearch(cityData);
    setRecentSearches(
      JSON.parse(
        localStorage.getItem("recentSearches") || "[]"
      )
    );
  };

  return (
    <div className="relative pl-6">

      <input
        type="text"
        value={query}
        onChange={(e) =>
          handleInput(
            e.target.value
          )
        }
        placeholder="Search city..."
        className="
          w-full
          glass
          px-4
          py-3
          rounded-xl
          outline-none
        "
      />

      {query.length > 0 &&
        searchResults.length > 0 && (

          <div
            className="
              absolute
              top-full
              left-0
              right-0
              mt-2

              glass

              rounded-xl
              overflow-hidden

              z-50
            "
          >

            {searchResults.map(
              (
                city,
                index
              ) => (
                
                <button
                  key={index}
                  onClick={() =>
                    selectCity(
                      city
                    )
                  }
                  className="
   

                    text-left

                    px-4
                    py-3

                    hover:bg-white/10

                    transition
                  "
                >
                  {city.name}
                  {city.state
                    ? `, ${city.state}`
                    : ""}
                  {", "}
                  {city.country}
                </button>

              )
            )}

          </div>

        )}
    </div>
  );
}