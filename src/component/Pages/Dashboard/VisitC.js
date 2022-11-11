import React from 'react'
import Card from './Card'
import './Visitc.css'
function VisitC() {
  return (
    <div className='visitFlex'>

        <div className='visitFlex-text'>
            <div className='left-v'>
                <h2>Visit the clinics</h2>
            </div>
            <div className='right-v'>
                <p>sort by</p>
                <select>
                    <option >Date</option>
                    <option >Date</option>
                    <option >Date</option>
                </select>
            </div>
        </div>
        {/**/}
        <div className='flex-card'>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </div>
      
    </div>
  )
}

export default VisitC
