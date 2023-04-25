import React from 'react'
import { Table, Button } from 'antd';
import IComment from '../../../interfaces/comment';
type Props = {
  comments: IComment[]
  Onremove:(id:string) => void
}
const ManageComment = (props: Props) => {
  const HandleRemove = (id:string)=>{
    props.Onremove(id)
  }
  const columns = [
    {
      title: 'content',
      dataIndex: 'content',
      key: 'content'
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email'
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

  const data = props.comments.map(item => {
    return {
      key: item._id,
      content: item.content,
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

export default ManageComment