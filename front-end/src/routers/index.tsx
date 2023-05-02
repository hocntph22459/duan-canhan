import { BrowserRouter, Routes, Route } from "react-router-dom"
import LayoutClient from "../layouts/client/LayoutClient";
import NotFoundPage from "../pages/client/NotFoundPage";
import SignupPage from "../pages/client/SignupPage";
import SigninPage from "../pages/client/SigninPage";
import Homepage from "../pages/client/Homepage";
import PostPage from "../pages/client/PostPage";
import PostDetail from "../pages/client/PostDetail";
import ContactPage from "../pages/client/ContactPage";
import LayoutAdmin from "../layouts/admin";
import react, { useEffect, useState } from "react";
import { GetAllPost, CreatePost, UpdatePost, RemovePost } from "../api/post";
import { GetAllCategory, CreateCategory, UpdateCategory, RemoveCategory } from "../api/categories";
import { GetAllComment, CreateComment, RemoveComment } from "../api/comments";
import { GetAllContact, CreateContact, RemoveContact } from "../api/contact";
import IContact from "../interfaces/contact";
import ManagePost from "../pages/admin/posts/ManagePost";
import ManagePostAdd from "../pages/admin/posts/ManagePostAdd";
import ManagePostEdit from "../pages/admin/posts/ManagePostEdit";
import ManageCategory from "../pages/admin/categories/ManageCategory";
import ManageCategoryAdd from "../pages/admin/categories/ManageCategoryAdd";
import ManageCategoryEdit from "../pages/admin/categories/ManageCategoryEdit";
import ManageComment from "../pages/admin/comments/ManageComment";
import ManageContact from "../pages/admin/contacts/ManageContact";
import ManageUser from "../pages/admin/user/ManageUser";
import Management from "../pages/admin/dashboard/Management";
import IPost from "../interfaces/post";
import ICategory from "../interfaces/category";
import { GetAllUser, RemoveUser } from "../api/user";

const Router = () => {
    // api post
    const [posts, setposts] = useState([])
    useEffect(() => {
        GetAllPost()
            .then(({ data }) => setposts(data.data))
    }, [])

    const HandleRemovePost = (id: string) => {
        try {
            RemovePost(id)
                .then(() => alert('xóa bài viết thành công'))
                .then(() => GetAllPost()
                    .then(({ data }) => setposts(data.data)))
                .catch(({ response }) => alert(response.data.message))
        } catch (error) {
            console.log('lỗi');
        }
    }

    const HandleAddPost = (data: IPost) => {
        try {
            CreatePost(data)
                .then(() => alert('thêm mới bài viết thành công'))
                .then(() => GetAllPost()
                    .then(({ data }) => setposts(data.data)))
                .catch(({ response }) => console.log(response.data.message))
        } catch (error) {
            console.log('lỗi');
        }
    }

    const HandleUpdatePost = (data: IPost) => {
        try {
            UpdatePost(data)
                .then(() => alert('cập nhật bài viết thành công'))
                .then(() => GetAllPost()
                    .then(({ data }) => setposts(data.data)))
                .catch(({ response }) => console.log(response.data.message))
        } catch (error) {
            console.log('lỗi');
        }
    }


    // api category
    const [categories, setcategories] = useState([])
    useEffect(() => {
        GetAllCategory()
            .then(({ data }) => setcategories(data))
    }, [])

    const HandleRemoveCategory = (id: any) => {
        try {
            RemoveCategory(id)
                .then(() => GetAllCategory()
                    .then(({ data }) => setcategories(data)))
                .catch(({ response }) => alert(response.data.message))
        } catch (error) {
            console.log('lỗi');
        }
    }

    const HandleAddCategory = (data: ICategory) => {
        try {
            CreateCategory(data)
                .then(() => alert('thêm mới danh mục thành công'))
                .then(() => GetAllCategory()
                    .then(({ data }) => setcategories(data)))
                .catch(({ response }) => console.log(response.data.message))
        } catch (error) {
            console.log('lỗi');
        }
    }

    const HandleUpdateCategory = (data: ICategory) => {
        try {
            UpdateCategory(data)
                .then(() => alert('cập nhật danh mục thành công'))
                .then(() => GetAllCategory()
                    .then(({ data }) => setcategories(data)))
                .catch(({ response }) => console.log(response.data.message))
        } catch (error) {
            console.log('lỗi');
        }
    }

    // api comment 
    const [comments, setcomments] = useState([])
    useEffect(() => {
        GetAllComment()
            .then(({ data }) => setcomments(data.data))
    }, [])

    const HandleRemoveComment = (id: any) => {
        try {
            RemoveComment(id)
                .then(() => alert('xóa bình luận thành công'))
                .then(() => GetAllComment()
                    .then(({ data }) => setcomments(data.data)))
                .catch(({ response }) => alert(response.data.message))
        } catch (error) {
            console.log('lỗi');
        }
    }

    const HandleAddComment = (data: IContact) => {
        try {
            CreateContact(data)
                .then(() => alert('bình luận thành công'))
                .catch(({ response }) => console.log(response.data.message))
        } catch (error) {
            console.log('lỗi');
        }
    }



    // api contact 
    const [contacts, setcontacts] = useState([])
    useEffect(() => {
        GetAllContact()
            .then(({ data }) => setcontacts(data.data))
    }, [])
    const HandleRemoveContact = (id: string) => {
        try {
            RemoveContact(id)
                .then(() => alert('xóa liên hệ thành công'))
                .then(() => GetAllContact()
                    .then(({ data }) => setcontacts(data.data)))
                .catch(({ response }) => alert(response.data.message))
        } catch (error) {
            console.log('lỗi');
        }
    }

    const HandleAddContact = (data: IContact) => {
        try {
            CreateContact(data)
                .then(() => alert('gửi liên hệ thành công'))
                .catch(({ response }) => alert(response.data.message))
        } catch (error) {
            console.log('lỗi');
        }
    }

    // api users 
    const [users, setusers] = useState([])
    useEffect(() => {
        GetAllUser()
            .then(({ data }) => setusers(data.data))
    }, [])

    const HandleRemoveUser = (id: string) => {
        try {
            RemoveUser(id)
                .then(() => alert('xóa người dùng thành công'))
                .then(() => GetAllUser()
                    .then(({ data }) => setusers(data.data)))
                .catch(({ response }) => alert(response.data.message))
        } catch (error) {
            console.log('lỗi');
        }
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayoutClient />}>
                    <Route index element={<Homepage categories={categories} />} />
                    <Route path='post'>
                        <Route index element={<PostPage posts={posts} categories={categories} />} />
                        <Route path=':id' element={<PostDetail />} />
                    </Route>
                    <Route path='/contact' element={<ContactPage Onadd={HandleAddContact} />} />
                </Route>

                <Route path='/signup' element={<SignupPage />}></Route>
                <Route path='/signin' element={<SigninPage />}></Route>

                <Route path='/admin' element={<LayoutAdmin />}>
                    <Route index element={<Management />} />
                    <Route path='post'>
                        <Route index element={<ManagePost posts={posts} Onremove={HandleRemovePost} />} />
                        <Route path='add' element={<ManagePostAdd categories={categories} Onadd={HandleAddPost}/>} />
                        <Route path=':id/update' element={<ManagePostEdit posts={posts} categories={categories} Onupdate={HandleUpdatePost} />} />
                    </Route>
                    <Route path='categories'>
                        <Route index element={<ManageCategory categories={categories} Onremove={HandleRemoveCategory} />} />
                        <Route path='add' element={<ManageCategoryAdd Onadd={HandleAddCategory} />} />
                        <Route path=':id/update' element={<ManageCategoryEdit categories={categories} Onupdate={HandleUpdateCategory} />} />
                    </Route>
                    <Route path='comment'>
                        <Route index element={<ManageComment Onremove={HandleRemoveComment} comments={comments} />} />
                    </Route>
                    <Route path='contact'>
                        <Route index element={<ManageContact contacts={contacts} Onremove={HandleRemoveContact} />} />
                    </Route>
                    <Route path='account'>
                        <Route index element={<ManageUser users={users} Onremove={HandleRemoveUser} />} />
                    </Route>
                </Route>

                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router