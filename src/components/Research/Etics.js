import React from "react";
import dora from "../../assets/Research/dora.png";
import penAccess from "../../assets/Research/pen-access.png";

function Etics() {
  return (
    <div className="pt-5 pb-5">
      <img
        src={dora}
        alt="Signatory of Dora logo"
        className="max-width-250 me-4 py-3"
      ></img>
      <img
        src={penAccess}
        alt="pen access suporter logo"
        className="max-width-250 py-3"
      ></img>
    </div>
  );
}

export default Etics;
