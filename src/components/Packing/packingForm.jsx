import axios from 'axios';
import React from 'react';
import './packing.css';

function PackingForm({name, quantity, packingList, setPackingList, onNameChange, onQuantityChange, setName, setQuantity, errorMessage, setErrorMessage }) {

  function handleName(e) {
    onNameChange(e.target.value)
  };
 
  function handleQuantity(e) {
    onQuantityChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {name: name, quantity: quantity};
    
    if (!isNaN(name)) {
      setErrorMessage("Please enter a valid item")
    }
    else if (isNaN(quantity)) {
      setErrorMessage("Please enter a number value")
    } 
    else {
      axios.post('/what-to-pack', {name, quantity})
        .then((res) => {
          console.log(res);
          setPackingList(packingList => [...packingList, newItem]);
          setName("");
          setQuantity("");
          setErrorMessage("");
        })
        .catch((err) => {
          console.log('post error', err)
        })
  }}

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit}>
      <label className="form-label">
        Item:
        <input 
          className="input"
          type="text"
          value={name}
          onChange={handleName}
        />
      </label>
      <label className="form-label">
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
      <h3 className="errorMessage">{errorMessage}</h3>
    </div>
  )
};

export default PackingForm;