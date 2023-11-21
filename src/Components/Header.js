import { useOnline } from "../utils/useOnline";
import { Link } from "react-router-dom";
const Header = ()=>{
    let isOnline = useOnline();
    const logo = `https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg`
    return(
       <div className="navbar">
          <div className = "logo">
            <img src = {logo} />
          </div>
          <ul className="nav-items">
              <li>onlineStatus: {isOnline ? "🟢" :"🔴"}</li>
              <li><Link to = "/">Home</Link></li> 
              <li><Link to = "/about">About us</Link></li> 
              <li><Link to = "/contact">Contact</Link></li> 
              <li>Cart</li> 
          </ul>
         
       </div>
    )
}

export default Header;