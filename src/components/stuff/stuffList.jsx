import React from 'react';
import './stuff.css';

const StuffList = ({list, removeItem, toggle, isExpanded, editItem}) => {
  return (
    <div className="list-body">
      <h1  className="stuff-list-title">Things To Do</h1>
      {list.map(function(item){
        return (
          <div key={item.title}>
            <button 
              className="list-title" 
              onClick={() => {toggle()}}>
              {item.title}
            </button>
            <div id={isExpanded? "details-showing": "details-hiding"}>
              <p className="list-des">{item.description}</p>
              <a 
                className="list-link" 
                target="_blank" 
                href={item.link}>
                {item.link}
              </a>

              <br/>
              <button 
                className="list-btn" 
                onClick={() => editItem(item, item.stuff_id)}>
                edit
              </button>
              <button 
                className="list-btn"
                onClick={() => removeItem(item.title, item.stuff_id)}>
                remove
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StuffList;