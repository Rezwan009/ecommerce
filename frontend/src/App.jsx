import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Product from "./components/pages/Product";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/product" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
