import { useNavigate } from "react-router";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container fluid className="py-5">
          <Row className="align-items-center">
            <Col lg={6} className="hero-content">
              <h1 className="display-4 fw-bold mb-3">Summer Collection 2026</h1>
              <p className="lead mb-4">
                Discover our exclusive range of premium products
              </p>
              <Button 
                size="lg" 
                variant="primary"
                onClick={() => navigate("/product")}
              >
                Shop Now
              </Button>
            </Col>
            <Col lg={6} className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&q=80"
                alt="Hero Banner"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Promotional Section */}
      <section className="promotional-section py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <Card className="text-center shadow-sm h-100 border-0">
                <Card.Body className="p-5">
                  <Card.Title className="display-6 mb-3">New Arrivals</Card.Title>
                  <Card.Text className="fs-5 text-danger fw-bold">
                    Up to 50% off
                  </Card.Text>
                  <Button variant="outline-primary">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow-sm h-100 border-0">
                <Card.Body className="p-5">
                  <Card.Title className="display-6 mb-3">Best Sellers</Card.Title>
                  <Card.Text className="fs-5 text-danger fw-bold">
                    Limited Time Offer
                  </Card.Text>
                  <Button variant="outline-primary">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow-sm h-100 border-0">
                <Card.Body className="p-5">
                  <Card.Title className="display-6 mb-3">Trending Now</Card.Title>
                  <Card.Text className="fs-5 text-danger fw-bold">
                    Exclusive Deals
                  </Card.Text>
                  <Button variant="outline-primary">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
