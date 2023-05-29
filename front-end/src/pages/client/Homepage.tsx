import { ICategory } from '../../types/category'
type Props = {
  categories: ICategory[]
}

const Homepage = ({categories}: Props) => {
  return (
    <>
      <div className="md:flex flex-no-wrap space-x-0 md:space-x-6 mb-16 xl:mt-[100px]">
        {/* main post */}
        <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
          <img
            src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            className="rounded-md object-cover w-full h-64"
          />
          <span className="text-green-700 text-sm hidden md:block mt-4">
            {" "}
            Technology{" "}
          </span>
          <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
            Ignorant branched humanity led now marianne too.
          </h1>
          <p className="text-gray-600 mb-4">
            Necessary ye contented newspaper zealously breakfast he prevailed.
            Melancholy middletons yet understood decisively boy law she. Answer
            him easily are its barton little. Oh no though mother be things
            simple itself. Oh be me, sure wise sons, no. Piqued ye of am spirit
            regret. Stimulated discretion impossible admiration in particular
            conviction up.
          </p>
          <a
            href="./blog.html"
            className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100"
          >
            Read more
          </a>
        </div>
        {/* sub-main posts */}
        <div className="w-full md:w-4/7">
          {/* post 1 */}
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block">
                {" "}
                Gadgets{" "}
              </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                At every tiled on ye defer do. No attention suspected oh
                difficult.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Wonder matter now can estate esteem assure fat roused. Am
                performed on existence as discourse is. Pleasure friendly at
                marriage blessing or
              </p>
            </div>
          </div>
          {/* post 2 */}
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block">
                {" "}
                Bitcoin{" "}
              </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Fond his say old meet cold find come whom. The sir park sake
                bred.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Integer commodo, sapien ut vulputate viverra, Integer commodo
                Integer commodo, sapien ut vulputate viverra, Integer commodo
              </p>
            </div>
          </div>
          {/* post 3 */}
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block">
                {" "}
                Insights{" "}
              </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Advice me cousin an spring of needed. Tell use paid law ever yet
                new.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Meant to learn of vexed if style allow he there. Tiled man stand
                tears ten joy there terms any widen.
              </p>
            </div>
          </div>
          {/* post 4 */}
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img
              src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block">
                {" "}
                Cryptocurrency{" "}
              </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Advice me cousin an spring of needed. Tell use paid law ever yet
                new.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Meant to learn of vexed if style allow he there. Tiled man stand
                tears ten joy there terms any widen.
              </p>
            </div>
          </div>
        </div>
      </div>
      {categories.map((item, index) => {
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
      })}
    </>
  )
}

export default Homepage