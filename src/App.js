/*import logo from './logo.svg';*/
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import { CartProvider } from "react-use-cart";
import Trainer from "./pages/Trainer";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Contact1 from "./pages/Contact1";
import { AuthProvider } from "./pages/AuthContext";
import Courses from "./pages/Courses";
import UpdateProduct from "./components/admin/UpdateProduct";
import Cart from "./components/cart/Cart";
import Detailsrpm from "./Details/Detailsrpm";
import Detailsabdos from "./Details/Detailsabdos";
import Detailsbodya from "./Details/Detailsbodya";
import Detailsbodyp from "./Details/Detailsbodyp";
import Detailsstep from "./Details/Detailsstep";
import NewProduct from "./components/product/NewProduct";
import Detailscircuit from "./Details/Detailscircuit";
import DetailsJack from "./Details/DetailsJack";
import DetailsJih from "./Details/DetailsJih";
import NewCourse from "./components/cours/NewCourse";
import NewCoach from "./components/coach/NewCoach";
import ProductsList from "./components/admin/ProductsList";
import CoachsList from "./components/admin/CoachsList";
import CoursesList from "./components/admin/CoursesList";
import UpdateCoach from "./components/admin/UpdateCoach";
import FormulaireCart from "./components/cart/FormulaireCart";
import Login from "./components/admin/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/h" element={<Home />} />
            <Route exact path="/p" element={<Products />} />
            <Route exact path="/a" element={<About />} />
            <Route exact path="/c" element={<Contact />} />
            <Route exact path="/Shop" element={<Shop />} />
            <Route exact path="/tr" element={<Trainer />} />
            <Route exact path="/sign" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/c1" element={<Contact1 />} />
            <Route exact path="/cr" element={<Courses />} />
            <Route exact path="/drpm" element={<Detailsrpm />} />
            <Route exact path="/dabd" element={<Detailsabdos />} />
            <Route exact path="/dboda" element={<Detailsbodya />} />
            <Route exact path="/dbodp" element={<Detailsbodyp />} />
            <Route exact path="/dste" element={<Detailsstep />} />
            <Route exact path="/dcir" element={<Detailscircuit />} />
            <Route exact path="/djack" element={<DetailsJack />} />
            <Route exact path="/djih" element={<DetailsJih />} />
            <Route exact path="/product/new" element={<NewProduct />} />
            
            <Route exact path="/course/new" element={<NewCourse />} />
            <Route path="/admin/products" element={<ProductsList />} exact />
            <Route path="/admin/product/:id" element={<UpdateProduct />}exact/>
            <Route path="/admin/coachs" element={<CoachsList />} exact />
            <Route path="/admin/coach/:id" element={<UpdateCoach />} exact />
            <Route exact path="/coach/new" element={<NewCoach />} />
            <Route path="/admin/courses" element={<CoursesList />} exact />
            <Route path="/admin/course/:id" element={<UpdateCoach />} exact />
            <Route path="admin/log" element={<Login />} exact />
            <Route path="FormulaireC" element={<FormulaireCart />} />
            <Route path="/caart" element={<Cart />} exact />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
