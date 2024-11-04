import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import ErrorPage from './Components/ErrorPage';
import Statistics from './Pages/Statistics';
import Dashboard from './Pages/Dashboard';
import ProductCards from './Components/ProductCards';
import ProductDetails from './Components/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch("../category.json"),
        children:[
          {
            path: "/category/:category",
            element: <ProductCards/>,
            loader: ()=> fetch("../data.json")
          },
          {
            path: "/",
            element: <ProductCards/>,
            loader: ()=> fetch("../data.json")
          },
        ]
      },
      {
        path: "/productDetails/:product_id",
        element: <ProductDetails/>,
        loader: ()=> fetch("../data.json")
      },
      {
        path: "/statistics",
        element: <Statistics/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
