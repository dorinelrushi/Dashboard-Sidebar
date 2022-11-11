import React from 'react'

import { NavData } from '../LeftSide/NavData'






function RightSide() {
  return (
    <>
      {NavData.map((val, key)=>{
                  return(
                    <div key={key}>
                      {window.location.pathname === val.link ? val.page : <p style={{display:'none'}}></p>}
                    </div>
                  )
              })}
      </>
  )
}

export default RightSide
