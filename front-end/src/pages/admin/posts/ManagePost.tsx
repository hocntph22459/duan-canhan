import { Table, Button, Empty, Image, Input } from 'antd';
import IPost from '../../../interfaces/post';
import Swal from 'sweetalert2';
import { useState } from 'react';
type Props = {
  posts: IPost[]
  Onremove: (id: string) => void
}
const ManagePost = (props: Props) => {
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
      title: 'title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'images',
      key: 'images',
      render: (item: any) =>
        <>
          <Image.PreviewGroup
          >
            {item.images.map((image: any, index: any) => (
              <Image style={{ width: 50, height: 50 }} src={image} alt={image.alt} key={index} />
            ))}
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

  const listData = Array.from(props.posts).map((item: any) => ({
    key: item._id,
    href: '/post/' + item._id,
    title: item.title,
    images: item.images,
    content: item.content,
    comments: item.Comments,
    likes: item.likes,
    createdAt: item.createdAt,
    author: item.author,
    tags: item.tags,
    CategoryId: item.CategoryId,
  }));

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

export default ManagePost