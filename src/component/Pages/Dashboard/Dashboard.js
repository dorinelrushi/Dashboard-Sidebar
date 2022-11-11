import React from 'react'
import SearchBar from './SearchBar'
import './Dashboard.css'
import Mtest from './Mtest'
import VisitC from './VisitC'
function Dashboard() {
  return (
    <div>
     <div className='dashboard-inside'>
      <div className='dashboard-flex'>
        <SearchBar/>
        <Mtest/>
        <VisitC/>
      </div>
     </div>
    </div>
  )
}

export default Dashboard
