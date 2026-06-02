import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./HomePage/index";
import ServicesPage from "./ServicesPage/index";
import "./index.css";
import QuotePage from "./QuotePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ServiceAreasPage from "./ServiceAreasPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service-areas" element={<ServiceAreasPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}