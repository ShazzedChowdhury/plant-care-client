import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout/MainLayout';
import HomePage from '../Pages/HomePage/HomePage';
import AllPlantsPage from '../Pages/AllPlantsPage/AllPlantsPage';
import AddPlantPage from '../Pages/AddPlantPage/AddPlantPage';
import MyPlantsPage from '../Pages/MyPlantsPage/MyPlantsPage';
import LogInPage from '../Pages/AuthPage/LogInPage';
import RegisterPage from '../Pages/AuthPage/RegisterPage';
import PlantDetailsPage from '../Pages/PlantDetailsPage/PlantDetailsPage';
import UpdateMyPlantPage from '../Pages/UpdateMyPlantPage/UpdateMyPlantPage';
import PrivateRouter from '../PrivateRoute/PrivateRouter';
import LoadingSpiner from '../Components/Loader/LoadingSpiner';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
import DashboardLayout from '../Layout/DashboardLayout/DashboardLayout';
import OverviewPage from '../Pages/Dashboard/OverviewPage';
import DashboardAllItems from '../Pages/Dashboard/DashboardAllItems';

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
        element: <AllPlantsPage />,
      },

      {
        path: "all-plants/:id",
        loader: ({ params }) =>
          fetch(
            `https://b11-a10-mango-plant-care-server.vercel.app/all-plants/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <PlantDetailsPage />
          </PrivateRouter>
        ),
        hydrateFallbackElement: <LoadingSpiner />,
      },
      {
        path: "add-plant-form",
        element: (
          <PrivateRouter>
            <AddPlantPage />
          </PrivateRouter>
        ),
      },
      {
        path: "my-plants/:email",
        loader: ({ params }) =>
          fetch(
            `https://b11-a10-mango-plant-care-server.vercel.app/my-plants/${params.email}`
          ),
        element: (
          <PrivateRouter>
            <MyPlantsPage />
          </PrivateRouter>
        ),
        hydrateFallbackElement: <LoadingSpiner />,
      },
      {
        path: "/update-plants/:id",
        loader: ({ params }) =>
          fetch(
            `https://b11-a10-mango-plant-care-server.vercel.app/all-plants/${params.id}`
          ),
        element: <UpdateMyPlantPage />,
        hydrateFallbackElement: <LoadingSpiner />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        path: "dashboard",
        element: <OverviewPage />,
      },
      {
        path: "all-plants",
        element: <DashboardAllItems />,
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
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;