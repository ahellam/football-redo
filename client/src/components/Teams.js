import React from "react";
import UsersTeams from "./UsersTeams";
import OpponentTeams from "./OpponentTeams";

const Teams = ({ myTeams, opponents }) => {
  // console.log(teams)
  return (
    <div className="grid grid-cols-2 grid-flow-col ">
      {myTeams && (
        <div className="grid grid-flow-row">
          <h1 className="text-xl font-bold text-center">My Teams</h1>
          {myTeams.map((myTeam) => (
            <UsersTeams key={myTeam.id} myTeam={myTeam} />
          ))}
        </div>
      )}

      {opponents && (
        <div className="grid grid-flow-row">
        <h1 className="text-xl font-bold text-center">Opponent Teams</h1>
        {opponents.map((opponent) => (
          <OpponentTeams key={opponent.id} opponent={opponent} />
        ))}
      </div>
      )}
    </div>
  );
};

export default Teams;
