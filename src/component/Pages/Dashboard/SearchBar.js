import React from 'react'
import './SearchBar.css'
function SearchBar() {
  return (
    <div>
    
     <div className='flex-search'>
        <div className='left-search'>
           <div className='fa fa-search'></div>
           <h2><b>Search form </b>Clinic,medicine,etc...</h2>
        </div>
        <div className='right-bell'>
          <div className='bell-icon'>
            <i className='fa fa-bell'></i>
          </div>
        </div>
     </div>
    
    </div>
  )
}

export default SearchBar
