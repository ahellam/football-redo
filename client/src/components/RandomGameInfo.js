import React from 'react'
import OpponentRandomGameInfo from './OpponentRandomGameInfo'
import UserRandomGameInfo from './UserRandomGameInfo'

const RandomGameInfo = ({ usersGamesThatWeek, opponentsGamesThatWeek, handleClearGameData }) => {

  const usersTotalPointsThatWeek = Math.round(10 * (usersGamesThatWeek.reduce((prev, curr) => prev + curr.points, 0))) / 10
  const opponentsTotalPointsThatWeek = Math.round(10 * (opponentsGamesThatWeek.reduce((prev, curr) => prev + curr.points, 0))) / 10
  const whoWonLeft = usersTotalPointsThatWeek > opponentsTotalPointsThatWeek ? "WINNER" : "LOSER"
  const whoWonRight = usersTotalPointsThatWeek > opponentsTotalPointsThatWeek ? "LOSER" : "WINNER"
  
  return (
    <div>
      <div id="users-and-opponents-games-container" className="grid grid-cols-2">
        <div>
          <div className="grid grid-flow-col">
            {usersGamesThatWeek.map(game => (
              <UserRandomGameInfo key={game.id} game={game}/>
            ))}
          </div>
          <p className="mt-2 border-b-2 border-black w-[30%] m-auto text-center">Total: <span className="text-blue-500 font-bold">{usersTotalPointsThatWeek}</span> pts</p>
          <p className="text-sm font-bold">{whoWonLeft}</p>
        </div>
        <div>
          <div className="grid grid-flow-col">
            {opponentsGamesThatWeek.map(game => (
              <OpponentRandomGameInfo key={game.id} game={game} />
            ))}
          </div>
          <p className="mt-2 border-b-2 border-black w-[30%] m-auto text-center">Total: <span className="text-blue-500 font-bold">{opponentsTotalPointsThatWeek}</span> pts</p>
          <p className="text-sm font-bold">{whoWonRight}</p>
        </div>
      </div>
      <p className="text-base font-bold">
        Week: <span className="text-blue-500">{usersGamesThatWeek[0].week}</span>
      </p>
      <button
        className="drop-button m-1"
        onClick={handleClearGameData}
      >Clear Games
      </button>
    </div>
  )
}

export default RandomGameInfo