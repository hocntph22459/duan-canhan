import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { Signup } from '../../api/auth';
type Props = {}
const SignupPage = (props: Props) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data: any) => {
        Signup(data).then(() => alert('đăng ký thành công'))
            .then(() => navigate('/signin'))
            .catch(({ response }) => alert(response.data.message))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* component */}
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Đăng Ký</h1>
                        <input {...register("name", {
                            required: true,
                        })}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="Full Name"
                        />
                        <input {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                        />
                        <input {...register("password", {
                            required: true,
                            minLength: 6
                        })}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                        />
                        <input {...register("confirmpassword", {
                            required: true,
                            minLength: 6
                        })}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirmpassword"
                            placeholder="Confirm Password"
                        />
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-[black] text-white hover:bg-green-dark focus:outline-none my-1"
                        >
                            Đăng Ký
                        </button>
                        <div className="text-center text-sm text-grey-dark mt-4">
                            Bằng cách đăng ký,
                            <a
                                className="no-underline border-b border-grey-dark text-grey-dark"
                                href="#"
                            >
                                bạn đồng ý với Điều khoản dịch vụ
                            </a>{" "}
                            và
                            <a
                                className="no-underline border-b border-grey-dark text-grey-dark"
                                href="#"
                            >
                                Chính sách bảo mật
                            </a>
                        </div>
                    </div>
                    <div className="text-grey-dark mt-6">
                        Bạn có sẵn một tài khoản?
                        <a
                            className="no-underline border-b border-blue text-blue"
                            href="/signin"
                        >
                            Đăng Nhập
                        </a>
                        .
                    </div>
                </div>
            </div>
        </form>
    )
}
export default SignupPage