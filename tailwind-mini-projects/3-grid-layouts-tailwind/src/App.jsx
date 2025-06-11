//App.jsx
 import GridProfilecards from "./components/GridProfilecard";
 import GridDashboard from "./components/GridDashboard";
 import ImageGallery from "./components/ImageGallery";
 import Home from "./components/Home";
 import {Routes, Route} from "react-router-dom"
function App() {
  
 return (
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/profilecards" element={<GridProfilecards/>} />
        <Route path="/dashboard" element={<GridDashboard/>} />
        <Route path="/gallery" element={<ImageGallery/>} />
      </Routes>
 )

}


export default App;
