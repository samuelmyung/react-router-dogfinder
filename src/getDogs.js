"use strict";

const API_URL = "http://localhost:5001/dogs";


async function getDogs() {
  const response = await fetch(`${API_URL}`);
  const dogs = await response.json();
  return dogs;
}



export default getDogs;