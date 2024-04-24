import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ThreeWheelers from "./components/ThreeWheelers";
import TwoWheelers from "./components/TwoWheelers";
import RevLoan from "./components/RevLoan";
import EvLoan from "./components/EvLoan";
import About from "./components/About";
import Patners from "./components/Patners";
import NewsBlogs from "./components/NewsBlogs";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
        <Navbar/>
      <BrowserRouter>
       <div className="container-flex">
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/threewheelers" element={<ThreeWheelers/>}></Route>
          <Route exact path="/twowheelers" element={<TwoWheelers/>}></Route>
          <Route exact path="/revloan" element={<RevLoan/>}></Route>
          <Route exact path="/evloan" element={<EvLoan/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/patners" element={<Patners/>}></Route>
          <Route exact path="/newsblogs" element={<NewsBlogs/>}></Route>
          <Route exact path="/career" element={<Career/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
       </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
