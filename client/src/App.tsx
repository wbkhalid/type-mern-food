import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./auth/Login"
import SignUp from "./auth/SignUp"
import ForgotPassword from "./auth/ForgotPassword"
import ResetPassword from "./auth/ResetPassword"
import VerifyEmail from "./auth/VerifyEmail"
import MainLayout from "./layout/MainLayout"
import HereSection from "./components/HeroSection"
import Profile from "./components/Profile"
import SearchPage from "./components/SearchPage"
import RestaurantDetails from "./components/RestaurantDetails"

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HereSection />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/search/:id',
          element: <SearchPage />,
        },
        {
          path: '/restaurant/:id',
          element: <RestaurantDetails />,
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/reset-password',
      element: <ResetPassword />
    },
    {
      path: '/verify-email',
      element: <VerifyEmail />
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default App
