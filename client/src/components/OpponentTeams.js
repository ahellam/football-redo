import React from 'react'
import OpponentTeamPlayers from './OpponentTeamPlayers'

const OpponentTeams = ({ opponent }) => {
  return (
    <div className="m-1 p-1 rounded-md bg-[#323236] text-white"> 
      <div className="grid grid-cols-3">
        <button className="m-auto my-1 border-[1px] border-white text-sm rounded-[4px] px-5 py-[1px] hover:border-green-500 active:text-green-500">Select</button>
        <h1 className="text-center text-lg font-semibold m-auto">{opponent.name}</h1>
        <button className="m-auto my-1 border-[1px] border-white text-sm rounded-[4px] px-5 py-[1px] hover:border-red-500 active:text-red-500">Delete</button>
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-1">
        {opponent.players.map(opponentPlayer => (
          <OpponentTeamPlayers key={opponentPlayer.id} opponentPlayer={opponentPlayer}/>
        ))}
      </div>
    </div>
  )
}

export default OpponentTeams