import React,{useState} from 'react'

function ToggleDiv() {
    const[visible,setVisible]=useState(true);

  return (
    <>
      
      <button onClick={()=>setVisible(!visible)}> Toggle</button>
      {visible && <div>Now you see me</div>}
    </>
  )
}

export default ToggleDiv
