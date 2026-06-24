import {
  useWeatherStore,
} from "../store/weatherStore";

import {
  reverseGeocode,
} from "../api/weatherApi";

export default function useCurrentLocation() {

  const setLocation =
    useWeatherStore(
      (state) => state.setLocation
    );

  const setSearchQuery =
    useWeatherStore(
      (state) => state.setSearchQuery
    );

  const getLocation = () => {

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const lat =
          position.coords.latitude;

        const lon =
          position.coords.longitude;

        try {

          const place =
            await reverseGeocode(
              lat,
              lon
            );

          const cityName =
            place?.name ||
            place?.state ||
            place?.country ||
            "Unknown";

          setLocation({
            city: cityName,
            country:
              place?.country || "",
            lat,
            lon,
          });

          setSearchQuery(
            `${cityName}${place?.country
              ? `, ${place.country}`
              : ""
            }`
          );

        } catch (error) {
          console.error(error);

          setLocation({
            city: "Unknown",
            lat,
            lon,
          });
        }

      },

      (error) => {
        console.error(error);
      }

    );
  };

  return getLocation;
}