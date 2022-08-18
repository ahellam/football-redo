import React from 'react'
import UserSeasonGamesInfo from './UserSeasonGamesInfo'

const SeasonGamesInfo = ({ handleClearSeasonData, usersSeasonGamesByWeek, opponentsSeasonGamesByWeek }) => {
  const usersWeeklyTotalPts = usersSeasonGamesByWeek.map(games => games.map(game => Math.round(10 * game.points)).reduce((prev, curr) => prev + curr, 0) / 10) 
  const opponentsWeeklyTotalPts = opponentsSeasonGamesByWeek.map(games => games.map(game => Math.round(10 * game.points)).reduce((prev, curr) => prev + curr, 0) / 10) 
  

  // console.log(usersSeasonGamesByWeek.map(games => games.map(game => game.points)))
  // console.log(usersWeeklyTotalPts)
    // let userWins = 0
    // let opponentWins = 0
    // const arrayOfUserTeamPlayersPoints = selectedUserTeam.players.map(player => player.games.map(game => game.points).reduce((prev, curr) => prev + curr, 0))
    // const arrayOfOpponentTeamPlayersPoints = selectedOpponentTeam.players.map(player => player.games.map(game => game.points).reduce((prev, curr) => prev + curr, 0))

    //   const usersGamesThatWeek = selectedUserTeam.players.map(player => player.games.find(game => game.week === week))
    //   const opponentsGamesThatWeek = selectedOpponentTeam.players.map(player => player.games.find(game => game.week === week))
    //   const usersTotalPointsThatWeek = Math.round(10 * (usersGamesThatWeek.reduce((prev, curr) => prev + curr.points, 0))) / 10
    //   const opponentsTotalPointsThatWeek = Math.round(10 * (opponentsGamesThatWeek.reduce((prev, curr) => prev + curr.points, 0))) / 10

    //   const whoWonText = usersTotalPointsThatWeek > opponentsTotalPointsThatWeek ? 'YOU WIN' : 'OPPONENT WINS'

    //   usersTotalPointsThatWeek > opponentsTotalPointsThatWeek ? userWins += 1 : opponentWins += 1

    //   console.log(`week:`, week, whoWonText, `-- Your teams pts:`, usersTotalPointsThatWeek, `-- Opponents teams pts:`, opponentsTotalPointsThatWeek)
    // }

    // console.log(`YOUR TEAM TOTAL PTS:`, arrayOfUserTeamPlayersPoints.reduce((prev, curr) => prev + curr, 0), `YOUR TEAM TOTAL WINS:`, userWins)
    // console.log(`OPPONENET TEAM TOTAL PTS:`, arrayOfOpponentTeamPlayersPoints.reduce((prev, curr) => prev + curr, 0), `OPPONENT TEAM TOTAL WINS:`, opponentWins)
    // userWins > opponentWins ? console.log('YOU WIN!') : console.log('OPPONENT WINS!')


  return (
    <div>
      <div id="users-and-opponents-season-container" className="grid grid-cols-2">
        <div>
          <div className="grid grid-flow-row mt-4">
            {usersSeasonGamesByWeek.map((game, index) => (
              <UserSeasonGamesInfo key={index + 1} game={game} week={index + 1} usersWeeklyTotalPts={usersWeeklyTotalPts} opponentsWeeklyTotalPts={opponentsWeeklyTotalPts}/>
            ))}
          </div>
        </div>
      </div>

      <div className="text-left">
        TOTAL PTS AND TOTAL WINS HERE....
      </div>
      <button
        className="drop-button m-1"
        onClick={handleClearSeasonData}
      >Clear Season
      </button>
    </div>
  )
}

export default SeasonGamesInfo