import {
  LaptopOutlined,
  MobileOutlined,
  MessageOutlined,
  UserOutlined,
  UnorderedListOutlined,
  ShoppingCartOutlined,
  TagsOutlined,
  MailOutlined
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
  getItem('Quản lý chung', '/admin/managers', <UnorderedListOutlined />, [
    getItem(
      <Link to="/admin/products">Quản lý sản phẩm</Link>,
      'products',
      <MobileOutlined />
    ),
    getItem(
      <Link to="/admin/categories">Quản lý danh mục</Link>,
      'categories',
      <LaptopOutlined />
    ),
    getItem(
      <Link to="/admin/hashtags">Quản lý hashtags</Link>,
      'hashtags',
      <TagsOutlined />
    ),
    getItem(
      <Link to="/admin/comments">Quản lý bình luận</Link>,
      'comment',
      <MessageOutlined />
    ),
    getItem(
      <Link to="/admin/contacts">Quản lý liên hệ</Link>,
      'contact',
      <MailOutlined />
    ),
    getItem(
      <Link to="/admin/abouts">Quản lý thông tin</Link>,
      'abouts',
      <MessageOutlined />
    ),
    getItem(
      <Link to="/admin/accounts">Quản lý người dùng</Link>,
      'accounts',
      <UserOutlined />
    ),
    getItem(
      <Link to="/admin/bill">Quản lý Đơn hàng</Link>,
      'bill',
      <ShoppingCartOutlined />
    ),
  ]),
  getItem('sản phẩm', 'sản phẩm', <MobileOutlined />, [
    getItem(<Link to="/admin/products">Danh sách sản phẩm</Link>, '/admin/products'),
    getItem(<Link to="/admin/products/add">Thêm mới sản phẩm</Link>, '/admin/products/add'),
  ]),
  getItem('Danh mục', 'Danh mục', <LaptopOutlined />, [
    getItem(<Link to="/admin/categories">Danh sách danh mục</Link>, '/admin/categories'),
    getItem(<Link to="/admin/categories/add">Thêm mới Danh mục</Link>, '/admin/categories/add'),
  ]),
  getItem('hash tags', 'hash tags', <TagsOutlined />, [
    getItem(<Link to="/admin/hashtags">Danh sách hash tag</Link>, '/admin/hashtags'),
    getItem(<Link to="/admin/hashtags/add">Thêm mới hash tag</Link>, '/admin/hashtags/add'),
  ]),
  getItem('bình luận', 'bình luận', <MessageOutlined />, [
    getItem(<Link to="/admin/comments">Danh sách bình luận</Link>, '/admin/comments'),
  ]),
  getItem('Liên hệ', 'Liên hệ', <MailOutlined />, [
    getItem(<Link to="/admin/contacts">Danh sách Liên hệ</Link>, '/admin/contacts'),
  ]),
  getItem('Thông tin', 'Thông tin', <MailOutlined />, [
    getItem(<Link to="/admin/abouts">Danh sách Thông tin</Link>, '/admin/abouts'),
  ]),
  getItem('Tài khoản', 'Tài khoản', <UserOutlined />, [
    getItem(<Link to="/admin/accounts">Danh sách tài khoản</Link>, '/admin/accounts'),
  ]),
  getItem('Đơn hàng', 'Đơn hàng', <ShoppingCartOutlined />, [
    getItem(<Link to="/admin/bill">Danh sách Đơn hàng</Link>, '/admin/bill'),
  ]),
];
