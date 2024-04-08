import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dogs from "./Dogs";
import Profile from "./Profile";
import Navigate from "./Navigate";

/** All routes for Vending Machine app. */

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Dogs />} />
      <Route path="/dogs/:name" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;