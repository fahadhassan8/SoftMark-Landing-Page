
import Navbars from "./components/Navbar/Navbar";
import Cover from "./components/Cover/cover";
// import Cards from "./components/Cards/Cards";
import MultipleCard from "./components/multipleCards/MultipleCard.jsx";
import ContactUs from './components/ContactUs/ContactUs'
import Footer from "./components/Footer/Footer.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  return (
    <>
      <Navbars />
      <Cover />
      <MultipleCard />
      {/* <Cards /> */}
      <ContactUs />
      <Footer />

    </>
  );
}

export default App;
