import {
  LaptopOutlined,
  MobileOutlined,
  NotificationOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const items: MenuProps['items'] = [
  getItem(<Link to="/admin">Dashboard</Link>, '/admin/dashboard', <LaptopOutlined />),
  getItem('Quản lý chung', '/admin/managers', <LaptopOutlined />, [
    getItem(
      <Link to="/admin/post">Quản lý bài viết</Link>,
      '/admin/post',
      <LaptopOutlined />
    ),
    getItem(
      <Link to="/admin/categories">Quản lý danh mục</Link>,
      '/admin/categories',
      <LaptopOutlined />
    ),
    getItem(
      <Link to="/admin/comment">Quản lý bình luận</Link>,
      '/admin/comment',
      <LaptopOutlined />
    ),
    getItem(
      <Link to="/admin/contact">Quản lý liên hệ</Link>,
      '/admin/contact',
      <LaptopOutlined />
    ),
    getItem(
      <Link to="/admin/account">Quản lý người dùng</Link>,
      '/admin/account',
      <LaptopOutlined />
    ),
  ]),
  getItem('bài viết', 'bài viết', <MobileOutlined />, [
    getItem(<Link to="/admin/post">Danh sách bài viết</Link>, '/admin/post'),
    getItem(<Link to="/admin/post/add">Thêm mới bài viết</Link>, '/admin/post/add'),
  ]),
  getItem('Danh mục', 'Danh mục', <LaptopOutlined />, [
    getItem(<Link to="/admin/categories">Danh sách danh mục</Link>, '/admin/categories'),
    getItem(<Link to="/admin/categories/add">Thêm mới Danh mục</Link>, '/admin/categories/add'),
  ]),
  getItem('bình luận', 'bình luận', <NotificationOutlined />, [
    getItem(<Link to="/admin/comment">Danh sách bình luận</Link>, '/admin/comment'),
  ]),
  getItem('Liên hệ', 'Liên hệ', <NotificationOutlined />, [
    getItem(<Link to="/admin/contact">Danh sách Liên hệ</Link>, '/admin/contact'),
  ]),
  getItem('Tài khoản', 'account', <UserOutlined />, [
    getItem(<Link to="/admin/account">Danh sách tài khoản</Link>, '/admin/account'),
  ]),
];
