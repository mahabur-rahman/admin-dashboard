import React from "react";
// scss
import "./news.scss";
// link
import { Link } from "react-router-dom";
// data
import { newsFeedData } from "../../Data/Data";

const DetailsNews = () => {
  return (
    <>
      <div id="newsFeed">
        {newsFeedData.map((feed) => {
          const { id, imgSrc, title, text, url } = feed;
          return (
            <div class="post_item clearfix" key={id}>
              <img src={imgSrc} alt={title} />
              <h4>
                <Link to={url}>{title}</Link>
              </h4>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DetailsNews;
