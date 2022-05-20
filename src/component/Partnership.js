import './Partnership.css';
import SkyCity from "../assets/SkyCity.jpg";
import {useEffect, useRef} from "react";


function Partnership() {
  const partnerShip = useRef();
  const partnerContent = useRef();
  let initialPosY = 0;
  let initialHeight = 0;

  useEffect(() => {
    let pos = partnerShip.current.getBoundingClientRect()
    initialPosY = pos.top;
    initialHeight = pos.height;
    // console.log(partnerShip.current.getBoundingClientRect());
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollOffsetY = window.pageYOffset;
    // console.log(window.pageYOffset);

    // console.log("InitialPosY", initialPosY);
    // console.log("initialHeight", initialHeight);

    partnerContent.current.style.top = (initialHeight / 2 - (scrollOffsetY - initialPosY - initialHeight) / 2 - 115) + "px";
    // console.log(window.pageYOffset);
  }

  return (
    <div className="Partnership position-relative" ref={partnerShip} style={{marginBottom: '-20px', height: '100vh'}}>
      <img className="w-100 position-relative" src={SkyCity} alt = "Sky City"/>
      <div className="position-absolute partnerContent" ref={partnerContent}>
          <h1 className='sms-perrter text-white' style={{fontSize: '55px', marginBottom:'50px'}}>Partnerships</h1>
          <h2 className='sms-perrter text-white' style={{fontSize: '40px'}}>To be Announced</h2>
      </div>
    </div>
  );
}

export default Partnership;
