import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { Signin } from "../../api/auth";
import { message } from "antd"
const SigninPage = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data: any) => {
        const key = 'loading'
        if (data) {
            try {
                const response = await Signin(data);
                const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 })
                if (loading) {
                    if (response.data.user.role === 'admin') {
                        navigate('/admin')
                    } else {
                        navigate('/')
                    }
                    if (response && response.data) {
                        message.success(response.data.message, 3);
                        localStorage.setItem('accessToken',(response.data.accessToken));
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                    }
                }

            } catch (error: any) {
                message.error(error.response.data.message, 3);
            }
        }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Mật Khẩu
                                </label>
                                <input {...register("password", {
                                    required: true,
                                    minLength: 6,
                                })}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-gray-500 dark:text-gray-300"
                                        >
                                            Lưu thông tin
                                        </label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Quên mật khẩu
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-[black] text-white hover:bg-green-dark focus:outline-none my-1"
                            >
                                Đăng nhập
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                bạn chưa có tài khoản?{" "}
                                <a
                                    href="/signup"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Đăng ký
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SigninPage