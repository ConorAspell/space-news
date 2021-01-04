import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    fetch("https://test.spaceflightnewsapi.net/api/v2/articles"
    ).then((response) => response.json())
    .then((data) => {
      setNewsList(data);
    });
  }, []);
  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
        </div>
        <div className="newsContainer">
          {newsList.map((val, key) => {
            return (
            <div key={key} className="article" onClick={() => {window.location.href = val.url}}>
              <h1>TEST TEST TEST</h1>
               <h3>{val.title} </h3>
               <img src={val.imageUrl} />
               <p>{val.summary}</p>
               <h4>{val.publishedAt}</h4>
            </div>
            );
          })}
        </div>
    </div>
  );
}

export default App;
