import React from 'react'


const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute w-5/12 h-max mx-12 my-96 p-4 z-50 text-white bg-gradient-to-r from-black'>
        <h1 className=' font-bold text-6xl p-2'>{title}</h1>
        <p className='p-2'>{overview}</p>
        <div className='p-2 flex'>
            <button className=' border px-10 py-2 mr-2 rounded bg-blue-500 text-lg flex text-black bg-white hover:bg-opacity-80'><img className='w-5 mx-2' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/play--v1.png" alt="play--v1"/> <span> Play</span></button>
            <button className='border px-10 py-2 rounded bg-blue-500 text-lg flex text-black bg-gray-500 hover:bg-opacity-80' ><img className='w-6 mx-2'width="30" height="30" src="https://img.icons8.com/ios/50/info--v1.png" alt="info--v1"/><span>More Info</span></button>
        </div>
    </div>
  )
}

export default VideoTitle
