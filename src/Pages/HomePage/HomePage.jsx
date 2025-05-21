import React, { use } from 'react';
import { AuthContext } from '../../Contexts/Firebase/AuthProvider';
import BannerCarousel from './BannerCarousel/BannerCarousel';
import NewAddPlantSec from './NewAddPlantSec/NewAddPlantSec';

const HomePage = () => {

    return (
      <>       
          <BannerCarousel />
          <NewAddPlantSec />
      </>
    );
};

export default HomePage;