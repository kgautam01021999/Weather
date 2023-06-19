import React from 'react'
import { Weather } from './Const/Const'
import style from './Card.module.css'

function Card() {
    console.log(Weather)

  return (
   <>
       {Weather.map((item )=>(
        <div key={item.id} className={style.container}>
         <h4>{item.city}</h4>
         <h2>{item.Temp}</h2>
         </div>
       ))}
   </>
  )
}

export default Card
