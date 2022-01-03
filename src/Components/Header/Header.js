import React from 'react'
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="nameTitle">
        <img className="headerAvatar" src="Assets/Logo/IMG_3417.jpeg"/>
       <div>
        Cristina Plesa
       </div>
      </div>
      <div className="navbar">
        <div className="navLink navbarHome">Home</div>
        <div className="navLink navabarAcrylic">Acrylic</div>
        <div className="navLink navabarWatercolor">Watercolor</div>
        <div className="navLink navbarDrawings">Drawings</div>
        <div className="navLink navbarBlackBook">Black Book</div>
        <div className="navLink navbarContact">Contact</div>
      </div>
    </div>
  )
}
