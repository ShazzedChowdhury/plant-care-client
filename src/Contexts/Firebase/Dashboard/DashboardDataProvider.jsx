import React, { createContext, use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
export const DashboardDataContext = createContext();



const DashboardDataProvider = ({children}) => {
    const [allPants, setAllPants] = useState([]);
    const [myPlants, setMyPlants] = useState([]);
    const [loading, setLoading] = useState(true)
    const {user} = use(AuthContext);
    console.log(allPants)
    console.log(myPlants)
    console.log(user);
    useEffect(() => {
        const fetchAllPlants = async() => {
            try{
                const res = await fetch(
                  "https://b11-a10-mango-plant-care-server.vercel.app/all-plants"
                );
                const data = await res.json();
                setAllPants(data);
                setLoading(false)
            }catch (err) {
                console.log(err)
            }
        }

       
        fetchAllPlants();
        
    }, [user])

    useEffect(() => {
      const fetchMyPlants = async () => {
        try {
          const res = await fetch(
            `https://b11-a10-mango-plant-care-server.vercel.app/my-plants/${user.email}`
          );
          const data = await res.json();
          setMyPlants(data);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      fetchMyPlants();
    }, [user]);
    return (
      <DashboardDataContext
        value={{ name: "shazzed", loading, allPants, myPlants }}
      >
        {children}
      </DashboardDataContext>
    );
};

export default DashboardDataProvider;