import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react";
import LayoutClient from "../layouts/client";
import Homepage from "../pages/client/HomePage";
import ProductPage from "../pages/client/ProductsPage";
import ProductDetailPage from "../pages/client/ProductDetailPage";
import NotFoundPage from "../pages/client/404";
import AboutPage from "../pages/client/AboutPage";
import SignupPage from "../pages/client/SignupPage";
import SigninPage from "../pages/client/SigninPage";
import ContactPage from "../pages/client/ContactPage";
import LayoutAdmin from "../layouts/admin";
import ManagementProduct from "../pages/admin/products/ManageProduct";
import ManagementProductAdd from "../pages/admin/products/ManageProductAdd";
import ManagementProductUpdate from "../pages/admin/products/ManageProductUpdate";
import ManageCategory from "../pages/admin/categories/ManageCategory";
import ManageCategoryAdd from "../pages/admin/categories/ManageCategoryAdd";
import ManageComment from "../pages/admin/comments/ManageComment";
import ManageContact from "../pages/admin/contacts/ManageContact";
import ManageUser from "../pages/admin/user/ManageUser";
import Management from "../pages/admin/dashboard/Management";
import { GetAllCategory } from "../api/categories";
import { IProduct } from "../types/product";
import { GetAllProduct } from "../api/product";
import { ICategory } from "../types/category";
import ManagementHashtagAdd from "../pages/admin/hashtags/ManageHashtagCreate";
import ManageManagementHashtag from "../pages/admin/hashtags/ManageHashtag";
import ManagementHashtagUpdate from "../pages/admin/hashtags/ManageHashtagUpdate";
import IhashTag from "../types/hashtag";
import { GetAllHashtag } from "../api/hashtags";
import { CartPage } from "../pages/client/Cart";
import ProductSale from "../pages/client/ProductsSalePage";
import OrderPage from "../pages/client/Bill";
import ManageCategoryUpdate from "../pages/admin/categories/ManageCategoryUpdate";
const Router = () => {
    // State product
    const [products, setproducts] = useState<IProduct[]>([])
    useEffect(() => {
        GetAllProduct().then(({ data }) => setproducts(data.data))
    }, [])

    // State categories
    const [categories, setcategories] = useState<ICategory[]>([])
    useEffect(() => {
        GetAllCategory()
            .then(({ data }) => setcategories(data.data))
    }, [])

    // State hashtags
    const [hashtags, sethashtags] = useState<IhashTag[]>([])
    useEffect(() => {
        GetAllHashtag()
            .then(({ data }) => sethashtags(data.data))
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<LayoutClient products={products} />}>
                    <Route index element={<Homepage />} />
                    <Route path='products'>
                        <Route index element={<ProductPage categories={categories} />} />
                        <Route path=':id' element={<ProductDetailPage />} />
                    </Route>
                    <Route path='products/sales'>
                        <Route index element={<ProductSale />} />
                    </Route>
                    <Route path='cart'>
                        <Route index element={<CartPage />} />
                    </Route>
                    <Route path='order/bill'>
                        <Route index element={<OrderPage />} />
                    </Route>
                    <Route path='contacts' element={<ContactPage />} />
                    <Route path='abouts' element={<AboutPage />} />
                </Route>
                <Route path='admin' element={<LayoutAdmin />}>
                    <Route index element={<Management />} />
                    <Route path='products'>
                        <Route index element={<ManagementProduct products={products} />} />
                        <Route path='add' element={<ManagementProductAdd categories={categories} />} />
                        <Route path=':id/update' element={<ManagementProductUpdate products={products} hashtags={hashtags} categories={categories} />} />
                    </Route>
                    <Route path='categories'>
                        <Route index element={<ManageCategory categories={categories} />} />
                        <Route path='add' element={<ManageCategoryAdd />} />
                        <Route path=':id/update' element={<ManageCategoryUpdate categories={categories} />} />
                    </Route>
                    <Route path='hashtags'>
                        <Route index element={<ManageManagementHashtag />} />
                        <Route path='add' element={<ManagementHashtagAdd />} />
                        <Route path=':id/update' element={<ManagementHashtagUpdate hashtags={hashtags} />} />
                    </Route>
                    <Route path='comments'>
                        <Route index element={<ManageComment />} />
                    </Route>
                    <Route path='contacts'>
                        <Route index element={<ManageContact />} />
                    </Route>
                    <Route path='accounts'>
                        <Route index element={<ManageUser />} />
                    </Route>
                </Route>
                <Route path='signin' element={<SigninPage />}></Route>
                <Route path='signup' element={<SignupPage />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router