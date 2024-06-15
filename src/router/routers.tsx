import { createBrowserRouter } from "react-router-dom";
import Login from "../page/auth/login";
import Home from "../page/dashboard/home";


const router = createBrowserRouter([
  {
    path: "/login",
    element:
      <Login />
  },
  {
    path: "/",
    element:
      <Home />
  },
  {
    path: "/analytics",
    element:
      <Home />
  },

  {
    path: "/invoice",
    element:
      <Home />
  },

  {
    path: "/schedule",
    element:
      <Home />
  },
  {
    path: "/calendar",
    element:
      <Home />
  },

  {
    path: "/message",
    element:
      <Home />
  },

  {
    path: "/settings",
    element:
      <Home />
  },



]);

export default router