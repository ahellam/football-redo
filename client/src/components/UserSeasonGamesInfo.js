import React from 'react'

const UserSeasonGamesInfo = ({ game, week, usersWeeklyTotalPts, opponentsWeeklyTotalPts }) => {
  const wonOrLostUser = usersWeeklyTotalPts[week -1] > opponentsWeeklyTotalPts[week -1] ? "Won" : "Lost"
  const position = ["QB", "WR", "RB"]


  return (
    <div className="">
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

      {/* <div className="bg-[#323236] mb-1  text-white rounded-sm">
      <p className="text-sm">Week: <span className="text-green-500 font-extrabold">{week} </span><span className={ wonOrLostUser === "Won" ? "font-bold text-yellow-500" : "font-bold text-red-500"}> {wonOrLostUser}</span></p>
        <div className="grid grid-flow-col">
        {game.map((game, index) => (
          <p key={index} className="text-sm"><span className="text-green-500 font-bold">{position[index]}: </span><span className="font-extrabold">{game.points}</span><span className="text-base font-semibold"> pts</span> </p>
          // this could be own component
        ))}
        </div>
        <p className="text-sm text-green-500">Total: <span className="text-white font-extrabold">{usersWeeklyTotalPts[week - 1]}<span className="text-xs font-semibold"> pts</span></span></p>
      </div>  */}
    </div>
  )
}

export default UserSeasonGamesInfo