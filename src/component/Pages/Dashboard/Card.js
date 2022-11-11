import React from 'react'
import './Card.css'
function Card() {
  return (
    <div className='card'>
      <div className='flex-card'>
           <div className='card-item'>
           <div className='img-r'></div>
             <h2>Sekarwangi</h2>
             <p>Clinic  & Pharmacy</p>
             <div className='flex-l'>
                <i className='fa fa-map-marker'></i>
                <h2>View Map</h2>
             </div>
           </div>
      </div>
    </div>
  )
}

export default Card
