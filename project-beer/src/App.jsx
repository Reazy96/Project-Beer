import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts/AllProducts";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllProducts />} />
        <Route path="/detail/:_id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
