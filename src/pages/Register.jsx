// import { useState } from "react"

import { useState } from "react"

function Register() {
  const [user, setUser] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    const username = form.get(username)
    const email = form.get(email)
    const password = form.get(password)
    setUser({ username, email, password })
    window.localStorage.setItem("currentUser", user)
  }


  return (
    <div className="flex h-screen justify-center items-center">
      <form className="flex flex-col gap-2 rounded border bg-blue-200 p-4" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input className="bg-white rounded" type="text" name="username" id="username" />
        <label htmlFor="email">Email</label>
        <input className="bg-white rounded" type="email" name="email" id="email" />
        <label htmlFor="password">Create Password</label>
        <input className="bg-white rounded" type="password" name="password" id="password" />
        <button className="py-4 bg-blue-600 rounded" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register