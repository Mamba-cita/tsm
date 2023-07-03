import React from 'react'
import Order from '../Orders/Order'
import Sidebar from '../Sidebar/LeftSidebar/Sidebar'
import RightSidebar from '../Sidebar/RightSidebar/RightSidebar'

export default function Shipments() {
  return (

        <div className="home">
          <div className="Main">
            <div className="MainGlass">
              <h1>Shipments</h1>
              <Sidebar />
              <Order/>
              <RightSidebar />
            </div>
          </div>
        </div>
  )
}
