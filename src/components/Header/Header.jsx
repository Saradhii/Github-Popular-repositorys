import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className='header'>
        <Link to="/"><button className='btn'>ALL</button></Link> 
        <Link to={`/Html/html`}><button className="btn btn3">HTML</button></Link> 
        <Link to={`/Css/css`}><button className="btn btn2">CSS</button></Link> 
        <Link to={`/JavaScript/javascript`}><button className="btn btn5">JAVASCRIPT</button></Link> 
    </div>
    </>
  )
}

export default Header