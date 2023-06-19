import React, { useState } from 'react'
import style from './SearchBar.module.css'

function SearchBar({onChange}) {
  return (
    

      <input className={style.inputBox}  
         placeholder="🔍Search" 
        onChange={onChange}
      />

  )
}

export default SearchBar
