import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";
import { changesearch } from "../Redux/defaultSlice";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import { useDispatch } from "react-redux";

const Main = () => {
  const data = useSelector((state) => state.theme.color);
  const dap = useSelector((state) => state.default.def);
 
  const [page, setpage] = useState(1);
const [loading, setloading] = useState(false);
const dispatch=useDispatch()

  const updatenews = async () => {
    setloading(true)
    await axios
      .get(
        `https://api.newscatcherapi.com/v2/search?q=${data}&lang=en&sort_by=relevancy&countries=in&page=${page}`,
        {
          headers: {
            "x-api-key": "XRghJiq8YqkHxwKXxNFPMbdfnzg5d6Z-ITLDb5LCAhs",
          },
        }
      )
      .then((res) => {
      setloading(false)
        dispatch(changesearch(res.data.articles))
      
      });
  };
  console.log(dap)

  useEffect(() => {
    window.scrollTo(0, 0);
    updatenews();
  }, [data]);
  useEffect(() => {
   setloading(false)
  }, []);

  return (
    <>
    {loading &&  <div className="text-gray-400 bg-gray-900 body-font text-center m-auto" style={{ minHeight: "80vh" }}><h1 >loading</h1></div>}
    {!loading &&  <section
        className="text-gray-400 bg-gray-900 body-font "
        style={{ minHeight: "80vh" }}
        >
        <div className="container px-5 py-8 mx-auto">
          <Searchbar />
          <div className="flex flex-wrap -m-4 my-5">
            {dap.map((element, index) => {
              return (
                <Card
                  key={index}
                  media={element.media}
                  title={element.title}
                  content={element.summary}
                  rank={element.rank}
                  author={element.author}
                  id={index}
                />
              );
            })}
          </div>
        </div>
      </section>}
    </>
  );
};

export default Main;
