import { useEffect } from "react";

import {
  getCurrentWeather,
  getForecast,
  getAirPollution,
  reverseGeocode,
} from "../api/weatherApi";

import { getSavedLocations } from "../utils/storage";

import { useWeatherStore } from "../store/weatherStore";

export default function useWeather() {
  const setSavedLocations = useWeatherStore((state) => state.setSavedLocations);
  const location = useWeatherStore((state) => state.location);

  const setLocation = useWeatherStore((state) => state.setLocation);

  const setWeather = useWeatherStore((state) => state.setWeather);

  const setForecast = useWeatherStore((state) => state.setForecast);

  const setAQI = useWeatherStore((state) => state.setAQI);

  const setSearchQuery = useWeatherStore((state) => state.setSearchQuery);

  useEffect(() => {
    setSavedLocations(getSavedLocations());
  }, []);
  // 🔥 LOAD WEATHER WHEN LOCATION CHANGES
  useEffect(() => {
    if (!location) return;

    const loadWeather = async () => {
      try {
        const weather = await getCurrentWeather(location.lat, location.lon);

        const forecast = await getForecast(location.lat, location.lon);

        const air = await getAirPollution(location.lat, location.lon);

        setWeather(weather);
        setForecast(forecast);
        setAQI(air.list?.[0] || null);
      } catch (err) {
        console.error("Weather load failed:", err);
      }
    };

    loadWeather();
  }, [location]);

  // 🔥 INIT LOCATION ONLY ONCE
  useEffect(() => {
    if (location) return;

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;

      const lon = pos.coords.longitude;

      try {
        const place = await reverseGeocode(lat, lon);

        setLocation({
          city: place?.name || "Current Location",
          country: place?.country || "",
          lat,
          lon,
        });

        setSearchQuery(place?.name || "Current Location");
      } catch (e) {
        setLocation({
          city: "Singapore",
          country: "SG",
          lat: 1.3521,
          lon: 103.8198,
        });
      }
    });
  }, []);
}
