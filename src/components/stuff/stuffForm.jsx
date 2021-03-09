import React from 'react';
import axios from 'axios';
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
    const newStuff = {title: title, description: description, link: link};

    if (!title) {
      alert("You didn't enter anything!");
    } else {
    axios.post('/stuff', {title, description, link})
      .then((res) => {
        console.log(res);
        setList(list => [...list, newStuff]);
        setTitle("");
        setLink("");
        setDescription("");
        console.log(newStuff)
      })
      .catch((err) => {
        console.log('post/adding error', err)
      })
    }
  }

    
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
          rows='8'
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