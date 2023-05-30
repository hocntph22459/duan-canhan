import React from 'react'
import { ICategory } from '../../../../types/category'
type Props = {
    cate: ICategory[]
}
const ListPost = (props: Props) => {
    return (
        <>
            {
                props.cate.map((item, index) => {
                    return (
                        <div className="" key={index}>
                            <div className="flex mt-16 mb-4 px-4 items-center justify-between sm:col-span-8 sm:p-4 lg:col-span-8 lg:p-4">
                                <h1 className="text-3xl font-bold">{item.name}</h1>
                                <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
                                    View all
                                </a>
                            </div>
                            <div className="dark:bg-gray-800 dark:text-gray-50">
                                {item.posts.map((post: any, index) => {
                                    return (
                                        <div key={index} className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                                            <div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4 background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;">
                                                <a href={`/post/${post._id}`} ><img className='hover:opacity-90' src={post.images[0]} alt="" /></a>
                                            </div>
                                            <div className="flex flex-col p-4 col-span-full row-span-full lg:col-span-8 lg:p-4">
                                                <h1 className="text-3xl font-semibold">{post.title}</h1>
                                                <p className="flex-1 pt-2 line-clamp-5 text-[18px]">{post.content}</p>
                                                <a rel="noopener noreferrer" href={`/post/${post._id}`} className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
                                                    <span>Đọc thêm</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </a>
                                                <div className="flex items-center justify-between pt-2">
                                                    <div className="flex space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-400">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                                        </svg>
                                                        <span className="self-center text-sm">by {post.author}</span>
                                                    </div>
                                                    <span className="text-xs">{post.createdAt}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div >
                    )
                })
            }
        </>

    )
}

export default ListPost