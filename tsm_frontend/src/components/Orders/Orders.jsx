import { Table } from 'antd'
import React from 'react'

export default function Orders() {
  return (
    <Table>
    columns={[

{
    title: 'ORDER ID',
    dataIndex:'id'
},
{
    title: 'Name',
    dataIndex:'name'
},
{
    title: 'Email',
    dataIndex:'email'
},
{
    title: 'Country',
    dataIndex:'country'
},
{
    title: 'City',
    dataIndex:'city'
},

    ]}


    </Table>
  )
}
