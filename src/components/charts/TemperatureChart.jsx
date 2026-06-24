import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  useWeatherStore,
} from "../../store/weatherStore";

import {
  formatHour,
} from "../../utils/dateHelpers";

export default function TemperatureChart() {

  const forecast =
    useWeatherStore(
      (state) => state.forecast
    );

  if (!forecast) return null;

  const chartData =
    forecast.list
      .slice(0, 8)
      .map((item) => ({
        time:
          formatHour(
            item.dt_txt
          ),

        temp:
          Math.round(
            item.main.temp
          ),
      }));

  return (
    <div
      className="
      glass
      rounded-3xl
      p-6
      mt-6
      "
    >
      <h2
        className="
        text-xl
        font-semibold
        mb-4
        "
      >
        Temperature Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart
          data={chartData}
        >
          <XAxis
            dataKey="time"
          />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="temp"
            stroke="#60A5FA"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}