import { searchCity } from "../../api/weatherApi";

import { useWeatherStore } from "../../store/weatherStore";

import { addRecentSearch } from "../../utils/storage";

import { Search } from "lucide-react";

export default function SearchBar() {
  const query = useWeatherStore((state) => state.searchQuery);

  const setQuery = useWeatherStore((state) => state.setSearchQuery);

  const setLocation = useWeatherStore((state) => state.setLocation);

  const searchResults = useWeatherStore((state) => state.searchResults);

  const setSearchResults = useWeatherStore((state) => state.setSearchResults);

  const setRecentSearches = useWeatherStore((state) => state.setRecentSearches);

  const handleInput = async (value) => {
    setQuery(value);

    if (value.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    try {
      const results = await searchCity(value);

      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };
  const setSearchQuery = useWeatherStore((state) => state.setSearchQuery);
  const selectCity = (city) => {
    const cityData = {
      city: city.name,
      country: city.country,
      lat: city.lat,
      lon: city.lon,
    };

    setLocation(cityData);

    setSearchQuery(`${city.name}, ${city.country}`);

    setSearchResults([]);

    addRecentSearch(cityData);
    setRecentSearches(
      JSON.parse(localStorage.getItem("recentSearches") || "[]"),
    );
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Search for a city..."
        className="
          w-full
          glass
          py-3
          pl-4
          pr-11
          rounded-full
          outline-none
          text-sm
          text-white
          placeholder:text-slate-400
        "
      />

      <Search
        size={18}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
      />

      {query.length > 0 && searchResults.length > 0 && (
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
          {searchResults.map((city, index) => (
            <button
              key={index}
              onClick={() => selectCity(city)}
              className="
   

                    text-left

                    px-4
                    py-3

                    hover:bg-white/10

                    transition
                    w-full
                  "
            >
              {city.name}
              {city.state ? `, ${city.state}` : ""}
              {", "}
              {city.country}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
