import { useState } from "react"

function Login() {
  const [user, setUser] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    const username = form.get(username)
    const password = form.get(password)
    setUser({username, password})
    window.localStorage.setItem("currentUser", user)
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <form className="flex flex-col gap-2 rounded border bg-blue-200 p-4" onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input className="bg-white rounded" type="text" name="username" id="username" />
          <label htmlFor="">Password</label>
          <input className="bg-white rounded" type="password" name="password" id="password" />
          <button className="py-4 bg-blue-600 rounded" type="submit">Enter</button>
        </form>
      </div>
    </>
  )
}

export default Login