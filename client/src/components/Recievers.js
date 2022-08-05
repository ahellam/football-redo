import React from "react";

const Recievers = ({ reciever, selectedWR, handleDraftPOS, balance, twoPositionsSelected }) => {
  return (
    <div className={selectedWR ? "player-card opacity-25" : "player-card"}>
      <img
        src={reciever.image}
        alt={reciever.name}
        className="m-auto h-auto max-h-36 w-auto"
      ></img>
      <div className="m-auto font-semibold text-center">
        <h4 className="text-green-500">{reciever.pos}</h4>
        <h4 className="w-max">{reciever.name}</h4>
        <h4 className="">${reciever.price}</h4>
        <h4 className="">Rank: {reciever.rank}</h4>
      </div>
      <button
        className={
          selectedWR ||
          reciever.price > balance || (!twoPositionsSelected && reciever.price + 100 > balance)
            ? "draft-button-inactive"
            : "draft-button"
        }
        onClick={selectedWR ? null : () => handleDraftPOS(reciever)}
      >
        Draft
      </button>
    </div>
  );
};

export default Recievers;
