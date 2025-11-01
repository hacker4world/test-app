import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/get-data")
      .then((res) => setData(res.data.data))
      .catch(() => {
        setData("Error loading data");
      });
  }, []);

  return (
    <>
      <h1>{data}</h1>
    </>
  );
}

export default App;
