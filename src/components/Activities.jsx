import React from 'react'

function Activities({activities, img}) {
  return (
    <div className="relative flex items-center justify-center md:h-[280px] h-[250px] md:w-full w-[90%] shadow-xl shadow-gray-400 rounded-xl 
    p-4 group hover:bg-gradient-to-r from-[#9aabb2] to-[#225a65] mx-auto">
        <img className="rounded-xl group-hover:opacity-10 md:h-[auto] h-[250px] md:w-[320px]" src={img} alt="/" width="250" />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">{activities}</h3>
        </div>
    </div>
  )
}

export default Activities