import { Table, Button,Empty,Popconfirm, message } from 'antd';
import IUser from '../../../interfaces/user';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

type Props = {
  users: IUser[]
  Onremove: (id: string) => void
}
const ManageUser = (props: Props) => {
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
          toast.success('Xóa người dùng thành công');
        } catch (error) {
          toast.error('Lỗi khi xóa người dùng');
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
      render: (item: any) => <>
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
    <Table
      columns={columns}
      dataSource={data}
      bordered
      pagination={{ pageSize: 4, showQuickJumper: true }}
    />
  )
}

export default ManageUser