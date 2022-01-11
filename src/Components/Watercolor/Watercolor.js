import React, { useState } from 'react';
import Header from '../Header/Header.js';
import WatercolorData from './WatercolorData.js';
import './watercolor.css';

const data =[
  {
    id: 1,
    title:"Portrait Studies",
    desc:"Black ink/Gestural studies",
    img:"Assets/Watercolor/IMG_1575.jpeg",
  },
  {
    id: 2,
    title:"Family Thumbnail Studies",
    desc:"Watercolor on Yupo paper",
    img:"Assets/Watercolor/IMG_1595.jpeg",
  },
  {
    id: 3,
    title:"Childhood moment",
    desc:"Watercolor on Yupo paper",
    img:"Assets/Watercolor/IMG_1628.jpeg",
  },
  {
    id: 4,
    title:"Nature Studies",
    desc:"Pencil and Watercolor",
    img:"Assets/Watercolor/IMG_1650.jpeg",
  },
  {
    id: 5,
    title:"Running out of time",
    desc:"Landscape/Pencil, Watercolor, and Ink",
    img:"Assets/Watercolor/IMG_1976.jpeg",
  },
]

const Watercolor = () => {
  const [isActive, setIsActive] = useState(false);


  return (
    <>
      <Header />
      {data.map((p) => {
        return (
        <WatercolorData painting={p} />
        )
      })}
    </>
  )
}



      export default Watercolor;
      
      // <img className='watercolorImg' src='Assets/Watercolor/IMG_1595.jpeg' alt='some image2' />
      // <img className='watercolorImg' src='Assets/Watercolor/IMG_1628.jpeg' alt='some image3' />
      // <img className='watercolorImg' src='Assets/Watercolor/IMG_1650.jpeg' alt='some image4' />
      // <img className='watercolorImg' src='Assets/Watercolor/IMG_1976.jpeg' alt='some image5' />