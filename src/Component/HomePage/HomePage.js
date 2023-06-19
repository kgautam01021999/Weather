import React, { useState } from 'react'
import Card from '../Card/Card'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import style from './HomePage.module.css'
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { Weather } from '../Card/Const/Const'

function HomePage() {
  console.log(Weather)
  const [data, setData] = useState(Weather)
  const [search,setSearch] = useState("Patna")

  function handleCllicked(id){
    const newData= data.filter((item)=> item.id ===id)
    setSearch(newData[0].city)
   
  }

  return (
    <>
      <NavBar />
    <div className={style.container}>
  
    <SearchBar
     onChange={(e)=>setSearch(e.target.value)}
    />
<div className={style.allCard}>
    {
      
      data.filter((item)=>{
        return item.city.toLowerCase().includes(search.toLowerCase())
      }

      ).map((item)=>
     
    
             <div onClick={()=>handleCllicked(item.id)} className={style.card}>
             <div  className={style.innerpart}>
            <h4>{item.city}</h4>
             <h1><TiWeatherPartlySunny /></h1>
             <h2>{item.Temp}</h2>
             </div> 
           </div>
      )
    }

</div>
    </div>
    </>
  )
}

export default HomePage
