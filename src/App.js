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
import RequireAuth from './RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './Pages/DashBoard/Users';
import AddProduct from './Pages/DashBoard/AddProduct';
import ManageProducts from './Pages/DashBoard/ManageProducts';


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
        <Route path='/products' element={<AllProduct />}></Route>

        <Route path='/products/:productId' element={
          <RequireAuth>
            <ProductsDetails />
          </RequireAuth>
        }></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Deshboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyItem />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="review" element={<Review />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="add-product" element={<AddProduct />}></Route>
          <Route path="manage-product" element={<ManageProducts />}></Route>
        </Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
