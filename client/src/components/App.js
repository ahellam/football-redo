import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Teams from "./Teams";
import Navigation from "./Navigation";
                                                // TRY USE CONTEXT FOR USER---------------------
function App() {
  const baseUrl = "http://localhost:3000"
  const profileUrl = `${baseUrl}/profile`;
  const positionsUrl = `${baseUrl}/positions`
  const teamsURL = `${baseUrl}/teams`
  const opponentsURL = `${baseUrl}/opponents`
  const authHeaders = { headers: { Authorization: `Bearer ${localStorage.token}` } }

  const [user, setUser] = useState(null);
  const [positions, setPositions] = useState(null);
  const [myTeams, setMyTeams] = useState(null);
  const [opponents, setOpponents] = useState(null);

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

  const fetchMyTeams = async () => {
    let teamsRes = await fetch(teamsURL, authHeaders)
    teamsRes = await teamsRes.json()    
    if (teamsRes[0].id) setMyTeams(teamsRes)
  }

  const fetchOpponents = async () => {
    let opponentsRes = await fetch(opponentsURL, authHeaders)
    opponentsRes = await opponentsRes.json()    
    if (opponentsRes[0].id) setOpponents(opponentsRes)
  }
  
  useEffect(() => {
    if (localStorage.token) fetchProfile()
    if (localStorage.token) fetchPositions()
    if (localStorage.token) fetchMyTeams()
    if (localStorage.token) fetchOpponents()
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
                <Home user={user} positions={positions} myTeams={myTeams} setMyTeams={setMyTeams}/>
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
          <Route path="/teams" element={<Teams user={user} myTeams={myTeams} opponents={opponents}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
