import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Form, Input, Row } from 'antd';
import { ICategory } from '../../../types/category';
type Props = {
  categories: ICategory[],
  Onupdate: (data: ICategory) => void

}
const ManageCategoryEdit = (props: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const onFinish = async (values: ICategory) => {
    if (!id) return;
    props.Onupdate(values)
    navigate('/admin/categories');
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
