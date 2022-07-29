import "./nav.css"
import React, { useState } from 'react';
function Nav() {
  return (
    <>   
      <nav className='navbar'>
        <ul className='navbar-menu'>
          <li>
            <a href='#' className='link'>so funktioniert's </a>
          </li>

          <li>
            <a href="#" className='link'>sonderangebote</a>
          </li>
         
          <li >
              <a href="#" >
                <div className="dropdown">
                        <button className="MEIN-BEREICH"> 
                            <img src="./shape.png" style={{width: "16px",height: "15px", marginRight:"6px"}}/>
                              MEIN BEREICH
                            <img src="./path_2@2x.png" style={{width: "15px",height: "10px"}}/>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">My published jokes</a>
                        
                            <a href="#">My saved jokes</a>
                        
                            <a href="#">Account Information</a>
                        
                            <a href="#">Publish new joke</a>                                      
                        </div>
                </div> 
              </a>
          </li>

        </ul>

      </nav>
    </>
  );
}

export default Nav;