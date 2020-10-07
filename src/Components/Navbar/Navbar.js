import React from "react";
import { Navbar } from 'react-bootstrap';
// import UserPhoto from "./src/user.png"
import  './Navbar.css';

export const Nav = ()=>{
  return (
   <div>

  <Navbar bg="secondary" variant="dark" className="title">
    <Navbar.Brand href="#home">
      <img 
        alt=""
        src="./user.jpg"
        width="30"
        height="30"
        // className="d-inline-block align-top"
      />{' '}
      ABout me...
    </Navbar.Brand>
  </Navbar>
</div>
  );
}
