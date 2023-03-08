import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FpbnQxMiIsImEiOiJjbGUxMHRlZ3AxZ3JsM3ByeDh1ZWNraHhrIn0.e6WS7pslf0wlma3BZzk_yg";

export default function MapInputField() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(38.763611);
    const [lat, setLat] = useState(9.005401);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lng, lat],
        zoom: zoom,
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("move", () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div className="flex flex-col m-4">
        <div className="bg-white text-black relative left-0 m-3 p-2  rounded z-10 ">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div
            ref={mapContainer}
            className="h-34 w-full rrounded-lg m-4"
        />
        </div>
    );
}