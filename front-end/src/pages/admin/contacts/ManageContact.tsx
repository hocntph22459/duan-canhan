import { Table, Button, Empty } from 'antd';
import IContact from '../../../interfaces/contact';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
type Props = {
  contacts: IContact[]
  Onremove: (id: string) => void
}
const ManageContact = (props: Props) => {
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
        try {
          props.Onremove(id)
          toast.success('Xóa liên hệ thành công');
        } catch (error) {
          toast.error('Lỗi khi xóa liên hệ');
        }
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
      title: 'action',
      render: (item: any) => <>
        <Button onClick={() => HandleRemove(item.key)}>delete</Button>
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
  if (data.length == 0)
    return (
      <Empty description={false} />
    )

  return (

    <Table
      columns={columns}
      dataSource={data}
      bordered
      pagination={{ pageSize: 4, showQuickJumper: true }}
    />
  )
}

export default ManageContact