import { useState } from "react";
import getDogs from "./getDogs";
import { Link } from "react-router-dom";

/**
 *
 *
 * App -> Dogs -> Doglist
 *
 */
function Dogs() {
  const [firstTime, setFirstTime] = useState(true);
  const [dogs, setDogs] = useState([]);
  const [letMap, setLetMap] = useState(false);

  async function getAllDogs() {
    setDogs(await getDogs());
    setLetMap(true);
  }

  if (firstTime) {
    setLetMap(false);
    getAllDogs();
    setFirstTime(false);
  }

  return (
    <div>
      {letMap ? (
        dogs.map((dog) => (
          <ul>
            <li>{dog.name}</li>
            <li>{dog.age}</li>
            <li>
              <img src={`./public/${dog.src}.jpg`} alt="dogs" />
            </li>
            <li>{dog.facts}</li>
            <li>
              <Link to={`/dogs/${dog.name}`}></Link>
            </li>
          </ul>
        ))
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Dogs;
