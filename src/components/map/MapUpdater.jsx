import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function MapUpdater({ location }) {
    const map = useMap();

    useEffect(() => {
        if (!location) return;

        map.flyTo(
            [location.lat, location.lon],
            10,
            {
                duration: 1.5,
            }
        );
    }, [location, map]);

    return null;
}