import React from "react";
import "./blog-card.scss";

function BlogCard(props) {
  return (
    <a
      className="blog-card"
      href={props.link}
      target="_blank"
      rel="noreferrer"
      style={{ fontSize: "1.2em" }}
      id={props.id}
    >
      <img src={props.imgPath} className="blog-card__img" alt="to be done" />
      <div className="blog-card__body">
        <h4>{props.title}</h4>
        <p>{props.site}</p>
      </div>
    </a>
  );
}

export default BlogCard;
