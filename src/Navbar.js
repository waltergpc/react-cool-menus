import React from 'react'
import cake from './images/cake.png'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './Context'

const Navbar = () => {
  const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext()

  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubMenu(page, { center, bottom })
  }

  const handleSubMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubMenu()
    }
  }
  return (
    <nav className="nav" onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={cake} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              create
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  )
}

export default Navbar
