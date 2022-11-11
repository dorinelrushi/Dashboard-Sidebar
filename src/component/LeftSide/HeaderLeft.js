import React from 'react'
import Profile from './Profile'
import './HeaderLeft.css'
import Nav from './Nav'





function HeaderLeft() {
  return (
    <div className='header'>

        <div className='header-flex'>
       
            {/*Profile*/}
            <Profile/>
        
         <Nav/>
        
             
        </div>
      
    </div>
  )
}

export default HeaderLeft
