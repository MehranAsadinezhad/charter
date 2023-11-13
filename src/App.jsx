import { RouterProvider, createBrowserRouter } from "react-router-dom"

import AppLayout from "./assets/Ui/appLayout"
import Home from "./assets/Pages/Home";
import Passenger from "./assets/Pages/Passenger";


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
      <RouterProvider router={router}/>
    </>
  )
}

export default App
