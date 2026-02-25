import { BrowserRouter, Route, Routes } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify/unstyled";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Category />} />
          <Route path="/cadastarcategoria" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
