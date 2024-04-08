import { useState } from "react";
import getDogs from "./getDogs";
import { Link, Navigate } from "react-router-dom";
import Profile from "./Profile";
import Nav from "./Nav";
// import { v4 as uuid } from "uuid";

/**
 *
 *
 * App -> Dogs -> Doglist
 *
 */
function Dogs() {
  const [firstTime, setFirstTime] = useState(true);
  const [dogs, setDogs] = useState([]);
  // const [letMap, setLetMap] = useState(false);

  async function getAllDogs() {
    setDogs(await getDogs());
    // setLetMap(true);
  }


  if (firstTime) {
    // setLetMap(false);
    getAllDogs();
    setFirstTime(false);
  }

  return (
    <div>
      {firstTime ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        dogs.map((dog) => (
          <div>
            <Profile key={dog.name} dog={dog} />
            <Nav name={dog.name} />
          </div>
        ))
      )}
    </div>
  );
}

export default Dogs;
