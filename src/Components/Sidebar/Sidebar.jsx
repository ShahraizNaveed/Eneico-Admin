import "./Sidebar.css";
import logo from "../../assets/logo/nav-logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="sidebar fade-in p-2">
      <div className="m-2 text-center">
        <img src={logo} alt="" className="img-fluid" />
      </div>

      <div className="text-center">
        <span className="brand-name">Eneico Admin</span>
      </div>

      <hr className="text-dark" />

      <div className="list-group list-group-flush">
        <Link to="/" className="list-group-item py-3">
          <i className="bi bi-house fs-6 me-3 white"></i>
          <span className="white">Dashboard</span>
        </Link>

        <Link to="/products" className="list-group-item py-3">
          <i className="bi bi-table fs-6 me-3 white"></i>
          <span className="white">Products</span>
        </Link>

        <Link to="/blogs" className="list-group-item py-3">
          <i className="bi bi-clipboard fs-5 me-3 white"></i>
          <span className="white">Blogs</span>
        </Link>

        <a className="list-group-item py-3">
          <i className="bi bi-power fs-5 me-3 white"></i>
          <span className="white">Logout</span>
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
