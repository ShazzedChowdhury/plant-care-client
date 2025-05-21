import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </>
    );
};

export default MainLayout;