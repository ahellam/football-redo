import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
  
  const loginUrl = "http://localhost:3000/login"

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };

    fetch(loginUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData)
    })
    .then(res => res.json())
    .then(result => {
      if(!result.token){
        setError("Invalid username or password.")
        console.error(result)
      }
      else if(result.token) {
        localStorage.setItem("token", result.token)
        setUser(() => result.user)
        navigate('/')
      }
    })
    .then(setUsername(""), setPassword(""))
  };

  const linkToSignup = () => {
    navigate('/signup')
  }

  return (
    <div className="w-full max-w-xs m-auto">
      <form id="log-in" className="rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-6 text-center text-xl font-bold text-black">
          Log in to start drafting
        </h1>
        <div className="mb-4">
          <input
            className={
              error
              ? "border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
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
              error 
              ? "border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black " 
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
            id="log-in-button"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleLogin}
          >
            Log in
          </button>
          <p className="mt-4 font-semibold text-sm text-black">
            Don't have an account?
          </p>
          <div className="mt-4">
            <button 
            id="link-to-signup"
            className="font-bold text-lg text-green-500 hover:text-green-600" 
            type="button"
            onClick={linkToSignup}>
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default Login