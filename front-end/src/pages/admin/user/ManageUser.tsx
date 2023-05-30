import { Table, Button, Empty, Input } from 'antd';
import Swal from 'sweetalert2';
import { useState } from 'react';
import IUser from '../../../types/user';
type Props = {
  users: IUser[]
  Onremove: (id: string) => void
}
const ManageUser = (props: Props) => {
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
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      filteredValue: [Search],
      onFilter: (value: any, record: any) => {
        return record.name.includes(value.toLowerCase());
      }
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
      filteredValue: [Search],
      onFilter: (value: any, record: any) => {
        return record.name.includes(value.toLowerCase());
      }
    },
    {
      title: 'role',
      dataIndex: 'role',
      key: 'role'
    },
    {
      title: 'created At',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      action: 'name',
      render: (item: IUser) => <>
        {item.role === 'admin' ? <Button hidden>delete</Button> :
          <Button onClick={() => HandleRemove(item.key)} >Delete</Button>
        }
      </>
    },
  ];

  const data = props.users.map(item => {
    return {
      key: item._id,
      name: item.name,
      email: item.email,
      role: item.role,
      createdAt: item.createdAt,
    }
  })
  if (data.length == 0)
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
        dataSource={data}
        bordered
        pagination={{ pageSize: 4, showQuickJumper: true }}
      />
    </>
  )
}

export default ManageUser