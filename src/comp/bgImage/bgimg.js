import React from "react";
import './bgimg.css'

class Bgimg extends React.Component{
    render(){
        return <div className="hero-image">
        <div className="hero-text">
          <p className="title">The Joke Bible</p>
          <p className="soustitle">Daily Laughs for you and yours</p>
          <input type={'text'} placeholder="How can we make you laugh today?"></input>
          
        </div>
      </div>
    }

}
export default Bgimg;