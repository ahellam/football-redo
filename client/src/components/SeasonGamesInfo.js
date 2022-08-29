import React from "react";
import OpponentSeasonGamesInfo from "./OpponentSeasonGamesInfo";
import UserSeasonGamesInfo from "./UserSeasonGamesInfo";

const SeasonGamesInfo = ({  handleClearSeasonData, usersSeasonGamesByWeek, opponentsSeasonGamesByWeek, opponentTotalWins, userTotalWins }) => {

  const usersWeeklyTotalPts = usersSeasonGamesByWeek.map(
    (games) =>
      games
        .map((game) => Math.round(10 * game.points))
        .reduce((prev, curr) => prev + curr, 0) / 10
  );
  const usersTotalPts = usersWeeklyTotalPts.reduce(
    (prev, curr) => prev + curr,
    0
  );
  const opponentsWeeklyTotalPts = opponentsSeasonGamesByWeek.map(
    (games) =>
      games
        .map((game) => Math.round(10 * game.points))
        .reduce((prev, curr) => prev + curr, 0) / 10
  );
  const opponentsTotalPts = opponentsWeeklyTotalPts.reduce(
    (prev, curr) => prev + curr,
    0
  );
  const whoWonText =
    userTotalWins > opponentTotalWins ? "YOU WIN!" : "OPPONENT WINS!";

  return (
    <div>
      <div
        id="users-and-opponents-season-container"
        className="grid grid-cols-2"
      >
        <div>
          <div className="grid grid-flow-row my-4">
            {usersSeasonGamesByWeek.map((game, index) => (
              <UserSeasonGamesInfo
                key={index + 1}
                game={game}
                week={index + 1}
                usersWeeklyTotalPts={usersWeeklyTotalPts}
                opponentsWeeklyTotalPts={opponentsWeeklyTotalPts}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-flow-row my-4">
            {opponentsSeasonGamesByWeek.map((game, index) => (
              <OpponentSeasonGamesInfo
                key={index + 1}
                game={game}
                week={index + 1}
                usersWeeklyTotalPts={usersWeeklyTotalPts}
                opponentsWeeklyTotalPts={opponentsWeeklyTotalPts}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-flow-col font-extrabold">
          <p id="user-season-total-wins">Total Wins: {userTotalWins}</p>
          <p id="user-season-total-points">Total Points: {parseFloat(usersTotalPts.toFixed(2))}</p>
        </div>
        <div className="grid grid-flow-col font-extrabold">
          <p id="opponent-season-total-wins">Total Wins: {opponentTotalWins}</p>
          <p id="opponent-season-total-points">Total Points: {parseFloat(opponentsTotalPts.toFixed(2))}</p>
        </div>
      </div>

      <div id="who-won-season" className="text-center text-4xl font-extrabold my-2 border-t-2 border-b-2 border-black max-w-sm m-auto">
        {whoWonText}
      </div>
      <button id="clear-season-button" className="drop-button m-1" onClick={handleClearSeasonData}>
        Clear Season
      </button>
    </div>
  );
};

export default SeasonGamesInfo;
