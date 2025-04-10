import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './Login';
import Error from './Error';


const Body = () =>{
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login/>,
            errorElement: <Error/>
        },

    ])

    return (
        <RouterProvider router={appRouter}></RouterProvider>
    )
}

export default Body;