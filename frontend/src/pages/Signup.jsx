import { useState } from "react"
import axios from "axios"

function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {

    try {

      await axios.post(
        "http://127.0.0.1:3001/api/auth/signup",
        {
          name,
          email,
          password,
          role: "Admin"
        }
      )

      alert("Signup Successful")

    } catch (err) {
      console.log(err)
      alert("Signup Failed")
    }
  }

  return (
    <div>

      <h1>Signup</h1>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSignup}>
        Signup
      </button>

    </div>
  )
}

export default Signup