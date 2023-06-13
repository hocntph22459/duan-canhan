import { Table, Button, Empty, Input, message } from 'antd';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import IContact from '../../../types/contact';
import { GetAllContact, RemoveContact } from '../../../api/contact';

const ManageContact = () => {
  const [Search, setSeach] = useState("");
      // api contact 
      const [contacts, setcontacts] = useState<IContact[]>([])
      useEffect(() => {
          GetAllContact().then(({ data }) => setcontacts(data.data))
      }, [])
      const HandleRemoveContact = async (id: string) => {
          const key = 'loading';
          try {
              const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
              if (loading) {
                  const response = await RemoveContact(id);
                  if (response)
                      message.success(response.data.message, 3);
                  GetAllContact().then(({ data }) => setcontacts(data.data))
              }
          } catch (error: any) {
              if (error.response) {
                  message.error(error.response.data.message, 5);
              } else {
                  message.error('Có lỗi xảy ra, vui lòng thử lại sau.', 5);
              }
          }
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
      render: (item: IContact) => <>
        <Button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => HandleRemoveContact(item.key)}>delete</Button>
      </>
    },
  ];

  const listData = contacts.map(item => {
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