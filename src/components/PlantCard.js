import React, {useState} from "react";

function PlantCard({name,image,price,setPlants, id, plants}) {
  const [isInStock, setStock] = useState(true);
  // const [isEdit,setEdit]= useState(false)
  const [priceData,setPriceData]= useState(price)

  function toggleStock() {
    setStock(prevStock => !prevStock)
  }

  function handleChange(event){
   setPriceData(event.target.value)

   fetch(`http://localhost:6001/plants/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      price:event.target.value
    })
   })
  }

  function removePlant(){
    const updatedPlant = plants.filter(plant => plant.id !== id)
    setPlants(updatedPlant)

    fetch(`http://localhost:6001/plants/${id}`, {
      'method': 'DELETE'
    })
  }

  return (
    <li className="card" >
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <input value={priceData} type="number" onChange={handleChange}/>
      {/* <p>Price: {price}</p> */}
      {isInStock ? (
        <button onClick={toggleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
      {/* <button onClick={handleEdit}>Edit</button> */}
      <button onClick={removePlant}>Delete</button>
    </li>
  );
}

export default PlantCard;
