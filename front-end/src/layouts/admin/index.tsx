import HeaderLayout from './components/header';
import { Layout, message } from 'antd';
import MainLayout from './components/main';
import React from 'react';
import SidebarLayout from './components/sidebar';
import { useNavigate } from 'react-router-dom'
const { Header, Footer } = Layout;
const LayoutAdmin: React.FC = () => {
  const navigate = useNavigate()
  const Logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  const user: any = localStorage.getItem('user')
  const parseUser = JSON.parse(user)
  if(parseUser){
      parseUser.role === 'admin' ? console.log('ok') : navigate('/signin')
  }else{
    navigate('/signin')
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderLayout />
      <Layout>
        <SidebarLayout />
        <MainLayout />
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Quản trị blog</Footer>
    </Layout>
  );
};

export default LayoutAdmin;
