import Quarterbacks from "./Quarterbacks"
import Recievers from "./Recievers"
import Runningbacks from "./Runningbacks"
import React, { useState } from "react";
import SelectedPlayers from "./SelectedPlayers";

const Home = ({ positions }) => {
  const [balance, setBalance] = useState(1700)
  const [selectedQB, setSelectedQB] = useState(null)
  const [selectedWR, setSelectedWR] = useState(null)
  const [selectedRB, setSelectedRB] = useState(null)

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

  return (
  <div className="">
    <div className="mt-2 text-2xl bg-white font-semibold text-center sticky top-16 z-40">
      <p className=" my-1 font-bold">Remaining Balance: <span className="text-green-500">{`$${balance}`}</span></p>
      {allPositionsSelected && <button className="hover:bg-green-500 hover:text-white text-lg font-bold border border-black rounded-md py-2 px-4">Draft This Team</button>}
      <SelectedPlayers selectedQB={selectedQB} selectedWR={selectedWR} selectedRB={selectedRB} handleDropPOS={handleDropPOS}/>
    </div>

    <div id="positions-containter" className="grid grid-flow-col justify-items-center z-30">
      <div id="qb-container" className="overflow-y-auto h-[40%] z-20">
        {positions && positions.find(position => position.id === 1)
        .players.map(quarterback => (
          <Quarterbacks key={quarterback.id} quarterback={quarterback} balance={balance} selectedQB={selectedQB} handleDraftPOS={handleDraftPOS} twoPositionsSelected={twoPositionsSelected}/>
        ))}
      </div>
      <div id="wr-container" className="overflow-y-auto h-[40%]">
        {positions && positions.find(position => position.id === 2)
        .players.map(reciever => (
          <Recievers key={reciever.id} reciever={reciever} balance={balance} selectedWR={selectedWR} handleDraftPOS={handleDraftPOS} twoPositionsSelected={twoPositionsSelected}/>
        ))}
      </div>
      <div id="rb-container" className="overflow-y-auto h-[40%]">
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