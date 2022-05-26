import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginAndRegister/Login';
import LoginRegister from './Pages/LoginAndRegister/LoginRegister';
import Register from './Pages/LoginAndRegister/Register';
import AllProduct from './Pages/Products/AllProduct';
import ProductsDetails from './Pages/Products/ProductsDetails';
import Navbar from './Pages/Shared/Navbar';
import Deshboard from './Pages/DashBoard/Dashboard';
import MyItem from './Pages/DashBoard/MyItem';
import Profile from './Pages/DashBoard/Profile';
import Review from './Pages/DashBoard/Review';
import RequireAuth from './Pages/LoginAndRegister/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './Pages/DashBoard/Users';
import AddProduct from './Pages/DashBoard/AddProduct';
import ManageProducts from './Pages/DashBoard/ManageProducts';
import RequireAdmin from './Pages/LoginAndRegister/RequireAdmin';
import CheckoutAndDetails from './Pages/Products/CheckoutAndDetails';
import ManageOrder from './Pages/DashBoard/ManageOrder';


function App() {
  return (
    <div className="lg:w-[80%] mx-auto ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/login" element={<LoginRegister />}>


          <Route index element={<Login />}></Route>
          <Route path="register" element={<Register></Register>}></Route>
        </Route>
        <Route path='products' element={<AllProduct />}></Route>

        <Route path='/products/:productId' element={
          <RequireAuth>
            <ProductsDetails />
          </RequireAuth>
        }>
        </Route>
        <Route path='dashboard/my-items/checkout/:productId' element={
          <RequireAuth>
            <CheckoutAndDetails />
          </RequireAuth>
        }>
        </Route>
        <Route path='/products/products/:productId' element={
          <RequireAuth>
            <ProductsDetails />
          </RequireAuth>
        }>

        </Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Deshboard />
            </RequireAuth>
          }
        >
          <Route path='my-items' element={<MyItem />}></Route>
          <Route index element={<Profile />}></Route>
          <Route path="review" element={<Review />}></Route>
          <Route path="users" element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }></Route>
          <Route path="add-product" element={<RequireAdmin>
            <AddProduct />
          </RequireAdmin>}></Route>

          <Route path="manage-product" element={
            <RequireAdmin>
              <ManageProducts />
            </RequireAdmin>
          }></Route>

          <Route path="manage-orders" element={
            <RequireAdmin>
              <ManageOrder />
            </RequireAdmin>
          }></Route>
        </Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
