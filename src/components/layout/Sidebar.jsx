import { useState } from "react";



import {
  FaCloudSun,
  FaMapMarkedAlt,
  FaChartLine,
  FaStar,
  FaCog,
  FaBell,
} from "react-icons/fa";

import {
  Cloud,
} from "lucide-react";

import logo from "../../assets/logo.png";

import {
  useWeatherStore,
} from "../../store/weatherStore";

import SidebarRecentSearches
  from "../weather/SidebarRecentSearches";

import SidebarWeatherCard
  from "../weather/SidebarWeatherCard";

export default function Sidebar() {

  const [collapsed,
    setCollapsed] =
    useState(false);

  const activeSection =
    useWeatherStore(
      (state) =>
        state.activeSection
    );

  const setActiveSection =
    useWeatherStore(
      (state) =>
        state.setActiveSection
    );

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <FaCloudSun />,
    },
    {
      id: "charts",
      label: "Forecast",
      icon: <FaChartLine />,
    },
    {
      id: "map",
      label: "Map",
      icon: <FaMapMarkedAlt />,
    },
    // {
    //   id: "favorites",
    //   label: "Favorites",
    //   icon: <FaStar />,
    // },
    // {
    //   id: "alerts",
    //   label: "Alerts",
    //   icon: <FaBell />,
    // },
    // {
    //   id: "settings",
    //   label: "Settings",
    //   icon: <FaCog />,
    // },
  ];

  return (
    <aside
      className={`
  glass
  min-h-screen

  flex
  flex-col

  transition-all
  duration-300

  ${collapsed
          ? "w-20"
          : "w-20 md:w-72"
        }

  p-3
  `}
    >
      {/* LOGO */}

      <button
        onClick={() =>
          setCollapsed(
            !collapsed
          )
        }
        className="
        flex
        items-center
        gap-3

        mb-8
        "
      >

        <div
          className="
          w-12
          h-12

          rounded-xl

          bg-gradient-to-br
          from-blue-500
          to-indigo-600

          flex
          items-center
          justify-center
          "
        >
          <img
            src={logo}
            alt="Klima Logo"
            className="
    w-12
    h-12
    object-contain
  "
          />
        </div>

        {!collapsed && (
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold">
              Klima
            </h1>

            <p className="text-xs text-slate-400">
              Weather Weather Lang
            </p>
          </div>
        )}

      </button>

      {/* NAVIGATION */}

      <div
        className="
        flex
        flex-col
        gap-2
        "
      >
        {menuItems.map(
          (item) => (

            <button
              key={item.id}
              onClick={() =>
                setActiveSection(
                  item.id
                )
              }
              className={`
              flex
              items-center
              gap-3

              px-4
              py-3

              rounded-xl

              transition

              ${activeSection ===
                  item.id
                  ? "bg-blue-500"
                  : "hover:bg-white/10"
                }
              `}
            >

              <span
                className="
                text-lg
                "
              >
                {item.icon}
              </span>

              {!collapsed && (
                <span className="hidden md:block">
                  {item.label}
                </span>
              )}

            </button>

          )
        )}
      </div>

      {/* RECENT SEARCHES */}

      {!collapsed && (
        <div className="hidden md:block">
          <SidebarRecentSearches />
        </div>
      )}

      {/* WEATHER CARD */}

      {!collapsed && (
        <div className="hidden md:block">
          <SidebarWeatherCard />
        </div>
      )}

    </aside>
  );
}