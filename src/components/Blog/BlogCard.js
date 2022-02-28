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
      <img src={props.imgPath} className="blog-card__img" alt={props.alt} />
      <div className="blog-card__body">
        <h5>{props.title}</h5>
        <p className="blog-card__description">{props.description}</p>
      </div>
    </a>
  );
}

export default BlogCard;
