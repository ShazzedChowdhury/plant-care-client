import React, { use } from 'react';
import { DashboardDataContext } from '../../Contexts/Firebase/Dashboard/DashboardDataProvider';
import LoadingSpiner from '../../Components/Loader/LoadingSpiner';

const OverviewPage = () => {
    const { name, loading, allPants, myPlants } = use(DashboardDataContext);
    console.log(loading, myPlants, allPants);

    if(loading) {
        return <LoadingSpiner />
    }
    return (
        <div>
            
        </div>
    );
};

export default OverviewPage;