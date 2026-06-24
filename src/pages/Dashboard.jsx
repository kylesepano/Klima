import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

import WeatherHero from "../components/weather/WeatherHero";
import WeatherDetails from "../components/weather/WeatherDetails";
import HourlyForecast from "../components/weather/HourlyForecast";
import WeeklyForecast from "../components/weather/WeeklyForecast";
import AQICard from "../components/weather/AQICard";

import TemperatureChart from "../components/charts/TemperatureChart";
import MapPanel from "../components/map/MapPanel";

import FavoritesPanel from "../components/weather/FavoritesPanel";
import RecentSearches from "../components/weather/RecentSearches";

import MiniMapCard from "../components/map/MiniMapCard";

import useWeather from "../hooks/useWeather";

import { motion } from "framer-motion";
import { useWeatherStore } from "../store/weatherStore";
import { getWeatherBackground } from "../utils/weatherBackground";

export default function Dashboard() {
    useWeather();

    const activeSection = useWeatherStore(
        (state) => state.activeSection
    );

    const weather = useWeatherStore(
        (state) => state.weather
    );

    // ✅ FIX: background now defined properly
    const background = getWeatherBackground(weather);

    return (
        <div
            className="
      
        min-h-screen
        bg-cover
        bg-center
        bg-fixed
        relative
        overflow-x-hidden
      "
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="relative z-10 flex min-h-screen">

                {/* SIDEBAR (FIX MOBILE OVERFLOW BELOW) */}
                <Sidebar />

                {/* MAIN CONTENT */}
                <div className="flex flex-col flex-1 min-w-0 pt-6">

                    <Header />

                    <motion.main
                        className="flex-1 p-4 md:p-6 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >

                        {/* DASHBOARD */}
                        {activeSection === "dashboard" && (
                            <div className="space-y-6">

                                {/* HERO + MAP */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <WeatherHero />
                                    <MiniMapCard />
                                </div>

                                {/* DETAILS */}
                                <WeatherDetails />

                                {/* AQI + FORECAST */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    <AQICard />
                                    <WeeklyForecast />
                                    <HourlyForecast />
                                </div>

                                {/* CHART */}
                                <TemperatureChart />

                            </div>
                        )}

                        {/* CHARTS */}
                        {activeSection === "charts" && (
                            <div className="space-y-6">
                                <TemperatureChart />
                                <WeeklyForecast />
                            </div>
                        )}

                        {/* MAP */}
                        {activeSection === "map" && (
                            <div className="h-[75vh]">
                                <MapPanel />
                            </div>
                        )}

                        {/* FAVORITES */}
                        {activeSection === "favorites" && (
                            <div className="space-y-6">
                                <FavoritesPanel />
                            </div>
                        )}

                    </motion.main>

                    <Footer />

                </div>
            </div>
        </div>
    );
}