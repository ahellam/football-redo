import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signUpUrl = "http://localhost:3000/users"

  let navigate = useNavigate()

  const linkToLogin = () => {
    navigate('/login')
  }
  
  const handleSignUp = (e) => {
    e.preventDefault()
    const signUpData = {
      username: username,
      password: password,
    };

    if (username && password) {
      fetch(signUpUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpData)
      })
      .then(res => res.json())
      .then(json => {
        if (json.errors) {
          setError(json.errors[0])
          setUsername("")
          setPassword("")
        }
        else if (json.id) {
          alert("User created successfully!")
          linkToLogin()
        }
      })

    }
    else setError("Please enter a username and password")
  };


  return (
    <div className="w-full max-w-xs m-auto">
      <form id="sign-up"className="rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-6 text-center text-xl font-bold text-black">
          Sign up to get started
        </h1>
        <div className="mb-4">
          <input
            className={
              error ? "border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
              : "border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
            }
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className={
              error ? "border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
              : "border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black mb-3"
            }
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-center text-lg font-bold mb-4">{error}</p>}
        <div className="items-center text-center justify-between">
          <button
            id="sign-up-submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <p className="mt-4 font-semibold text-sm text-black">
            Already a player?
          </p>
          <div className="mt-4">
          <button id="link-to-login" className="font-bold text-lg text-green-500 hover:text-green-600" 
          type="button"
          onClick={linkToLogin}>
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
