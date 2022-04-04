import Home from './components/Home';
import Search from './components/Search';
import AboutUs from './components/AboutUs';
import NotFound from './components/NotFound';
import {  Route, Routes } from "react-router-dom";


function Container() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default Container;
