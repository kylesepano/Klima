import { useState } from "react";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

import WeatherHero from "../components/weather/WeatherHero";
import HourlyForecast from "../components/weather/HourlyForecast";
import WeeklyForecast from "../components/weather/WeeklyForecast";
import AQICard from "../components/weather/AQICard";
import SunCard from "../components/weather/SunCard";
import ExtraInfoCard from "../components/weather/ExtraInfoCard";

import TemperatureChart from "../components/charts/TemperatureChart";

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
        bg-[#020814]/75
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
                ${collapsed ? "w-20" : "w-56"}
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
    md:pt-0
    transition-all
    duration-300
    ${collapsed ? "md:ml-20" : "md:ml-56"}
  `}
        >
          <motion.main
            className="
            flex-1
            px-4
            pb-24
            pt-0
            md:px-8
            md:pb-24
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
              <div className="mx-auto w-full max-w-[1260px] space-y-4">
                <Header />

                <div
                  className="
                    grid
                    grid-cols-1
                    xl:grid-cols-[minmax(0,1fr)_minmax(420px,1.02fr)]
                    gap-4
                    "
                >
                  <div className="space-y-4">
                    <WeatherHero />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <AQICard />

                      <div className="grid gap-4">
                        <SunCard />
                        <ExtraInfoCard />
                      </div>
                    </div>
                  </div>

                  <MiniMapCard />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1fr] gap-4">
                  <WeeklyForecast />
                  <HourlyForecast />
                </div>
              </div>
            )}
            {/* FORECAST */}
            {activeSection === "charts" && (
              <div className="mx-auto w-full max-w-[1260px] space-y-6">
                <Header />
                <TemperatureChart />

                <WeeklyForecast />

                <HourlyForecast />
              </div>
            )}
            {/* MAP */}
            {activeSection === "map" && (
              <div
                className="
                  mx-auto
                  w-full
                  max-w-[1260px]
                  h-[75vh]
                  "
              >
                <Header />
                <MiniMapCard />
              </div>
            )}
            {/* FAVORITES */}
            {activeSection === "favorites" && (
              <div className="mx-auto w-full max-w-[1260px] space-y-6">
                <Header />
                <FavoritesPanel />
              </div>
            )}
          </motion.main>

          <Footer collapsed={collapsed} />
        </div>
      </div>
    </div>
  );
}
