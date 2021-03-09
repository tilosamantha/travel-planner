import React, { useState } from 'react';
import './stuff.css';


function EditForm({updateItem, currentItem, errorMessage, setErrorMessage}){
  const [item, setItem] = useState(currentItem)

  function handleChange(e) {
    const {name, value} = e.target;
    setItem({...item, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.title == "") {
      setErrorMessage("You can't NOT have a title!");
    } else {
    updateItem(item.id, item);
    }
  }

  return (
    <div className="stuff-form-body">
    <form  onSubmit={handleSubmit}>
      <h2 className="stuff-form-title">Edit {currentItem.title}</h2>
      <h3 className="errorMessage">{errorMessage}</h3>
      <label className="stuff-form-label">
        Title: 
        <input 
          className="stuff-input"
          type="text"
          name="title"
          value={item.title}
          onChange={handleChange}  
         />
      </label>
      <br/>
      <label className="stuff-form-label">
        Link?: 
        <input 
          className="stuff-input"
          type="text"
          name="link"
          value={item.link}
          onChange={handleChange}  
         />
      </label>
      <br/>
      <label className="stuff-form-label">
        Description: 
        <textarea 
          className="stuff-input"
          type="text"
          rows='10'
          name="description"
          value={item.description}
          onChange={handleChange}  
         />
      </label>
      <br/>
      <input 
        className="edit-stuff-btn"
        type="submit"
        value="update item"
      />
    </form>
    </div>
  )
}


export default EditForm;