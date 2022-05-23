import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginAndRegister/Login';
import LoginRegister from './Pages/LoginAndRegister/LoginRegister';
import Register from './Pages/LoginAndRegister/Register';
import AllProduct from './Pages/Products/AllProduct';
import ProductsDetails from './Pages/Products/ProductsDetails';
import Navbar from './Pages/Shared/Navbar';

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
        <Route path='/products/:productId' element={<ProductsDetails />}></Route>
      </Routes>

    </div>
  );
}

export default App;
