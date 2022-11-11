import React from 'react'
import './Profile.css'
function Profile() {
  return (
    <div>
      <div className='profile'>
        <div className='inside-flex-profile'>

          <div className='myprofile'>
            <h2>My profile</h2>
          </div>
          <div className='pen'>
          <i className="fa fa-pencil" aria-hidden="true"></i>
          </div>
        </div>
        {/* name */}
        <div className='circle-profile'>
          <div className='circle-profile-flex'></div>
          <h2>Pak Defe Slamet</h2>
          <p>Premium Member</p>
        </div>

       <div className='donw-arrow'>
        <span>&#xfe40;</span>
       </div>



      </div>
    </div>
  )
}

export default Profile
