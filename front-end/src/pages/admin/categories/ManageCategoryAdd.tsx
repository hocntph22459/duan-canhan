import { Button, Col, Form, Input, Modal, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../../types/category';
type Props = {
  Onadd: (data: ICategory) => void
}
const ManageCategoryAdd = (props: Props) => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const onFinish = async (values: ICategory) => {
    props.Onadd(values);
    navigate('/admin/categories')
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