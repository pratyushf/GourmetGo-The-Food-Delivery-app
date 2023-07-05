import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import UserContext from './utils/UserContext';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Help from './components/Help';
import Contact from './components/Contact';
import Instamart from './components/Instamart';
import RestaurantMenu from './components/RestaurantMenu';

function App() {
  return (
    // <UserContext.Provider>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/offers' element={<About />} />
            <Route path='/help' element={<Help />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/restaurant/:resid' element={<RestaurantMenu />} />
            <Route path='/instamart' element={<Instamart />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    // </UserContext.Provider>
  );
}

export default App;
