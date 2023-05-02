import { Table, Button, Empty, Image } from 'antd';
import IPost from '../../../interfaces/post';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
type Props = {
  posts: any
  Onremove: (id: string) => void
}
const ManagePost = (props: Props) => {
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
          toast.success('Xóa bài viết thành công');
        } catch (error) {
          toast.error('Lỗi khi xóa bài viết');
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
      title: 'title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'images',
      dataIndex: 'images',
      key: 'images',
      render: (item:any) =>
        <>
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            {item.images}
          </Image.PreviewGroup>
        </>

    },
    {
      title: 'created At',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: 'action',
      render: (item: any) => <>
        <Button href={`/admin/post/${item.key}/update`}>update</Button>
        <Button onClick={() => HandleRemove(item.key)}>delete</Button>
      </>
    },
  ];


  const data = props.posts.map((item: any) => {
    return {
      key: item._id,
      title: item.title,
      images: item.images.map((image: any) => {
        return (
          <Image
            width={120}
            src={image}
          />
        )
      }),
      createdAt: item.createdAt,
      author: item.author,
      tags: item.tags,
      CategoryId: item.CategoryId,
    }
  })

  if (data.length == 0)
    return (
      <Empty description={false} />
    )
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={{
          pageSize: 4, showQuickJumper: true
        }}
      />
    </>
  )
}

export default ManagePost