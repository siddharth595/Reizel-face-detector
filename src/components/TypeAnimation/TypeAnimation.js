
import React from 'react';
import './typeanimation.css';
import Typed from 'react-typed';




const TypeAnimation = () => {
 return (
   <div id='rest'>
     <h2 id='color' className='tc mb4 '>Hi I am Reizel a Smart Face Finder in images <span>🚀🚀-)</span></h2>
   <Typed
     strings={['Simply you have to do is paste the link of image to detect the face']}
     typeSpeed={46}
     backSpeed={20}
     loop
                />
                
  </div>
   );

  }

export default TypeAnimation;