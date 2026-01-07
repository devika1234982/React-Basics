import React from "react"
import HelloWorld from "./components/Hello"
import Greeting from "./components/Class"
import Render from "./components/Render"
function App(){
  return(
    <div>
      <HelloWorld/>
      <Greeting name="Devika"/>
      <Render/>
    </div>
  )
}

export default App