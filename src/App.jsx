import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import { createBrowserRouter, RouterProvider } from 'react-router'
// import AuthContextProvider from "./contexts/AuthContextProvider"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/profile",
      element: <Profile />
    }
  ])

  return (
    <>
    {/* <AuthContextProvider> */}
      <RouterProvider router={router} />
    {/* </AuthContextProvider> */}
    </>
  )
}

export default App
