import React from 'react'

const UserRandomGameInfo = ({ game }) => {
  return (
    <div className="m-auto font-bold text-sm pl-2">
      <span className="text-blue-500 font-extrabold">{game.points}</span> pts
    </div>
  )
}

export default UserRandomGameInfo