import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Navigation from "./Navigation";

function App() {
  const baseUrl = "http://localhost:3000"

  const [user, setUser] = useState(null);
  const [positions, setPositions] = useState(null);

  useEffect(() => {
    const profileUrl = `${baseUrl}/profile`;
    const authHeaders = { headers: { Authorization: `Bearer ${localStorage.token}` } }

    if (localStorage.token) {
      fetch(profileUrl, authHeaders)
        .then((res) => res.json())
        .then((result) => {
          if (result.id) {
            setUser(result);
          }
        })
    }
  },[]);

  useEffect(() => {
    const positionsUrl = `${baseUrl}/positions`
    const authHeaders = { headers: { Authorization: `Bearer ${localStorage.token}` } }

    if (localStorage.token) {
    fetch(positionsUrl, authHeaders)
        .then((res) => res.json())
        .then((data) => {
          if (data[0].id) {
            setPositions(data);
          }
        })
    }
    // this local storage token in the dependencies is a total hack... gotta be a better way
    // eslint-disable-next-line
  },[localStorage.token])

  // positions && console.log(positions);

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
