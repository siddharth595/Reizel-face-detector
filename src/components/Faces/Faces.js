import React from "react";
import Face from "../Face/Face";
import "./faces.css";

const Faces = ({ imageUrl, box }) => {
  let count = 0;
  return (
    <div className="center ma">
      <div className="absolute mt5">
        <img id="inputimage" alt="" src={imageUrl} width="450px" heigh="auto" />

        {box.map((eachBox) => (
          <Face eachFace={eachBox}  key={count++}/>
        ))}
      </div>
    </div>
  );
};

export default Faces;
