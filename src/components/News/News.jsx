import React, { useState, useEffect } from "react";
import stylesNews from './News.module.css';

const News = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://bing-news-search1.p.rapidapi.com/news/trendingtopics?safeSearch=Off&textFormat=Raw",
      {
        method: "GET",
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-key":
            "9b0ac7227amshf2a86c54234438bp1e0394jsn32fc9c91c980",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  if (data === null) {
    return null;
  } else {
    return (
      <div className={stylesNews.wrapperNews}>
        {data.value.map((e) => {
          return (
            <div className="card" className={stylesNews.cardWrapper}>
              <div className={stylesNews.imgWrapper}><img src={e.image.url} className={stylesNews.size} className="card-img-top size" alt={e.name} title={e.name} /></div>
              <div className="card-body">
                <h5 className="card-title">{e.query.text}</h5>
                <p className="card-text">
                  
                </p>
                <a href={e.webSearchUrl} className="btn btn-primary">
                  To news
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default News;
