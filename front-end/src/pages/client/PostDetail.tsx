import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetOnePost } from '../../api/post'
import { useForm } from 'react-hook-form'
import { Image, List, Avatar } from 'antd';
import IComment from '../../types/comment';
const PostDetail = () => {
  const { id }: any = useParams()
  const [postone, setpostone]: any = useState()
  useEffect(() => {
    GetOnePost(id)
      .then(({ data }) => setpostone(data.data))
  }, [])
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data: any) => {
    // const user = localStorage.getItem('user')
    // console.log(user);
  }
  if (!postone) return null;
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-3">{postone.title}</h1>
          <p className="text-gray-600 text-sm mb-3">{postone.createdAt}</p>
          <div className="prose prose-lg mb-6">
            <div dangerouslySetInnerHTML={{ __html: postone.content }}></div>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <Image.PreviewGroup
              >
                {postone.images.map((image: any, index: any) => (
                  <Image src={image} alt={image.alt} key={index} />
                ))}
              </Image.PreviewGroup>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={postone.author.avatarUrl} alt={postone.author.name} />
            </div>
            <div className="text-sm font-medium text-gray-900">
              <p className="text-gray-600">by {postone.author}</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="sm:col-span-2 mt-8">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400"
          >
            Bình luận của bạn
          </label>
          <textarea {...register("content", { required: true })}
            id="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
            defaultValue={""}
          />
          <button
            type="submit"
            className="mt-4 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-800 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Gửi Bình luận
          </button>
        </form>
        {/* <!-- Bình luận mặc định --> */}
        <div>
          {/* Bình luận mới */}
          <List pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
            itemLayout="horizontal"
            dataSource={postone.Comments.map((comment: IComment) => {
              return {
                key: comment._id,
                content: comment.content,
                UserId: comment.user,
                createdAt: comment.createdAt
              }
            })}
            renderItem={(item: IComment, index: any) => (
              <List.Item >
                <List.Item.Meta
                  avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                  title={<a href="https://ant.design">{item.user}</a>}
                  description={item.content}
                />
                <div className="mt-2">
                  <div className="text-gray-600 text-sm">{item.createdAt}</div>
                  <a href="#" className="text-blue-500 hover:underline">Phản hồi</a>
                </div>
              </List.Item>
            )}
          />
        </div>
      </section>

      {/* ====== Blog Section Start */}
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Blog của chúng tôi
                </span>
                <h2
                  className="
          font-bold
          text-3xl
          sm:text-4xl
          md:text-[40px]
          text-dark
          mb-4
          "
                >
                  Bài viết liên quan
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available but
                  the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span
                    className="
             bg-primary
             rounded
             inline-block
             text-center
             py-1
             px-4
             text-xs
             leading-loose
             font-semibold
             text-white
             mb-5
             "
                  >
                    Dec 22, 2023
                  </span>
                  <h3>
                    <a
                      href=""
                      className="
                font-semibold
                text-xl
                sm:text-2xl
                lg:text-xl
                xl:text-2xl
                mb-4
                inline-block
                text-dark
                hover:text-primary
                "
                    >
                      Meet AutoManage, the best AI management tools
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span
                    className="
             bg-primary
             rounded
             inline-block
             text-center
             py-1
             px-4
             text-xs
             leading-loose
             font-semibold
             text-white
             mb-5
             "
                  >
                    Mar 15, 2023
                  </span>
                  <h3>
                    <a
                      href=""
                      className="
                font-semibold
                text-xl
                sm:text-2xl
                lg:text-xl
                xl:text-2xl
                mb-4
                inline-block
                text-dark
                hover:text-primary
                "
                    >
                      How to earn more money as a wellness coach
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span
                    className="
             bg-primary
             rounded
             inline-block
             text-center
             py-1
             px-4
             text-xs
             leading-loose
             font-semibold
             text-white
             mb-5
             "
                  >
                    Jan 05, 2023
                  </span>
                  <h3>
                    <a
                      href=""
                      className="
                font-semibold
                text-xl
                sm:text-2xl
                lg:text-xl
                xl:text-2xl
                mb-4
                inline-block
                text-dark
                hover:text-primary
                "
                    >
                      The no-fuss guide to upselling and cross selling
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Blog Section End */}
    </>
  )
}

export default PostDetail