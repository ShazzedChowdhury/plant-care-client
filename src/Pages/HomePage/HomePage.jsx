import React, { use } from 'react';
import { AuthContext } from '../../Contexts/Firebase/AuthProvider';
import BannerCarousel from './BannerCarousel/BannerCarousel';
import NewAddPlantSec from './NewPlantsSec/NewPlantsSec';

const HomePage = () => {

    return (
      <>
        <section>
          <BannerCarousel />
        </section>
        <section>
          <NewAddPlantSec />
        </section>
      </>
    );
};

export default HomePage;