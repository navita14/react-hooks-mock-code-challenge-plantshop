import React from "react";

function NewPlantForm({setPlants}) {
  function handleSubmit(event){
    event.preventDefault()

    const newPlant = {
      'name': event.target.name.value,
      'image': event.target.image.value,
      'price': parseFloat(event.target.price.value)
    }

    fetch("http://localhost:6001/plants", {
    'method' : 'POST',
    'headers' : {
      'Content-Type' : 'application/json'
    },
    'body': JSON.stringify(newPlant),
    })
    ////this gives an ID to the new plants
  .then(res => res.json())
  .then(data => {
    setPlants(currentPlant => [data,...currentPlant]) 
  })

  }
  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
