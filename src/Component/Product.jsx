import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../functions/queryfn";
import { useParams } from "react-router";
import Loading from "./Loading";
import Errormessage from "./Errormessage";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { useDispatch } from "react-redux";
import { addtocart } from "../functions/CartSlice";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });

  if (isLoading) return <Loading />;
  if (error) return <Errormessage />;

  return (
    <Container className="py-5">
      <Row className="product-detail">
        <Col lg={6} className="product-image">
          <img src={data.image} alt={data.title} className="img-fluid" />
        </Col>
        <Col lg={6} className="product-info">
          <h1 className="product-title">{data.title}</h1>
          <p className="product-category text-muted text-uppercase">
            {data.category}
          </p>
          <div className="product-rating mb-4">
            <span className="rating-value fs-5">
              ⭐ {data.rating.rate}
            </span>
            <Badge bg="secondary" className="ms-2">
              {data.rating.count} reviews
            </Badge>
          </div>
          <p className="product-description">{data.description}</p>
          <div className="product-footer gap-3">
            <h2 className="product-price text-success">${data.price}</h2>
            <Button
              variant="primary"
              size="lg"
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
