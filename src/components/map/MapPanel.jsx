import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

import { addRecentSearch } from "../../utils/storage";

import { saveLocation } from "../../utils/storage";
import MapUpdater from "./MapUpdater";

import { useWeatherStore } from "../../store/weatherStore";

import { reverseGeocode } from "../../api/weatherApi";

import { useMap } from "react-leaflet";

function LocationPicker() {
  const setLocation = useWeatherStore((state) => state.setLocation);

  const setSearchQuery = useWeatherStore((state) => state.setSearchQuery);

  const setSavedLocations = useWeatherStore((state) => state.setSavedLocations);

  const setRecentSearches = useWeatherStore((state) => state.setRecentSearches);

  useMapEvents({
    click: async (event) => {
      const lat = event.latlng.lat;
      const lon = event.latlng.lng;

      try {
        const place = await reverseGeocode(lat, lon);

        const cityData = {
          city: place?.name || place?.state || place?.country || "Unknown",

          country: place?.country || "",

          lat,
          lon,
        };

        setLocation(cityData);

        const updatedSearches = addRecentSearch(cityData);

        setRecentSearches(updatedSearches);

        setSearchQuery(cityData.city);

        const updated = saveLocation(cityData);

        setSavedLocations(updated);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return null;
}

function FlyToLocation({ location }) {
  const map = useMap();

  if (location?.lat && location?.lon) {
    map.flyTo([location.lat, location.lon], 11, { duration: 1.5 });
  }

  return null;
}

export default function MapPanel({ layer = "clouds_new" }) {
  const location = useWeatherStore((state) => state.location);

  const currentLocation = location || {
    lat: 14.5995,
    lon: 120.9842,
  };
  const API_KEY = "3edd33eff0015eff70c207ad52a5cd29";

  return (
    <div
      className="
    overflow-hidden
    h-full
    "
    >
      {/* Map */}
      <div className="h-full">
        <MapContainer
          center={[
            currentLocation?.lat || 1.3521,
            currentLocation?.lon || 103.8198,
          ]}
          zoom={10}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <FlyToLocation location={location} />

          {/* Base Map */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* OpenWeather Overlay */}
          <TileLayer
            url={`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${API_KEY}`}
            opacity={0.6}
          />

          <Marker
            position={[
              currentLocation?.lat || 1.3521,
              currentLocation?.lon || 103.8198,
            ]}
          />

          <MapUpdater location={location} />
          <LocationPicker />
        </MapContainer>
      </div>
    </div>
  );
}
