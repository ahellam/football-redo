import React from "react";
import OpponentTeamPlayers from "./OpponentTeamPlayers";

const OpponentTeams = ({ opponent, handleSelectTeam, selectedOpponentTeam }) => {
  return (
    <div className={selectedOpponentTeam ? "team-card opacity-25" : "team-card"}>
      <div className="grid grid-cols-3">
        <button
          className={selectedOpponentTeam ? "team-inactive-button" : "team-select-button"}
          onClick={selectedOpponentTeam ? null : () => handleSelectTeam(opponent)}
        >
          Select
        </button>
        <h1 className="text-center text-lg font-semibold m-auto">
          {opponent.name}
        </h1>
        <button className={selectedOpponentTeam ? "team-inactive-button" : "team-delete-button"}>Delete</button>
        {/* NEED TO HOOK UP DELETE BUTTON TO DELETE TEAM */}
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-1">
        {opponent.players.map((opponentPlayer) => (
          <OpponentTeamPlayers
            key={opponentPlayer.id}
            opponentPlayer={opponentPlayer}
          />
        ))}
      </div>
    </div>
  );
};

export default OpponentTeams;
