import logo from '/logo.png';

const HeaderComponent = () =>{
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
          </ul>
        </div>
      </div>
    )
  }
  export default HeaderComponent;