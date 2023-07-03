import React from 'react'
import "../../App.css"
import Sidebar from '../Sidebar/LeftSidebar/Sidebar'
// import RightSidebar from '../Sidebar/RightSidebar/RightSidebar'
import Transporter from './Entity/Transporters/Transporter'
import Transporters from './Entity/Transporters/Transporters'



export default function Registry() {
  return (

    <div className="home">
      <div className="Main">
        <div className="MainGlass">
          <h1>Registry</h1>
          <Sidebar />
          <Transporter/>
          <Transporters/>
        </div>
      </div>
    </div>
  )
}
