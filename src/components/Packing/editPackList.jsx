import React from 'react';
import './packing.css';

const EditPackList = ({packingList, removePackItem, toggle}) => {
  return (
    <div className="packing-body">
      <h1 className="packing-list-title">Editing Checklist</h1>
      <button onClick={() => toggle()}>Exit Editing</button>
      <div id="item-columns">
        {packingList.map(function(item, i){
          return (
            <div key={i}>
              <h3>
              <input className="packing-check" type="checkbox" />  
              {item.quantity} {item.name}</h3>
              <button
                className="delete-btn"
                onClick={() => removePackItem(item.name)}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EditPackList;