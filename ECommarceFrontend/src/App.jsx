import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Route added here
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddProduct from './Components/AddProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
