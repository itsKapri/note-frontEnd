import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../src/App.css"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Notestate from './context/notes/Notestate';
// import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Notestate >
    <Router>
      <Navbar />
      {/* <Alert message="This is React app"/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </Notestate>
  );
}

export default App;
