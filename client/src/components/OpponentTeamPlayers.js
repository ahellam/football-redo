import React from 'react'

const OpponentTeamPlayers = ({ opponentPlayer }) => {
  return (
    <div className="m-auto">
      <img className="" src={opponentPlayer.image} alt={opponentPlayer.name}></img>
      <h3 className="text-xs font-semibold tracking-wide text-center"><span className="text-green-500">{opponentPlayer.pos}: </span>{opponentPlayer.name}</h3>
    </div>
  )
}

export default OpponentTeamPlayers