import React from "react";

const Quarterbacks = ({ quarterback, selectedQB, handleDraftPOS, balance, twoPositionsSelected }) => {
  return (
    <div className={selectedQB ? "player-card opacity-25" : "player-card"}>
      <img
        src={quarterback.image}
        alt={quarterback.name}
        className="m-auto h-auto max-h-36 w-auto"
      ></img>
      <div className="m-auto font-semibold text-center">
        <h4 className="text-green-500">{quarterback.pos}</h4>
        <h4 className="w-max">{quarterback.name}</h4>
        <h4 className="">${quarterback.price}</h4>
        <h4 className="">Rank: {quarterback.rank}</h4>
      </div>
      <button
        id={`draft-button-qb-${quarterback.id}`}
        className={
          selectedQB ||
          quarterback.price > balance || (!twoPositionsSelected && quarterback.price + 100 > balance)
            ? "draft-button-inactive"
            : "draft-button"
        }
        onClick={selectedQB ? null : () => handleDraftPOS(quarterback)}
      >
        Draft
      </button>
    </div>
  );
};

export default Quarterbacks;
