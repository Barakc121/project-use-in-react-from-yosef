import { useState, useEffect } from "react";


function Hello() {
 const[Hello,setHello]=useState(null)

  useEffect(() => {
    setHello('Hello operat')
    console.log("Mounted");
  }, []); 

  return (
    <div>
      <h1>{Hello}</h1>
    </div>
  );
}







export default Hello;
