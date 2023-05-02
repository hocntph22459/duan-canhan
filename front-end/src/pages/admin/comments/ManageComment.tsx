import { Table, Button,Empty } from 'antd';
import IComment from '../../../interfaces/comment';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
type Props = {
  comments: IComment[]
  Onremove:(id:string) => void
}
const ManageComment = (props: Props) => {
  const HandleRemove = async(id: string) => {
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
          toast.success('Xóa bình luận thành công');
        } catch (error) {
          toast.error('Lỗi khi xóa bình luận');
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
      PostId:item.PostId
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

export default ManageComment