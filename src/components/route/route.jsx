import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
import Dashboard from "../../pages/dashboard/dashboard";

function Route(){
    const router = createBrowserRouter([
        {
          path: "/:id",
          element: <Dashboard />,
        },
        {
          path: "",
          element: <Dashboard />,
        }
      ]);
    
        return(
          <>  
            <RouterProvider router={router}/>
          </>      
        );
}

export default Route