import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Store from "./Component/Template";
import Cart from "./Component/Cart";
import Product from "./Component/Product";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Addproduct from './Component/Addproduct'
const queryclient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Store />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/:id" element={<Product />}></Route>
          <Route path="/addproduct" element={<Addproduct/>}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
