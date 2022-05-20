import './MusicPlayer.css';
import {useState, useEffect, useRef} from "react";
import musicBoy from "../assets/musicBoy.png";
import musicPlayerBack from "../assets/musicPlayerBack.png";
import musicPlayerBackSmall from "../assets/musicPlayerBackSmall.png";


import {FaStepBackward, FaPlay, FaPause, FaStepForward} from "react-icons/fa";
import {BiCollapse} from "react-icons/bi";
import {FaMusic} from "react-icons/fa";

import $ from 'jquery';

function MusicPlayer() {
  const [musicOpen, setMusicOpen] = useState(false);
  const [musicPlay, setMusicPlay] = useState(false);

  useEffect(() => {
    
  }, []);

  const OpenMusicPlayerLayout = () => {
    if(!musicOpen){
      setMusicOpen(true);
    }
  }
  const toogleMusicPlayerLayout = () => {
    if(!musicOpen){
      setMusicOpen(true);
    } else {
      setMusicOpen(false);
    }
  }

  const toogleMusicStatus = () => {
    if(!musicPlay){
      setMusicPlay(true);
    } else {
      setMusicPlay(false);
    }
  }

  return (
    <div className="MusicPlayer position-fixed d-flex justify-content-center" onClick={OpenMusicPlayerLayout}>
      <div className='d-flex justify-content-center position-relative' style={{height: '75px', paddingLeft: `${musicOpen ? '130px' : '110px'}`}}>
        <img className='position-absolute music-back top-0 start-0 w-100' style={{zIndex: '-1'}} src={!musicOpen ? musicPlayerBackSmall : musicPlayerBack}/>
        <img className={`position-absolute music-boy ${musicOpen ? 'extend' : ''}`} style={{zIndex: 1, left: '5px'}} src={musicBoy}/>
        <div style={{width: '20px'}}>
          <div id="preloader_1" style={{display: `${musicOpen && musicPlay ? 'block' : 'none'}`}}>
              <span></span>
              <span></span>
              <span></span>
          </div> 
        </div>
        
        <div className='justify-content-center' style={{padding:'20px', display: `${musicOpen ? 'flex' : 'none'}`}}>
          <div className='musicButton mx-3'>
            <FaStepBackward/>
          </div>
          <div className='musicButton mx-3'>
            {
              !musicPlay &&
              <FaPlay onClick={toogleMusicStatus}/>
            }
            {
              musicPlay &&
              <FaPause onClick={toogleMusicStatus}/> 
            }
          </div>
          <div className='musicButton mx-3'>
            <FaStepForward/>
          </div>          
        </div>
        <div className='position-absolute toogle-music' onClick={toogleMusicPlayerLayout}>
            {
            !musicOpen &&
            <FaMusic/>
            }
            {
            musicOpen &&
            <BiCollapse/>
            }
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;

