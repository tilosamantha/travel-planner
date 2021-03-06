import React, { useState } from 'react';
import PackingForm from './packingForm';
import PackingList from './packingList';
import EditPackList from './editPackList';
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

  const [errorMessage, setErrorMessage] = useState("   ");

  const [editing, setEditing] = useState(false);

  const removePackItem = (name) => {
    setPackingList(packingList.filter((item) => item.name !== name))
  }

  const toggle = () => {
    setEditing(editing == false ? true : false);
  }

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
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        <br />
        {editing ? (
          <EditPackList 
            packingList={packingList}
            removePackItem={removePackItem}
            toggle={toggle}
          />
        ) : (
          <PackingList
            packingList={packingList}
            toggle={toggle}
          />
        )}
      </div>
    </div>
  )
};

export default Packing;