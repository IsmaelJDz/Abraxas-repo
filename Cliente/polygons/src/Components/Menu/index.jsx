import React, { useState } from 'react';
import Search from '../Search/index';
import './Menu.css';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(true);

  const showData = () => {
    setShowMenu(false);
  };

  return (
    <div className="Menu-container">
      {showMenu ? (
        <div className="Menu">
          <button onClick={() => showData()}>Menú</button>
        </div>
      ) : (
        <Search />
      )}
    </div>
  );
};

export default Menu;
