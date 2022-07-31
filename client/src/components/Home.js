import Quarterbacks from "./Quarterbacks"
import Recievers from "./Recievers"
import Runningbacks from "./Runningbacks"
import React, { useState } from "react";

const Home = ({ positions }) => {
  const [balance, setBalance] = useState(1700)
  // const [selectedQB, setSelectedQB] = useState(null)
  // const [selectedWR, setSelectedWR] = useState(null)
  // const [selectedRB, setSelectedRB] = useState(null)

  return (
  <div>
    <div className="mt-2 p-1 text-xl font-semibold text-center">
      <p>Remaining Balance: <span className="text-green-500">{`$${balance}`}</span></p>
    </div>
    <div id="positions-containter" className="m-1 grid grid-flow-col justify-items-center">
      <div id="qb-container">
        {positions && positions.find(position => position.id === 1)
        .players.map(quarterback => (
          <Quarterbacks key={quarterback.id} quarterback={quarterback}/>
        ))}
      </div>
      <div id="wr-container">
        {positions && positions.find(position => position.id === 2)
        .players.map(reciever => (
          <Recievers key={reciever.id} reciever={reciever}/>
        ))}
      </div>
      <div id="rb-container">
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