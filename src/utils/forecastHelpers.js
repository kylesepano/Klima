export const getDailyForecast = (
  forecast
) => {
  if (!forecast) return [];

  const grouped = {};

  forecast.list.forEach((item) => {
    const date =
      item.dt_txt.split(" ")[0];

    if (!grouped[date]) {
      grouped[date] = [];
    }

    grouped[date].push(item);
  });

  return Object.entries(grouped)
    .slice(0, 5)
    .map(([date, items]) => {

      const temps =
        items.map(
          (i) => i.main.temp
        );

      const noonForecast =
        items[Math.floor(
          items.length / 2
        )];

      return {
        date,

        min: Math.round(
          Math.min(...temps)
        ),

        max: Math.round(
          Math.max(...temps)
        ),

        icon:
          noonForecast.weather[0]
            .icon,

        condition:
          noonForecast.weather[0]
            .main,
      };
    });
};