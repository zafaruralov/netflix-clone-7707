import React from 'react'
import Banner from './Banner'
import './HomeScreen.css'
import Nav from './Nav'
import requests from './request'
import Row from './Row'

const HomeScreen = () => { 
  return (
    <div className='homeScreen'>
        {/* Nav */}
        <Nav />
        {/* Banner */}
        <Banner />
        {/* Row */}
        <Row title="Netflic-clone"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
        />
        <Row title="Netflic-clone"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
        />
        <Row title="Netflic-clone"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
        />
        <Row title="Netflic-clone"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
        />
    </div>
  )
}

export default HomeScreen