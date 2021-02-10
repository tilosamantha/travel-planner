import React from 'react';
import './stuff.css';


function StuffForm({title, setTitle, onTitleChange, description, setDescription, onDescriptionChange, link, setLink, onLinkChange, list, setList}){


  function handleTitle(e) {
    onTitleChange(e.target.value);
  }

  function handleLink(e) {
    onLinkChange(e.target.value);
  }

  function handleDescription(e) {
    onDescriptionChange(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
       alert("You didn't enter anything!");
    } else {
      const newStuff = {id: list.length +1 ,title: title, description: description, link: link};
      setList(list => [...list, newStuff]);
      setTitle("");
      setLink("");
      setDescription("");
    }}

  return (
    <div className="stuff-form-body">
    <form  onSubmit={handleSubmit}>
      <h2 className="stuff-form-title">Add something new</h2>
      <label className="stuff-form-label">
        Title: 
        <input 
          className="stuff-input"
          type="text"
          value={title}
          onChange={handleTitle}  
         />
      </label>
      <br/>
      <label className="stuff-form-label">
        Link?: 
        <input 
          className="stuff-input"
          type="text"
          value={link}
          onChange={handleLink}  
         />
      </label>
      <br/>
      <label className="stuff-form-label">
        Description: 
        <textarea 
          className="stuff-input"
          type="text"
          rows='10'
          value={description}
          onChange={handleDescription}  
         />
      </label>
      <br/>
      <input 
        className="stuff-form-btn"
        type="submit"
        value="+"
      />
    </form>
    </div>
  )
}


export default StuffForm;