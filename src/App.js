import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dashboard from "./pages/Dashboard";
import Wardrobe from "./pages/Wardrobe";
import SavedStyles from "./pages/SavedStyles";
import Store from "./pages/Store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wardrobe" element = {<Wardrobe/>}/>
          <Route path="/saved" element = {<SavedStyles/>}/>
          <Route path="/store" element = {<Store/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
