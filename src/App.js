import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import Home from "./Pages/Home/Homescreen"
import Cookies from 'js-cookie';

function App() {
  useEffect(() => {
    const views = Cookies.get('website_views') || 0;

    // Set expiration to 7 days from now
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    Cookies.set('website_views', parseInt(views) + 1, 
      { expires: expirationDate, secure: true, sameSite: 'strict' });

    console.log(`Website views: ${Cookies.get('website_views')}`);
  }, []);
  
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='*' element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
