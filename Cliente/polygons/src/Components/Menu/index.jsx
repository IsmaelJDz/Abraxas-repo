import React, { useState } from 'react';

import './Menu.css';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(initialState);

  const showData = () => {
    console.log('click');
  };

  return (
    <div className="Menu-container">
      <div className="menu">
        <button onClick={() => showData()}>Menú</button>
      </div>
    </div>
  );
};

export default Menu;
