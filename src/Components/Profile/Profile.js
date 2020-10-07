
import React from "react";
import PropTypes from "prop-types";
// import { Card } from "react-bootstrap";
import  './../css/Main.css'


const Profil = props => {
  return (
    <div className="userstyle">
     <h1>Name: {props.fullName}</h1>
     <h4>Bio: {props.bio} </h4>
     <h4>Profession: {props.profession}</h4>
    </div>
  );
}
export default Profil

//types of props 

Profil.propTypes ={
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

//default of props
Profil.defaultProps ={ 
  fullName: "Samira Hmani ",
  bio: "I have a Master's degree in Auditing and Computer Security",
  profession: "Student in Go My Code. I will continue learning until I reach the level that befits me!"
}