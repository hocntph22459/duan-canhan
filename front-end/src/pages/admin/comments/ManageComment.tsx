import { Table, Button, Empty, Input, message } from 'antd';
import Swal from 'sweetalert2';
import { useState } from 'react';
import IComment from '../../../types/comment';
type Props = {
  comments: IComment[]
  Onremove: (id: string) => void
}
const ManageComment = (props: Props) => {
  const [Search, setSeach] = useState("");
  const HandleRemove = async (id: string) => {
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'Bạn sẽ không thể hoàn nguyên điều này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa',
    }).then(async (result) => {
      if (result.isConfirmed) {
        props.Onremove(id)
      }
    });
  }
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: 'content',
      dataIndex: 'content',
      key: 'content'
    },
    {
      title: 'PostId',
      dataIndex: 'PostId',
      key: 'PostId'
    },
    {
      title: 'created At',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: 'action',
      render: (item: IComment) => <>
        <Button onClick={() => HandleRemove(item.key)}>delete</Button>
      </>
    },
  ];

  const listData = props.comments.map(item => {
    return {
      key: item._id,
      content: item.content,
      createdAt: item.createdAt,
      PostId: item.post
    }
  })
  if (listData.length == 0)
    return (
      <Empty description={false} />
    )
  return (
    <>
      <Input.Search placeholder='Tìm kiếm...' onSearch={(value: any) => {
        setSeach(value)
      }} />
      <Table
        columns={columns}
        dataSource={listData}
        bordered
        pagination={{
          pageSize: 4, showQuickJumper: true
        }}
      />
    </>
  )
}

export default ManageComment