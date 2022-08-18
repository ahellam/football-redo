import {useState} from "react";
import UsersTeams from "./UsersTeams";
import OpponentTeams from "./OpponentTeams";
import SelectedTeams from "./SelectedTeams";
import RandomGameInfo from "./RandomGameInfo";
import SeasonGamesInfo from "./SeasonGamesInfo";

const Teams = ({ user, myTeams, opponents, handleDeleteTeam }) => {
  const [selectedUserTeam, setSelectedUserTeam] = useState(null)
  const [selectedOpponentTeam, setSelectedOpponentTeam] = useState(null) 
  const [usersGamesThatWeek, setUsersGamesThatWeek] = useState(null)
  const [opponentsGamesThatWeek, setOpponentsGamesThatWeek] = useState(null)
  const [usersSeasonGamesByWeek, setUsersSeasonGamesByWeek] = useState(null)
  const [opponentsSeasonGamesByWeek, setOpponentsSeasonGamesByWeek] = useState(null)
  // const [playingSeason, setPlayingSeason] = useState(false)
  const twoTeamsSelected = selectedUserTeam && selectedOpponentTeam

  const handleSelectTeam = (team) => {
    team.user_id === user.id ? setSelectedUserTeam(team) : setSelectedOpponentTeam(team)
  }

  const handleDropTeams = () => {
    setSelectedUserTeam(null)
    setSelectedOpponentTeam(null)
    setUsersGamesThatWeek(null)
    setOpponentsGamesThatWeek(null)
  }

  const handleClearGameData = () => {
    setUsersGamesThatWeek(null)
    setOpponentsGamesThatWeek(null)
  }

  const handleClearSeasonData = () => {
    // setPlayingSeason(false)
    setUsersSeasonGamesByWeek(null)
    setOpponentsSeasonGamesByWeek(null)
  }

  const handlePlayRandomGame = () => {
    const randomWeek = Math.floor(Math.random() * 18) + 1
    setUsersGamesThatWeek(selectedUserTeam.players.map(player => player.games.find(game => game.week === randomWeek)))
    setOpponentsGamesThatWeek(selectedOpponentTeam.players.map(player => player.games.find(game => game.week === randomWeek)))
  }

  const handlePlaySeason = () => {
    // setPlayingSeason(true)
    const userWeekGames = []
    const opponentsWeekGames = []
  
    for (let week = 1; week <= 18; week++) {
      const usersGamesThatWeek = selectedUserTeam.players.map(player => player.games.find(game => game.week === week))
        userWeekGames.push(usersGamesThatWeek)
      const opponentsGamesThatWeek = selectedOpponentTeam.players.map(player => player.games.find(game => game.week === week))
        opponentsWeekGames.push(opponentsGamesThatWeek)
      
    }
    if (userWeekGames.length > 0) setUsersSeasonGamesByWeek(userWeekGames)
    if (opponentsWeekGames.length > 0) setOpponentsSeasonGamesByWeek(opponentsWeekGames)


    // console.log(selectedUserTeam.players.map(player => player.games))
    // let userWins = 0
    // let opponentWins = 0
    // const arrayOfUserTeamPlayersPoints = selectedUserTeam.players.map(player => player.games.map(game => game.points).reduce((prev, curr) => prev + curr, 0))
    // const arrayOfOpponentTeamPlayersPoints = selectedOpponentTeam.players.map(player => player.games.map(game => game.points).reduce((prev, curr) => prev + curr, 0))

    // for (let week = 1; week <= 18; week++) {
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
              >Play Random Week
            </button>
            <button
              className="play-button m-1"
              onClick={handlePlaySeason}
              >Play Full Season
            </button>
          </div>
          }
        </div>
        <div id="selected-team-container" className="">
          <SelectedTeams selectedUserTeam={selectedUserTeam} selectedOpponentTeam={selectedOpponentTeam}/>
        </div>

        {usersGamesThatWeek && 
        <div id="random-game-container" className="">
          <RandomGameInfo 
            handleClearGameData={handleClearGameData} 
            usersGamesThatWeek={usersGamesThatWeek} 
            opponentsGamesThatWeek={opponentsGamesThatWeek}
          />
        </div>}
        
        {usersSeasonGamesByWeek &&
        <div id="season-games-container" className="px-2">
          <SeasonGamesInfo 
            handleClearSeasonData={handleClearSeasonData}
            // playingSeason={playingSeason}
            usersSeasonGamesByWeek={usersSeasonGamesByWeek}
            opponentsSeasonGamesByWeek={opponentsSeasonGamesByWeek}
          />
        </div>}
      </div>

      <div className="grid grid-cols-2 grid-flow-col">
        {myTeams && (
          <div className="team-container">
            
            {myTeams.map((myTeam) => (
              <UsersTeams 
                key={myTeam.id} 
                myTeam={myTeam} 
                handleSelectTeam={handleSelectTeam} 
                selectedUserTeam={selectedUserTeam} 
                handleDeleteTeam={handleDeleteTeam}
              />
            ))}
          </div>
        )}
        {opponents && (
          <div className="team-container">
            
            {opponents.map((opponent) => (
              <OpponentTeams 
                key={opponent.id} 
                opponent={opponent} 
                handleSelectTeam={handleSelectTeam} 
                selectedOpponentTeam={selectedOpponentTeam} 
                handleDeleteTeam={handleDeleteTeam}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;
