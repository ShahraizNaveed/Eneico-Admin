import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Blogs from "./Components/Blogs/Blogs";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import NewProduct from "./Components/Products/NewProduct/NewProduct";

function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid min-vh-100">
      <div className="row">
        <Router>
          {toggle && (
            <div className="col-4 col-md-2 side-nav vh-100">
              <Sidebar Toggle={toggle} />
            </div>
          )}
          <div className={toggle ? "col-8 col-md-10" : "col-md-12 second-half"}>
            <Nav Toggle={Toggle} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/newproduct" element={<NewProduct />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
