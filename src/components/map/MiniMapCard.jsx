import MapPanel
    from "./MapPanel";

export default function MiniMapCard() {

    return (
        <div
            className="
      glass
      rounded-3xl
      p-4
      h-full
      "
        >
            <h3
                className="
        font-semibold
        mb-3
        "
            >
                Weather Map
            </h3>

            <div
                className="
        h-[350px]
        overflow-hidden
        rounded-2xl
        "
            >
                <MapPanel />
            </div>
        </div>
    );
}