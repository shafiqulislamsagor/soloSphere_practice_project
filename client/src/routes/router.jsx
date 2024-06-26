import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AddJob from "../pages/AddJob";
import BidRequest from "../pages/BidRequest";
import JobDetails from "../pages/JobDetails";
import Registration from "../pages/Registration";
import LogIn from "../pages/LogIn";
import MyBids from "../pages/MyBids";
import UpdateJob from "../pages/UpdateJob";
import MyPostJob from "../pages/MyPostJob";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/add-job',
                element:<AddJob/>
            },
            {
                path:'/bid-request',
                element:<BidRequest/>
            },
            {
                path:'/job-details/:id',
                element:<JobDetails/>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_URL}/jobs/${params.id}`)
            },
            {
                path:'/registration',
                element:<Registration/>
            },
            {
                path:'/login',
                element:<LogIn/>
            },
            {
                path:'/my-bids',
                element:<MyBids/>
            },
            {
                path:'/update-job/:id',
                element:<UpdateJob/>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_URL}/jobs/${params.id}`)
            },
            {
                path:'/my-post-job',
                element:<MyPostJob/>
            },
        ]
    },
]);