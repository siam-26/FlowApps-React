import { createBrowserRouter } from "react-router";
import Home from "../Pages/Homepage/Home/Home";
import Main from "../Layout/Main";
import All_Apps from "../Pages/All_Apps_Page/All_Apps";
import App_Details from "../Pages/All_Apps_Page/App_Details";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/all_apps',
                element:<All_Apps/>
            },
            {
                path:'/all_apps/:id',
                element:<App_Details/>
            }
        ]
    }
]);

export default router;