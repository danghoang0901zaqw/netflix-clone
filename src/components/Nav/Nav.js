import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";
const Nav = () => {
  const [show,setShow]=useState(false)
  const navigate=useNavigate()

  const handleScroll=()=>{
    setShow(window.scrollY>100)
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  }, [])
  
  return (
    <div className={`nav ${show && 'nav__black'} `}>
      <div className="nav__content">
        <img
        onClick={()=>navigate('/')}
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
        onClick={()=>navigate('/profile')}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
