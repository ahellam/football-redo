import React from 'react'

const UserSeasonGamesInfo = ({ game, week, usersWeeklyTotalPts, opponentsWeeklyTotalPts }) => {
  const wonOrLostUser = usersWeeklyTotalPts[week -1] > opponentsWeeklyTotalPts[week -1] ? "Won" : "Lost"
  const position = ["QB", "WR", "RB"]

  return (
    <div className="m-[2px]">
      <div className="grid grid-cols-3">
        {game.map((game, index) => (
          <p key={index + 1} className="text-xs font-bold">{position[index]}: <span className="text-blue-500 font-extrabold">{game.points}</span> pts</p>
        ))}
      </div>
      <div className="text-s text-white font-semibold bg-[#323236] grid grid-cols-3 grid-flow-col">
        <p className="">Week: <span className="text-green-500 font-extrabold">{week}</span></p>
        <p className={ wonOrLostUser === "Won" ? "font-bold text-green-500" : "font-bold text-red-500"}>{wonOrLostUser}</p>
        <p>Total: <span className="text-green-500 font-bold">{usersWeeklyTotalPts[week - 1]}</span> pts</p>
      </div>
    </div>
  )
}

export default UserSeasonGamesInfo