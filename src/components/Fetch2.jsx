// import { useState, useEffect } from "react";

// function Fetch2() {
//   const [id, setId] = useState(1);
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then(res => res.json())
//       .then(data => setProduct(data));
//   }, [id]);

//   return (
//     <>
//       <select onChange={(e) => setId(e.target.value)}>
//         <option value="1">Product 1</option>
//         <option value="2">Product 2</option>
//         <option value="3">Product 3</option>
//       </select>

//       {product && <h3>{product.title}</h3>}
//     </>
//   );
// }

// export default Fetch2;
