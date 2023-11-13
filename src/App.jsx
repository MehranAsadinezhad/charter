import { RouterProvider, createBrowserRouter } from "react-router-dom"

import AppLayout from "./assets/Ui/AppLayout"
import Home from "./assets/Pages/Home";
import Passenger from "./assets/Pages/Passenger";
import FlightProvider from "./assets/context/FlightContext";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
    
      children: [
        {
          path: "/",
          element: <Home />,
          
        },
        {
          path:"/passenger",
          element:<Passenger/>
        }
      ],
    },
  ]);

  return (
    <>
      <FlightProvider>
        <RouterProvider router={router} />
      </FlightProvider>
    </>
  );
}

export default App
