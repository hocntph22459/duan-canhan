import { Button, Col, Form, FormItemProps, Image, Input, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import React from 'react';
import { toast } from 'react-toastify';
import { Signup } from '../../api/auth';
import IUser from '../../interfaces/user';

const MyFormItemContext = React.createContext<(string | number)[]>([]);

function toArr(str: string | number | (string | number)[]): (string | number)[] {
    return Array.isArray(str) ? str : [str];
}
const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};
const SigupPage = () => {
    const navigate = useNavigate();
    const onFinish = async (value: IUser) => {
        Signup(value).then(() => alert('đăng ký thành công'))
            .then(() => navigate('/signin'))
            .catch(({ response }) => alert(response.data.message))
    };
    return (
        <>
            <h1 className="text-center mt-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign up
            </h1>
            <Form className="mt-[32px] w-[400px] mx-auto" name="form_item_path" layout="vertical" onFinish={onFinish} autoComplete="off">
                <MyFormItem
                    name="name"
                    label="name"
                    rules={[
                        {
                            message: 'vui lòng nhập name!',
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="nhập name" />
                </MyFormItem>
                <MyFormItem
                    name="email"
                    label="Email"
                    rules={[
                        {
                            message: 'vui lòng nhập email!',
                            required: true,
                            type: 'email'
                        },
                    ]}
                >
                    <Input placeholder="nhập email" />
                </MyFormItem>
                <MyFormItem
                    name="password"
                    label="mật khẩu"
                    rules={[
                        {
                            message: 'vui lòng nhập password!',
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="nhập password" />
                </MyFormItem>
                <MyFormItem
                    name="confirmpassword"
                    label="nhập lại mật khẩu"
                    rules={[
                        {
                            message: 'vui lòng nhập confirm password!',
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="nhập password" />
                </MyFormItem>
                <Button
                    htmlType="submit"
                    className="w-full text-center h-12 py-3 rounded bg-[black] text-white hover:bg-green-dark focus:outline-none my-1"
                >
                    Đăng ký
                </Button>
                <Col span={24} className="mt-5">
                    Bạn có tài khoản?
                    <Link to="/signin" className="text-primary">
                        đăng nhập
                    </Link>
                </Col>
            </Form>
        </>
    );
};

export default SigupPage;
