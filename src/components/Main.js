import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { changeTextColor } from "../Redux/searchSlice";
import "../Searchbar.css";
import Card from "./Card";
import { changesearch } from "../Redux/defaultSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LoadingBar from "react-top-loading-bar";

import { increment } from "../Redux/pageSlice";
import { decrement } from "../Redux/pageSlice";
import { notfound } from "../Redux/notFoundSlice";
import { incrementByAmount } from "../Redux/pageSlice";
import Spinner from "./Spinner";
const Main = () => {
  const data = useSelector((state) => state.theme.color);
  const articlesdata = useSelector((state) => state.default.def);
  const querr = useSelector((state) => state.notf.value);
  const Pagedata = useSelector((state) => state.page.value);
  const apikey = "L7L-gf34K5jk8SUF3uTLykk634GfWVeCUoJS_fSPhII";
  const [value, setvalue] = useState("");
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [defultquerry, setdefultquerry] = useState("top,tech,crypto");
  const [progress, setprogress] = useState(0);
  const [not, setnot] = useState(false);
  const [totalresult, settotalresult] = useState(0);
  const updatenews = async () => {
    setloading(true);

    await axios
      .get(
        `https://api.newscatcherapi.com/v2/search?q=${querr}${data}&lang=en&sort_by=relevancy&countries=in&page=${Pagedata}&page_size=24`,
        {
          headers: {
            "x-api-key": `${apikey}`,
          },
        }
      )
      .then((res) => {
        setprogress(10);
        setprogress(25);
        setprogress(38);
        setprogress(55);
        setloading(false);
        setprogress(70);

        if (res.data.page_size === 0) {
          setnot(false);
        } else {
          setnot(true);

          dispatch(changesearch(res.data.articles));
          settotalresult(res.data.total_pages);
        }

        setprogress(80);
        setprogress(100);
      });
  };

  // for search bar handel change
  const handelchange = (e) => {
    setvalue(e.target.value);
  };
  // for search bar handel click

  const handelclick = () => {
    dispatch(changeTextColor(value));
    dispatch(incrementByAmount(1));
    dispatch(notfound(""));
  };

  // for next page

  const pageplus = () => {
    dispatch(increment());
  };
  // for previous page

  const pageminus = () => {
    dispatch(decrement());
  };

  // for window.scroll
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onbeforeunload();
    updatenews();
  }, [data, Pagedata]);

  console.log(articlesdata);
  return (
    <>
      <LoadingBar height={2} color="#4F46E5" progress={progress} />
      {loading && (
        <div
          className=" bg-gray-900 "
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </div>
      )}

      {!loading && (
        <section
          className="text-gray-400 bg-gray-900 body-font "
          style={{ minHeight: "80vh" }}
        >
          <div style={{ height: "20px" }}>
            {!not && (
              <div className="text-white text-center m-auto text-[17px]">
                <h1>Sorry, no results found - try a different search..</h1>
              </div>
            )}
          </div>

          <div className="container px-5 py-8 mx-auto">
            {/* Searcg Bar  */}
            <div
              id="searchbar"
              className="container"
              style={{
                display: "flex",

                margin: "0 auto 0 auto",
              }}
            >
              <input
                type="email"
                onChange={handelchange}
                name="email"
                value={value}
                className="form-control mx-2"
                id="emailAddress"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button
                onClick={handelclick}
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-2"
              >
                Search
              </button>
            </div>
            <div className="flex flex-wrap -m-4 my-5">
              {articlesdata.map((element, index) => {
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
            {not && (
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <button
                  onClick={pageminus}
                  disabled={Pagedata == 1}
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-2"
                >
                  {"Previous " + (Pagedata - 1)}
                </button>

                <button
                  onClick={pageplus}
                  disabled={Pagedata == totalresult}
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-2"
                >
                  {"Next Page " + (Pagedata + 1)}
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Main;
