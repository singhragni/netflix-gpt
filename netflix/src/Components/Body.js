import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './Login';
import Error from './Error';


import Browse from './Browse';
import ErrorPage from './ErrorPage';



const Body = () =>{
   //const navigate = useNavigate();
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login/>,
            errorElement: <Error/>
        },{
            path: '/browse',
            element: <Browse/>
        },{
            path: '/error',
            element: <ErrorPage/>
        }

    ]);


    return (
        <RouterProvider router={appRouter}></RouterProvider>
    )
}

export default Body;