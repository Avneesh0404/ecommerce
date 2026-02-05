import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";

function Cart() {
  const cartitem = useSelector((state) => state.cart.item);
  const totalprice = useSelector((state) => state.cart.totalprice);

  return (
    <Container className="py-5">
      <h2 className="mb-4">Shopping Cart</h2>
      {cartitem.length === 0 ? (
        <Alert variant="info">Your cart is empty!</Alert>
      ) : (
        <>
          <ListGroup as="ul" numbered>
            {cartitem.map((item, index) => (
              <ListGroup.Item
                key={index}
                as="li"
                className="d-flex justify-content-between align-items-center"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>
                  <small className="text-muted">${item.price}</small>
                </div>
                <Badge bg="primary" pill>
                  {item.qty}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="mt-4">
            <h5>
              Total Items: <Badge bg="success">{cartitem.length}</Badge>
            </h5>
          </div>
          <div className="mt-4">
            <h5>
              Total Cart Value: <Badge bg="success">{totalprice}</Badge>
            </h5>
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;
