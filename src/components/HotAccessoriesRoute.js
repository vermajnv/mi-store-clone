import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HotAccessories from './HotAccessories';
import data from '../data/data.json'; 

const HotAccessoriesRoute = () => {
  return (
    <div>
        <Routes>
            <Route exact 
                path="/music" 
                element = {<HotAccessories image={data.hotAccessories.music} cover={data.hotAccessoriesCover.music}></HotAccessories>}
            >
            </Route>
            <Route exact 
                path="/smartDevice" 
                element = {<HotAccessories image={data.hotAccessories.smartDevice} cover={data.hotAccessoriesCover.smartDevice}></HotAccessories>}
            >
            </Route>
            <Route exact 
                path="/home" 
                element = {<HotAccessories image={data.hotAccessories.home} cover={data.hotAccessoriesCover.home}></HotAccessories>}
            >
            </Route>
            <Route exact 
                path="/lifestyle" 
                element = {<HotAccessories image={data.hotAccessories.lifeStyle} cover={data.hotAccessoriesCover.lifeStyle}></HotAccessories>}
            >
            </Route>
            <Route exact 
                path="/mobileAccessories" 
                element = {<HotAccessories image={data.hotAccessories.mobileAccessories} cover={data.hotAccessoriesCover.mobileAccessories}></HotAccessories>}
            >
            </Route>
        </Routes>
    </div>
  )
}

export default HotAccessoriesRoute