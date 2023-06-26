import React from 'react'
import FinanceMovesStatus from '../../FinancePayment/FinanceMovesStatus'
import Leads from '../../Leads/Leads'
import './RightSidebar.css'

export default function RightSidebar() {
  return (
<div className="RightSide">
    <div>
        <h3>Leads</h3>
        <Leads/>
    </div>
    <div>
        <h3>Moves Payment Status</h3>
        <FinanceMovesStatus/>
    </div>
</div>  )
}
