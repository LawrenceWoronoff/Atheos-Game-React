import './Footer.css';
import FooterBack from "../assets/FooterBack.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsDiscord, BsTelegram, BsReddit } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer position-relative">
      <img className="w-100" src={FooterBack} alt="Footer"/>
      <div className="position-absolute w-100 h-100 left-0 top-0 background-overlay"></div>
      <div className="position-absolute w-100 h-100 left-0 top-0">
          <div className="d-flex flex-column justify-content-end w-100 h-100" style={{padding: '0% 18%'}}>
              <div className='row' style={{marginBottom: '40px'}}>
                <div className='col-6'>
                  <h2 className="sms-perrter text-start" style={{fontSize: '30px', lineHeight: '1.5em', color: '#d2cdcd'}}><span>Subscribe</span></h2>
                  <p className='text-start' style={{color: '#d2cdcd'}}>Be the first to be informed about our upcoming news and events!</p>
                </div>
                <div className='col-6'>
                  <div className='d-flex'>
                    <input className='col-8 subscribeInput' placeholder='your email:'/>
                    <button type='submit' className='col-4 subscribeBtn'>Subscribe Now</button>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='followUs offset-md-9 col-3'>
                  <p className="text-white text-start">
                    Follow US
                  </p>
                  <div className="row d-flex align-items-center" style={{height:'40px'}}>
                    <div className='socialLayout p-0 d-flex justify-content-center align-items-center'>
                      <div className="socialIcon d-flex justify-content-center align-items-center">
                        <div className="favIcon">
                          <BsDiscord/>
                        </div>
                      </div>
                    </div>
                    <div className='socialLayout p-0 d-flex justify-content-center align-items-center'>
                      <div className="socialIcon d-flex justify-content-center align-items-center">
                        <div className="favIcon">
                          <BsTelegram/>
                        </div>
                      </div>
                    </div>
                    <div className='socialLayout p-0 d-flex justify-content-center align-items-center'>
                      <div className="socialIcon d-flex justify-content-center align-items-center">
                        <div className="favIcon">
                          <FaTwitterSquare/>
                        </div>
                      </div>
                    </div>
                    <div className='socialLayout p-0 d-flex justify-content-center align-items-center'>
                      <div className="socialIcon d-flex justify-content-center align-items-center">
                        <div className="favIcon">
                          <BsReddit/>
                        </div>
                      </div>
                    </div>
                    
                    {/* <div className="socialIcon p-0 d-flex justify-content-center align-items-center">
                      <div className="favIcon">
                        <BsTelegram/>
                      </div>
                    </div>
                    <div className="socialIcon p-0 d-flex justify-content-center align-items-center">
                      <div className="favIcon">
                        <FaTwitterSquare/>
                      </div>
                    </div>
                    <div className="socialIcon p-0 d-flex justify-content-center align-items-center">
                      <div className="favIcon">
                        <BsReddit/>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className='copyRight'>
                  Atheos © 2021. All rights reserved
              </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
