import React from 'react'
import { NavLink } from 'react-router-dom'
import image1 from '../assets/images/monty1.webp'
import image2 from '../assets/images/monty2.webp'
import image3 from '../assets/images/monty3.webp'
import image4 from '../assets/images/monty4.webp'
import image5 from '../assets/images/monty5.webp'
import image6 from '../assets/images/monty6.webp'
import Navtoggle from './Navtoggle'

const Navigation = () => {
  return (
    <>
      <Navtoggle />
      <h1>monty python</h1>
      <div className="navigation">
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}
          style={{
            backgroundImage: `url(${image1})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <ul>
            <li>home</li>
          </ul>
        </NavLink>

        <NavLink
          to="/media"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}
          style={{
            backgroundImage: `url(${image2})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <ul>
            <li>Media</li>
          </ul>
        </NavLink>
        <NavLink
          to="/news"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}
          style={{
            backgroundImage: `url(${image3})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <ul>
            <li> News</li>
          </ul>
        </NavLink>
        <NavLink
          to="/pythonland"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}
          style={{
            backgroundImage: `url(${image4})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <ul>
            <li>P'sland</li>
          </ul>
        </NavLink>
        <NavLink
          to="/shop"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}
          style={{
            backgroundImage: `url(${image5})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <ul>
            <li>Shop</li>
          </ul>
        </NavLink>
        <NavLink
          to="/works"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}
          style={{
            backgroundImage: `url(${image6})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <ul>
            <li>Works</li>
          </ul>
        </NavLink>
      </div>
    </>
  )
}

export default Navigation
