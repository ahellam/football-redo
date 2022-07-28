import Quarterbacks from "./Quarterbacks"
import Recievers from "./Recievers"
import Runningbacks from "./Runningbacks"

const Home = ({ positions }) => {
  // console.log(positions)

  return (
    <div className="m-1 grid grid-flow-col">
      <div id="qb-container">
        {positions && positions.find(position => position.id === 1)
        .players.map(quarterback => (
          <Quarterbacks key={quarterback.id} quarterback={quarterback}/>
        ))}
      </div>
      <div id="wr-container">
        {positions && positions.find(position => position.id === 2)
        .players.map(reciever => (
          <Recievers key={reciever.id} reciever={reciever}/>
        ))}
      </div>
      <div id="rb-container">
        {positions && positions.find(position => position.id === 3)
        .players.map(runningback => (
          <Runningbacks key={runningback.id} runningback={runningback}/>
        ))}
      </div>
    </div>
  )
}

export default Home