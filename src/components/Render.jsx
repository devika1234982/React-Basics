const fruits =["Apple","Banana","Orange"];
function Render(){
    return(
       <ul>
       {fruits.map((fruit,index)=>(
        <li key={index}>{fruit}</li>
       ))}
       </ul>
    )
}

export default Render