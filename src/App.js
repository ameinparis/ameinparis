import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ameinparis" element={<Home />} />
        <Route path="/ameinparis/about" element={<About />} />
        <Route path="/ameinparis/projects" element={<Projects />} />
        <Route path="/ameinparis/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
