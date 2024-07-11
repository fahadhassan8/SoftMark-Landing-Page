import Navbars from "./Navbar/Navbar.jsx";
import Cover from "./Cover/cover.jsx";
// import Cards from "./components/Cards/Cards";
import MultipleCard from "./multipleCards/MultipleCard.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import Footer from "./Footer/Footer.jsx";

function Home() {
  return (
    <>
      <Cover />
      <MultipleCard />
      {/* <Cards /> */}
      <ContactUs />
    </>
  );
}

export default Home;
