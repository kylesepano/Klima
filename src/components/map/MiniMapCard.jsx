import { useState } from "react";

import MapPanel from "./MapPanel";

export default function MiniMapCard() {
  const [layer, setLayer] = useState("clouds_new");

  return (
    <div className="glass flex h-full min-h-[520px] flex-col rounded-2xl p-4">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold text-white">Weather Map</h3>

        <select
          value={layer}
          onChange={(event) => setLayer(event.target.value)}
          className="map-layer-select rounded-lg border border-white/15 bg-slate-900/80 px-3 py-2 text-xs font-medium text-white outline-none transition hover:bg-slate-800 focus:border-blue-300/60"
        >
          <option value="clouds_new">Clouds</option>
          <option value="precipitation_new">Rain</option>
          <option value="temp_new">Temperature</option>
          <option value="wind_new">Wind</option>
        </select>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden rounded-xl">
        <MapPanel layer={layer} />
      </div>
    </div>
  );
}
