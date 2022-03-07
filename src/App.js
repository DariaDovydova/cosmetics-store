import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ShoppingCart from './cart.png';
import About from './About';
import Delivery from './Delivery';
import Home from './Home';

function App() {
  return <Router>
    <nav>
      <Link to="/" className='brand-name link'>🍀 RICHE</Link>
      <Link to="/" className='link'>Каталог</Link>
      <Link to="/About" className='link'>О нас</Link>
      <Link to="/Delivery" className='link'>Доставка</Link>
      <Link to="/" className='link'><img src={ShoppingCart} alt="cart" /></Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Delivery" element={<Delivery />} />
    </Routes>
    
    
    <footer>
      <p className='par-footer'>Этот сайт не является настоящим и сделан исключительно в учебных целях <br />
     Вся информация и изображения взяты с оригинального сайта riche.skin</p>
    </footer>
  </Router>
    
}



export default App;