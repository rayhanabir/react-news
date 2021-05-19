import React from 'react';
import News from './components/News/News';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chart from './components/Chart/Chart';




function App() {
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=cd47acfc8b1d49d4984df15a0e8aa458';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))

  },[])

  return (
    <div>
      
     <Header></Header>
     <Sidebar></Sidebar>
     <Chart></Chart>
     <h2>Headline: {articles.length}</h2>

      {
        articles.map(article => <News article = {article}></News>)
      }
    </div>
  );
}

export default App;
