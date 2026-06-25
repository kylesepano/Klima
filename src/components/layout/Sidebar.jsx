import {
  FaCloudSun,
  FaMapMarkedAlt,
  FaChartLine,
} from "react-icons/fa";


import logo from "../../assets/logo.png";

import {
  useWeatherStore,
} from "../../store/weatherStore";

import SidebarRecentSearches
  from "../weather/SidebarRecentSearches";

import SidebarWeatherCard
  from "../weather/SidebarWeatherCard";

export default function Sidebar({
  collapsed = false,
  setCollapsed = () => { },
  setMobileMenuOpen,
}) {

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
  ];

  return (
    <aside
      className={`
glass

sticky
top-0

h-screen

flex
flex-col

transition-all
duration-300

overflow-y-auto

${collapsed ? "w-20" : "w-72"}

p-3
`}
    >

      {/* LOGO */}

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="
  flex
  items-center
  gap-3
  mb-8
  text-left
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
          <div>
            <h1
              className="
      text-2xl
      font-bold
      "
            >
              Klima
            </h1>

            <p
              className="
      text-xs
      text-slate-400
      "
            >
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

  ${collapsed
                  ? "justify-center"
                  : "gap-3"}

  px-4
  py-3

  rounded-xl
  transition

  ${activeSection === item.id
                  ? "bg-blue-500"
                  : "hover:bg-white/10"}
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
                <span>
                  {item.label}
                </span>
              )}
            </button>
          )
        )}
      </div>

      {/* RECENT SEARCHES */}

      {!collapsed && (
        <div className="mt-6">
          <SidebarRecentSearches setMobileMenuOpen={setMobileMenuOpen} setActiveSection={setActiveSection} />
        </div>
      )}

      {/* WEATHER CARD */}

      {!collapsed && (
        <div className="mt-6">
          <SidebarWeatherCard />
        </div>
      )}

    </aside>
  );
}