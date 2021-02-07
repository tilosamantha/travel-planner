import React, { useState } from 'react';
import PackingForm from './packingForm';
import PackingList from './packingList';
import './packing.css';
import '../../App.css';


function Packing() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  
  const [initialPackingState, setInitialPackingState]= useState({
    name: "",
    quantity: ""
  })

  const [packingList, setPackingList] = useState([
    {
      name: "t-shirt",
      quantity: 6
    },
    {
      name: "skirts",
      quantity: 2
    },
    {
      name: "hiking shoes",
      quantity: 1
    },
    {
      name: "sunglasses",
      quantity: 2
    },
  ])

  return (
    <div className="focus">
      <h2 className="title">Suitcase Checklist</h2>
      <div className="packing-layout">
        <PackingForm 
          name={name}
          setName={setName}
          setQuantity={setQuantity}
          quantity={quantity}
          packingList={packingList}
          setPackingList={setPackingList}
          onNameChange={setName}
          onQuantityChange={setQuantity}
          setInitialPackingState={setInitialPackingState}
        />
        <br />
        <PackingList
          packingList={packingList}
        />
      </div>
    </div>
  )
};

export default Packing;