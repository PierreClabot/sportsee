import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
import Dashboard from "../../pages/dashboard/dashboard";
import ErrorPage from "../../pages/errorPage/errorPage";

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
        ,
        {
          path: "/error",
          element: <ErrorPage error='404' text="Identifiant non trouvé"/>,
        }
      ]);
    
        return(
          <>  
            <RouterProvider router={router}/>
          </>      
        );
}

export default Route