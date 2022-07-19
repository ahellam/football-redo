import {useNavigate} from 'react-router-dom'

const Home = ({ user, setUser }) => {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('logged out')
    localStorage.removeItem("token")
    setUser(null)
    navigate('/login')
  }

  return (

    <div>
      {user && <h1 className="text-6xl">{`Welcome ${user.username}`}</h1>}

      <button className="bg-red-500 rounded-md border-2 border-black p-2"onClick={handleLogout}>LOGOUT</button>
    </div>
  )
}

export default Home