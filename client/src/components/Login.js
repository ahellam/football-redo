import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const loginUrl = "http://localhost:3000/login"
  // const profileUrl = "http://localhost:3000/profile"
  // const token = localStorage.getItem("token")

  const navigate = useNavigate();

  // THIS ISNT QUITE WORKING PROPERLY BECAUSE ASYNC.. 
  const handleLogin = async () => {
    const loginData = {
      username: username,
      password: password,
    };

    // let response = await fetch(loginUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(loginData)
    //   })

    //   const result = await response.json()
    //   console.log(result)

      // FUCKIN STUCK HERE


    fetch(loginUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData)
    })
    .then(res => res.json())
    .then(result => {
      if(result.error){
        console.error(result.error)
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
    <div className="w-full max-w-xs m-1">
      <form id="log-in" className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-6 text-center text-xl font-bold text-black">
          Log in to start drafting
        </h1>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="items-center text-center justify-between">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Log in
          </button>
          <p className="mt-4 font-semibold text-sm text-black">
            Don't have an account?
          </p>
          <div className="mt-4">
            <button className="font-bold text-lg text-blue-600" onClick={() => linkToSignup}>
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default Login