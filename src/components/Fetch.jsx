
import React, { useEffect, useState } from 'react'

function Fetch() {
    const [data , setData]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(r=>r.json())
        .then(result=>{
            setData(result.products);
        });
    },[])
  return (
    <div>
      <h2>Products</h2>
      {data.map(product=>(
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  )
}

export default Fetch
