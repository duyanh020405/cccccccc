import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/user/login/Login";
import HomePage from "../pages/HomePage";
import Register from "../pages/user/register/Register";
import UserInfo from "../pages/user/userInfo/UserInfo";
import Job from "../pages/bussiness/Job_Manager/Job";
import Job_Manager from "../pages/bussiness/Job_Manager/Job_Manager";
import Interview_Manager from "../pages/admin/Interview_Manager/Interview_Manager";
import Business_Management from "../pages/admin/Business_Management/Business_Management";
import Recruit_New from "../pages/admin/Recruit_New/Recruit_New";
import Job_ManagerAdmin from "../pages/admin/Job_Manager/Job_ManagerAdmin";


export const routers = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/business/job',
        element: <Job/>
    },
     {
        path: '/business/addJob',
        element: <Job_Manager/>
    },
     {
        path: '/admin/lichphongvan',
        element: <Interview_Manager/>
    },
    {
        path: '/admin/business_manager',
        element: <Business_Management/>
    },
     {
        path: '/admin/job_manager',
        element: <Job_ManagerAdmin/>
    }
])