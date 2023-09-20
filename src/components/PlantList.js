import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {
  return (
    <ul className="cards">
      {plants.map(plant => {
      return <PlantCard key={plant.id} {...plant} setPlants={setPlants} plants={plants} id={plant.id}/>
    })}
    </ul>
  );
}

export default PlantList;
