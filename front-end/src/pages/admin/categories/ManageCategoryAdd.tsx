import React from 'react'
import { toast } from 'react-toastify';
import { Button, Col, Form, Input, Modal, Row } from 'antd';
import ICategory from '../../../interfaces/category';
import { useNavigate } from 'react-router-dom';

type Props = {
  Onadd: (data: ICategory) => void
}

const ManageCategoryAdd = (props: Props) => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const onFinish = async (values: ICategory) => {
    try {
      props.Onadd(values);
      navigate('/admin/categories')
    } catch (error) {
      toast.error('Thêm danh mục thất bại!');
    }
  };
  return (
    <Form layout="vertical" autoComplete="off" form={form} onFinish={onFinish}>
      <Col span={12}>
        <Form.Item
          label="name"
          name="name"
          rules={[{ message: 'Không được bỏ trống!', required: true ,min:3}]}
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