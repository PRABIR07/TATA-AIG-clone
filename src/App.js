import "./App.css";
import About from "./components/About";
import Card from "./components/Card";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Related from "./components/Related";
import What from "./components/What";
import Why from "./components/Why";

function App() {
  return (
   
      <div>
        <Header />
        <Hero />
        <Why />
        <What />
       <Customers/>
       {/* <Card/> */}
        <About />
        <Related/>
        <Footer />
      </div>
   
  );
}

export default App;
