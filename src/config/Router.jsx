import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import WebService from "../components/WebService/WebService";
import AppService from "../components/AppService/AppService";
import LogoService from "../components/LogoService/LogoService";
import SeoService from "../components/LogoService/LogoService";
import DigitalMarketing from "../components/digitalMService/DigitalMarketing";
import Navbars from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="WebService" element={<WebService />} />
          <Route path="AppService" element={<AppService />} />
          <Route path="SeoService" element={<SeoService />} />
          <Route path="DigitalMarketing" element={<DigitalMarketing />} />
          <Route path="LogoService" element={<LogoService />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Router;
