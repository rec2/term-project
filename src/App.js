import './styles.css';
import Login from './components/Login';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <NavBar/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
