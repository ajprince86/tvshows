import "./App.css";
import Header from "./components/Header";
import Container from "./Container.js";
import Footer from "./components/Footer";


function App() {
  return (
      <div className="App">
        <div><Header /></div>
        <div><Container /></div>
        <div><Footer /></div>
      </div>
    );
  }

export default App;

