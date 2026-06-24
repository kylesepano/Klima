import axios from "axios";

const API_KEY = "3edd33eff0015eff70c207ad52a5cd29";

const api = axios.create({
    baseURL:
        "https://api.openweathermap.org",
});

export const searchCity =
    async (city) => {
        const { data } =
            await api.get(
                "/geo/1.0/direct",
                {
                    params: {
                        q: city,
                        limit: 5,
                        appid: API_KEY,
                    },
                }
            );

        return data;
    };

export const getCurrentWeather = async (
    lat,
    lon
) => {
    const { data } = await api.get(
        "/data/2.5/weather",
        {
            params: {
                lat,
                lon,
                units: "metric",
                appid: API_KEY,
            },
        }
    );

    return data;
};

export const getForecast = async (
    lat,
    lon
) => {
    const { data } = await api.get(
        "/data/2.5/forecast",
        {
            params: {
                lat,
                lon,
                units: "metric",
                appid: API_KEY,
            },
        }
    );

    return data;
};

export const getAirPollution = async (
    lat,
    lon
) => {
    const { data } = await api.get(
        "/data/2.5/air_pollution",
        {
            params: {
                lat,
                lon,
                appid: API_KEY,
            },
        }
    );

    return data;
};

export const reverseGeocode =
    async (lat, lon) => {

        const { data } =
            await api.get(
                "/geo/1.0/reverse",
                {
                    params: {
                        lat,
                        lon,
                        limit: 1,
                        appid: API_KEY,
                    },
                }
            );

        return data[0];
    };

