import { Table, Button,Empty } from 'antd';
import ICategory from '../../../interfaces/category';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
type Props = {
  categories: ICategory[]
  Onremove: (id: string) => void
}
const ManageCategory = (props: Props) => {
  const HandleRemove = (id: string) => {
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
          toast.success('Xóa danh mục thành công');
        } catch (error) {
          toast.error('Lỗi khi xóa danh mục');
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
      title: 'created At',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: 'action',
      render: (item: any) => <>
        <Button href={`/admin/categories/${item.key}/update`}>update</Button>
        <Button onClick={() => HandleRemove(item.key)}>delete</Button>
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

export default ManageCategory