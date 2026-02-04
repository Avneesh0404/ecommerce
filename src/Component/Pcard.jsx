import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addtocart } from "../functions/CartSlice";

function Pcard({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card className="pcard" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Title>${data.price}</Card.Title>
        <Button
          style={{ margin: 10 }}
          variant="primary"
          onClick={() =>
            dispatch(
              addtocart({
                productid: data.id,
                title: data.title,
                price: data.price,
              })
            )
          }
        >
          Add To Cart
        </Button>
        <Button
          style={{ margin: 10 }}
          variant="primary"
          onClick={() => {
            navigate(`/${data.id}`);
          }}
        >
          Details
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Pcard;
