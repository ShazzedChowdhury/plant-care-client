import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Sliders from '../Components/BannerCarousel/BannerCarousel';

const MainLayout = () => {
    return (
      <>
        <header>
          <Navbar />

          <section>
            <Sliders />
          </section>
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </>
    );
};

export default MainLayout;