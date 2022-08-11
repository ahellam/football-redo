import React from 'react'
import SelectedOpponentTeamPlayers from './SelectedOpponentTeamPlayers';
import SelectedUserTeamPlayers from "./SelectedUserTeamPlayers";

const SelectedTeams = ({ selectedUserTeam, selectedOpponentTeam }) => {
  return (
    <div id="selected-teams-container" className="grid grid-cols-2">
      <div className="">
        {selectedUserTeam ?
          <>
          <div className="">

            <h1 className="text-lg font-bold">{selectedUserTeam.name}</h1>

          </div>
          <div className=" grid grid-cols-3 grid-flow-row gap-1">
          {selectedUserTeam.players.map(selectedTeamPlayer => (
                  <SelectedUserTeamPlayers key={selectedTeamPlayer.id} selectedTeamPlayer={selectedTeamPlayer}/>
                ))}
          </div>
          </>
          : <p className="col-start-2">Select Your Team</p>
        }
      </div>

      <div className="">
        {selectedOpponentTeam ?
          <>
          <div className="">

            <h1 className="text-lg font-bold">{selectedOpponentTeam.name}</h1>

          </div>
          <div className=" grid grid-cols-3 grid-flow-row gap-1">
          {selectedOpponentTeam.players.map(selectedTeamPlayer => (
                  <SelectedOpponentTeamPlayers key={selectedTeamPlayer.id} selectedTeamPlayer={selectedTeamPlayer}/>
                ))}
          </div>
          </>
          : <p className="col-start-2">Select Opponent Team</p>
        }
      </div>
    </div>
  )
}

export default SelectedTeams