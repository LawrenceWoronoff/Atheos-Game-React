import './Hero.css';
import heroBackground from "../assets/Hero.webp";
import carouselBox from "../assets/Carrusel-Box.png";
import {useEffect, useRef} from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Hero() {
  const heroCarousel = useRef();
  const hero = useRef();
  let initialPosY = 0;
  let initialHeight = 0;

  useEffect(() => {
    let pos = hero.current.getBoundingClientRect()
    // console.log(pos);
    initialPosY = pos.top;
    initialHeight = pos.height;
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollOffsetY = window.pageYOffset;
    heroCarousel.current.style.top = (initialHeight - 180 - (scrollOffsetY / 2)) + "px";
  }

  return (
    <div className="Hero position-relative d-flex align-items-center" style={{ backgroundImage: `url(${heroBackground})`, height:'125vh', backgroundSize: '150%', backgroundPosition: 'bottom', backgroundPositionY: '50px'}} ref={hero}>
      {/* <div className="HeroCarousel position-absolute d-flex align-items-center" style={{backgroundImage: `url(${carouselBox})` }} ref={heroCarousel}>
      <Carousel autoPlay={true} infiniteLoop={true} swipeable={true} emulateTouch={true} showArrows={true}  showStatus={false} showThumbs={false} interval={5000} transitionTime={1000}>
            <div>
                <img src={carouselBox} />
                <p className="legend sms-perrter text-white carousel-label">THE GATES OF THE UNDERWORLD ARE NOW OPEN</p>
            </div>
            <div>
                <img src={carouselBox} />
                <p className="legend sms-perrter text-white carousel-label">YOU ARE A BODILESS SOUL, AN ETHEREAL REMANT OF ETHER</p>
            </div>
            <div> 
                <img src={carouselBox} />
                <p className="legend sms-perrter text-white carousel-label">FORGE UNIQUE AND POWERFUL NFT ITEMS TO DEFEAT YOUR ENEMIES</p>
            </div>
            <div> 
                <img src={carouselBox} />
                <p className="legend sms-perrter text-white carousel-label">SEARCH AND OBTAIN SKINS WORTHY OF YOUR POWER</p>
            </div>
        </Carousel>
        </div> */}
        <div className="HeroCarousel position-absolute d-flex align-items-center" style={{backgroundImage: `url(${carouselBox})` }} ref={heroCarousel}>
            
              <Carousel autoPlay={true} infiniteLoop={true} swipeable={true} emulateTouch={true} showArrows={true}  showStatus={false} showThumbs={false} interval={5000} transitionTime={1000} style={{height:'100%'}}>
                  <div>
                      <p className="sms-perrter text-white carousel-label">THE GATES OF THE UNDERWORLD ARE NOW OPEN</p>
                  </div>
                  <div>
                      <p className="sms-perrter text-white carousel-label">YOU ARE A BODILESS SOUL, AN ETHEREAL REMANT OF ETHER</p>
                  </div>
                  <div> 
                      <p className="sms-perrter text-white carousel-label">FORGE UNIQUE AND POWERFUL NFT ITEMS TO DEFEAT YOUR ENEMIES</p>
                  </div>
                  <div> 
                      <p className="sms-perrter text-white carousel-label">SEARCH AND OBTAIN SKINS WORTHY OF YOUR POWER</p>
                  </div>
              </Carousel>
            
        </div>
    </div>
  );
}

export default Hero;
