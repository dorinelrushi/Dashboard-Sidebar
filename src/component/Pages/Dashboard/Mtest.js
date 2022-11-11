import React from 'react'
import './Mtest.css'
function Mtest() {
    const image = require('../../../assets/image 15.png')
  return (
   <div className='p-mtest'>
     <div className='mtest'>

       <div className='flex-mtest'>
          <div className='left-mtest'>
            <h4>Medical Test</h4>
            <h2>The annual check is comming soon</h2>
            <p>Tomorrow, Feb 21,2022</p>
            <button>Add to calendar</button>
         </div>
       <div className='right-mtest'>
         <img src={image} width='50%'  alt='doctorVisit'/>
       </div>
     </div>

  </div>
   </div>
  )
}

export default Mtest
