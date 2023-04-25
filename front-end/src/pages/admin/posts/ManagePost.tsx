import React from 'react'
import { Table, Button } from 'antd';
import IPost from '../../../interfaces/post';
type Props = {
  posts: IPost[]
  Onremove: (id: string) => void
}
const ManagePost = (props: Props) => {
  const HandleRemove = (id: string) => {
    props.Onremove(id)
  }
  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'created At',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      action: 'name',
      render: (item: any) => <>
        <Button href={`/admin/post/${item.key}/update`}>update</Button>
        <Button onClick={() => HandleRemove(item.key)}>delete</Button>
      </>
    },
  ];

  const data = props.posts.map(item => {
    return {
      key: item._id,
      title: item.title,
      image: item.images,
      createdAt: item.createdAt,
      author: item.author,
      tags: item.tags,
      CategoryId: item.CategoryId,
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

export default ManagePost