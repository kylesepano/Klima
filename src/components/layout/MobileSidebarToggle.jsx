import { Menu } from "lucide-react";

import { useWeatherStore } from "../../store/weatherStore";

export default function MobileSidebarToggle() {
  const sidebarOpen = useWeatherStore((state) => state.sidebarOpen);

  const setSidebarOpen = useWeatherStore((state) => state.setSidebarOpen);

  return (
    <button
      onClick={() => setSidebarOpen(!sidebarOpen)}
      className="
      md:hidden
      fixed
      top-4
      left-4
      z-[9999]
      glass
      p-3
      rounded-xl
      "
    >
      <Menu size={22} />
    </button>
  );
}
