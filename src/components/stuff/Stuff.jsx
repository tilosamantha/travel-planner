import React, { useState } from 'react';
import '../../App.css';
import './stuff.css';
import StuffForm from './stuffForm';
import StuffList from './stuffList';
import EditForm from './editForm';

function Stuff() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      title: "Paris Catacombs",
      link: "https://www.catacombes.paris.fr/en",
      description: "Underground ossuaries in Paris, France.",
    },
    {
      id: 2,
      title: "Big Ben",
      link: "https://www.parliament.uk/about/living-heritage/building/palace/big-ben/",
      description: "Big clock tower in London, England",
    },
    {
      id: 3,
      title: "St Peter's Basilica",
      link: "https://www.britannica.com/topic/Saint-Peters-Basilica",
      description: "Vatican city church built in 1626"
    }
  ]);

  //editing
  const [editing, setEditing] = useState(false);

  const [currentItem, setCurrentItem] = useState({
    id: "",
    title: "",
    description: "",
    link: ""
  });


  const editItem = (item) => {
    console.log("current item:", item);
    setEditing(true);
    setCurrentItem({id: item.id, title: item.title, description: item.description, link: item.link})
    console.log("editing:", editing)
  };

  const updateItem = (id, updatedItem) => {
    setEditing(false)
    setList(list.map(item => (item.id === id ? updatedItem: item)))
  }
  
  const removeItem = (title) => {
    setList(list.filter((item) => item.title !== title))
    console.log(list)
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
        className="list-scroll"
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