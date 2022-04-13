import Home from "./components/Home";
import Search from "./components/Search";
import ShowCard from "./components/ShowCard";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import Episodes from "./components/Episodes";
import { Route, Routes } from "react-router-dom";

function Container() {
  return (
    <div className="happy">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/*" element={<Search />} />
        <Route path="/search/:id" element={<ShowCard />} />
        <Route path="/episodes/:id" element={<Episodes />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default Container;
