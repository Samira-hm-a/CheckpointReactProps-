import React from 'react';
import './App.css';
import  { Nav } from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profil from "./Components/Profile/Profile";
import Photo from "./Components/Profile/Photo";
import user from "./user.jpg";
import Alr from "./Components/Profile/Alert";
import {Footer} from "./Components/Footer/Footer";

function App() {

  const styleObject={
    display:"flex" , 
    justifyContent:"center" , 
    flexDirection:"column" ,
    alignItems:"center" ,
    margin:"50px 350px"}
  const a = n => alert(n);
  return (
    <div className="App">
     <Nav />
     <br/>
          
          <div style={styleObject}>
          <Photo Photo={user}/>
            <Profil/>
            <br/>
            <Alr alert={a}/>
          </div>
     <Footer/>
    </div>
  

  
      );
    }
    export default App;