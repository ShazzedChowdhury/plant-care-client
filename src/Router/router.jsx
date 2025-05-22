import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../Pages/HomePage/HomePage';
import AllPlantsPage from '../Pages/AllPlantsPage/AllPlantsPage';
import AddPlantPage from '../Pages/AddPlantPage/AddPlantPage';
import MyPlantsPage from '../Pages/MyPlantsPage/MyPlantsPage';
import LogInPage from '../Pages/AuthPage/LogInPage';
import RegisterPage from '../Pages/AuthPage/RegisterPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "all-plants",
        loader: () => fetch("http://localhost:3000/all-plants"),
        element: <AllPlantsPage />,
      },
      {
        path: "add-plant-form",
        element: <AddPlantPage />,
      },
      {
        path: "my-plants",
        element: <MyPlantsPage />,
      },
    ],
  },
  {
    path: "auth/log-in-form",
    element: <LogInPage />,
  },
  {
    path: "auth/register-form",
    element: <RegisterPage />,
  },
]);

export default router;