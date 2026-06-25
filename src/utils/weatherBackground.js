import clearBg from "../assets/backgrounds/clear.jpg";
import cloudyBg from "../assets/backgrounds/cloudy.jpg";
import rainBg from "../assets/backgrounds/rain.jpg";
import snowBg from "../assets/backgrounds/snow.jpg";

export function getWeatherBackground(weather) {
  if (!weather) return cloudyBg;

  const main = weather.weather?.[0]?.main;

  switch (main) {
    case "Clear":
      return clearBg;

    case "Rain":
    case "Drizzle":
    case "Thunderstorm":
      return rainBg;

    case "Snow":
      return snowBg;

    case "Clouds":
    default:
      return cloudyBg;
  }
}
