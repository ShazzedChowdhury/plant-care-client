import React, { use } from 'react';
import { AuthContext } from '../../Contexts/Firebase/AuthProvider';
import BannerCarousel from './BannerCarousel/BannerCarousel';
import NewAddPlantSec from './NewPlantsSec/NewPlantsSec';
import TopPlantCareMistakeSec from './TopPlantCareMistakeSec/TopPlantCareMistakeSec';

const HomePage = () => {

    return (
      <>
        <section>
          <BannerCarousel />
        </section>
        <section>
          <NewAddPlantSec />
        </section>
        <section className="max-w-screen-xl mx-auto">
            <TopPlantCareMistakeSec />
        </section>
      </>
    );
};

export default HomePage;