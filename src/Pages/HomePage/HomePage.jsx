import React, { use } from 'react';
import { AuthContext } from '../../Contexts/Firebase/AuthProvider';
import BannerCarousel from '../../Components/BannerCarousel/BannerCarousel';

const HomePage = () => {

    return (
      <>
        <section>
          <BannerCarousel />
        </section>
      </>
    );
};

export default HomePage;