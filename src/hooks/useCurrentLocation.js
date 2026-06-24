import {
  useWeatherStore,
} from "../store/weatherStore";

export default function
useCurrentLocation() {

  const setLocation =
    useWeatherStore(
      (state) =>
        state.setLocation
    );

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setLocation({
          city: "Current Location",

          lat:
            position.coords.latitude,

          lon:
            position.coords.longitude,
        });
      },

      (error) => {
        console.error(error);
      }
    );
  };

  return getLocation;
}