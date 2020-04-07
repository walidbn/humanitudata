import React, { Component } from 'react';
import './Nav.css';
import Inputsearch from './Inputsearch/Inputsearch';
import profil from './flag.png';
import sol from './sol.png';


class Nav extends Component {
  constructor(props){
    super(props);
    this.state={
       users:[]
    }
  }
   componentDidMount() {
    
            
     
} 
render(){
  return (
    <div className="navstyle">
            
              <Inputsearch />
              <img id="prof" src={profil} />
              <span id="text-nav">Covid-19.tn </span>
              <span id="separateur">|</span>
              <span>Comment se proteger ??</span>
              <span id="separateur">|</span>
           
              

    </div>
  );
}
}
export default Nav;
