import { Table, Empty, message, Input } from 'antd';
import { useEffect, useState } from 'react';
import IhashTag from '../../../types/hashtag';
import { GetAllHashtag, RemoveHashtag } from '../../../api/hashtags';
import { Link } from 'react-router-dom';
const ManageManagementHashtag = () => {
  const [Search, setSeach] = useState("");
  // State hashtags
  const [hashtags, sethashtags] = useState<IhashTag[]>([])
  useEffect(() => {
      GetAllHashtag()
          .then(({ data }) => sethashtags(data.data))
  }, [])
  const HandleRemoveHashtag = async (id: string) => {
    const key = 'loading';
    try {
      const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
      if (loading) {
        const response = await RemoveHashtag(id);
        if (response)
          message.success(response.data.message, 3);
        // GetAllCategory().then(({ data }) => setcategories(data));
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
      title: 'stt',
      dataIndex: 'index',
      key: 'index'
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
      title: 'created At',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: 'action',
      render: (item: IhashTag) =>
        <>
          <Link to={`/admin/hashtags/${item.key}/update`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
          </Link>
          <button type="button"
            onClick={() => HandleRemoveHashtag(item.key)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </>
    },
  ];

  const data = hashtags.map((item:IhashTag,index:number) => {
    return {
      index: index,
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

export default ManageManagementHashtag