import { Col, Container, Row } from "react-bootstrap";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <Link to="/products">
            <div className="p-4 blue card fade-in shadow-sm text-center">
              <div>
                <h3 className="fs-2">230</h3>
                <p className="fs-5">Products</p>
                <i className="bi bi-cart-plus p-3 fs-1"></i>
              </div>
            </div>
          </Link>
        </Col>

        <Col md={4}>
          <Link to="/blogs">
            <div className="p-4 yellow card fade-in shadow-lg text-center">
              <div>
                <h3 className="fs-2">40</h3>
                <p className="fs-5">Blogs</p>
                <i className="bi bi-clipboard fs-1"></i>
              </div>
            </div>
          </Link>
        </Col>

        {/* <Col md={4}>
          <div className="p-4 yellow fade-in card shadow-sm text-center">
            <div>
              <h3 className="fs-2">2300</h3>
              <p className="fs-5">Comments</p>
              <i className="bi bi-table fs-1"></i>
            </div>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Card;
