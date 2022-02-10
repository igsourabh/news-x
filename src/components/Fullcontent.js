
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";

const Fullcontent = (props) => {
  const history = createBrowserHistory();
  const { id } = useParams();


  const articlesdata = useSelector((state) => state.default.def);

  const [articles, setArticles] = useState([]);


  const [progress, setprogress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setArticles(articlesdata[id]);
    // eslint-disable-next-line
  }, [articlesdata]);

  // this is for location push we use only one time axios if we refresh page full content page throw eeror so if i refresh tehy will redirect me on home page
  if (articles === undefined) {
    history.push("/");
    window.location.reload();
  }

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
        className="text-gray-400 bg-gray-900 body-font"
        style={{ minHeight: "100vh" }}
      >
        <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt=""
            src={articles.media}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {articles.title}
            </h1>
            <p className="leading-relaxed mb-8">{articles.summary}</p>
            <p className="leading-relaxed mb-8">{articles.excerpt}</p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fullcontent;
