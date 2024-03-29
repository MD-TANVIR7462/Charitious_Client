import App from "@/App";
import DashBoard from "@/layout/Dashboard/DashBoard";
import RouteGaurd from "@/layout/RouteGaurd";
import AboutUSpage from "@/pages/AboutUSpage";
import AddSupply from "@/pages/AdminPages/AddSupply";
import AddTestimoniaPage from "@/pages/AdminPages/AddTestimoniaPage";
import AlllSupply from "@/pages/AdminPages/AlllSupply";
import DashboardHome from "@/pages/AdminPages/DashboardHome";
import AllRelifPage from "@/pages/AllRelifPage";
import CommunityPage from "@/pages/CommunityPage";
import DetailsPage from "@/pages/DetailsPage";
import HomePage from "@/pages/HomePage";
import LeaderBoardPage from "@/pages/LeaderBoardPage";
import LoginPage from "@/pages/LoginPage";
import SignUpPage from "@/pages/SignUpPage";
import VolunteerPage from "@/pages/VolunteerPage";


import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path:"/relief-goods",
        element: <AllRelifPage></AllRelifPage>,
      },
      {
        path:"/register",
        element:<SignUpPage/>,
      },
      {
        path:"/login",
        element:<LoginPage/>,
      },
      {
        path:"/leaderboard",
        element:<LeaderBoardPage/>,
      },
      {
        path:"/volunteer",
        element:<VolunteerPage/>,
      },
      {
        path:"/about-us",
        element:<AboutUSpage/>,
      },
      {
        path:"/community",
        element:<CommunityPage/>,
      },
  
      {
        path: "/relief-goods/:id",
        element: <DetailsPage />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/api/v1/donation/${params?.id}`
            // `https://charitious-server.vercel.app/api/v1/donation/${params?.id}`
          ),
      },
      
    ],
    
    
  },
  {
    path:"/dashboard",
    element:<RouteGaurd><DashBoard/></RouteGaurd>,
    children:[
      {
        index: true,
        element: <DashboardHome/>,
      },
      {
        path:"/dashboard/supplies",
        element:<AlllSupply/>
      },
      {
        path:"/dashboard/create-supply",
        element:<AddSupply/>
      },
      {
        path:"/dashboard/add-testimonial",
        element:<AddTestimoniaPage/>
      },
    ]
  }

]);

export default router;
