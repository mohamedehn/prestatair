import React from 'react'

function Activities({activities, img}) {
  return (
    <div className="relative flex items-center justify-center h-[275px] w-full shadow-xl shadow-gray-400 rounded-xl p-4 group 
    hover:bg-gradient-to-r from-[#9aabb2] to-[#225a65]">
        <img className="rounded-xl group-hover:opacity-10" src={img} alt="/" width="320"/>
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">{activities}</h3>
        </div>
    </div>
  )
}

export default Activities