import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dogs from "./Dogs";
// import Profile from "./Profile";

/** All routes for Vending Machine app. */

function RoutesList() {
  return (
    <div>
      <Routes>
        <Route path="/dogs" element={<Dogs />} />
        {/* <Route path="/dogs/:name" element={<Profile />} /> */}
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
