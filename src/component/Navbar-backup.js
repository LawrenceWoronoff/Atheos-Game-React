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
    setTimeout(function () {
      test();
    });
  }, []);

  const test = () => {
    var tabsNewAnim = $("#navbarSupportedContent");
    var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight - 10 + "px",
      width: activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(".nav-bar-sub-menu").addClass("hidden-div");

      $(this).addClass("active");
      var selectedMenu = $(this);
      setTimeout(function () {
        selectedMenu.find(".nav-bar-sub-menu").removeClass("hidden-div");
      }, 500);
      var subMenuNumber = $(this).find(".nav-bar-sub-menu").find("p").length;

      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight - 10 + 40 * subMenuNumber  + (subMenuNumber != 0 ? 15 : 0) + "px",
        width: activeWidthNewAnimWidth + "px",
        'border-radius': subMenuNumber == 0 ? "15px 15px 0px 0px" : "15px",
      });
    });
  };

  const toogleNav = () => {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () {
      test();
    });
  };

  const toogleMenu = () => {
    setShowNav(showNav ? false : true);
    setHamburgerImage(showNav ? hamburgerOpen : hamburgerClose)
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () {
      test();
    });
  }

  return (
    <div className="Navbar position-fixed top-0 left-0 w-100 d-flex justify-content-center">
        <nav className="navbar navbar-expand-custom navbar-mainbg" style={{display: `${showNav ? 'flex' : 'none'}`}}>
          <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toogleNav}>
            <i className="fas fa-bars text-white"></i>
          </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <div className="hori-selector">
                  {/* <div className="left"></div>
                  <div className="right"></div> */}
                </div>
                <li className="nav-item position-relative active">
                  <a className="nav-link text-uppercase" href="#">Game Settings</a>
                </li>
                <li className="nav-item position-relative">
                  <a className="nav-link text-uppercase" href="#">Whitepaper<span className='ms-2'><BsCaretDownFill/></span></a>
                  <div className="nav-bar-sub-menu text-start hidden-div">
                      <p className='text-uppercase'>Tokenomics</p>
                      <p className='text-uppercase'>Token supply</p>
                      <p className='text-uppercase'>Governance</p>
                      <p className='text-uppercase'>Team</p>
                  </div>
                </li>
                <li className="nav-item position-relative">
                  <a className="nav-link text-uppercase" href="#">Social<span className='ms-2'><BsCaretDownFill/></span></a>
                  <div className="nav-bar-sub-menu text-start hidden-div">
                      <p className='text-uppercase'>Discord</p>
                      <p className='text-uppercase'>Telegram</p>
                      <p className='text-uppercase'>Twitter</p>
                      <p className='text-uppercase'>Reddit</p>
                  </div>
                </li>
                <li className="nav-item position-relative">
                  <a className="nav-link text-uppercase" href="#">More<span className='ms-2'><BsCaretDownFill/></span></a>
                  <div className="nav-bar-sub-menu text-start hidden-div">
                      <p className='text-uppercase'>LITEPAPER</p>
                      <p className='text-uppercase'>FAQ</p>
                  </div>
                </li>
              </ul>
            </div>
          
        </nav>

        <img className='position-absolute top-0 hamburger' src={hamburgerImage} style={{width: '75px', height: '75px', right: '45px'}} onClick={toogleMenu}/>
    </div>
  );
}

export default Navbar;

