import React from 'react'
import  style from './NavBar.module.css'
import { TiWeatherSnow } from 'react-icons/ti';

function NavBar() {
  return (
    <div className={style.container}>
      <h1><TiWeatherSnow/>Weather</h1>
    </div>
  )
}

export default NavBar
