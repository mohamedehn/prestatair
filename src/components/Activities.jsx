import React from 'react'

function Activities({activities, img}) {
  return (
    <div className="relative flex items-center justify-center md:h-[220px] h-[250px] md:w-[17%] w-[90%] shadow-xl shadow-gray-400 rounded-xl 
    p-4 group hover:bg-gradient-to-r from-[#9aabb2] to-[#225a65] mx-auto mb-14 md:mb-0">
        <img className="rounded-xl group-hover:opacity-10 md:h-[auto] h-[230px] md:w-[320px]" src={img} alt="/" width="230" />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-xl text-white tracking-wider text-center">{activities}</h3>
        </div>
    </div>
  )
}

export default Activities