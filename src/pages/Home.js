import Navbar from '../component/Navbar';
import Character from '../component/Character';
import Hero from '../component/Hero';
import Introduce from '../component/Introduce';
import Partnership from '../component/Partnership';
import DocSlider from '../component/DocSlider';
import Footer from '../component/Footer';
import SplitterUp from '../component/SplitterUp';
import SplitterDown from '../component/SplitterDown';
import MusicPlayer from '../component/MusicPlayer'
import VidoePopUp from '../component/VidoePopUp'

function Home() {
  return (
    <div className="Home">
        <VidoePopUp/>
        <Navbar/>
        <Character/>
        <Hero/>
        <SplitterDown/>
        <Introduce/>
        <SplitterUp/>
        <DocSlider/>
        <SplitterDown/>
        <Partnership/>
        <SplitterUp/>
        <Footer/>
        <MusicPlayer/>
    </div>
  );
}

export default Home;
