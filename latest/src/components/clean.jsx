import { useState, useEffect } from "react";

function Clean() {
  const [cleans, setclean] = useState(null);

  useEffect(() => {
    console.log("start");
    const Interval = setInterval(() => {
      setclean((prev) =>{ 
        console.log(prev)
        return prev + 1});
      
    }, 1000);


    return () => {
      <h1>{cleans}</h1>;
      console.log("stop");
      clearInterval(Interval);

    };
  }, []);
  return (
    <div>
      
      <h1>{cleans}</h1>
      <button onClick={() => {setclean(0)}}>reset to 0</button>
    </div>
  );
}

export default Clean;
