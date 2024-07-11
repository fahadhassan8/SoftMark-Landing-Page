
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from '../components/Home'
import WebService from "../components/WebService/WebService"
import AppService from "../components/AppService/AppService"
import LogoService from "../components/LogoService/LogoService"
import SeoService from "../components/LogoService/LogoService"
import DigitalMarketing from "../components/digitalMService/DigitalMarketing"
function Router() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="WebService" element={<WebService/>} />
                <Route path="AppService" element={<AppService/>} />
                <Route path="LogoService" element={<LogoService/>} />
                <Route path="SeoService" element={<SeoService/>} />
                <Route path="DigitalMarketing" element={<DigitalMarketing/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router

