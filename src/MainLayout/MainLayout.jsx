import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    return (
      <>
        <main>
          <header className="sticky z-10 top-0 left-0">
            <Navbar />
          </header>
          <Outlet />
        </main>
        <footer></footer>
      </>
    );
};

export default MainLayout;