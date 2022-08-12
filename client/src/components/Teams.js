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

  return (
    <div>
      <div className="my-2 p-1 text-2xl bg-white font-semibold text-center sticky top-16 z-40">
        <div>
          {twoTeamsSelected && 
            <button 
              className="drop-button"
              onClick={handleDropTeams}
              >Clear Teams
            </button>
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
