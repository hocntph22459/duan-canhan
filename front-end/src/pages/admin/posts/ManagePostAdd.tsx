import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import {
  Button, Form, Input, Select,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import IPost from '../../../interfaces/post';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import ICategory from '../../../interfaces/category';
type Props = {
  categories: ICategory[],
  Onadd: (data: IPost) => void
}
const ManagePostAdd = (props: Props) => {
  const navigate = useNavigate()
  const [Image, SetImage] = useState("");
  const [data, setdata] = useState<ICategory[]>([])
  useEffect(() => {
    setdata(props.categories)
  }, [props])
  const onFinish = async (values: IPost) => {
    try {
      values.images = await SubmitImage();
      props.Onadd(values);
      navigate('/admin/post')
    } catch (error) {
      toast.error('Thêm bài viết thất bại!');
    }
  };
  const SubmitImage = async () => {
    const data = new FormData();
    const cloud_name = "dpy2w5vus";
    const upload_preset = "demo_upload";
    data.append("file", Image);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name)
    data.append("folder", "duancanhan")
    const takeData = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, data)
      .then((data) => data);
    return takeData.data.secure_url
  }
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
        className='max-w-[1000px] mx-auto'
      >
        <Form.Item name="title" label="title" rules={[{ message: 'Không được bỏ trống!', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="content" label="content" rules={[{ message: 'Không được bỏ trống!', required: true }]}>
          <Input.TextArea rows={8} />
        </Form.Item>
        <Form.Item name="author" label="author" rules={[{ message: 'Không được bỏ trống!', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="tags" label="tags" rules={[{ message: 'Không được bỏ trống!', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="image" >
          <div className="mb-6">
            <Input multiple type="file" onChange={(e: any) => SetImage(e.target.files[0])} name='image' id="exampleInputPassword1" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </Form.Item>
        <Form.Item label="danh mục" name="CategoryId">
          <Select
            className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            options={data.map((list) => {
              return {
                label: list.name,
                value: list._id
              }
            })}
          />
        </Form.Item>
        <Form.Item>
          <Button style={{ marginLeft: 165 }} type="primary" className="bg-blue-500" htmlType="submit">
            Thêm bài viết
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default ManagePostAdd