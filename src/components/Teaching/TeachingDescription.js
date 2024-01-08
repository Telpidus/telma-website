import React from "react";

import "./teaching.scss";

function TeachingDescription() {
  return (
    <div className="teaching-description">
      <p>
      <b>
       Designing multidisciplinary curriculum & learning and teaching, simultaneously, are some of my favourite activities as a scholar.
      </b>  
      </p>
      <p>I teach in different contexts:</p>
      <ul className="font-size-medium mt-5 mb-5">
        <li className="mb-3">
          <i className="fa fa-book color--secondary"></i> <b>Formal education </b> - University courses & invited lectures 
           <br />
          Evolutionary biology & Ecology & Bioinformatics
        </li>
        <li className="mb-3">
          <i className="fa fa-tree color--secondary"></i> Informal education - Science outreach in schools and other education institutions
           <br />
          Biodiversity & Evolution
        </li>
        <li className="mb-3">
          {" "}
          <i className="fa fa-heart color--secondary"></i> Depth education - Virtual and in-person community spaces
            <br />
          Ecosystemic awareness & Socio-Ecological issues
        </li>
      </ul>
      <p>
          In any context I try to hold education spaces grounded in belonging, that honor creativity and scientific rigour while allowing uncertainty, diversity and non-violent disagreement.
          I try to make lecture plans multisensory, interactive and responsive to the learning needs & curiosities of the group.
      </p>
      <p>
          <b>
          When designing and teaching curriculum I apply student-centered, active, 3D learning principles focused on core ideas, crosscutting concepts, and ethically guided scientific practices.
          </b>      
         <br />
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeSHGqjyTJxvbfgwhyCUNrtti2seQ9AWjM0Q8bTVCYJEu7DIA/viewform?usp=sf_link"
            className="button-secondary"
          >
            TEST BUTTON! 
          </a> 
      </p>
      <p>
        <span className="color--quarternary d-block">
       <b>
        I am interested in contributing to an equitable education system that provides multidisciplinary knowledge that supports systemic thinking at the service of inclusive and sustainable futures, for all.
       </b>
        </span>{" "}
      </p>
    </div>
  );
}

export default TeachingDescription;
