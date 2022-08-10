import React from 'react'

const UserTeamPlayers = ({ myTeamPlayer }) => {
  // console.log(myTeamPlayer) 
  return (
    <div className="m-auto">
      <img className="" src={myTeamPlayer.image} alt={myTeamPlayer.name}></img>
      <h3 className="text-xs font-semibold tracking-wide text-center"><span className="text-green-500">{myTeamPlayer.pos}: </span>{myTeamPlayer.name}</h3>
    </div>
  )
}

export default UserTeamPlayers
