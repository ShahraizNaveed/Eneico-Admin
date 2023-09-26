import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import "./NewProduct.css";

const NewProduct = () => {
  return (
    <Container>
      <Row>
        <section className="form-section">
          <p className="newproduct-heading">New Product</p>
          <Form className="my-5">
            <div>
              <Row>
                <Col>
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    required
                    // placeholder="Product Name"
                    name="product_name"
                  />
                </Col>
                <Col>
                  <Form.Label>Product Model</Form.Label>
                  <Form.Control
                    required
                    // placeholder="Product Model"
                    name="product_model"
                  />
                </Col>
              </Row>
            </div>

            <div className="mt-4">
              <Row>
                <Col>
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    required
                    placeholder="Image"
                    type="file"
                    name="image"
                  />
                </Col>
                <Col>
                  <Form.Label>Product Category</Form.Label>
                  <Form.Select
                    required
                    size="md"
                    aria-label="Default select example"
                    name="service"
                  >
                    <option>Choose Category</option>
                    <option value="1">Machine 1</option>
                    <option value="2">Machine 2</option>
                    <option value="3">Machine 3</option>
                  </Form.Select>
                </Col>
              </Row>
            </div>

            <div className="mt-4">
              <Row>
                <Col>
                  <Form.Label>Max Loading Capacity</Form.Label>
                  <Form.Control
                    required
                    placeholder="loading capacity"
                    type="text"
                    name="loading_capacity"
                  />
                </Col>

                <Col>
                  <Form.Label>Max Lifitng Capacity</Form.Label>
                  <Form.Control
                    required
                    placeholder="lifting capacity"
                    type="text"
                    name="lifting_capacity"
                  />
                </Col>

                <Col>
                  <Form.Label>Max Lifting Height</Form.Label>
                  <Form.Control
                    required
                    placeholder="lifting height"
                    type="text"
                    name="lifting_height"
                  />
                </Col>
              </Row>
            </div>

            <div className="mt-4">
              <FloatingLabel controlId="floatingTextarea2" label="Product Description">
                <Form.Control
                  name="comments"
                  as="textarea"
                  required
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </div>

            <button type="submit" className="product-submit-button">
              Add Prodcut
            </button>
          </Form>
        </section>
      </Row>
    </Container>
  );
};

export default NewProduct;
