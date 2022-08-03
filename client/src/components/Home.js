import Quarterbacks from "./Quarterbacks"
import Recievers from "./Recievers"
import Runningbacks from "./Runningbacks"
import React, { useState } from "react";

const Home = ({ positions }) => {
  const [balance, setBalance] = useState(1700)
  const [selectedQB, setSelectedQB] = useState(null)
  const [selectedWR, setSelectedWR] = useState(null)
  const [selectedRB, setSelectedRB] = useState(null)

  return (
  <div className="">
    <div className="mt-2 p-1 text-xl bg-white font-semibold text-center sticky top-16">
      <p>Remaining Balance: <span className="text-green-500">{`$${balance}`}</span></p>
      {/* CREATE EMPTY CONTAINERS FOR SELETCED PLAYERS HERE...... */}
      <div id="selected-players" className="m-1 grid grid-flow-col justify-items-center">
        <div className="m-1 p-1 rounded-md bg-[#323236] text-white grid grid-cols-3">
          qb
        </div>
        <div className="m-1 p-1 rounded-md bg-[#323236] text-white grid grid-cols-3">
          wr
        </div>
        <div className="m-1 p-1 rounded-md bg-[#323236] text-white grid grid-cols-3">
          rb
        </div>
      </div>
    </div>
    <div id="positions-containter" className="m-1 grid grid-flow-col justify-items-center">
      <div id="qb-container" className="overflow-y-auto h-2/5">
        {positions && positions.find(position => position.id === 1)
        .players.map(quarterback => (
          <Quarterbacks key={quarterback.id} quarterback={quarterback}/>
        ))}
      </div>
      <div id="wr-container" className="overflow-y-auto h-2/5">
        {positions && positions.find(position => position.id === 2)
        .players.map(reciever => (
          <Recievers key={reciever.id} reciever={reciever}/>
        ))}
      </div>
      <div id="rb-container" className="overflow-y-auto h-2/5">
        {positions && positions.find(position => position.id === 3)
        .players.map(runningback => (
          <Runningbacks key={runningback.id} runningback={runningback}/>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Home