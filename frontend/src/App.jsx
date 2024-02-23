import './App.css'
import AddProduct from './pages/AddProduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Shop from './pages/Shop'
import RootLayout from './layouts/RootLayout'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/register" element={<Register />} />
      <Route path="addproduct" element={<AddProduct />} />
      <Route path="detail" element={<Detail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="add" element={<AddProduct />} />

      {/* <Route element={<RequireAuth />}>
        <Route path="checkout" element={<Checkout />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
      </Route> */}

      {/* <Route element={<RequireAdminAuth role={'admin'} />}>
        <Route path="add-product" element={<AddProduct />} />
        <Route path="add-category" element={<AddCategory />} />
      </Route> */}

    </Route>
  )
)

function App() {

  return (




    <>
      <RouterProvider router={router} />
    </>



  )
}

export default App
