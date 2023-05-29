import { Table, Button, Empty, Input } from 'antd';
import Swal from 'sweetalert2';
import { useState } from 'react';
import IContact from '../../../types/contact';
type Props = {
  contacts: IContact[]
  Onremove: (id: string) => void
}
const ManageContact = (props: Props) => {
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
      title: 'action',
      render: (item: any) => <>
        <Button onClick={() => HandleRemove(item.key)}>delete</Button>
      </>
    },
  ];

  const listData = props.contacts.map(item => {
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

export default ManageContact