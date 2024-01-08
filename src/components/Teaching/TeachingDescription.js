import React from "react";

import "./teaching.scss";

function TeachingDescription() {
  return (
    <div className="teaching-description">
      <p>
      <b>
       <span className="color--quarternary d-block">
        I am interested in contributing to an equitable education system that provides multidisciplinary knowledge in support of systemic thinking, and inclusive & sustainable futures, for all.
        </span>{" "}
     </b> 
     </p>
      <p>
    <b>
      I teach in different contexts:
    </b>
      </p>
      <ul className="font-size-medium mt-5 mb-5">
        <li className="mb-3">
          <i className="fa fa-book color--secondary"></i> <b>Formal education </b> - University courses & invited lectures 
           <br />
     <span className="color--quarternary d-block">
          Evolutionary biology & Ecology & Bioinformatics
     </span>{" "}
        </li>
        <li className="mb-3">
          <i className="fa fa-tree color--secondary"></i> <b>Informal education</b> - Science outreach in schools and other education institutions
           <br />
     <span className="color--quarternary d-block">
          Biodiversity & Evolution
    </span>{" "}
        </li>
        <li className="mb-3">
          {" "}
          <i className="fa fa-heart color--secondary"></i> <b>Depth education</b> - Virtual and in-person community spaces
            <br />
      <span className="color--quarternary d-block">
          Ecosystemic awareness & Socio-Ecological issues
     </span>{" "}
        </li>
      </ul>
      <p>
          I strive to create education spaces grounded in <b>belonging</b>, <b>creativity</b> and <b>scientific rigour</b>, that hold space for <b>wonder</b>, <b>uncertainty</b>, <b>diversity</b> and <b>non-violent disagreement</b>.
      </p>
      <p>
          <b>
          When designing and teaching curriculum I apply student-centered, active, 3D learning principles focused on core ideas, crosscutting concepts, and ethically guided scientific practices.
          </b>      
         <br />
      </p>
      <p>
        <a
            href="https://www.science.org/doi/10.1126/science.1096022"
            className="button-secondary"
          >
            Teaching research I follow  
          </a> 
              {"  "}
        <a
            href="https://evolution-outreach.biomedcentral.com/articles/10.1186/s12052-021-00143-1"
            className="button-secondary"
          >
            Iclusive tools I've developed
        </a> 
      </p>
           <p>
              <span className="color--quarternary d-block">
              See CV for details of where I've taught
              </span>{" "}
          </p>
    </div>
  );
}

export default TeachingDescription;
