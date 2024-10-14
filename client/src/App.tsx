import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./auth/Login"
import MainLayout from "./MainLayout"
import SignUp from "./auth/SignUp"

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default App
