import React from "react";
import "./basic-card.scss";

function BasicCard(props) {
  return (
    <div className="basic-card">
      <p className="basic-card__headline">
        Nature Communications (2021) 12, 4850
      </p>
      <p>
        Laurentino TG, Moser D, Roesti M, Ammann M, Frey A, Ronco F, Kueng B,
        Berner D (2020){" "}
      </p>
      <a href="batatas.com" className="basic-card__link">
        <h3>
          Genomic release-recapture experiment in the wild indicates
          within-generation polygenic selection in stickleback fish
        </h3>
      </a>
      <div>
        <a href="batatas.com" className="basic-card__link-secondary">
          Read about 3 lessons the blind community taught us
        </a>
        <a href="battas.com" className="basic-card__link-secondary">
          Feature in a Portuguese news paper{" "}
        </a>
      </div>
    </div>
  );
}

export default BasicCard;
