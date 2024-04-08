import React from "react";
import dogs from "./Dogs";
import { useParams } from "react-router-dom"

function Profile() {
  const { name } = useParams();
  const dog = dogs[name];

  if (!dog) return <p>No such dog: {name}</p>

  return (
      <div>
        <h1>{ dog.name }</h1>
        <p>Age: { dog.age }</p>
        <p><img src={`./public/${dog.src}.jpg`} alt="dogs" /></p>
        <p>Facts: {dog.facts}</p>
      </div>
  );
}

export default Profile;
