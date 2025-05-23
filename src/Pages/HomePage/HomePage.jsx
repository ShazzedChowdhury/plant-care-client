import React, { Suspense, use } from "react";
import BannerCarousel from "./BannerCarousel/BannerCarousel";
import NewAddPlantSec from "./NewPlantsSec/NewPlantsSec";
import TopPlantCareMistakeSec from "./TopPlantCareMistakeSec/TopPlantCareMistakeSec";
import BeginnerFriendlyPlantsSec from "./BeginnerFriendlyPlantsSec/BeginnerFriendlyPlantsSec";
import LoadingSpiner from "../../Components/Loader/LoadingSpiner";

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
        <Suspense fallback={<LoadingSpiner />}>
          <TopPlantCareMistakeSec />
        </Suspense>
      </section>
      <section className="bg-gray-100">
        <Suspense fallback={<LoadingSpiner />}>
          <BeginnerFriendlyPlantsSec />
        </Suspense>
      </section>
    </>
  );
};

export default HomePage;
