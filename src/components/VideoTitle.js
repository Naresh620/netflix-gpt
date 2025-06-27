import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute pt-[20%] px-12 text-white  w-screen aspect-video'>
        <h1 className='text-6xl font-bold w-2/4'>{title}</h1>
        <p className='w-1/3 pt-4'>{overview}</p>
        <div className='pt-4'>
            <button className='bg-white text-black text-xl  p-2 w-36 rounded-lg font-bold hover:bg-gray-300  '>▶ Play</button>
            <button className='bg-white text-black text-xl   p-2 w-36 rounded-lg mx-4  font-bold hover:bg-white'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle