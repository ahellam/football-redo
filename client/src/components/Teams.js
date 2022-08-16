import {useState} from "react";
import UsersTeams from "./UsersTeams";
import OpponentTeams from "./OpponentTeams";
import SelectedTeams from "./SelectedTeams";

const Teams = ({ user, myTeams, opponents, handleDeleteTeam }) => {
  const [selectedUserTeam, setSelectedUserTeam] = useState(null)
  const [selectedOpponentTeam, setSelectedOpponentTeam] = useState(null) 
  const twoTeamsSelected = selectedUserTeam && selectedOpponentTeam

  const handleSelectTeam = (team) => {
    team.user_id === user.id ? setSelectedUserTeam(team) : setSelectedOpponentTeam(team)
  }

  const handleDropTeams = () => {
    setSelectedUserTeam(null)
    setSelectedOpponentTeam(null)
  }

  const handlePlayRandomGame = () => {
    const randomWeek = Math.floor(Math.random() * 18) + 1

    const usersGamesThatWeek = selectedUserTeam.players.map(player => player.games.find(game => game.week === randomWeek))
    const usersTotalPointsThatWeek = Math.round(10 * (usersGamesThatWeek.reduce((prev, curr) => prev + curr.points, 0))) / 10

    const opponentGamesThatWeek = selectedOpponentTeam.players.map(player => player.games.find(game => game.week === randomWeek))
    const opponentTotalPointsThatWeek = Math.round(10 * (opponentGamesThatWeek.reduce((prev, curr) => prev + curr.points, 0))) / 10

    console.log('random week:', randomWeek)
    console.log('users players games that week:', usersGamesThatWeek)
    console.log('opponent players games that week:', opponentGamesThatWeek)
    console.log('users total pts that week:', usersTotalPointsThatWeek)
    console.log('opponent total pts that week:', opponentTotalPointsThatWeek)
    
  }

  const handlePlaySeason = () => {
    const arrayOfUserTeamPlayersPoints = selectedUserTeam.players.map(player => player.games.map(game => game.points).reduce((prev, curr) => prev + curr, 0))
    const arrayOfOpponentTeamPlayersPoints = selectedOpponentTeam.players.map(player => player.games.map(game => game.points).reduce((prev, curr) => prev + curr, 0))
    let userWins = 0
    let opponentWins = 0

    for (let week = 1; week <= 18; week++) {
      const usersGamesThatWeek = selectedUserTeam.players.map(player => player.games.find(game => game.week === week))
      const opponentsGamesThatWeek = selectedOpponentTeam.players.map(player => player.games.find(game => game.week === week))
      const usersTotalPointsThatWeek = Math.round(10 * (usersGamesThatWeek.reduce((prev, curr) => prev + curr.points, 0))) / 10
      const opponentsTotalPointsThatWeek = Math.round(10 * (opponentsGamesThatWeek.reduce((prev, curr) => prev + curr.points, 0))) / 10

      const whoWonText = usersTotalPointsThatWeek > opponentsTotalPointsThatWeek ? 'YOU WIN' : 'OPPONENT WINS'

      usersTotalPointsThatWeek > opponentsTotalPointsThatWeek ? userWins += 1 : opponentWins += 1


      console.log(`week:`, week, whoWonText, `-- Your teams pts:`, usersTotalPointsThatWeek, `-- Opponents teams pts:`, opponentsTotalPointsThatWeek)
    }

    console.log(`YOUR TEAM TOTAL PTS:`, arrayOfUserTeamPlayersPoints.reduce((prev, curr) => prev + curr, 0), `YOUR TEAM TOTAL WINS:`, userWins)
    console.log(`OPPONENET TEAM TOTAL PTS:`, arrayOfOpponentTeamPlayersPoints.reduce((prev, curr) => prev + curr, 0), `OPPONENT TEAM TOTAL WINS:`, opponentWins)
    userWins > opponentWins ? console.log('YOU WIN!') : console.log('OPPONENT WINS!')
  }

  return (
    <div>
      <div className="my-2 p-1 text-2xl bg-white font-semibold text-center sticky top-16 z-40">
        <div>
          {twoTeamsSelected && 
          <div>
            <button 
              className="drop-button m-1"
              onClick={handleDropTeams}
              >Clear Teams
            </button>
            <button
              className="play-button m-1"
              onClick={handlePlayRandomGame}
              >Play Games
            </button>
            <button
              className="play-button m-1"
              onClick={handlePlaySeason}
              >Play Season
            </button>
          </div>
          }
        </div>
        <div id="selected-team-container" className="">
          <SelectedTeams selectedUserTeam={selectedUserTeam} selectedOpponentTeam={selectedOpponentTeam}/>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-flow-col">
        {myTeams && (
          <div className="team-container">
            
            {myTeams.map((myTeam) => (
              <UsersTeams key={myTeam.id} myTeam={myTeam} selectedUserTeam={selectedUserTeam} handleSelectTeam={handleSelectTeam} handleDeleteTeam={handleDeleteTeam}/>
            ))}
          </div>
        )}
        {opponents && (
          <div className="team-container">
            
            {opponents.map((opponent) => (
              <OpponentTeams key={opponent.id} opponent={opponent} selectedOpponentTeam={selectedOpponentTeam} handleSelectTeam={handleSelectTeam} handleDeleteTeam={handleDeleteTeam}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;
