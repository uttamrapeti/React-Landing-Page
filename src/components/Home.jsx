import React from 'react';
import '../styles/Page.css';
import HomeSlider from './HomeSlider';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <HomeSlider/>
      <Link to="/contact" className='descarga_la_app'>Download the app</Link>
    </div>
    
    
  )
}

export default Home