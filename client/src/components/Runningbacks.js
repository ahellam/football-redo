import React from 'react'

const Runningbacks = ({ runningback }) => {
  return (
    <div className="m-1 p-1 rounded-md bg-[#323236] text-white grid grid-flow-col">
      <img src={runningback.image} alt={runningback.name} className="m-auto w-36 object-cover"></img>
      <div className="m-auto font-semibold">
        <h4>{runningback.name}</h4>
        <h4>${runningback.price}</h4>
        <h4>Rank: {runningback.rank}</h4>
      </div>
      <button className="m-auto border-[1px] border-white rounded-[4px] px-6 py-2 hover:border-[2px] active:text-green-500 active:border-green-500">Draft</button>
    </div>
  )
}

export default Runningbacks