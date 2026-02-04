import Loading from "./Loading";
import Errormessage from "./Errormessage";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../functions/queryfn";
import Pcard from "./Pcard";
import Container from "react-bootstrap/Container";
import "../app.css";

function Store() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (isLoading) return <Loading />;
  if (error) return <Errormessage />;

  return (
    <Container fluid>
      <div className="pcard-container">
        {data.map((item) => (
          <Pcard key={item.id} data={item} />
        ))}
      </div>
    </Container>
  );
}

export default Store;
