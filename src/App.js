import "./App.css";
import Header from "./components/Header";
import Container from "./Container.js";
import Footer from "./components/Footer";
// import TableList from "./components/TableList";



function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to the Tv Show Site</h1> */}
      <div><Header /></div>
      <div><Container /></div>
      <div><Footer /></div>
    
    </div>
    
  );
  }

export default App;
