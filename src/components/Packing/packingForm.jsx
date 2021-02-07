import React from 'react';
import './packing.css';

function PackingForm({name, quantity, packingList, setPackingList, onNameChange, onQuantityChange, setName, setQuantity }) {

  function handleName(e) {
    onNameChange(e.target.value)
  };

  function handleQuantity(e) {
    onQuantityChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //if item is not a string or if qty not a number
    const newItem = {name: name, quantity: quantity};
    setPackingList(packingList => [...packingList, newItem]);
    console.log(packingList);
    setName("");
    setQuantity("");
  }

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit}>
      <label
        className="form-label">
          Item:
          <input 
            className="input"
            type="text"
            value={name}
            onChange={handleName}
          />
        </label>
        <label
          className="form-label">
          Quantity:
          <input 
            className="qty-input"
            type="text"
            value={quantity}
            onChange={handleQuantity}
          />
        </label>
        <input
          className="form-btn"
          type="submit"
          value="+"
        />
      </form>
    </div>
  )
};

export default PackingForm;