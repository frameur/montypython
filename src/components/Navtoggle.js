import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import image1 from '../assets/images/monty1.webp'
import image2 from '../assets/images/monty2.webp'
import image3 from '../assets/images/monty3.webp'
import image4 from '../assets/images/monty4.webp'
import image5 from '../assets/images/monty5.webp'
import image6 from '../assets/images/monty6.webp'
import image7 from '../assets/images/blackknight.jpg'
const Navtoggle = () => {
  useEffect(() => {
    let menuToggle = document.querySelector('.menuToggle')
    let navigation = document.querySelector('.navitoggle')
    menuToggle.onclick = function () {
      navigation.classList.toggle('active')
    }
  }, [])
  return (
    <div>
      <div className="navitoggle">
        <div className="userBx">
          <div className="imgBx">
            <img src={image7} alt="" />
          </div>
          <p className="username">Monty Python</p>
        </div>
        <div className="menuToggle"></div>
        <ul className="menu">
          <li className="lienToggle">
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <img className="imgIcon" src={image1} alt="" />
              Home
            </NavLink>
          </li>
          <li className="lienToggle">
            <NavLink
              to="/media"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <img className="imgIcon" src={image2} alt="" />
              Media
            </NavLink>
          </li>
          <li className="lienToggle">
            <NavLink
              to="/news"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <img className="imgIcon" src={image3} alt="" />
              News
            </NavLink>
          </li>
          <li className="lienToggle">
            <NavLink
              to="/pythonland"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <img className="imgIcon" src={image4} alt="" />
              P'sland
            </NavLink>
          </li>
          <li className="lienToggle">
            <NavLink
              to="/shop"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <img className="imgIcon" src={image5} alt="" />
              Shop
            </NavLink>
          </li>
          <li className="lienToggle">
            <NavLink
              to="/works"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <img className="imgIcon" src={image6} alt="" />
              Works
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navtoggle
