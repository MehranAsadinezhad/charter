import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./assets/Ui/AppLayout";
import Home from "./assets/Pages/Home";
import Passenger from "./assets/Pages/Passenger";
import FlightProvider from "./assets/context/FlightContext";
import Purchase from "./assets/Pages/Purchase";

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
          path: "/passenger",
          element: <Passenger />,
        },
      ],
    },
    {
      path:"passenger/id:",
      element:<Purchase/>
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

export default App;
