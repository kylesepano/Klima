import { useState } from "react";

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

import MiniMapCard from "../components/map/MiniMapCard";

import useWeather from "../hooks/useWeather";

import { motion } from "framer-motion";

import { useWeatherStore } from "../store/weatherStore";

import { getWeatherBackground } from "../utils/weatherBackground";

export default function Dashboard() {
  useWeather();

  const [collapsed, setCollapsed] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeSection = useWeatherStore((state) => state.activeSection);

  const weather = useWeatherStore((state) => state.weather);

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
      {/* Background Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-black/60
        z-0
        "
      />

      <div
        className="
        relative
        z-10
        flex
        min-h-screen
        items-start
        "
      >
        {/* ===================== */}
        {/* MOBILE NAVBAR */}
        {/* ===================== */}

        <div
          className="
          md:hidden
          fixed
          top-0
          left-0
          right-0
          z-50

          glass

          px-4
          py-3

          flex
          items-center
          justify-between
          "
        >
          <h1
            className="
            text-xl
            font-bold
            "
          >
            Klima
          </h1>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
            p-2
            rounded-lg
            glass
            "
          >
            ☰
          </button>
        </div>

        {/* ===================== */}
        {/* MOBILE SIDEBAR */}
        {/* ===================== */}

        {mobileMenuOpen && (
          <>
            {/* Overlay */}

            <div
              onClick={() => setMobileMenuOpen(false)}
              className="
              fixed
              inset-0
              bg-black/50
              z-40
              md:hidden
              "
            />

            {/* Sidebar */}

            <div
              className="
              fixed
              top-0
              left-0
              z-50
              h-screen
              md:hidden
              "
            >
              <Sidebar
                collapsed={false}
                setCollapsed={() => {}}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </div>
          </>
        )}

        {/* ===================== */}
        {/* DESKTOP SIDEBAR */}
        {/* ===================== */}

        <div
          className={`
                hidden
                md:block
                fixed
                left-0
                top-0
                h-screen
                z-30
                ${collapsed ? "w-20" : "w-72"}
            `}
        >
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        {/* ===================== */}
        {/* MAIN CONTENT */}
        {/* ===================== */}

        <div
          className={`
    flex
    flex-col
    flex-1
    min-w-0
    pt-20
    md:pt-6
    transition-all
    duration-300
    ${collapsed ? "md:ml-20" : "md:ml-72"}
  `}
        >
          <Header />

          <motion.main
            className="
            flex-1
            p-4
            md:p-6
            overflow-y-auto
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            {/* DASHBOARD */}
            {activeSection === "dashboard" && (
              <div className="space-y-6">
                <div
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-6
                    "
                >
                  <WeatherHero />

                  <MiniMapCard />
                </div>

                <WeatherDetails />

                <div
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-3
                    gap-6
                    "
                >
                  <AQICard />

                  <WeeklyForecast />

                  <HourlyForecast />
                </div>

                <TemperatureChart />
              </div>
            )}
            {/* FORECAST */}
            {activeSection === "charts" && (
              <div className="space-y-6">
                <TemperatureChart />

                <WeeklyForecast />

                <HourlyForecast />
              </div>
            )}
            {/* MAP */}
            {activeSection === "map" && (
              <div
                className="
                  h-[75vh]
                  "
              >
                <MiniMapCard />
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
