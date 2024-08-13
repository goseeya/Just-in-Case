import React, { ReactNode, useState } from 'react';
import './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import useAuth from 'hooks/use-auth';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const auth = useAuth();
  const isAuthenticated = auth.token !== null;

  const sideDrawerClosedHandler = () => {
    console.log('sideDrawerClosedHandler')
  };

  const sideDrawerOpenHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <>
      <Toolbar isAuth={isAuthenticated} clickMenu={sideDrawerOpenHandler} />
      <SideDrawer
        isAuth={isAuthenticated}
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
      />
      <main className="content">{children}</main>
    </>
  );
};

export default Layout;
