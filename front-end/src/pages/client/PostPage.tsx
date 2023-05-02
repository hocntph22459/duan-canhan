import React, { useEffect, useState } from 'react'
import IPost from '../../interfaces/post'
import ICategory from '../../interfaces/category'
import type Icon from '@ant-design/icons';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Skeleton, Switch } from 'antd';
type Props = {
  categories: ICategory[],
  posts: any
}
interface IconTextProps {
  icon: typeof Icon;
  text: React.ReactNode;
}
const PostPage = (props: Props) => {
  // const [categories, setcategories] = useState<ICategory[]>([])
  // useEffect(() => {
  //   setcategories(props.categories)
  // }, [props])
  // console.log(categories);

  // const [posts, setposts] = useState<IPost[]>([])
  // useEffect(() => {
  //   setposts(props.posts)
  // }, [props])
  // console.log(posts);


  const listData = Array.from(props.posts).map((item: any) => ({
    key: item._id,
    href: '/post/' + item._id,
    title: item.title,
    image: item.images,
    content: item.content,
    comments: item.Comments,
    likes: item.likes,
    createdAt: item.createdAt,
    author: item.author,
    tags: item.tags,
    CategoryId: item.CategoryId,
  }));


  const IconText: React.FC<IconTextProps> = ({ icon, text }) => (
    <>
      {React.createElement(icon, { style: { marginRight: 8 } })}
      {text}
    </>
  );
  if (!listData) return null;

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item: any) => (
          <List.Item
            key={item.key}
            actions={
              [
                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text={`${item.likes}`} key="list-vertical-like-o" />,
                <IconText icon={MessageOutlined} text={`${item.comments.length}`} key="list-vertical-message" />,
              ]
            }
            extra={

              <img
                width={272}
                alt="logo"
                src={item.images}
              />

            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
            />
            <p className='line-clamp-6'>{item.content}</p>
          </List.Item>
        )}
      />
    </>
  )
}
export default PostPage