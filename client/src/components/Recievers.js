import React from 'react'

const Recievers = ({ reciever }) => {
  return (
    <div className="m-1 p-1 rounded-md bg-[#323236] text-white grid grid-cols-3">
      <img src={reciever.image} alt={reciever.name} className="m-auto h-auto max-h-36 w-auto"></img>
      <div className="m-auto font-semibold text-center">
        <h4 className="">{reciever.name}</h4>
        <h4 className="">${reciever.price}</h4>
        <h4 className="">Rank: {reciever.rank}</h4>
      </div>
      <button className="draft-button">Draft</button>
    </div>
  )
}

export default Recievers