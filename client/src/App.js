import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Pages/Homepage';
import { Navbar } from './Components/Navbar';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Footer } from './Components/Footer';
import { Course } from './Pages/Course';
import { Admin } from './Components/Admin';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/course" element={<Course />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
