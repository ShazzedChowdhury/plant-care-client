import React, { use } from 'react';
import { AuthContext } from '../../Contexts/Firebase/AuthProvider';

const HomePage = () => {
    const { name } = use(AuthContext);
    console.log(name)
    return (
        <div>
            <h1>home page</h1>
        </div>
    );
};

export default HomePage;