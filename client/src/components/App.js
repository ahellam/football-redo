import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Navigation from "./Navigation";

function App() {
  const baseUrl = "http://localhost:3000"
  const profileUrl = `${baseUrl}/profile`;
  const positionsUrl = `${baseUrl}/positions`
  const authHeaders = { headers: { Authorization: `Bearer ${localStorage.token}` } }
  const [user, setUser] = useState(null);
  const [positions, setPositions] = useState(null);

  const fetchProfile = async () => {
    let profileRes = await fetch(profileUrl, authHeaders)
      profileRes = await profileRes.json()

    if (profileRes.id) setUser(profileRes)
  }

  const fetchPositions = async () => {
    let positionRes = await fetch(positionsUrl, authHeaders)
      positionRes = await positionRes.json()

    if (positionRes[0].id) setPositions(positionRes);
  }
  
  useEffect(() => {
    if (localStorage.token) fetchProfile()
    if (localStorage.token) fetchPositions()
  // eslint-disable-next-line
  },[localStorage.token]);

  return (
    <div className="">
      <Router>
        <Navigation user={user} setUser={setUser} setPositions={setPositions}/>
        <Routes>
          <Route path="/"
            element={
              user ? (
                <Home user={user} positions={positions}/>
              ) : (
                <Login user={user} setUser={setUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
