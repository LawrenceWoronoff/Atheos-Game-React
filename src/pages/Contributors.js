import AvatarCodeBlock from '../component/AvatarCodeBlock'
import './Contributors.css';
import avatar1 from '../assets/members/avatar1.png';
import avatar2 from '../assets/members/avatar2.png';
import avatar3 from '../assets/members/avatar3.png';
import avatar4 from '../assets/members/avatar4.png';
import avatar5 from '../assets/members/avatar5.jpeg';


function Contributors() {
  return (
    <div className="Contributors">
        <div className='container'>
          <div className='con-introduce'>
            <div className='con-introduce-title'>
              Contributors
            </div>
            <div className='con-introduce-content'>
              We are a multinational DAO of over 150 talented and promising professionals 
              in our respective fields, and counting. Our vision for our strategic growth is 
              global, inclusive, and with an authentic aim to embody decentralization as 
              an ideal of blue-skies, limitless thinking.
            </div>
          </div>
          <hr className="gradient-header-spliter"/>
          <ul className='avatar-section'>
            <AvatarCodeBlock 
              gradientType={1}
              avatar={avatar1} 
              fullName="Alexander Popov" 
              position="Co-founder"
              role="admin"
              twitter="https://twitter.com/abc"
              instagram="https://instagram.com/abc"
              artstation="https://artstation.com/abc"
            />
            <AvatarCodeBlock 
              gradientType={2}
              avatar={avatar2} 
              fullName="Marcel Reyes" 
              position="Game-producer"
              role="adviser"
              twitter="https://twitter.com/abc"
              youtube="https://youtube.com/abc"
              linkedin="https://linkedin.com/abc"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              gradientType={3}
              avatar={avatar3} 
              fullName="Danny Wilson"
              position="CFO"
              role="admin"
              linkedin="https://linkedin.com/abc"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              gradientType={4}
              avatar={avatar4}
              fullName="Nate Wells" 
              position="Lead Concept Artist"
              role="artist"
              tumblr="https//tumblr.com/ccc"
              linkedin="https//linkedin.com/ccc"
              artstation="https//artstation.com/ccc"
            />
            <AvatarCodeBlock 
              gradientType={5}
              avatar={avatar5} 
              fullName="Pedro Bergamini" 
              position="Lead Animator"
              role="artist"
              twitter="https://twitter.com/abc"
              youtube="https://youtube.com/abc"
              instagram="https://instagram.com/abc"
            />
            <AvatarCodeBlock 
              gradientType={1}
              avatar={avatar1} 
              fullName="Alexander Popov" 
              position="Co-founder"
              role="admin"
              tumblr="https//tumblr.com/ccc"
              linkedin="https//linkedin.com/ccc"
              instagram="https://instagram.com/abc"
            />
            <AvatarCodeBlock 
              gradientType={2}
              avatar={avatar2} 
              fullName="Marcel Reyes" 
              position="Game-producer"
              role="adviser"
              tumblr="https//tumblr.com/ccc"
              linkedin="https//linkedin.com/ccc"
              artstation="https//artstation.com/ccc"
            />
            <AvatarCodeBlock 
              gradientType={3}
              avatar={avatar3} 
              fullName="Danny Wilson" 
              position="CFO"
              role="admin"
              twitter="https://twitter.com/abc"
              youtube="https://youtube.com/abc"
              github="https://github.com/ccc"
            />

          </ul>

          {/* ============== Simple Blocks Group =============== */}


          <hr className="gradient-header-spliter"/>
          <ul className='avatar-section'>
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={1}
              avatar={avatar1} 
              fullName="Benjamin Nietzche" 
              position="Lead Game Designer"
              role="admin"
              twitter="https://twitter.com/abc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={2}
              fullName="Ergin Duzu" 
              position="Lead Technical Artist"
              role="artist"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={3}
              fullName="Tim Jermolaev"
              position="Game Developer"
              role="engineering"
              linkedin="https://linkedin.com/abc"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={4}
              fullName="Nate Wells" 
              position="Lead Concept Artist"
              role="artist"
              artstation="https//artstation.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={5}
              fullName="Sergey Vassilyev" 
              position="Web Developer"
              role="web"
              twitter="https://twitter.com/abc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={1}
              fullName="Alexander Popov" 
              position="Co-founder"
              role="admin"
              linkedin="https//linkedin.com/ccc"
              instagram="https://instagram.com/abc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={2}
              fullName="Czenas Rodriguez" 
              position="Game-producer"
              role="adviser"
              tumblr="https//tumblr.com/ccc"
              linkedin="https//linkedin.com/ccc"
              artstation="https//artstation.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={3}
              fullName="Matt Kronschnabel"
              position="Rigger"
              role="artist"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={1}
              fullName="Tin Nguyen"
              position="Rigger"
              role="artist"
              twitter="https://twitter.com/abc"
              youtube="https://youtube.com/abc"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}            
              gradientType={3}
              fullName="Estevan Wisoczynski"
              position="Rigger"
              role="artist"
              twitter="https://twitter.com/abc"
              youtube="https://youtube.com/abc"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}            
              gradientType={3}
              fullName="Abolfazl Sayadi"
              position="Rigger"
              role="artist"
              twitter="https://twitter.com/abc"
              youtube="https://youtube.com/abc"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={3}
              fullName="Fernando Iguago"
              position="Technical Artist"
              role="artist"
            />
            <AvatarCodeBlock 
              imageHide={true}            
              gradientType={3}
              fullName="Estevan Wisoczynski"
              position="Rigger"
              role="artist"
              twitter="https://twitter.com/abc"
              youtube="https://youtube.com/abc"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={1}
              fullName="Tin Nguyen"
              position="Rigger"
              role="artist"
              twitter="https://twitter.com/abc"
              youtube="https://youtube.com/abc"
              github="https://github.com/ccc"
            />
          </ul>

          {/* ============== Simple Blocks Group 2 =============== */}


          <hr className="gradient-header-spliter"/>
          <ul className='avatar-section'>
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={1}
              avatar={avatar1} 
              fullName="Benjamin Nietzche" 
              position="Lead Game Designer"
              role="admin"
              twitter="https://twitter.com/abc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={2}
              fullName="Ergin Duzu" 
              position="Lead Technical Artist"
              role="artist"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={3}
              fullName="Tim Jermolaev"
              position="Game Developer"
              role="engineering"
              linkedin="https://linkedin.com/abc"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={4}
              fullName="Nate Wells" 
              position="Lead Concept Artist"
              role="artist"
              artstation="https//artstation.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={5}
              fullName="Sergey Vassilyev" 
              position="Web Developer"
              role="web"
              twitter="https://twitter.com/abc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={1}
              fullName="Alexander Popov" 
              position="Co-founder"
              role="admin"
              linkedin="https//linkedin.com/ccc"
              instagram="https://instagram.com/abc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={2}
              fullName="Czenas Rodriguez" 
              position="Game-producer"
              role="adviser"
              tumblr="https//tumblr.com/ccc"
              linkedin="https//linkedin.com/ccc"
              artstation="https//artstation.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={3}
              fullName="Matt Kronschnabel"
              position="Rigger"
              role="artist"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={1}
              fullName="Tin Nguyen"
              position="Rigger"
              role="artist"
              twitter="https://twitter.com/abc"
              youtube="https://youtube.com/abc"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}            
              gradientType={3}
              fullName="Estevan Wisoczynski"
              position="Rigger"
              role="artist"
              twitter="https://twitter.com/abc"
              youtube="https://youtube.com/abc"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}            
              gradientType={3}
              fullName="Abolfazl Sayadi"
              position="Rigger"
              role="artist"
              twitter="https://twitter.com/abc"
              youtube="https://youtube.com/abc"
              github="https://github.com/ccc"
            />
            <AvatarCodeBlock 
              imageHide={true}
              gradientType={3}
              fullName="Fernando Iguago"
              position="Technical Artist"
              role="artist"
            />
          </ul>
        </div>
    </div>
  );
}

export default Contributors;
