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
import { message } from 'antd';
import IComment from "../interfaces/comment";
const Router = () => {
    // api post
    const [posts, setposts] = useState([])
    useEffect(() => {
        GetAllPost().then(({ data }) => setposts(data.data))
    }, [])
    const HandleRemovePost = async (id: string) => {
        const key = 'loading';
        try {
            const response: any = await RemovePost(id);
            const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
            if (loading) {
                message.success(response.data.message, 3);
                GetAllPost().then(({ data }) => setposts(data.data))
            }
        } catch (error: any) {
            if (error.response) {
                message.error(error.response.data.message, 5);
            } else {
                message.error('Có lỗi xảy ra, vui lòng thử lại sau.', 5);
            }
        }
    }
    const HandleAddPost = async (data: IPost) => {
        const key = 'loading'
        try {
            const response = await CreatePost(data);
            if (response) {
                const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 })
                if (loading) {
                    message.success(response.data.message, 3);
                    GetAllPost().then(({ data }) => setposts(data.data))
                }
            }

        } catch (error: any) {
            message.error(error.response.data.message, 5);
        }
    }
    const HandleUpdatePost = async (data: IPost) => {
        const key = 'loading';
        try {
            const response: any = await UpdatePost(data);
            const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
            if (loading) {
                message.success(response.data.message, 3);
                GetAllPost().then(({ data }) => setposts(data.data))
            }
        } catch (error: any) {
            if (error.response) {
                message.error(error.response.data.message, 5);
            } else {
                message.error('Có lỗi xảy ra, vui lòng thử lại sau.', 5);
            }
        }
    }


    // api category
    const [categories, setcategories] = useState([])
    useEffect(() => {
        GetAllCategory()
            .then(({ data }) => setcategories(data))
    }, [])
    const HandleRemoveCategory = async (id: string) => {
        const key = 'loading';
        try {
            const response: any = await RemoveCategory(id);
            const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
            if (loading) {
                message.success(response.data.message, 3);
                GetAllCategory().then(({ data }) => setcategories(data));
            }
        } catch (error: any) {
            if (error.response) {
                message.error(error.response.data.message, 5);
            } else {
                message.error('Có lỗi xảy ra, vui lòng thử lại sau.', 5);
            }
        }
    }
    const HandleAddCategory = async (data: ICategory) => {
        const key = 'loading';
        try {
            const response: any = await CreateCategory(data);
            const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
            if (loading) {
                message.success(response.data.message, 3);
                GetAllCategory().then(({ data }) => setcategories(data));
            }
        } catch (error: any) {
            if (error.response) {
                message.error(error.response.data.message, 5);
            } else {
                message.error('Có lỗi xảy ra, vui lòng thử lại sau.', 5);
            }
        }
    }
    const HandleUpdateCategory = async (data: ICategory) => {
        const key = 'loading';
        try {
            const response: any = await UpdateCategory(data);
            const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
            if (loading) {
                message.success(response.data.message, 3);
                GetAllCategory().then(({ data }) => setcategories(data));
            }
        } catch (error: any) {
            if (error.response) {
                message.error(error.response.data.message, 5);
            } else {
                message.error('Có lỗi xảy ra, vui lòng thử lại sau.', 5);
            }
        }
    }


    // api comment 
    const [comments, setcomments] = useState([])
    useEffect(() => {
        GetAllComment().then(({ data }) => setcomments(data.data))
    }, [])
    const HandleRemoveComment = async (id: string) => {
        const key = 'loading';
        try {
            const response: any = await RemoveComment(id);
            const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
            if (loading) {
                message.success(response.data.message, 3);
                GetAllComment().then(({ data }) => setcomments(data.data))
            }
        } catch (error: any) {
            if (error.response) {
                message.error(error.response.data.message, 5);
            } else {
                message.error('Có lỗi xảy ra, vui lòng thử lại sau.', 5);
            }
        }
    }
    const HandleAddComment = async (data: IComment) => {
        const key = 'loading';
        try {
            const response: any = await CreateComment(data);
            const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
            if (loading) {
                message.success(response.data.message, 3);
                GetAllComment().then(({ data }) => setcomments(data.data))
            }
        } catch (error: any) {
            if (error.response) {
                message.error(error.response.data.message, 5);
            } else {
                message.error('Có lỗi xảy ra, vui lòng thử lại sau.', 5);
            }
        }
    }


    // api contact 
    const [contacts, setcontacts] = useState([])
    useEffect(() => {
        GetAllContact().then(({ data }) => setcontacts(data.data))
    }, [])
    const HandleRemoveContact = async (id: string) => {
        const key = 'loading';
        try {
            const response: any = await RemoveContact(id);
            const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
            if (loading) {
                message.success(response.data.message, 3);
                GetAllContact().then(({ data }) => setcontacts(data.data))
            }
        } catch (error: any) {
            if (error.response) {
                message.error(error.response.data.message, 5);
            } else {
                message.error('Có lỗi xảy ra, vui lòng thử lại sau.', 5);
            }
        }
    }
    const HandleAddContact = async (data: IContact) => {
        const key = 'loading';
        try {
            const response: any = await CreateContact(data);
            const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
            if (loading) {
                message.success(response.data.message, 3);
                GetAllContact().then(({ data }) => setcontacts(data.data))
            }
        } catch (error: any) {
            if (error.response) {
                message.error(error.response.data.message, 5);
            } else {
                message.error('Có lỗi xảy ra, vui lòng thử lại sau.', 5);
            }
        }
    }


    // api users 
    const [users, setusers] = useState([])
    useEffect(() => {
        GetAllUser().then(({ data }) => setusers(data.data))
    }, [])
    const HandleRemoveUser = async (id: string) => {
        const key = 'loading';
        try {
            const response: any = await RemoveUser(id);
            const loading = await message.loading({ content: 'đang xử lý!', key, duration: 2 });
            if (loading) {
                message.success(response.data.message, 3);
                GetAllUser().then(({ data }) => setusers(data.data))
            }
        } catch (error: any) {
            if (error.response) {
                message.error(error.response.data.message, 5);
            } else {
                message.error('Có lỗi xảy ra, vui lòng thử lại sau.', 5);
            }
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
                        <Route path='add' element={<ManagePostAdd categories={categories} Onadd={HandleAddPost} />} />
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