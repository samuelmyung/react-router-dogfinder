import { useState } from "react";
import getDogs from "./getDogs";
import { Link, Navigate } from "react-router-dom";
import Profile from "./Profile";
import Nav from "./Nav";
import { v4 as uuid } from "uuid";


/**
 * App -> Dogs
 *
 */

function Dogs({ dogs }) {
  return (
    <div>
      {dogs.map((dog) => (
        <div key={uuid()}>
          <h1>{dog.name}</h1>
          <p>Age: {dog.age}</p>
          <p>
            <img src={`./public/${dog.src}.jpg`} alt="dogs" />
          </p>
          <p>Facts: {dog.facts}</p>
          <Nav name={dog.name} />
        </div>
      ))}
    </div>
  );
}

export default Dogs;
