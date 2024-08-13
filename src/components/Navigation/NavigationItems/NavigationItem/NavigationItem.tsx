import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

interface NavigationItemProps {
  link: string;
  exact?: boolean;
  children: ReactNode;
}
const NavigationItem = ({ link, exact, children }: NavigationItemProps) => (
  <li className="navigation-item">
    <NavLink to={link} end={exact}>
      {children}
    </NavLink>
  </li>
);

export default NavigationItem;
