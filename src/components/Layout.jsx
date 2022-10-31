import React from "react";
import { Outlet } from "react-router-dom";
import Homepage from "./Homepage";
import Messenger from "./Messenger";
import TeeShirt from "./TeeShirt";

const Layout = () => {
  return (
    <>
      <div className="App">
        <Homepage />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
