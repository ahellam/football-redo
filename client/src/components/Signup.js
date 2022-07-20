import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signUpUrl = "http://localhost:3000/users"

  let navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault()
    const signUpData = {
      username: username,
      password: password,
    };

    fetch(signUpUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData)
    })
    .then(res => res.json())
    .then(setUsername(""), setPassword(""))
  };

  const linkToLogin = () => {
    navigate('/login')
  }

  return (
    <div className="w-full max-w-xs m-auto">
      <form id="sign-up"className="rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-6 text-center text-xl font-bold text-black">
          Sign up to get started
        </h1>
        <div className="mb-4">
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black mb-3"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="items-center text-center justify-between">
          <button
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
          <button className="font-bold text-lg text-green-500 hover:text-green-600" 
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
