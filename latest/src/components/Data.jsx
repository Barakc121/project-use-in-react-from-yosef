import { useState, useEffect } from "react";

function Data() {
  const [data, setData] = useState(null);

  async function name() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      console.log(data)
      setData(data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    name();
  }, []);
  useEffect(() => {
    data && console.log(data);
  }, [data]);
}

export default Data;
