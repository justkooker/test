import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFoundPAge } from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPAge />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
