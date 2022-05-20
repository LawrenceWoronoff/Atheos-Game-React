import './Character.css';
import characterVideo from "../assets/Character.webm";
import commanderVideo from "../assets/commander.webm";
import logoHero from "../assets/Logo.webp";
import hoverText from "../assets/HoverText.png";
import playVideo from "../assets/playVideo.png";

import {useState} from "react";

function Character() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="Character position-relative" style={{ height:'100vh' }}>
      <video className="position-absolute"
          autoPlay
          loop
          muted
          src={characterVideo} 
          style={{ width: '100%', height:'auto', left:0, top:'-350px', zIndex:'1000'}}/>
      <div className="position-relative" style={{zIndex: 1001}}>
        <div className="chapterSection" style={{padding: '5%'}}>
          <div className="row">
            <div className="" style={{width:'45%'}}>
              <video className="position-relative"
                autoPlay
                loop
                muted
                src={commanderVideo} 
                style={{ width: '100%', height:'auto', marginLeft: '8%'}}/>
            </div>
            <div className="position-relative" style={{width:'55%'}}>
              <img
                src={logoHero}
                alt="Logo Hero"
                style={{width: '100%', marginLeft: '-27%', zIndex: '1001'}}
                onMouseOver={() => {setShowText(true)}}
                onMouseLeave={() => {setShowText(false)}}
              />
              {
              showText &&
              <img
                alt = "Hover Text"
                src={hoverText}
                style={{width: '100%', marginLeft: '-30%', marginTop: '-38%', zIndex: '-1'}}
                onMouseOver={() => {setShowText(true)}}
                onMouseLeave={() => {setShowText(false)}}

              />
              }
                <p class="text-white quote quote-1">How long has it been?</p>
                <p class="text-white quote quote-2">...This is forever pain.</p>
                <p class="text-white quote quote-3">through endless loss, white having nothing.</p>
                <p class="text-white quote quote-4">In The Binding Dark.</p>
              
            </div>
          </div>
          <div>
            <img
                alt = "Play video"
                className="playVideo"
                src={playVideo}
                style={{width: '165px', marginTop: '-20px'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
