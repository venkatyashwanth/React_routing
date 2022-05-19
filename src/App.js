import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Noida from "./components/Noida";
import Delhi from "./components/Delhi";
import Notfound from "./components/Notfound";
import Nav from "./components/Nav";
import Flights from "./components/Flights";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <header>
          <Nav/>
      </header>
      <section className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/flights/:id" element={<Flights/>}></Route>
          <Route path="/contact" element={<Contact/>}>
            <Route path="noida" element={<Noida/>}></Route>
            <Route path="delhi" element={<Delhi/>}></Route>
          </Route>
          <Route path="*" element={<Notfound/>}></Route>
        </Routes>
      </section>
    </Router>
    </>
  );
}

export default App;
