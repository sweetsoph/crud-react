import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Header from "./components/layout/header";
import NewProject from "./pages/NewProject";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects/newproject" element={<NewProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
