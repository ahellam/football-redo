import React from 'react'

const OpponentRandomGameInfo = ({ game }) => {
  return (
    <div className="m-auto font-bold text-sm pl-4">
      <span className="text-blue-500 font-extrabold">{game.points}</span> pts
    </div>
  )
}

export default OpponentRandomGameInfo