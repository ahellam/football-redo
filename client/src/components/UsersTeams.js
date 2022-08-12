import React from "react";
import UserTeamPlayers from "./UserTeamPlayers";

const UsersTeams = ({ myTeam, handleSelectTeam, handleDeleteTeam, selectedUserTeam }) => {
  // console.log(myTeam)
  return (
    <div className={selectedUserTeam ? "team-card opacity-25" : "team-card"}>
      <div className="grid grid-cols-3">
        <button
          className={selectedUserTeam ? "team-inactive-button" : "team-select-button"}
          onClick={selectedUserTeam ?  null : () => handleSelectTeam(myTeam)}
        >
          Select
        </button>
        <h1 className="text-center text-lg font-semibold m-auto">
          {myTeam.name}
        </h1>
        <button 
          className={selectedUserTeam ?  "team-inactive-button" : "team-delete-button"}
          onClick={() => handleDeleteTeam(myTeam)}
        >
          Delete
        </button>

      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-1">
        {myTeam.players.map((myTeamPlayer) => (
          <UserTeamPlayers key={myTeamPlayer.id} myTeamPlayer={myTeamPlayer} />
        ))}
      </div>
    </div>
  );
};

export default UsersTeams;
