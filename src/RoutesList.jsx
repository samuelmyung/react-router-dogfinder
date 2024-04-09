import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dogs from "./Dogs";
import Profile from "./Profile";

/** All routes for Dogfinder app. */

function RoutesList({dogs}) {
  return (
    <div>
      <Routes>
        <Route path="/dogs" element={<Dogs dogs={dogs}/>} />
        <Route path="/dogs/:name" element={<Profile dogs={dogs}/>} />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
