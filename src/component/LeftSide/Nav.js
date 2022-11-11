import React from 'react'

import { NavData } from './NavData'

import './Nav.css'

function Navi() {
   
    return (
    <div className='menu'>
        
        <div className='menu-flex'>
             <ul>
              {NavData.map((val, key)=>{
                return (
                  <li key={key} 
                  id={window.location.pathname === val.link ? "active" : "" }
                  onClick={()=>{window.location.pathname = val.link}} 
                  >
                    <div className={val.icon}></div>
                    <div>{val.title}</div>
                  </li>
                )
              })}
             </ul>
        </div>
      
    </div>
  )
}

export default Navi
