import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesList from "./RoutesList";
import getDogs from "./getDogs";
import { useState } from "react";


function App() {

  const [firstTime, setFirstTime] = useState(true);
  const [dogs, setDogs] = useState([]);

  async function getAllDogs() {
    setDogs(await getDogs());
  }

  if (firstTime) {
    getAllDogs();
    setFirstTime(false);
  }


  // {firstTime ? (
  //   <div>
  //     <p>Loading...</p>
  //   </div>
  // ) :

  return (

    <div className="App">
      {firstTime ? (
        <div>
          <p>Loading...</p>
        </div>) : (
      <BrowserRouter>
        <RoutesList dogs={dogs}/>
      </BrowserRouter>
      )}
    </div>

  );
}

export default App;
