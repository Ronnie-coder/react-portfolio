import Topbar from "./componets/topbar/Topbar";
import Intro from "./componets/intro/Intro";
import Portfolio from "./componets/portfolio/Portfolio";
import Works from "./componets/works/Works";
import Testimonials from "./componets/testimonials/Testimonials";
import Contact from "./componets/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./componets/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="app bg-gray-100 h-screen">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} className="bg-blue-500 text-white p-4" />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} className="bg-gray-200 p-4" />
      <div className="sections container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <Intro className="mb-12" />
        <Portfolio className="mb-12" />
        <Works className="mb-12" />
        <Testimonials className="mb-12" />
        <Contact className="mb-12" />
      </div>
    </div>
  );
}

export default App;