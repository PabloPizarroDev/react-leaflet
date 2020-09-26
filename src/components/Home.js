import React, { useState, usseEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState({
    longitud: 0,
    latitud: 0,
  });

  usseEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitud: position.coords.longitude,
          latitud: position.coords.latitude,
        });
      },
      function (error) {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  });
  return (
    <div>
      <h1>Geolocation</h1>
      <p>longitud: {state.longitude}</p>
      <p>latitud:{state.latitude}</p>
      <Link
        to={{
          pathname: "/map",
          state,
        }}
      >
        See my location
      </Link>
    </div>
  );
};

export default Home;
