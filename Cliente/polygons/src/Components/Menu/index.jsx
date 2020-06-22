import React, { useState } from 'react'
import Search from '../Search/index'
import './Menu.scss'

const Menu = () => {
  const [showMenu, setShowMenu] = useState(true)

  const showData = () => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  return (
    <div className='Menu-container'>
      {showMenu ? (
        <div className='Menu'>
          <button onClick={() => showData()}>Menú</button>
        </div>
      ) : (
        <Search data={showData} />
      )}
    </div>
  )
}

export default Menu
