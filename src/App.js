import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 52.5170365,
    longitude: 13.3888599,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibmV1cm90IiwiYSI6ImNrNm56bnEzNzEydmkzbHJyaWY3YjFrM3UifQ.n3O3xh7GOfDNsw5AyUDz-g"
        mapStyle="mapbox://styles/neurot/ck6mjrtpn10n51ip9c26uj3oy"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      />
    </div>
  );
}
