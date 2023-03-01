import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Menu from "./components/Menu";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Menu />
      {/* <div className="mainpage"> */}
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
      {/* <Home /> */}
    </div>
  );
}

export default App;
