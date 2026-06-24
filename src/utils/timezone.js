export function getLocalTime(weather) {
  if (!weather) return null;

  const utc =
    Date.now() +
    new Date().getTimezoneOffset() * 60000;

  return new Date(
    utc + weather.timezone * 1000
  );
}

export function formatLocalTime(date) {
  if (!date) return "";

  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}