// import logo from './logo.svg';
import './App.css';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import About from './component/About';
import Home from './component/Home';

  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

function App() {
  return (
    <>


      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>  
        </Routes>
      </Router>

    </>
  );
}

export default App;
