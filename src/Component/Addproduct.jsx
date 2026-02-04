import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postproduct } from "../functions/queryfn";
import { Form, Button, Container, Card } from "react-bootstrap";

function Addproduct() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postproduct,
    onSuccess: () => {
      alert("✅ Product Added Successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });

      // below code clear/reset the form after the product is added 
      
      setData({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
      });
    },
    onError: () => {
      alert("❌ Failed to add product");
    },
  });

  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      ...data,
      price: Number(data.price),
    });
  };

  return (
    <Container className="py-5">
      <Card className="shadow-sm">
        <Card.Header className="bg-primary text-white">
          <Card.Title className="mb-0">Add New Product</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter product title"
                value={data.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                name="price"
                placeholder="Enter product price"
                value={data.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                placeholder="Enter product description"
                value={data.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="Enter product category"
                value={data.category}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="url"
                name="image"
                placeholder="Enter image URL"
                value={data.image}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button 
              variant="success" 
              type="submit" 
              disabled={mutation.isPending}
              className="w-100"
            >
              {mutation.isPending ? "Adding..." : "Submit Product"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Addproduct;
