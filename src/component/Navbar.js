import './Navbar.css';
import {useState, useEffect, useRef} from "react";
import hamburgerOpen from "../assets/HamburgerOpen.png";
import hamburgerClose from "../assets/HamburgerClose.png";

import {BsCaretDownFill} from "react-icons/bs";


import $ from 'jquery';

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [hamburgerImage, setHamburgerImage] = useState(hamburgerOpen);

  useEffect(() => {
   
  }, []);

 
  const toogleNav = () => {
  };

  const toogleMenu = () => {
    setShowNav(showNav ? false : true);
    setHamburgerImage(showNav ? hamburgerOpen : hamburgerClose)
 
  }

  return (
    <div className="Navbar position-fixed top-0 left-0 w-100 d-flex justify-content-center">
        <nav  style={{display: `${showNav ? 'flex' : 'none'}`}}>
          <ul className="menu">
            <li className="dropdown dropdown-6">
              Game Settings
            </li>
            <li className="dropdown dropdown-6">
              Whitepaper<span className='ms-2'><BsCaretDownFill/></span>
              <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <li className="dropdown_item-1">Tokenomics</li>
                <li className="dropdown_item-2">Token supply</li>
                <li className="dropdown_item-3">Governance</li>
                <li className="dropdown_item-4">Team</li>
              </ul>
            </li>
            <li className="dropdown dropdown-6">
              Social<span className='ms-2'><BsCaretDownFill/></span>
              <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <li className="dropdown_item-1">Discord</li>
                <li className="dropdown_item-2">Telegram</li>
                <li className="dropdown_item-3">Twitter</li>
                <li className="dropdown_item-4">Reddit</li>
              </ul>
            </li>
            <li className="dropdown dropdown-6">
              More<span className='ms-2'><BsCaretDownFill/></span>
              <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <li className="dropdown_item-1">LITEPAPER</li>
                <li className="dropdown_item-2">FAQ</li>
              </ul>
            </li>
          </ul>
        </nav>

        <img className='position-absolute top-0 hamburger' src={hamburgerImage} style={{width: '75px', height: '75px', right: '45px'}} onClick={toogleMenu}/>
    </div>
  );
}

export default Navbar;

