import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const LayoutClient = (props: Props) => {
    return (
        <>
            {/* component */}
            <div className="max-w-screen-lg mx-auto">
                {/* header */}
                <header className="flex items-center justify-between py-2">
                    <a href="#" className="px-2 lg:px-0 font-bold capitalize">
                        Tech Blog
                    </a>
                    <button className="block md:hidden px-2 text-3xl">
                        <i className="bx bx-menu" />
                    </button>
                    <ul className="hidden md:inline-flex items-center">
                        <li className="px-2 md:px-4">
                            <a
                                href="/"
                                className="text-green-800 font-semibold hover:text-green-600"
                            >
                                {" "}
                                trang chủ{" "}
                            </a>
                        </li>
                        <li className="px-2 md:px-4">
                            <a
                                href="/post"
                                className="text-gray-500 font-semibold hover:text-green-600"
                            >
                                {" "}
                                tin tức{" "}
                            </a>
                        </li>
                        <li className="px-2 md:px-4">
                            <a
                                href="/contact"
                                className="text-gray-500 font-semibold hover:text-green-600"
                            >
                                {" "}
                                liên hệ{" "}
                            </a>
                        </li>
                        <li className="px-2 md:px-4 hidden md:block">
                            <a
                                href="/signin"
                                className="text-gray-500 font-semibold hover:text-green-600"
                            >
                                {" "}
                                đăng nhập{" "}
                            </a>
                        </li>
                        <li className="px-2 md:px-4 hidden md:block">
                            <a
                                href="/signup"
                                className="text-gray-500 font-semibold hover:text-green-600"
                            >
                                {" "}
                                đăng ký{" "}
                            </a>
                        </li>
                    </ul>
                </header>
                {/* header ends here */}

                <main className="mt-12">
                    <Outlet />
                </main>
                {/* main ends here */}
                
                {/* footer */}
                <footer className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-2/5">
                            <p className="text-gray-600 hidden lg:block p-0 lg:pr-12">
                                Boisterous he on understood attachment as entreaties ye devonshire.
                                In mile an form snug were been sell. Extremely ham any his departure
                                for contained curiosity defective. Way now instrument had eat
                                diminution melancholy expression sentiments stimulated.
                            </p>
                        </div>
                        <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
                            <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
                            <ul>
                                <li>
                                    {" "}
                                    <a href="" className="block text-gray-600 py-2">
                                        Team
                                    </a>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <a href="" className="block text-gray-600 py-2">
                                        About us
                                    </a>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <a href="" className="block text-gray-600 py-2">
                                        Press
                                    </a>{" "}
                                </li>
                            </ul>
                        </div>
                        <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
                            <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
                            <ul>
                                <li>
                                    {" "}
                                    <a href="" className="block text-gray-600 py-2">
                                        Blog
                                    </a>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <a href="" className="block text-gray-600 py-2">
                                        Privacy Policy
                                    </a>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <a href="" className="block text-gray-600 py-2">
                                        Terms &amp; Conditions
                                    </a>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <a href="" className="block text-gray-600 py-2">
                                        Documentation
                                    </a>{" "}
                                </li>
                            </ul>
                        </div>
                        <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
                            <h6 className="font-semibold text-gray-700 mb-4">about-us</h6>
                            <ul>
                                <li>
                                    {" "}
                                    <a href="" className="block text-gray-600 py-2">
                                        facebook
                                    </a>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <a href="" className="block text-gray-600 py-2">
                                        tiktok
                                    </a>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <a href="" className="block text-gray-600 py-2">
                                        instagram
                                    </a>{" "}
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>

    )
}

export default LayoutClient