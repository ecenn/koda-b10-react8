import { Link } from "react-router"

function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-2">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/profile">Profile</Link>
    </div>
  )
}

export default Home