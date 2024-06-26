import React from "react";
// import dogs from "./Dogs";
import { useParams } from "react-router-dom";

function Profile({ dogs}) {
  const { name } = useParams();

  if (dogs.length === 0){
    return <div><p>Loading...</p></div>
  }

  const foundDog = dogs.filter(dog => dog.name === name)[0];

  if (!foundDog) return <p>No such dog: {name}</p>;

  return (
    <div>
      <h1>{foundDog.name}</h1>
      <p>Age: {foundDog.age}</p>
      <p>
        <img src={`./public/${foundDog.src}.jpg`} alt="dog" />
      </p>
      <ul>
        {foundDog.facts.map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>
    </div>
  );
}

export default Profile;
