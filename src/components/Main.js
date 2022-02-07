import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";
const Main = () => {
  const [articles, setArticles] = useState([]);
  const [page, setpage] = useState(1);
  const [TotalResults, setTotalResults] = useState(0);

  const getnews = async() => {
   await axios
      .get(
        `https://api.newscatcherapi.com/v2/search?q=technology&lang=en&sort_by=relevancy&countries=in&page=${page}`,
        {
          headers: {
            "x-api-key": "XRghJiq8YqkHxwKXxNFPMbdfnzg5d6Z-ITLDb5LCAhs",
          },
        }
        )
        .then((res) => {
            console.log(res.data.articles)
          setArticles(res.data.articles);
          setTotalResults(res.data.total_hits);
         
        
          
        });
    };
  
  useEffect(() => {
    getnews();
  }, []);

  return (
    <>
    <section className="text-gray-400 bg-gray-900 body-font" style={{minHeight:"100vh"}}>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {articles.map((element, index) => {
        return (<Card
              key={index}
              media={element.media}
            title={element.title}
            content={element.summary}
            rank={element.rank}
            author={element.author}
            id={index}

            />)
      })}
       </div>
  </div>
</section>
    </>
  );
};

export default Main;
