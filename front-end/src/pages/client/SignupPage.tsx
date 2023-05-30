import React, { useRef, useState } from 'react';
import { Button, Col, Form, FormItemProps, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { message } from "antd"
import { Signup } from '../../api/auth';
import IUser from '../../types/user';
import ReCAPTCHA from 'react-google-recaptcha';
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
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const navigate = useNavigate();
    const onFinish = async (value: IUser) => {
        if (isVerified == true) {
            const key = 'loading'
            if (value) {
                try {
                    const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 })
                    if (loading) {
                        const response = await Signup(value);
                        if (response && response.data) {
                            message.success(response.data.message, 3);
                            navigate('/signin')
                        }
                    }

                } catch (error: any) {
                    message.error(error.response.data.message, 5);
                }
            }
        }
    };

    const handleRecaptcha = (value: string | null) => {
        if (value) {
            setIsVerified(true);
        }
    };

    const resetRecaptcha = () => {
        setIsVerified(false);
        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
    };
    return (
        <>
            <Form className="mt-[100px] w-[400px] mx-auto" name="form_item_path" layout="vertical" onFinish={onFinish} autoComplete="off">
                <h1 className="text-center mt-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign up
                </h1>
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
                <div>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6Ld_Ek8mAAAAAKtnDYdUCNiClx9m52L_aafio6we"
                        onChange={handleRecaptcha}
                    />
                    {isVerified ? (
                        <p>Xác thực thành công!</p>
                    ) : (
                        <p className='text-[red]'>Vui lòng xác thực bằng Recaptcha trước khi tiếp tục.</p>
                    )}
                    <button onClick={resetRecaptcha}>Reset Recaptcha</button>
                </div>

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
