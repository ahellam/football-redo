import React from 'react'

const SelectedPlayers = ({ selectedQB, selectedWR, selectedRB, handleDropPOS }) => {
  return (
    <div id="selected-players" className="grid grid-cols-3 justify-items-center">
    <div className="selected-player">
      {selectedQB ? 
        <>
          <img src={selectedQB.image} alt={selectedQB.name} className="m-auto h-auto max-h-36 w-auto"></img>
          <div className="m-auto font-semibold text-center">
            <h4 className="text-green-500">{selectedQB.pos}</h4>
            <h4>{selectedQB.name}</h4>
          </div>
          <button className="drop-button" onClick={() => handleDropPOS(selectedQB)}>Drop</button>
        </>
        : <p className=" text-xl col-start-2">Select QB</p> 
      }
    </div>

    <div className="selected-player">
    {selectedWR ? 
        <>
          <img src={selectedWR.image} alt={selectedWR.name} className="m-auto h-auto max-h-36 w-auto"></img>
          <div className="m-auto font-semibold text-center">
            <h4 className="text-green-500">{selectedWR.pos}</h4>
            <h4>{selectedWR.name}</h4>
          </div>
          <button className="drop-button" onClick={() => handleDropPOS(selectedWR)}>Drop</button>
        </>
        : <p className=" text-xl col-start-2">Select WR</p> 
      }
    </div>

    <div className="selected-player">
    {selectedRB ? 
        <>
          <img src={selectedRB.image} alt={selectedRB.name} className="m-auto h-auto max-h-36 w-auto"></img>
          <div className="m-auto font-semibold text-center">
            <h4 className="text-green-500">{selectedRB.pos}</h4>
            <h4>{selectedRB.name}</h4>
          </div>
          <button className="drop-button" onClick={() => handleDropPOS(selectedRB)}>Drop</button>
        </>
        : <p className=" text-xl col-start-2">Select RB</p> 
      }
    </div>

  </div>
  )
}

export default SelectedPlayers