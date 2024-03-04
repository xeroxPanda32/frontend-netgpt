import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';


const Browse = () => {

 useNowPlayingMovies(); // calling the custom hook


  return (
   <>
    < Header />
    <MainContainer/></>
  )
}

export default Browse