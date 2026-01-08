import React from "react";

function Conditional() {
  
    const items = ["Apple", "Banana", "Orange"];

  return (
    <div>
      <h2>Items</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) :
     (<p>No items</p> 
        
     )}
    </div>
  );
}

export default Conditional;
