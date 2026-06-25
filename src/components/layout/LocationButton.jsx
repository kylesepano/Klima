import useCurrentLocation from "../../hooks/useCurrentLocation";

import { Crosshair } from "lucide-react";

export default function LocationButton() {
  const getLocation = useCurrentLocation();

  return (
    <button
      onClick={getLocation}
      className="
    p-2
    rounded-xl
    glass
    hover:bg-white/10
    transition
    flex items-center justify-center
  "
    >
      <Crosshair size={18} />
    </button>
  );
}
