import './index.scss'
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageNotFound } from "./routes/PageNotFound";
import CustomHook from './components/CustomHook';
import Todo from './components/todo';


function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='customhook' element={<CustomHook />} />
        <Route path='todo' element={<Todo />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
