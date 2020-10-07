import React from 'react';
import user from '../../user.jpg'
import  './../css/Main.css'


const Photo = props => {
    return (
 <div className="user">
    <img src={user} alt="anonyme" />
    </div>
    );
  }
  
  export default Photo;
