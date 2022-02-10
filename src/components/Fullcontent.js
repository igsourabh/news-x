import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";

const Fullcontent = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.theme.color);

  const articlesdata = useSelector((state) => state.default.def);

  const [articles, setArticles] = useState([]);
  const [page, setpage] = useState(1);
  const [TotalResults, setTotalResults] = useState(0);
  const [progress, setprogress] = useState(0);

  console.log(articlesdata);

  useEffect(() => {
    window.scrollTo(0,0)
    setArticles(articlesdata[id]);
  }, [articlesdata]);

  useEffect(() => {
    setprogress(10);
    setprogress(25);

    setprogress(38);
    setprogress(55);

    setprogress(70);
    setprogress(80);
    setprogress(100);
  }, []);

  return (
    <>
      <LoadingBar height={2} color="#4F46E5" progress={progress} />

      <section
        class="text-gray-400 bg-gray-900 body-font"
        style={{ minHeight: "100vh" }}
      >
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt=""
            src={articles.media}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {articles.title}
            </h1>
            <p class="leading-relaxed mb-8">{articles.summary}</p>
            <p class="leading-relaxed mb-8">{articles.excerpt}</p>
            <div class="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fullcontent;
