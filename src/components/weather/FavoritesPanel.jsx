import { useEffect } from "react";

import { useWeatherStore } from "../../store/weatherStore";

import { getFavorites } from "../../utils/storage";

export default function FavoritesPanel() {
  const favorites = useWeatherStore((state) => state.favorites);

  const setFavorites = useWeatherStore((state) => state.setFavorites);

  const setLocation = useWeatherStore((state) => state.setLocation);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div
      className="
      glass
      rounded-3xl
      p-6
      mt-6
      "
    >
      <h2 className="mb-4">Favorites</h2>

      <div className="space-y-2">
        {favorites.map((city, index) => (
          <button
            key={index}
            onClick={() => setLocation(city)}
            className="
              block
              w-full
              text-left
              p-2
              glass
              rounded-lg
              mt-6
              "
          >
            {city.city}
          </button>
        ))}
      </div>
    </div>
  );
}
