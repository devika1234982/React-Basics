import React,{useState} from 'react'

function CheckBox() {
    const[checked,setChecked]=useState(false)
  return <input type="checkbox" checked={checked} onChange={e=>setChecked(e.target.checked)}/>
}

export default CheckBox
