

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HtmlDoc from "./pages/Docs/HtmlDoc"
import CssDoc from "./pages/Docs/CssDoc"
import About from "./pages/About";
import JsDoc from "./pages/Docs/Js_Doc";
import DocsLayout from "./pages/Docs/DocsLayout";
import NotFound from "./pages/NotFound";


function App() {
return (
  <>
  <Navbar/>
  <Routes>
    <Route path = "/" element = {<Home/>} />
    <Route path = "/docs" element = {<DocsLayout/>}>
    <Route path = "/docs/Html" element ={<HtmlDoc/>}/>
      <Route path = "/docs/CSS" element ={<CssDoc/>}/>
      <Route path = "/docs/js" element ={<JsDoc/>}/>
    </Route>
    <Route path = "/about" element ={<About/>}/>
    <Route path ="*" element = {<NotFound/>}/>
  </Routes>
  </>
)
}
export default App;