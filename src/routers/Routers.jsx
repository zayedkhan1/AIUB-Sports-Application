
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import PrivateRoute from "./PrivateRoute";
import PostPosition from "../pages/PostPosition";
import SportsDetails from "../pages/SportsDetails";
import ApplySports from "../pages/ApplySports";
import MyApplications from "../pages/MyApplications";
import PostedMySportsList from "../pages/MyPostedSports/PostedMySportsList";
import FindTeam from "../pages/FindTeam";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/about",
    element: <PrivateRoute><AboutUs /></PrivateRoute>
  },
  {
    path: "/postposition",
    element: <PrivateRoute><PostPosition /></PrivateRoute>
  },
  {
    path: "/apply/:id",
    element: <PrivateRoute><SportsDetails /></PrivateRoute>,
    loader: ({ params }) => fetch(`http://localhost:5000/sports/${params.id}`)
  },
  {
    path: '/applysports/:id',
    element: <PrivateRoute><ApplySports></ApplySports></PrivateRoute>
  },
  {
    path: '/myapplications',
    element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
  },
  {
    path: '/mypostedjobs',
    element: <PrivateRoute><PostedMySportsList></PostedMySportsList> </PrivateRoute>
  },
  {
    path: '/findteam',
    element: <PrivateRoute><FindTeam /></PrivateRoute>
  }
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;

