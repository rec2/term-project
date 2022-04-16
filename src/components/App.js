import "../styles.css";
import LandingPage from "./LandingPage";
import NavBar from "./Navbar";
import Footer from "./Footer";


export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100" id="">
      <NavBar/>
      <div className="container-fluid">
        <LandingPage/>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
