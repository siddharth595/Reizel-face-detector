import React from "react";

const Face = ({eachFace,count}) =>

     <div className='bounding-box'  key = {count} style={{top: eachFace.topRow, right: eachFace.rightCol, bottom: eachFace.bottomRow, left: eachFace.leftCol}}></div>



     export default Face;
