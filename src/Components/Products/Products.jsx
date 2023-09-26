import "./Products.css";
import prod from "../../assets/product1.png";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image: prod,
    category: "Machine1",
    noOfPurchase: 753,
    productModel: "SRSC45H1",
    productName: "Reach Stacker",
    productDesc:
      "Lorem ipsum dolor sit amet consectetur. Massa aliquam aliquam senectus nunc. Velit nullam amet lobortis massa leo feugiat. Massa sed amet proin porta molestie lectus quisque suscipit. A enim turpis duis ultricies sem. Venenatis gravida metus tincidunt odio dui sed gravida platea. Tristique ut non duis viverra aliquam ut mi. Sollicitudin dolor sodales diam turpis sagittis ac. Lacus.",
  },
  {
    id: 2,
    image: prod,
    category: "Machine2",
    noOfPurchase: 598,
    productModel: "STR318",
    productName: "Tunnel Roadheader",
    productDesc:
      "Lorem ipsum dolor sit amet consectetur. Massa aliquam aliquam senectus nunc. Velit nullam amet lobortis massa leo feugiat. Massa sed amet proin porta molestie lectus quisque suscipit. A enim turpis duis ultricies sem. Venenatis gravida metus tincidunt odio dui sed gravida platea. Tristique ut non duis viverra aliquam ut mi. Sollicitudin dolor sodales diam turpis sagittis ac. Lacus.",
  },
  {
    id: 3,
    image: prod,
    category: "Machine3",
    noOfPurchase: 266,
    productModel: "SRSC45H1",
    productName: "Reach Stacker",
    productDesc:
      "Lorem ipsum dolor sit amet consectetur. Massa aliquam aliquam senectus nunc. Velit nullam amet lobortis massa leo feugiat. Massa sed amet proin porta molestie lectus quisque suscipit. A enim turpis duis ultricies sem. Venenatis gravida metus tincidunt odio dui sed gravida platea. Tristique ut non duis viverra aliquam ut mi. Sollicitudin dolor sodales diam turpis sagittis ac. Lacus.",
  },
  {
    id: 4,
    image: prod,
    category: "Machine4",
    noOfPurchase: 327,
    productModel: "STR318",
    productName: "Tunnel Roadheader",
    productDesc:
      "Lorem ipsum dolor sit amet consectetur. Massa aliquam aliquam senectus nunc. Velit nullam amet lobortis massa leo feugiat. Massa sed amet proin porta molestie lectus quisque suscipit. A enim turpis duis ultricies sem. Venenatis gravida metus tincidunt odio dui sed gravida platea. Tristique ut non duis viverra aliquam ut mi. Sollicitudin dolor sodales diam turpis sagittis ac. Lacus.",
  },
];

const Products = () => {
  return (
    <>
      <Container fluid>
        <p className="add-btn">
          <Link to="/newproduct">Add New Product</Link>
        </p>
        <section className="table-section">
          <Table responsive striped bordered hover>
            <thead>
              <tr className="table-header">
                <th>Model</th>
                <th>Name</th>
                <th>Category</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0
                ? data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.productModel}</td>
                        <td>{item.productName}</td>
                        <td>{item.category}</td>
                        <td>
                          <img
                            src={item.image}
                            alt=""
                            className="img-fluid product-image"
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            // onClick={() => handleEdit(item.id)}
                          >
                            Edit
                          </button>{" "}
                          &nbsp;
                          <button
                            className="btn btn-outline-danger"
                            // onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : "Loading..."}
            </tbody>
          </Table>
        </section>
      </Container>

      {/* {products.map((prod) => {
        return (
          <>
            <section>
              <p key={prod.id} className="text-center">
                {prod.productName}
              </p>
            </section>
          </>
        );
      })} */}
    </>
  );
};

export default Products;
