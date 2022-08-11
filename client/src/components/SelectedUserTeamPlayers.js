import React from 'react'

const SelectedUserTeamPlayers = ({selectedTeamPlayer}) => {
  return (
    <div className="m-auto row-start-2">
      <img className="" src={selectedTeamPlayer.image} alt={selectedTeamPlayer.name}></img>
      <h3 className="text-xs font-bold tracking-wide text-center"><span className="text-green-500">{selectedTeamPlayer.pos}: </span>{selectedTeamPlayer.name}</h3>
    </div>
  )
}

export default SelectedUserTeamPlayers