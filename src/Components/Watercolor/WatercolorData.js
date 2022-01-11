import React, { useState } from 'react';
import './watercolorData.css';

const painting=[
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
    desc:"Watercolor on Yupo pa",
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

export default function WatercolorData({painting}){
  const [isActive, setIsActive] = useState(false);

    

  return (
    <>
      <div className='watercolor'>
          <div className="container" >
          { isActive && 
          <div className='card'>
            <div className='cardLeft'>
              <img className="cardWatercolorImg" 
                src={painting.img} 
                alt="Cristina Plesa's Water color paintings"
                />
            </ div>
            <div className='cardRight'> 
              <i class="fas fa-times-circle" onClick={(e) => setIsActive(false)}></i>
              <h3 className='watercolorTitle'> {painting.title} </h3>
              <div className="watercolorDesc">{painting.desc}</div>
            </div>  
          </div>
          }
            <img className="watercolorImg" 
              src={painting.img} 
              alt="Cristina Plesa's Water color paintings"
              onClick={(e) => setIsActive(true)}
              />
          </div>          
      </div>  
    </>
        )
      }
