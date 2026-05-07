import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async () => {

    try {

      const res = await axios.post(
        "http://127.0.0.1:3001/api/auth/login",
        {
          email,
          password
        }
      )

      localStorage.setItem("token", res.data.token)

      alert("Login Successful")

      navigate("/dashboard")

    } catch (err) {

      console.log(err)

      alert("Login Failed")
    }
  }

  return (

    <div>

      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  )
}

export default Login