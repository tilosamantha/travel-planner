import React from 'react';
import './packing.css';

const PackingList = ({packingList, toggle}) => {
  return (
    <div className="packing-body">
      <h1 className="packing-list-title">What to pack:</h1>
      <button onClick={() => toggle()}>Edit</button>
      <div id="item-columns">
        {packingList.map(function(item, i){
          return (
            <div key={i}>
              <h3>
              <input className="packing-check" type="checkbox" />  
              {item.quantity} {item.name}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PackingList;