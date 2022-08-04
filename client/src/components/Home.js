import Quarterbacks from "./Quarterbacks"
import Recievers from "./Recievers"
import Runningbacks from "./Runningbacks"
import React, { useState } from "react";

const Home = ({ positions }) => {
  const [balance, setBalance] = useState(1700)
  const [selectedQB, setSelectedQB] = useState(null)
  const [selectedWR, setSelectedWR] = useState(null)
  const [selectedRB, setSelectedRB] = useState(null)

  const preventZeroBalance = ((selectedQB && selectedWR) || (selectedQB && selectedRB) || (selectedWR && selectedRB))

                          // REFACTOR LOTS OF NOT DRY CODE HERE..........
  const handleDraftQB = (qb) => {
    setSelectedQB(qb)
    setBalance(balance => balance - qb.price)
  }

  const handleDropQB = () => {
    setSelectedQB(null)
    setBalance(balance => balance + selectedQB.price)
  }

  const handleDraftWR = (wr) => {
    setSelectedWR(wr)
    setBalance(balance => balance - wr.price)
  }

  const handleDropWR = () => {
    setSelectedWR(null)
    setBalance(balance => balance + selectedWR.price)
  }

  const handleDraftRB = (rb) => {
    setSelectedRB(rb)
    setBalance(balance => balance - rb.price)
  }

  const handleDropRB = () => {
    setSelectedRB(null)
    setBalance(balance => balance + selectedRB.price)
  }
                            // REFACTOR LOTS OF NOT DRY CODE HERE..........

  return (
  <div className="">
    <div className="mt-2 text-2xl bg-white font-semibold text-center sticky top-16 z-40">
      <p className=" my-1 font-bold">Remaining Balance: <span className="text-green-500">{`$${balance}`}</span></p>

      <div id="selected-players" className="grid grid-cols-3 justify-items-center">
        <div className="selected-player">
          {selectedQB ? 
            <>
              <img src={selectedQB.image} alt={selectedQB.name} className="m-auto h-auto max-h-36 w-auto"></img>
              <div className="m-auto font-semibold text-center">
                <h4 className="text-green-500">{selectedQB.pos}</h4>
                <h4>{selectedQB.name}</h4>
              </div>
              <button className="drop-button" onClick={handleDropQB}>Drop</button>
            </>
            : <p className=" text-xl col-start-2">Select QB</p> 
          }
        </div>

        <div className="selected-player">
        {selectedWR ? 
            <>
              <img src={selectedWR.image} alt={selectedWR.name} className="m-auto h-auto max-h-36 w-auto"></img>
              <div className="m-auto font-semibold text-center">
                <h4 className="text-green-500">{selectedWR.pos}</h4>
                <h4>{selectedWR.name}</h4>
              </div>
              <button className="drop-button" onClick={handleDropWR}>Drop</button>
            </>
            : <p className=" text-xl col-start-2">Select WR</p> 
          }
        </div>

        <div className="selected-player">
        {selectedRB ? 
            <>
              <img src={selectedRB.image} alt={selectedRB.name} className="m-auto h-auto max-h-36 w-auto"></img>
              <div className="m-auto font-semibold text-center">
                <h4 className="text-green-500">{selectedRB.pos}</h4>
                <h4>{selectedRB.name}</h4>
              </div>
              <button className="drop-button" onClick={handleDropRB}>Drop</button>
            </>
            : <p className=" text-xl col-start-2">Select RB</p> 
          }
        </div>

      </div>
    </div>

    <div id="positions-containter" className="grid grid-flow-col justify-items-center z-30">
      <div id="qb-container" className="overflow-y-auto h-[40%] z-20">
        {positions && positions.find(position => position.id === 1)
        .players.map(quarterback => (
          <Quarterbacks key={quarterback.id} quarterback={quarterback} balance={balance} selectedQB={selectedQB} handleDraftQB={handleDraftQB} preventZeroBalance={preventZeroBalance}/>
        ))}
      </div>
      <div id="wr-container" className="overflow-y-auto h-[40%]">
        {positions && positions.find(position => position.id === 2)
        .players.map(reciever => (
          <Recievers key={reciever.id} reciever={reciever} balance={balance} selectedWR={selectedWR} handleDraftWR={handleDraftWR} preventZeroBalance={preventZeroBalance}/>
        ))}
      </div>
      <div id="rb-container" className="overflow-y-auto h-[40%]">
        {positions && positions.find(position => position.id === 3)
        .players.map(runningback => (
          <Runningbacks key={runningback.id} runningback={runningback} balance={balance} selectedRB={selectedRB} handleDraftRB={handleDraftRB} preventZeroBalance={preventZeroBalance}/>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Home