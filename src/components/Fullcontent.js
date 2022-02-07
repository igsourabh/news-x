import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Fullcontent = () => {
    const {id}=useParams()
    const [articles, setArticles] = useState([]);
    const [page, setpage] = useState(1);
    const [TotalResults, setTotalResults] = useState(0);
    const getnews = async() => {
        await axios
           .get(
             `https://api.newscatcherapi.com/v2/search?q=corona&lang=en&sort_by=relevancy&countries=in&page=${page}`,
             {
               headers: {
                 "x-api-key": "XRghJiq8YqkHxwKXxNFPMbdfnzg5d6Z-ITLDb5LCAhs",
               },
             }
             )
             .then((res) => {
                 console.log(res.data.articles[id])
               setArticles(res.data.articles[id]);
               setTotalResults(res.data.total_hits);
              
             });
         };
       
       useEffect(() => {
         getnews();
       }, []);
     
  return (
      <>
      
      <section class="text-gray-400 bg-gray-900 body-font" style={{minHeight:"100vh"}}>
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="" src={articles.media}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{articles.title}</h1>
      <p class="leading-relaxed mb-8">{articles.summary}</p>
      <p class="leading-relaxed mb-8">{"Expert opinion:  "+articles.excerpt}</p>
      <div class="flex justify-center">
     
      </div>
    </div>
    
  </div>
  
</section>

      </>
  )
};

export default Fullcontent;
