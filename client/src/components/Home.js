import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Quarterbacks from "./Quarterbacks"
import Recievers from "./Recievers"
import Runningbacks from "./Runningbacks"
import SelectedPlayers from "./SelectedPlayers";

const Home = ({ positions, user, myTeams, setMyTeams }) => {
  const [balance, setBalance] = useState(1700)
  const [teamName, setTeamName] = useState("")
  const [selectedQB, setSelectedQB] = useState(null)
  const [selectedWR, setSelectedWR] = useState(null)
  const [selectedRB, setSelectedRB] = useState(null)
  let navigate = useNavigate();
  const draftURL = "http://localhost:3000/draft"
  const twoPositionsSelected = ((selectedQB && selectedWR) || (selectedQB && selectedRB) || (selectedWR && selectedRB))
  const allPositionsSelected = (selectedQB && selectedWR && selectedRB)

  const handleDraftPOS = (player) => {
    const position = player.pos
    if (position === "QB") setSelectedQB(player)
    if (position === "WR") setSelectedWR(player)
    if (position === "RB") setSelectedRB(player)

    setBalance(balance => balance - player.price)
  }

  const handleDropPOS = (player) => {
    const position = player.pos
    if (position === "QB") setSelectedQB(null)
    if (position === "WR") setSelectedWR(null)
    if (position === "RB") setSelectedRB(null)
    
    setBalance(balance => balance + player.price)
  }

  const draftSelectedTeam = (e) => {
    e.preventDefault()
    const teamData = {
      user_id: user.id,
      name: teamName,
      playersOnTeam: [
        selectedQB.id,
        selectedWR.id,
        selectedRB.id
      ]
    }
    // console.log(teamData)
    fetch(draftURL, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" ,
        "Authorization": `Bearer ${localStorage.token}`
    },
      body: JSON.stringify(teamData)
    })
    .then(res => res.json())
    .then(
      myTeams
      ? (newTeam) => setMyTeams([...myTeams, newTeam])
      : (newTeam) => setMyTeams([newTeam])
    )
    .then(() => {navigate('/teams')})
    .then(() => {
      setTeamName("")
      setSelectedQB(null)
      setSelectedWR(null)
      setSelectedRB(null)
      setBalance(1700)
    })
  }

  return (
  <div className="">

    <div className="mt-2 text-2xl bg-white font-semibold text-center sticky top-16 z-40">
      <p className=" my-1 font-bold">Remaining Balance: <span className="text-green-500">{`$${balance}`}</span></p>
      {allPositionsSelected && <form onSubmit={draftSelectedTeam}>
        <input 
          placeholder="Name Your Team" 
          className="text-center text-lg font-bold border border-black rounded-md py-2 px-4 mx-1"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        ></input>
        {teamName && <button 
          className="hover:bg-green-500 hover:text-white active:bg-green-700
          text-lg font-bold border border-black rounded-md py-2 px-4"
          type="submit"
          >Draft This Team
          </button>}
        </form>}

      <SelectedPlayers selectedQB={selectedQB} selectedWR={selectedWR} selectedRB={selectedRB} handleDropPOS={handleDropPOS}/>
    </div>

    <div id="positions-all-containter" className="grid grid-flow-col z-30">
      <div id="qb-container" className="position-container">
        {positions && positions.find(position => position.id === 1)
        .players.map(quarterback => (
          <Quarterbacks key={quarterback.id} quarterback={quarterback} balance={balance} selectedQB={selectedQB} handleDraftPOS={handleDraftPOS} twoPositionsSelected={twoPositionsSelected}/>
        ))}
      </div>
      <div id="wr-container" className="position-container">
        {positions && positions.find(position => position.id === 2)
        .players.map(reciever => (
          <Recievers key={reciever.id} reciever={reciever} balance={balance} selectedWR={selectedWR} handleDraftPOS={handleDraftPOS} twoPositionsSelected={twoPositionsSelected}/>
        ))}
      </div>
      <div id="rb-container" className="position-container">
        {positions && positions.find(position => position.id === 3)
        .players.map(runningback => (
          <Runningbacks key={runningback.id} runningback={runningback} balance={balance} selectedRB={selectedRB} handleDraftPOS={handleDraftPOS} twoPositionsSelected={twoPositionsSelected}/>
        ))}
        
      </div>
    </div>
  </div>
  )
}

export default Home