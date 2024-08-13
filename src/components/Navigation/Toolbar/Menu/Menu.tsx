import React from 'react';
import './Menu.scss';

interface MenuProps {
  menuClicked: () => void;
}
const Menu = ({ menuClicked }: MenuProps) => (
  <div className="menu" onClick={menuClicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Menu;
