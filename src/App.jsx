
import Hero from './Components/Hero-Section/Hero';
import Navbar from './Components/Navbar/Navbar';
import SideBar from './Components/Technology Card/SideBar';
import MainCard from './Components/Technology Card/MainCard';
import { FooterMain } from './Components/footer/FooterMain';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MainCard />
      <FooterMain />
      {/* <SideBar /> */}
    </div>
  );
};

export default App;