import React from "react";

const Runningbacks = ({ runningback, selectedRB, handleDraftPOS, balance, twoPositionsSelected }) => {

  

  return (
    <div className={selectedRB ? "player-card opacity-25" : "player-card"}>
      <img
        src={runningback.image}
        alt={runningback.name}
        className="m-auto h-auto max-h-36 w-auto"
      ></img>
      <div className="m-auto font-semibold text-center">
        <h4 className="text-green-500">{runningback.pos}</h4>
        <h4 className="w-max">{runningback.name}</h4>
        <h4 className="">${runningback.price}</h4>
        <h4 className="">Rank: {runningback.rank}</h4>
      </div>
      <button
        id={`draft-button-rb-${runningback.id}`}
        className={
          selectedRB ||
          runningback.price > balance || (!twoPositionsSelected && runningback.price + 100 > balance)
            ? "draft-button-inactive"
            : "draft-button"
        }
        onClick={selectedRB ? null : () => handleDraftPOS(runningback)}
      >
        Draft
      </button>
    </div>
  );
};

export default Runningbacks;
