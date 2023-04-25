import React from 'react'
import { Table, Button } from 'antd';
import IContact from '../../../interfaces/contact';
import ICategory from '../../../interfaces/category';
type Props = {
  categories: ICategory[]
  Onremove:(id:string) => void
}
const ManageCategory = (props: Props) => {
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
      title: 'created At',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      action: 'name',
      render: (item: any) => <>
        <Button href={`/admin/categories/${item.key}/update`}>update</Button>
        <Button onClick={()=>HandleRemove(item.key)}>delete</Button>
      </>
    },
  ];

  const data = props.categories.map(item => {
    return {
      key: item._id,
      name: item.name,
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

export default ManageCategory