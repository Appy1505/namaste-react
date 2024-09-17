import logo from '/logo.png';
import { useState } from 'react';

const HeaderComponent = () =>{
  const [btnChange, setbtnChange] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo}/>
        </div>
        <div className="header-links">
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Cart</li>
            <button className="login" onClick={() =>{
                 btnChange === "Login" ? setbtnChange("Logout") : setbtnChange("Login")
            }} > {btnChange} </button>
          </ul>
        </div>
      </div>
    )
  }
  export default HeaderComponent;