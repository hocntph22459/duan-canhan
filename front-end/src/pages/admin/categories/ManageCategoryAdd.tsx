import { Button, Col, Form, Input, Row, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../../types/category';
import { CreateCategory } from '../../../api/categories';

const ManageCategoryAdd = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const onFinish = async (values: ICategory) => {
    const key = 'loading';
    try {
      const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
      if (loading) {
        const response = await CreateCategory(values);
        if (response)
          message.success(response.data.message, 3);
        navigate('/admin/categories')
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
  return (
    <Form layout="vertical" autoComplete="off" form={form} onFinish={onFinish}>
      <Col span={12}>
        <Form.Item
          label="name"
          name="name"
          rules={[{ message: 'Không được bỏ trống!', required: true, min: 3 }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Row>
        <Button type="primary" className="bg-blue-500" htmlType="submit">
          Thêm danh mục
        </Button>
      </Row>
    </Form>
  )
}

export default ManageCategoryAdd