import React, { useState, useEffect } from "react"
import "./App.css";
import Header from "../src/components/Header";
import AddVideo from "../src/components/AddVideo";
import Search from "../src/components/Search";
import VideoCards from "../src/components/VideoCards";
// import staticData from "../src/data/exampleresponse.json";

const App = () => {
  // const [data, setData] = useState(staticData);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // fetch("https://askin-full-stack-project-db.herokuapp.com")
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
  }, [data]);

  return (
    <div className="App">
      <Header />
      <div className="d-flex">
        <AddVideo
          data={data}
          setData={setData}
        />
        <Search
          search={search}
          setSearch={setSearch}
        />
      </div>
      <VideoCards
        data={data}
        setData={setData}
        search={search}
      />
    </div>
  );
}

export default App;
