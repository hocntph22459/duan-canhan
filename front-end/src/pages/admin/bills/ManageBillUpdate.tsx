import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Form, Input, Row, message } from 'antd';
import { ICategory } from '../../../types/category';
import { UpdateCategory } from '../../../api/categories';
type Props = {
  categories: ICategory[],
}
const ManageCategoryEdit = (props: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const onFinish = async (values: ICategory) => {
    const key = 'loading';
    try {
      const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
      if (loading) {
        const response = await UpdateCategory(values);
        if (response)
          message.success(response.data.message, 3);
        navigate('/admin/categories');
        // GetAllCategory().then(({ data }) => setcategories(data));
      }
    } catch (error: any) {
      if (error.response) {
        message.error(error.response.data.message, 5);
      } else {
        message.error('Có lỗi xảy ra, vui lòng thử lại sau.', 5);
      }
    }
  };
  const [categories, setcategories] = useState<ICategory>();
  useEffect(() => {
    const response = props.categories.find((item: any) => item._id == id);
    setcategories(response);
  }, [props]);
  if (!categories) return null;
  const initial = {
    _id: categories._id,
    name: categories.name,
  };
  return (
    <Form layout="vertical" autoComplete="off" onFinish={onFinish} initialValues={initial}>
      <Row gutter={50}>
        <Col span={12}>
          <Form.Item hidden
            label="_id"
            name="_id"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ message: 'Không được bỏ trống!', required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Button type="primary" className="bg-blue-500" htmlType="submit">
        cập nhật
      </Button>
    </Form>
  );
};

export default ManageCategoryEdit;
