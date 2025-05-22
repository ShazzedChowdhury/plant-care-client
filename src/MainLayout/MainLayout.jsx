import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
      <>
        <main>
          <header className="sticky z-10 top-0 left-0">
            <Navbar />
          </header>
          <Outlet />
        </main>
        <footer className="border-t border-gray-200">
          <Footer />
        </footer>
      </>
    );
};

export default MainLayout;