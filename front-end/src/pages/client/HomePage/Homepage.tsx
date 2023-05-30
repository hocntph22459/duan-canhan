import { ICategory } from '../../../types/category'
import ListPost from './components/ListPost'
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
      <ListPost cate={categories}/>
    </>
  )
}

export default Homepage