import { useState, useEffect } from "react";

function Count() {
  const [counts, setCount] = useState(0);

  useEffect(() => {
    // setCount(counts)
    console.log(counts);
  },[counts]);

  function zero(counts){
    if(counts -1 < 0)
        return
    
    setCount(prev => prev-1)

  }


return (
  <div>
    <h1>{counts}</h1>
    <button onClick={() => setCount(counts + 1)}>+</button>
    <button onClick={() => zero(counts)}>-</button>
  </div>
);
}
export default Count;
