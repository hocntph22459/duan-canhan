import React from 'react'
import { Table, Button } from 'antd';
import IContact from '../../../interfaces/contact';
type Props = {
  contacts: IContact[]
  Onremove:(id:string) => void
}
const ManageContact = (props: Props) => {
  const HandleRemove = (id:string)=>{
    props.Onremove(id)
  }
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'support',
      dataIndex: 'support',
      key: 'support'
    },
    {
      title: 'created At',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      action: 'name',
      render: (item: any) => <>
        <Button onClick={()=>HandleRemove(item.key)}>delete</Button>
      </>
    },
  ];

  const data = props.contacts.map(item => {
    return {
      key: item._id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      address: item.address,
      support: item.support,
      createdAt: item.createdAt,

    }
  })

  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
    />
  )
}

export default ManageContact