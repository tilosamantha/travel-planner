import React, { useEffect, useState } from 'react';
import '../../App.css';
import './stuff.css';
import StuffForm from './stuffForm';
import StuffList from './stuffList';
import EditForm from './editForm';
import axios from 'axios';

function Stuff() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const [getListFromDatabase, setGetListFromDatabase] = useState(true);
  
  const [errorMessage, setErrorMessage] = useState("   ");
  
  const [editing, setEditing] = useState(false);
  
  useEffect(() => {
    if (getListFromDatabase) {
      axios.get('/stuff')
      .then((res) => { 
        setList(res.data.rows)
        setGetListFromDatabase(false)
      })
      .catch((err) => {
        console.error("error in get request", err)
      })
    } 
  }, [getListFromDatabase])

  const [list, setList] = useState([]);
  
  const [currentItem, setCurrentItem] = useState({
    id: "",
    title: "",
    description: "",
    link: ""
  });


  const editItem = (item, id) => {
    console.log("current item:", item.title);
    setEditing(true);
    setCurrentItem({id: id, title: item.title, description: item.description, link: item.link})
    console.log("curret id:", id);
  };

  const updateItem = (updatedItem, id) => {
    let {title, link, description} = updatedItem;
    axios.put(`/stuff/${id}`, {id, title, link, description})
      .then((res) => {
        console.log(res)
        setEditing(false)
        setList(list.map(item => (item.stuff_id === id ? updatedItem: item)))
        console.log(updatedItem)
      })
      .catch((err) => {
        console.log('cant update item', err)
      })
    console.log(list);
  }

  // const updateItem = (updatedItem, id) => {
  //   setEditing(false)
  //   setList(list.map(item => (item.id === id ? updatedItem: item)))
  // }


  const removeItem = (title, id) => {
    axios.delete(`/stuff/${id}`, {id})
    .then((res) => {
      setList(list.filter((item) => item.title !== title));
    })
    .catch((err) => {
      console.log('error deleting item', err)
    })
  } 
  
  function toggle(title) {
    setIsExpanded(isExpanded == false ? true : false)
    console.log("is Expanded?", isExpanded)
  };
 
  
  return (
    <div className="focus">
      <h2 className="title">While you're there... </h2>
      <div className="stuff-layout">
      <StuffList 
        list={list}
        removeItem={removeItem}
        toggle={toggle}
        isExpanded={isExpanded}
        editItem={editItem}
      />
      {editing ? (
        <EditForm 
          title={title}
          description={description}
          link={link}
          currentItem={currentItem}
          updateItem={updateItem}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />) : (

        <StuffForm
        title={title}
        setTitle={setTitle}
        onTitleChange={setTitle}
        description={description}
        setDescription={setDescription}
        onDescriptionChange={setDescription}  
        link={link}
        setLink={setLink}
        onLinkChange={setLink} 
        list={list}  
        setList={setList}
      />
      )}
      </div>
    </div>
  )
}

export default Stuff;