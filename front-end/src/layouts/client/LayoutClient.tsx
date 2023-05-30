import { Link, Outlet } from 'react-router-dom'
import { Menu, Input } from "antd";
import { useState } from "react";
import { IPost } from '../../types/post';
type Props = {
    posts: IPost[]
}
// interface Post {
//     id: number;
//     title: string;
//     content: string;
// }

// interface Data {
//     posts: Post[];
// }
const LayoutClient = (props: Props) => {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState<IPost[]>([]);
    const data = props.posts
    console.log(data)
    const handleSearch = (value: string) => {
        setSearchText(value);
        const results = data.filter((post: IPost) =>
            post.title.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(results);
    };
    return (
        <>
            {/* component */}
            <div className="max-w-screen-xl mx-auto px-4">
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Menu mode='horizontal'>
                            <Menu.Item key="home">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="post">
                                <Link to="/post">tin tức</Link>
                            </Menu.Item>
                            <Menu.Item key="contact">
                                <Link to="/contact">liên hệ</Link>
                            </Menu.Item>
                            <Menu.Item key="signup">
                                <Link to="/signup">đăng ký</Link>
                            </Menu.Item>
                            <Menu.Item key="signin">
                                <Link to="/signin">đăng nhập</Link>
                            </Menu.Item>
                        </Menu>
                        <Menu mode='horizontal'>
                            <Menu.Item key="search" style={{ float: "right" }}>
                                <Input.Search
                                    placeholder="Search"
                                    allowClear
                                    value={searchText}
                                    onChange={(e) => handleSearch(e.target.value)}
                                />
                            </Menu.Item>
                            {searchResults &&
                                searchResults.map((result: IPost) => (
                                    <a href={`/post/${result._id}`} key={result._id}>{result.title}</a>
                                ))}
                        </Menu>
                    </div>
                </nav>
                {/* header ends here */}
                <main className="mt-[64px]">
                    <Outlet />
                </main>
                {/* main ends here */}
                {/* footer */}
                <footer className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                        </span>
                        <Menu mode='horizontal'>
                            <Menu.Item key="home">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="post">
                                <Link to="/post">tin tức</Link>
                            </Menu.Item>
                            <Menu.Item key="contact">
                                <Link to="/contact">liên hệ</Link>
                            </Menu.Item>
                            <Menu.Item key="signup">
                                <Link to="/signup">đăng ký</Link>
                            </Menu.Item>
                            <Menu.Item key="signin">
                                <Link to="/signin">đăng nhập</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </footer>
            </div >
        </>
    )
}

export default LayoutClient