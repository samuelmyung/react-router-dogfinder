import { useState } from "react";
import getDogs from "./getDogs";
import { Link } from "react-router-dom";
import Profile from "./Profile";
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

  function handleClick(evt) {
    const { key } = evt.target
    return <Navigate to={`/dogs/${key}`} />
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
        dogs.map((dog) => (<div>
          <form onClick={handleClick}>
          <Profile
          key={dog.name}
          dog={dog}
          />
         <button>{dog.name}</button>
         </form>
         </div>))
      )}
    </div>
  );
}

export default Dogs;
