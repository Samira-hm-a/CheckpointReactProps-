import React from 'react';
import  './../css/Main.css'

const Alr = props => {

    return (
      <div className="bt">
      <button  onClick={() => props.alert("Hello, I am Samira HMANI ")}>
        Alert
      
      </button> 
      </div>
    );
   };
export default Alr;