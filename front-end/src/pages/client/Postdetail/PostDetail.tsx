import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetOnePost } from '../../../api/post'
import { useForm } from 'react-hook-form'
import { Image, List, Avatar } from 'antd';
import IComment from '../../../types/comment';
import ListrelatedPosts from './components/ListrelatedPosts';
import ListComment from './components/ListComment';
const PostDetail = () => {
  const { id }: any = useParams()
  const [postone, setpostone]: any = useState()
  useEffect(() => {
    GetOnePost(id)
      .then(({ data }) => setpostone(data.data))
  }, [])
  console.log(postone);

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
          <ListComment/>
        </div>
      </section>
      <ListrelatedPosts/>
    </>
  )
}

export default PostDetail