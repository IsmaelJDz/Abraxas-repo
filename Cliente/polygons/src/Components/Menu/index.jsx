import React, { useState } from 'react'
import Search from '../Search/index'
import Icon from '@material-ui/core/Icon'
import MenuIcon from '@material-ui/icons/Menu'

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
          <button onClick={() => showData()}>
            <Icon style={{ textAlign: 'center' }}>
              <MenuIcon />
            </Icon>
            <p className='Menu-title'>Menú</p>
          </button>
        </div>
      ) : (
        <Search data={showData} />
      )}
    </div>
  )
}

export default Menu
