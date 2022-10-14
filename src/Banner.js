import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from './axios'
import requests from './request'

const Banner = () => {
    const [movie, setMovie] = useState([])
    function truncate(string, n){
        console.log(string)
        return string.length > n ? string.substr(0, n-1) + '...' : string
    }
    console.log(movie)

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
        }
        fetchData()
    }, [])

  return (
    <header className='banner' style={{
        backgroundSize:'cover ',
        backgroundPosition:'center center',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}>
        <div className='banner__contents'>
            <h1 className='banner_title'>
                {movie?.name || movie?.title || movie?.original_name}
            </h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>
                {truncate(movie?.overview, 120)}
            </h1>
        </div>
        <div className='banner__fadeBottom' />
    </header>
  )
}

export default Banner