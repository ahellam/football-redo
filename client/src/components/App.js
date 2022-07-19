import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { useState, useEffect } from "react"
import Home from "./Home";
import Login from './Login'
import Signup from "./Signup";

function App() {

  const profileUrl = "http://localhost:3000/profile"

  const [user, setUser] = useState(null)
  // const [isAuthenticated, setIsAuthenticated] = useState(() => {
  //   return token !== null;
  // })

  useEffect(() => {
    if(localStorage.token){
      fetch(profileUrl, {
        headers: { Authorization: `Bearer ${localStorage.token}`}
      })
      .then(res => res.json())
      .then(result => {
        if(result.id) {
          setUser(result)
        }
      })
    }
  },[])

// console.log(user)

  return (
    <div className="">
      <Router>
          <Routes>
            <Route path="/" element={<Home user={user} setUser={setUser}/>}/>
            <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
